import React from 'react';

class Asi extends React.Component {
    render() {
        function getNameObject() {
            return
            {
                // eslint-disable-next-line no-unused-expressions
                name: "Gosia"
            };
        }

        return <div style={{marginTop: '250 px', justifyContent: 'center', marginLeft: '50px'}}>
            <h1>Automatic Semicolon Insertion</h1>
            <p>
                <span> The return type of getNameObject ... </span>
                <span> {typeof getNameObject()}</span>
            </p>
        </div>;
    }
}

export default Asi;
