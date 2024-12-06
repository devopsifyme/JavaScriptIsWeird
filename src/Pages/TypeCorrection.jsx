import React from 'react';

function TypeCorrection() {

    return (
        <div style={{marginTop: '250 px', justifyContent: 'center', marginLeft: '50px'}}>
            <h1>Wtf type correction</h1>
            <p>
                <span> 1 + '2' = </span>
                <span> {1 + '2'}</span>
            </p>
            <p>
                <span> '2' - 1 = </span>
                <span> {'2' - 1}</span>
            </p>
            <p>
                <span> true + true =  </span>
                <span> {true + true}</span>
            </p>
        </div>
    )
}

export default TypeCorrection;
