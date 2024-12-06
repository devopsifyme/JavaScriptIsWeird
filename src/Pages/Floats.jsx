import React from 'react';

function Floats() {

    return (
        <div style={{marginTop: '250 px', justifyContent: 'center', marginLeft: '50px'}}>

            <h1>Floating Floats</h1>
            <p>
                <span> 0.1 + 0.2 === 0.3 //  </span>
                <span> {0.1 + 0.2 === 0.3 ? "true" : "false"}</span>
            </p>
        </div>
    )
}

export default Floats;
