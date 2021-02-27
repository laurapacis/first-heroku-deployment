import React, {useState} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [users, setUser] = useState({
    username: "",
    password: ""
  })

  const changeHandler = (e) => {
    setUser({  ...users , [e.target.name] : e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const config = {
      headers: {"Content-Type": "application/json"}
    }
    try {
      const res = await axios.post('http://localhost:5000/login', users, config);
      console.log(res.data, 1321321321);
    } catch (error) {
      console.log(error.res.data.error);
    }
  }

  return (
    <div className="ui container" style={{ margin: '5% auto', width: '50%'}}>
      <div className="ui segment" >
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={users.username}
              placeholder="Username"
              onChange={changeHandler}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={users.password}
              placeholder="Password"
              required
              onChange={changeHandler}
            />
          </div>
          <button type="submit" className="ui button">Submit</button>

        </form>
      </div>
    </div>
      
  );
}

export default App;
