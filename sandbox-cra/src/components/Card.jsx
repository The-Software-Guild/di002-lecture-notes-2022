import { useState } from 'react';


function Card({ text, bckgColor, textColor }) {
     
     //   stateVariable, function to update that state variable 
     const [count, setCount] = useState(0); // default 

     // IIFE

     return (
          <div 
          onClick={() => setCount(count + 1)}
          style={{
               backgroundColor: bckgColor,
               width: '300px',
               height: '200px',
               border: '1px solid black',
               fontSize: '30px',
               textAlign: 'center',
               padding: '30px 0px 0px 0px',
               margin: '20px',
               cursor: 'pointer',
               color: textColor
          }}>
               <p>{text}</p>
               <p>{count}</p>
          </div>
     );
};

export default Card;
