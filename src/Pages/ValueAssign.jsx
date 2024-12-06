import React from 'react';

function ValueAssign() {
    const object1 = {name: "Jane"}
    let object2 = object1
    object2.name = "Doe"

    return (
        <div style={{marginTop: '250 px', justifyContent: 'center', marginLeft: '50px'}}>

            <h1>Value assign</h1>
            <p>
                <span> object1.name = </span>
                <span> {object1.name}</span>
            </p>
        </div>
    )
}

export default ValueAssign;
