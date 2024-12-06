import React from 'react';

function NotANumber() {

    return (
        <div style={{marginTop: '250 px', justifyContent: 'center', marginLeft: '50px'}}>

            <h1>What the NaN</h1>
            <h2>Are you a number?</h2>
            <p>
                <span> typeof(NaN) = </span>
                <span> {typeof NaN}</span>
            </p>
            <p>
                <span> NaN === NaN is </span>
                <span> {NaN === NaN ? "true" : "false"}</span>
            </p>
        </div>
    )
}

export default NotANumber;
