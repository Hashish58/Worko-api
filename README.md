Worko API
Getting Started
Prerequisites
Node.js
MongoDB
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Hashish58/Worko-api.git
cd worko-api
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following environment variables:

env
Copy code
PORT=3000
DB_URI=<your-mongodb-uri>
Running the Application
Start the MongoDB server if it's not running already.

Start the Node.js server:

bash
Copy code
npm start
The API will be available at http://localhost:3000.

Running Tests
Run the tests:

bash
Copy code
npm test
API Endpoints
User API
GET /api/worko/user: List all users
GET /api/worko/user/:userId: Get user details by ID
POST /api/worko/user: Create a new user
PUT /api/worko/user/:userId: Update an existing user
PATCH /api/worko/user/:userId: Partially update an existing user
DELETE /api/worko/user/:userId: Soft delete a user
Payload for User
id: Generated by the database
email: Email of the user
name: Name of the user
age: Age of the user
city: City of the user
zipCode: Zip code of the user
Request Validation
email: Must be a valid email format
zipCode: Must be a valid zip code format
id: Required for POST, PUT, and DELETE operations
Project Structure
bash
Copy code
worko-api
├── src
│   ├── controllers
│   │   └── userController.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── models
│   │   └── userModel.js
│   ├── services
│   │   └── userService.js
│   └── app.js
├── test
│   └── user.test.mjs
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
Example User Data
json
Copy code
{
    "email": "test@example.com",
    "name": "Test User",
    "age": 30,
    "city": "Test City",
    "zipCode": "12345"
}
Error Handling
All API responses will include appropriate HTTP status codes.
Validation errors will return 400 Bad Request.
Internal server errors will return 500 Internal Server Error