import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import Hero from '../components/Hero';
import Content from '../components/Content';



class ContactPage extends React.Component {

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


            <Content>
                <Form></Form>
                    <Form.Group>
                        <Form.Label htmlfor="full-name">Full name</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlfor="email">Email</Form.Label>
                        <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                    </Form.Group>


                    <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>
                    
                    {this.state.emailSent === true && <p className="d-inline success-msg">Email sent</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Something went wrong!</p>}

                </Form>
            </Content>
        </div>
    );

    }
}


export default ContactPage;