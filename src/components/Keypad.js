// Code Keypad Component Here
import React from 'react';

class KeyPad extends React.Component {
    handleInputPassword = () => console.log('Entering password...')
render () {
    return (
        <div>
        <input onKeyUp = {this.handleInputPassword}  type="password" />
        </div>
    )
}
}

export default KeyPad;