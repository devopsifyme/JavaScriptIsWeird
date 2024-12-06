import React from 'react';

function Equality() {

    return (
        <div style={{marginTop: '250 px', justifyContent: 'center', marginLeft: '50px'}}>

            <h1>Ahh... equality</h1>
            <p>
                <span> 0 == false // </span>
                <span> {0 == false ? 'true' : 'false'}</span>
            </p>
            <p>
                <span> 0 === false // </span>
                <span> {0 === false ? 'true' : 'false'}</span>
            </p>
            <p>
                <span> '' == 0 // </span>
                <span> {'' == 0 ? 'true' : 'false'}</span>
            </p>
            <p>
                <span> '' === 0 //  </span>
                <span> {'' === 0 ? 'true' : 'false'}</span>
            </p>
        </div>
    )
}

export default Equality;
