import React from 'react';

function ComparingObjects() {

    const obj1 = { name: "Gosia" }
    const obj2 = { name: "Gosia" }
    const obj3 = obj1

    return (
        <div style={{marginTop: '250 px', justifyContent: 'center', marginLeft: '50px'}}>
            <h1>Comparing Objects</h1>
            <p>
                <span> obj1 === obj2 = </span>
                <span> {obj1 === obj2 ? "true" : "false"}</span>
            </p>
            <p>
                <span> obj1 === obj3 = </span>
                <span> {obj1 === obj3 ? "true" : "false"}</span>
            </p>
        </div>
    )
}

export default ComparingObjects;
