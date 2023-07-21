<h1 align="center">Real Estate Agency Server</h1>

This server is for [Real Estate Agency](https://real-estate-agency-react.netlify.app). It is deployed [live](https://real-estate-agency-server.herokuapp.com).

# What can do?
It can handle login, register and logout requests. It can create post for house and save it database. Logged users can delete or edit house if they are owners or can rent a house. Server can return specific house.

# What I am using?
- Express
- MongoDB
- JSON Web Token
- CORS
- Bcrypt
- Cookie parser

# Endpoints:

## Register
`../register`
- Send POST request with body:
  ```
  {
    name: "...",
    username: "...",
    password: "..."
  }
  ```
- It hash the password and save user in DataBase, then set cookies with user token and user ID
## Login 
`../login`
- Send POST request with body:
  ```
  {
    username: "...",
    password: "..."
  }
  ```
- It checks user and set cookies with user token and user ID if data is correct
## Logout
`../logout`
- Send GET request
- It clears cookies
## Verify user
`../vetify`
- Send GET request
- It check aid cookie send with request and return true if it is valid or false if not
## Verify user
`../check-renter/:id`
- Change :id with id of house you want to check
- Send GET request
- It get house and chack is user(it gets user id from cookie) rented it and return true or false
  
## Get all posts
`../posts`
- Send GET request
- It returns all posts
## Get last 3 posts
`../topPosts`
- Send GET request
- It returns last 3 posts
## Get last 3 posts
`../details/:id`
- Change :id with id of house you want to check
- Send GET request
- It found post by id, check is user loggen using cookie and check is user owner of the post and return result
  
## Create post
`../create`
- Send POST request with body:
  ```
  {
    name: "...", 
    type: "...",
    year: "...", 
    city: "...",
    imgUrl: "...",
    propertyDescription: "...", 
    availablePieces: "..." 
  }
  ```
- It saves house in database and return status
## Edit post
`../edit/:id`
- Change :id with id of house you want to edit
- Send PUT request with body:
  ```
  {
    name: "...", 
    type: "...",
    year: "...", 
    city: "...",
    imgUrl: "...",
    propertyDescription: "...", 
    availablePieces: "..." 
  }
  ```
- It updates house in database and return status
## Delete post
`../delete/:id`
- Change :id with id of house you want to delete
- Send DELETE request
- It deletes house from database and return status
  
## Search post
`../search/`
- Send POST request
- It searches for houses with type you want and return them or error not found
## Rent house
`../rent/:id`
- Send PUT request
- It searches for house by provided id and updates available pieces by decreasing it by 1 and $push userId in rentedAHome array

# How to set up?
- clone this repositoriy
- run npm install to install all dependencies
- add **.env file at root level**
- add in .env file:
```
PORT=*port on you want to run the server. Example: 4000*
DB_URL=*your MongoDB*
PRIVATE_KEY=*your privet key for jwt*
ORIGIN_URL=*url that you want to have access to this server. Example: http://localhost:3000. 
If you want more sites to haves access use [http://localhost:3000,http://localhost:3000]
or '*' for all sites.*
```