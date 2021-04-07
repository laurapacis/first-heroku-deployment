import React from 'react';

function notificationReducer(state, action) {
       
    switch (action.type) {
        case "ADD_NOTIFICATION":
            return [...state, action.payload];
        
        case "REMOVE_NOTIFICATION": 
            return state.filter((item) => {
                return item.id !== action.payload.id
                
            })
        default:
            return state;
    }
}

export default notificationReducer
