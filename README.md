# Express API - Exercise - POST requests

## Write a user signup - powered by POST

* Create a server.js file
* Install express
* In server.js - Setup an express application

* Paste in the following variable with an array of users:
    ```
    let users = [
        { _id: "u1", username: "user1", password: "pw1"},
        { _id: "u2", username: "user2", password: "pw2"},
        { _id: "u3", username: "user3", password: "pw3"},
    ]
    ```

* Parse incoming POST json data by the code: `app.use( express.json() )`
    * This will parse all incoming data into a special variable req.body

* Define a POST route /signup
    * console.log the received body (=> req.body)
    * For now: Just return an object with a message property back to the frontend:
        * e.g.: { message: 'User signed up successfully...' }
        * Use res.json() to send the given object back to the client as response

* Create a GET route /users
    * Return the whole users array here using `res.json`
    * With this route we will be able to see all our signed up users

* Test your /signup POST route with your favorite REST client
    * Do you see the message object printed there?
    * Check the terminal where the backend runs: Do you see the form data printed here?
    * Great, then continue with the next step!

## Code the signup!

Receiving the data username and password in our signup route correctly is already a nice milestone!

Now we wanna do something with the data...

We wanna create a new user object. It should look like this:

```
let user = {
    _id: "<a new unique ID>",
    username: "<the username the frontend sent to us>",
    password: "<the password the frontend sent to us>"
}

```
Instead of the hardcoded values above, place the user details that were sent to us in req.body. 

The unique _id you can create manually, e.g. using `Date.now().toString()`.

After you created this object, append it to our array of users. 

This way we "signup" that user (add it to our "user database")

Finally: Return that user object with `res.json`

Test with your REST client your /signup POST route
- Do you receive the user data as response?

Now test your GET routes /users
- Do you see your created user at the end of the list?

Congratulations! 

You implemented your first backend with data creation!

Dislaimer: The changes to your user array will always get reset when you do any code changes (because we do not store the users array anywhere so far). 

We will continue to store our data changes next week.


## Bonus Exercise: Create a login route!

Define a POST route /login

Here, just like in the /signup route, we expect to receive two fields in the body: 
* username
* password

Depending if that users exist in our array of users we want to return a login success, otherwise a login failure.

The route /login should do the following:

* read username and password data from req.body
    * the fields are accessible like so: 
        - req.body.username
        - req.body.password

* Now check: Does a user with given username and pw exist in our array of users?
    * If so: Send back the found user object:
        * Example Response:
        ```
        {
            _id: "12345678", 
            username: "Rob", 
            password: "hello123"
        }
        ```
    * If not: Send back the error message "Login failed"
        * Response e.g.: ` { error: "User not found. Login failed!" } `

    * Hint: You can check if an entry exists in an array with different array methods
        * Some recommendations: arr.find(item => ...) or arr.some(item => ...)
        * If you struggle with that: Look up the documentation of these methods, e.g. on W3C or MDN to see some examples

* Test with your REST client if your login code works!
    * Test the output when sending a username & password that does not exist
    * Test the output when sending a username & password that does exist


## Bonus - Let's login with a frontend!

* Create a react-app in a subfolder "client"
    - `npx create-react-app client`

* Setup a form in "App.js"
    * provide a form where a user can enter "username" and "password"
    * create a submit handler "login"
    * call that handler on submit
    * perform a fetch() call to your POST url (http://localhost:5000/login)
        * send your form data in the body (don't forget the "stringify")
    * display the returned response either
        * in the browser console
        * or directly in JSX
        * or both :)

### Bonus of the Bonus: Redirect in the frontend

* Install react-router-dom (in the folder "client" please :))
* Create another page component "User Profile" (with just some dummy content)
* On succesful login: Redirect to this component
* On failed failed: Display the error messsage below the login form

Works? 

Congrats! You already did a huge step in frontend-backend integration!
