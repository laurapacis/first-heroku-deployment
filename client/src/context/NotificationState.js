import { nanoid } from 'nanoid'
import React, { useReducer, createContext} from 'react'
import notificationReducer from './notificationReducer';
import NotificationContext from './notificationContext'


function NotificationState(props) {

    const initialState = [];
    const [state, dispatch] = useReducer(notificationReducer, initialState);
    const addNotification = (msg, type) => {
        const id = nanoid();
        // dispatch take argument with name action : we have action.type and action.payload 
        dispatch({type:"ADD_NOTIFICATION" , payload : {msg , type , id }})
        
        setTimeout(() => {
             dispatch({type:"REMOVE_NOTIFICATION" , payload : {msg , type , id }})
            
        }, 5000)
    }

    return (
        <NotificationContext.Provider value={{
            notifications: state,
            addNotification
        }}>
         {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationState
