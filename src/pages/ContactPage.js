import React from 'react';

import Hero from '../components/Hero';


class ContactPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: '',
            emailSent: '',

        }

    }


    render(){
    return (
        <div>
        <Hero title={this.props.title}/>

        </div>
    );

    }
}


export default ContactPage;