// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

    keyUp = () => {
        console.log('Entering password...')
    }
    render() {
        return (
            <div>
                <input onKeyUp={this.keyUp} type="password"/>
            </div>
        )
    }
}

export default Keypad