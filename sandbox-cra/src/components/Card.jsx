import { useState } from 'react';

// prop values are consumed where the componet
// is composed and exported

// all components should be composed first as function componensts
// and then if you decide that you need state or any klifecycle emthods then you should
// expand/refactor taht component to a functional component (hooks) class component

function Card(props) {
     // declare a state variable using the const keyword and an array setting 
     //the values equal to the return of the use effect hook invoked

     //     stateVariable, functionToUpdateStateVariable
     const [count, setCount] = useState(0); // 0 is the initial value of the state variable named count
    // IEFE

    // this first mount to the dom
    // when the state changes and forces a rerender
     console.log(`The ${props.text} has re-rendered and the count is ${count}`)
     return (
          <div 
          onClick={() => setCount(count + 1)}
          style={{
               backgroundColor: props.bckgColor,
               width: '300px',
               height: '200px',
               border: '1px solid black',
               fontSize: '30px',
               textAlign: 'center',
               padding: '30px 0px 0px 0px',
               margin: '20px',
               cursor: 'pointer',
               color: props.textColor
          }}>
               <p>{props.text}</p>
               <p>{count}</p>
          </div>
     );
};

export default Card;
