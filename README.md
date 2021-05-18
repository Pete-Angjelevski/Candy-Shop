### Pete's Candy Shop

Description: 

Front end shopping cart app I've built to refine my skill in the chosen tech but also expand my knowledge by implementing Stripe payment system which is something new to me.
Screen shots of app below . . .

Technology Utilised:

- React + Redux + React Hooks + React Routing
- TypeScript
- Style added with SASS
- Stripe


To spin up the app:

* Clone the repo into your drive
* npm i via chosen command line to install dependencies
* add stripe dev secret key to routes.js file
* npm run dev to spin up server 
* Visit https://localhost:3000 to view app. 


Bugs*
  - cart page currently crashes when there are no items in redux cart due to reducer function calculating total
  - img not aligned correctly in Order Summary in checkout component ( FIXED )

  
ScreenShots:

CandyList Screen . . 
![CandyList Screen](public/images/CandyList.png)

Cart Screen . .
![Cart Screen](public/images/Cart.png)

Checkout Screen . . 
![Checkout Screen](public/images/CheckOut.png)

Redux . . 
![Redux](public/images/Redux.png)

## GOAL 1 (COMPLETED)

Scaffold out React Components 
& Redux Reducers 
Build Database
Begin TypeScript Implementation


## GOAL 2 (COMPLETED)

Build out CandyList to show data


## GOAL 3 (COMPLETED)

Build out Cart Component and attach CartReducer


## GOAL 4 (COMPLETED)

Build out Checkout Component and attach CheckoutReducer

## GOAL 5 

Implement Stripe payment service


## GOAL 5.5 (ONGOING)

Style Components with Sass



