import React from 'react';


class ContactPage extends React.Component(props){

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
        
        <p>ContactPage works!</p>
    );

    }
}


export default ContactPage;