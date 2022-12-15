// Card.jsx
import { useState, udeEffect } from 'react';
import { useEffect } from 'react';

function Card({
     text,
     bckgColor,
     textColor,
     setTotalCount,
     isReset
}) {

     const [count, setCount] = useState(0);

     //i want to refactor the useEffect hook to display initial
     //count values on initial load of the page
     // CB FX's to eb invoked upon mount     // optional argument that represents a dependency array

     // handlerfunction
     // function you abstract out of somethign into its own function
     const handleClick = () => {
          setTotalCount(totalCount => totalCount + 1);
          setCount(count + 1);
     };

     useEffect(() => {
          if (isReset) {
               setCount(0);
          }
     })

     return (
          <div
               onClick={handleClick}
               style={{
                    backgroundColor: bckgColor,
                    width: '300px',
                    height: '160px',
                    border: '1px solid black',
                    fontSize: '24px',
                    textAlign: 'center',
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
