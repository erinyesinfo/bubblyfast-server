# App Structure
A structure is an arrangement and organization of code best practices to make it easy to read

## Content
- App.js
- Public
- Views
- Router
- Controller
- Models

## App.js
- MongoDB configuration
- dotenv configuration to use protected data
- express-session configuration
- cors configuration to allow data to be passed
- helmet configuration for security issues
- ejs configuration to use templates
- db.js MongoDB CONNECTIONSTRING, and listen on port 8080

## Public
- Logo, favicon
- Css app styles

## Views
- home.ejs page
- 404.ejs page

## Router
- index.js page, Authentication, Read, Create players
- 404 redirect router

## Controller
- App functions that connect user, player data to Models 
- Create sessions
- Catch errors

## Models
- App functions that Create, Read Users/players
- User page that log, register, and validate user data
