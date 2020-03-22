import React, { Component } from 'react';
import MainHeader from '../../components/Headers/MainHeader';

class CalenderPage extends Component {
    // state = {  }
    render() { 
        return ( 
            <section>
                <MainHeader />
                <div>This is the page for CalenderPage.</div>
                <a href="/">Go back to main page.</a>
            </section>
        );
    }
}
 
export default CalenderPage;