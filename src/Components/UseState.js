import React, { useState }  from 'react';
 

const UseState = () => {
    const [count , setCount] = useState(0);
    const IncNum = () => {
        setCount(count + 1);
        console.log('setCount', setCount);
    };



    // let newTime = new Date().toLocaleTimeString();
    // const [ctime , setCtime] = useState(newTime);
    // const UpdateTime = () => {
        // let newCtime = new Date().toLocaleTimeString();
        // setCtime(newCtime);
    // };


    let time = new Date().toLocaleTimeString();
    const [ctime , setCtime] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime,1000);

   return(
        <>
        <h1>UseState</h1>
            <h3>{ count }</h3>
            <button onClick={ IncNum }>Click Me</button>

            {/* <h1>{ ctime }</h1> */}
            {/* <button onClick={ UpdateTime }>Get Time</button> */}

            <h3>{ ctime }</h3>
        </>
    );
}
export default UseState;


