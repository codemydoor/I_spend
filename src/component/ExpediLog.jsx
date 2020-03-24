import React from 'react'


export default function ExpediLog(props) {
  
            return (
            <div >
              <h4>Username: {props.username}</h4>
              <p>Expenditure: {props.expenditure}</p>
              <p>Description: {props.description}</p>
              <p>Date: {props.date}</p>
              <hr />
            </div>
          
          );
}
