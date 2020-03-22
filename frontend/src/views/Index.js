import React, { Component } from 'react';
import ReactDOM from "react-dom";
import MainHeader from '../components/Headers/MainHeader';

class Index extends Component {
    // state = {  }
    render() { 
        return (  
            <section>
                <MainHeader />
                <p>This is index page.<a href="/login-page">Click here to go to /login-page</a></p>
            </section>
        );
    }
}
 
export default Index;