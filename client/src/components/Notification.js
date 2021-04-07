import React, { useState , useContext} from 'react'
import { nanoid } from 'nanoid';
import NotificationContext from "../context/notificationContext";

function Notification() {
    const notificationContext = useContext(NotificationContext)
    const { notifications } = notificationContext;
    return (
        <>
            {notifications.map((item) => {
                const className=`ui ${item.type} message`
                return ( 
                    <div key={item.id} className={className}>{item.msg}</div>
                )
            })}

        </>
    )
}

export default Notification
