import React, { useState } from 'react';

const Bottle = () => {
    //let myBottleName = "hello";

    // const [myBottleName, setMyBottleName] = useState('hello');

    // const onChangeBottleName = (e) => {
    //     setMyBottleName(e.target.value);
    // };

    // return (<div>
        
    //    <input value={myBottleName} onChange={onChangeBottleName}></input>
    //     <p>{myBottleName}</p>
    // </div>);
    
    //let res;
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [res, result] = useState('');

    const getVal1 = (e) => {
        console.log(e.target.value)
        setVal1(e.target.value);
     };
    const getVal2 = (e) => {    
        setVal2(e.target.value);
     };

     const getResult = () => {
        console.log(val1+val2);
        result(val1+val2);
     }
    return (
        <div>
            <input value={val1} onChange={getVal1}></input>
            <input value={val2} onChange={getVal2}></input>
            <button onClick={getResult}> Click me</button>
            <p>{res}</p>
        </div>
    );
}

export default Bottle;