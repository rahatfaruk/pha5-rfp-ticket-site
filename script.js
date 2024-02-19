const passengerSeatsEl = document.getElementById('passenger-seats')
const availableSeatsEl = document.getElementById('available-seats')
const totalSelectedSeatsEl = document.getElementById('total-selected-seat')
const selectedSeatsList = document.getElementById('selected-seats-list')
const totalPriceEl = document.getElementById('total-price')
const grandTotalEl = document.getElementById('grand-total')
const couponFormEl = document.getElementById('coupon-form')
const couponApplyBtn = document.getElementById('coupon-apply')
const seatsNextBtn = document.getElementById('seats-next-btn')


// vars
const perSeatPrice = 550
const totalSelectedSeats = []
const coupons = ['NEW15', 'Couple 20']
let discountByCoupon = 0
let availableSeats = 8
let totalPrice = 0
let grandTotal = 0

// functions
function calculateCouponDiscounts(discountPercentage) {
  discountByCoupon = totalPrice * discountPercentage / 100
  grandTotal = totalPrice - discountByCoupon
  grandTotalEl.textContent = grandTotal
  couponFormEl.classList.add('hidden')
}

function disableBtn(buttonEl) {
  buttonEl.disabled = true
  buttonEl.classList.add('cursor-not-allowed', 'opacity-50')
}
function enableBtn(buttonEl) {
  buttonEl.disabled = false
  buttonEl.classList.remove('cursor-not-allowed', 'opacity-50')
}

// ## on page load
window.addEventListener('DOMContentLoaded', function() {
  availableSeatsEl.textContent = availableSeats
  totalSelectedSeatsEl.textContent = totalSelectedSeats.length
  selectedSeatsList.innerHTML = ''
  disableBtn(couponApplyBtn)
  disableBtn(seatsNextBtn)

  // total & grand-total price reset
  totalPriceEl.textContent = totalPrice
  grandTotalEl.textContent = grandTotal
})

// ## add click event to all seats for selecting by user
passengerSeatsEl.addEventListener('click', e => {
  
  // check if clicked on a seat
  if(e.target.tagName === 'BUTTON') {
    const selectedSeatId = e.target.id

    // prevent clicking same seat again
    if (totalSelectedSeats.includes(selectedSeatId)) {
      alert('same seat can not be selected twice')
      return
    }

    // return if already 4 seats are selected; also show warning
    if (totalSelectedSeats.length === 4) {
      alert('you can not select more than 4 seats at a time')
      return
    } else {
      // update total selected seat
      totalSelectedSeats.push(selectedSeatId)
      totalSelectedSeatsEl.textContent = totalSelectedSeats.length
    }

    // enable coupon apply btn if 4 seats are selected
    if (totalSelectedSeats.length === 4) {
      enableBtn(couponApplyBtn)
    }

    // enable next-btn if at least 1 seat is selected
    if (totalSelectedSeats.length > 0) {
      enableBtn(seatsNextBtn)
    }

    // update bg-color of selected seat
    document.getElementById(selectedSeatId).classList.add('selected-seat')

    // update available seats
    availableSeats -= 1
    availableSeatsEl.textContent = availableSeats

    // update selected-seats-list
    selectedSeatsList.innerHTML += `
      <tr class="border-t">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${selectedSeatId}</th>
        <td class="px-6 py-4">economy</td>
        <td class="px-6 py-4">550</td>
      </tr>
    `

    // update total 
    totalPrice += perSeatPrice
    totalPriceEl.textContent = totalPrice
    // grand total
    grandTotal += perSeatPrice
    grandTotalEl.textContent = grandTotal
  }
})

// ## apply coupon
couponFormEl.addEventListener('submit', e => {
  e.preventDefault()

  if (totalSelectedSeats.length < 4) {
    alert('select 4 seats to get coupon discount')
    return
  }

  const couponOfUser = couponFormEl['coupon-inp'].value.trim()

  // if coupon matches
  if(coupons.includes(couponOfUser)) {
    if (couponOfUser === 'NEW15') {
      calculateCouponDiscounts(15)
    } else if (couponOfUser === 'Couple 20') {
      calculateCouponDiscounts(20)
    }
  } else {
    alert('invalid coupon!!')
  }
})