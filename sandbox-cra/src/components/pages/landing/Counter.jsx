// counter.jsx
import { useState } from 'react';

import Card from '../../shared/card/Card';

function Counter() {
     const [totalCount, setTotalCount] = useState(0);

     const [isReset, setIsReset] = useState(false);

     const resetCount = () => {
          setIsReset(true);
          setTotalCount(0);
     }

     return (
          <>
               <div>Total Count: {totalCount}</div>
               <Card
                    isReset={isReset}
                    setTotalCount={setTotalCount}
                    textColor='white'
                    bckgColor='lightblue'
                    text='first card' />
               <Card
                    isReset={isReset}
                    setTotalCount={setTotalCount}
                    bckgColor='lightcoral'
                    text='second card' />
               <Card
                    isReset={isReset}
                    setTotalCount={setTotalCount}
                    bckgColor='lightgreen'
                    text='third card' />
               <Card
                    isReset={isReset}
                    setTotalCount={setTotalCount}
                    bckgColor='lightgrey'
                    text='fourth card' />
               <div
                    style={{ cursor: 'pointer' }}
                    onClick={resetCount}>
                    Reset Count
               </div>
          </>
     )
};

export default Counter;