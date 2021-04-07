import React, { useState, useContext } from 'react';
import NotificationContext from '../context/notificationContext';
import { Link } from 'react-router-dom'
import Notification from './Notification'
import {nanoid} from 'nanoid'
import axios from 'axios'

export const Login = () => {
  const notificationContext = useContext(NotificationContext);
  console.log(notificationContext);
  const { addNotification } = notificationContext


  // const history = useHistory()
  // const [notifications, setNotifications] = useState([
        
  //   ])

  // const addNotification = (notification) => {
  //   notification.id = nanoid();
  //   setNotifications([...notifications, notification]);
  //   removeNotification(notification.id);
    
  //   }
  
  // const removeNotification = (notification) => {
  //   setTimeout(() => {
  //     const filtered = notifications.filter((item) => {
        
  //       return item.id !== notification.id
  //     });
  //     setNotifications(filtered)
      
  //   } , 2000)
  // }
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
      if (users.password.length < 2) {
        // addNotification({ type: "red", msg: "password is too short "})
        addNotification("password is to short  ", "red")
      }
      else if (users.username.length === 0) {
        // addNotification({ type: "orange", msg: "Username is empty"})
           addNotification("userName is empty   ", "red")
      }
      else {
        const response = await axios.post('http://localhost:5000/login', users, config);
        console.log(response.data, 1321321321);
          // addNotification({ type: "green", msg: `you are logged in welcome ${response.data.username }`})
           addNotification( `you are logged in welcome ${response.data.username }`, "green")
      }
      
    } catch (error) {
      console.log(error.response.data.error);
    }
  }

  return (
    <div className="ui container" style={{ margin: '5% auto', width: '50%'}}>
      <div className="ui segment" >
        <h1>Log In</h1>
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
      {/* <button onClick={()=> addNotification({  type:"red", msg:"Hello world"})}>add new notification </button> */}
      <div>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
      
  );
}