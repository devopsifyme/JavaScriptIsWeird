import React from 'react';

function NullUndefined() {
    return (
        <div style={{marginTop: '250 px', justifyContent: 'center', marginLeft: '50px'}}>
            <h1>Null vs. undefined</h1>
            <p>
                <span> typeof null is.. </span>
                <span> {typeof null}</span>
            </p>
            <p>
                <span> typeof undefined is.. </span>
                <span> {typeof undefined}</span>
            </p>
            <p>
                <span> null == undefined is.. </span>
                <span> {null == undefined ? "true" : "false"}</span>
            </p>
            <p>
                <span> null === undefined is.. </span>
                <span> {null === undefined ? "true" : "false"}</span>
            </p>
        </div>
    )
}

export default NullUndefined;
