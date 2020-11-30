import React, { Component } from 'react';
import ContactMeButton from './ContactMeButton';
import ContactForm from './ContactForm';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.handleShowForm = this.handleShowForm.bind(this);
        this.handleHideForm = this.handleHideForm.bind(this);
        this.handleSendForm = this.handleSendForm.bind(this);
        this.state = { 
            showContactForm:props.showContactForm,
            showThankYou:false,
        }
    }

    handleShowForm() {
        this.setState({ showContactForm:true, showThankYou:false });
    }

    handleHideForm() {
        this.setState({ showContactForm:false, showThankYou:false });
    }

    handleSendForm() {
        this.setState({ showContactForm:false, showThankYou:true });
    }

    render() {

        const showContactForm = this.state.showContactForm;
        const showThankYou = this.state.showThankYou;
        let contactContent;
        let thankyouContent;

        if (showContactForm) {
            contactContent = <ContactForm onCloseButtonClick={this.handleHideForm} onSendButtonClick={this.handleSendForm} />;
        } else {
            contactContent = <ContactMeButton onButtonClick={this.handleShowForm} />;
        }

        if (showThankYou) {
            thankyouContent = <p>Thank you, your message has been sent.</p>;
        }

        return(
            <div>
                {contactContent}
                {thankyouContent}
                <hr />
            </div>
        )

    }
    
}

export default Contact;