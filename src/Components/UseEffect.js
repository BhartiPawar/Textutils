import React, { useEffect, useState }  from 'react';
 

const UseEffect = () => {
    const  [count , setCount] = useState(0);
    const  [widthCount, setWidthCount] = useState(window.screen.width);
    
    const currentScreenWidth = () => {
        setWidthCount(() => window.innerWidth);
    };


    useEffect(() => {
        if (count >= 1){
            document.title = `Chats (${count})`
        }
        else{
            document.title = `Chats`
        }
        console.log("HEllo Inside"); // Second priority
        
    }, [count]);

    useEffect(() => {
        console.log("I am good");
    }, []);
    console.log("HEllo Outside"); // First priority

    useEffect(() => {
        window.addEventListener('resize', currentScreenWidth)
        return() => {
            window.removeEventListener('resize', currentScreenWidth)
        };
    });

    return(
        <>
        <h1>UseEffect</h1>
        <div>
            <h3>{ count }</h3>
            <button onClick={() => setCount (count + 1)}>Click</button>
        </div>
        <h2>The Size of the window is <span>{ widthCount }</span></h2>
        </>
    );
}

export default UseEffect;