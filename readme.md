## About project:
 - Assignment 5, PHero. **Smart Ticketing**.  [Source repo](https://github.com/ProgrammingHero1/B9A5-smart-ticketing)
 - Title: RFP Ticket. Bus ticket booking website. 
 - Desc: User can book the bus seat (highest 4), apply coupon. Desktop focused design. 
 - Lang: Html, tailwindcss, flowbite, vanilla js.
 - Developed by me (Rahat Faruk)
 - My Live link: https://rahatfaruk.github.io/pha5-rfp-ticket-site/ 
 - My Repo link: https://github.com/rahatfaruk/pha5-rfp-ticket-site 

### App working structure:
 - define initial vars
 - on page load: reset available and remaining seat amount, total and grand-total price; disable coupon-apply & seats-next button
 - listen for click event on seats: onclick, 
  - warn if the seat was selected previously or max 4 seats was selected. 
  - enable next-btn if at least 1 seat is selected and phone-number-input is not empty. 
  - when a seat is clicked: update bg-color of the seat, available seats; insert seat details in selected-seat-list UI. Also, update total and grand total price.
  - if 4 seats is selected then enable coupon apply btn.
  - when apply coupon buttn is clicked:
    - return, if total selected seats < 4 
    - take user's coupon & check for validation. warn if not valid; otherwise, calculate discount based on coupon, update grand-total and hide coupon form.


### Tasks to do:
  - Navbar. (title & right-btn) must.
  - Banner Section. When clicked action-btn, go to 'Seat-reservation section'. 3 cards in bottom is optional. 
  - Offers Section. coupon code must have to be same as shown.
  - Seat-reservation section : 
    - available seat. Available seats should be dynamic based on a seat selection by user.
    - seat selection. User can select any available sit (maximum 4 seats). Selected seat bg should change. After selecting a seat: available seat amount, total seat amount should update, add seat into seat-collection, update total & grand total price.
    - next button. next button should enable only when a seat is selected &  (challange:)phone number is given (at least a number).
    - coupon code (challange). apply btn should enable when 4 seats is selected by user. when valid coupon is given, calculate 'discount price' and show below 'total price'; then update grand total & hide coupon form. if not valid coupon, then show alert.
  - Footer is optional.
  - Responsiveness is recommended.