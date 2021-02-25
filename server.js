const express = require('express')

const app = express()
const PORT = 5000

// parse incoming POST json data
app.use(express.json())

let users = [
    { _id: "u1", username: "user1", password: "pw1"},
    { _id: "u2", username: "user2", password: "pw2"},
    { _id: "u3", username: "user3", password: "pw3"},
]

app.listen(PORT, () => {
    console.log("Backend Server has started");
})

app.get("/", (req, res) => {
    res.send("<h1>Home</h1>")
})

// define a POST route /signup
app.post("/signup", (req, res) => {
    console.log("this is req.body", req.body)
    // return res.json({ message: "User signed up successfully" })
    
    // create new user & place the new user details in req.body
    const newUser = {
        _id: Date.now().toString(),
        username: "user4",
        password: "pwd4"
    }

    // append it to our array of users
    users.push(newUser)

    // return that user object with res.json
    res.json(newUser)
})

// create a GET route /users
app.get("/users", (req, res) => {
    return res.json(users)
})

