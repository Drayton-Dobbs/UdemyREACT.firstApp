
import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null, 
            errMsg: null
        };



        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
            },
            err => this.setState({ errMsg: err.message})
        );

    }

    render() {
        if (this.state.errMsg && !this.state.lat) {
            return <div>Error: {this.state.errMsg}</div>
        } else if (!this.state.errMsg && this.state.lat) {
            return <div>lat: {this.state.lat}</div>
        } else {
            return <div>laoding...</div>
        }        
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));