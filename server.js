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
    console.log(req.body)
    // use res.json() to send the given object back to the client as response
    return res.json({message: "User signed up successfully"})
})

// create a GET route /users
app.get("/users", (req, res) => {
    return res.json(users)
})