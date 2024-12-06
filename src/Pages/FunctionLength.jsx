import React from 'react';

function FunctionLength() {
    function function1(a, b, c) {}
    function function2(a, b = "why", c) {}

    return (
        <div style={{marginTop: '250 px', justifyContent: 'center', marginLeft: '50px'}}>
            <h1>Function has length?</h1>
            <p>
                <span>function1.length = </span>
                <span> {function1.length}</span>
            </p>
            <p>
                <span>function2.length = </span>
                <span> {function2.length}</span>
            </p>
        </div>
    )
}

export default FunctionLength;
