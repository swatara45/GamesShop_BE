# The GameShop Backend

## Brief Desc
Server built to serve data from mongoDB to our frontend

## Schemas:
-Users
 -name
 -pwd
 -email
 -admin : bool

Games
 - name
 -category
 -price
 -numofplayer
 -desc
  -qty

Cart
 -items
 -totalprice
 -userID

## Routes
-Users
  - post user
  - read user
  - edit user
  - delete user
-Game
   -get all
   -get one game
   -admin update
   admin delete

-Cart
 - add to cart
 - remove from cart
 - "checkout"

 ## Technologies
 Mongoose
 express
 .env
 morgan