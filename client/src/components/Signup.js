import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Signup = () => {
    // const history = useHistory()
    const [user, setUser] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setError] = useState("")

    const changeHandler = (e) => {
    setUser({  ...user , [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        setError("")
        e.preventDefault();
        const config = {
          headers: {"Content-Type": "application/json"}
        }
        try {
          const res = await axios.post('http://localhost:5000/signup', user, config);
          console.log(res.data, 1321321321);
        } catch (error) {
          console.log(error.res.data.error);
        }
    }

  return (
    <div className="ui container" style={{ margin: '5% auto', width: '50%'}}>
      <div className="ui segment" >
              <h1>Sign Up</h1>
              {error && <h1>{error}</h1>}
              <form onSubmit={handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={user.username}
              placeholder="Username"
              onChange={changeHandler}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              required
              onChange={changeHandler}
            />
         </div>
         <div className="field">
            <label htmlFor="password">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              placeholder="Confirm password"
              required
              onChange={changeHandler}
            />
          </div>
          <button type="submit" className="ui button">Submit</button>
        </form>
        </div>
        <div>
        Already have an account? <Link to="/">Log In</Link>
        </div>
    </div>
      
  );
}