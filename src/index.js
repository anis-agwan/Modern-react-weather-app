import React from 'react';
import ReactDom from "react-dom";

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );

        return <div>Hello, Friend, You are at Latitude:</div>
    }
}


ReactDom.render(<App />, document.querySelector('#root'))