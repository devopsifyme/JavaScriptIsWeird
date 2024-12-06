import React from 'react';

function AddingArrAndObj() {
    const obj1 = { name: "Gosia" }
    const obj2 = { age: 31 }

    const obj3 = { valueOf: () => 10};
    const obj4 = {valueOf: () => 20};

    return (
        <div style={{marginTop: '250 px', justifyContent: 'center', marginLeft: '50px'}}>
            <h1>Adding Arrays and Objects</h1>
            <p>
                <span> obj1 + obj2 = </span>
                <span> {obj1 + obj2}</span>
            </p>
            <p>
                <span> obj3 - obj4= </span>
                <span> {obj3 - obj4} </span>
            </p>
            <p>
                <span> [1,2] + [3,4] =  </span>
                <span> {[1, 2] + [3, 4]}</span>
            </p>
            <p>
                <span> [1] - [3] =  </span>
                <span> {[1] - [3]}</span>
            </p>
            <p>
                <span> ["1"] - ["3"] =  </span>
                <span> {["1"] - ["3"]}</span>
            </p>
        </div>
    )
}

export default AddingArrAndObj;
