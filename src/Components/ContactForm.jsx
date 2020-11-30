import React from 'react';
import emailjs from 'emailjs-com';

const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Please, let me know your name.';
    }
    if (!values.email) {
        errors.email = 'Please, let me know your email so I can reach back to you.';
    }
    if (!values.message) {
        errors.message = 'Ups, I think you forgot your message.';
    }
    if (!values.human) {
        errors.human = 'So what species are you?';
    }
    if (values.robot!=='no') {
        errors.robot = 'Do you know R2D2?';
    }
    return errors;
}

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleHideForm = this.handleHideForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
        this.state = {
            errors: {},
        }
    }

    handleHideForm() {
        this.props.onCloseButtonClick();
    }

    handleChange = ({target}) => {
        const { name, value } = target;
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { errors, ...fields } = this.state;
        const result = validate(fields);
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const emailUserId = process.env.REACT_APP_EMAILJS_USER_ID;
        
        this.setState({ errors: result });
        
        if (!Object.keys(result).length) {
            e.target.reset();
            this.sendFeedback(templateId, {message: fields.message, from_name: fields.name, reply_to: fields.email}, emailUserId)
            this.props.onSendButtonClick();
            console.log('Form valid');
        }
    }

    sendFeedback (templateId, variables, emailUserId) {
        emailjs.send(
            'default_service', templateId,
            variables, emailUserId
        ).then(res => {
            console.log('Email successfully sent!')
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render() {
        const { errors } = this.state;

        return (
            <form method="post" action="#" onSubmit={this.handleSubmit}>
                <div className="fields">
                    <div className="field">
                        <input type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange} />
                        {errors.name && <p style={{color:'#ff7496'}}>{errors.name}</p>}
                    </div>
                    <div className="field">
                        <input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange} />
                        {errors.email && <p style={{color:'#ff7496'}}>{errors.email}</p>}
                    </div>
                    <div className="field">
                        <textarea name="message" id="message" placeholder="Message" rows="4" onChange={this.handleChange} />
                        {errors.message && <p style={{color:'#ff7496'}}>{errors.message}</p>}
                    </div>
                    <div className="field">
                        <input type="checkbox" id="human" name="human" onChange={this.handleChange} /><label htmlFor="human">I'm a human</label>
                        {errors.human && <p style={{color:'#ff7496'}}>{errors.human}</p>}
                    </div>
                    <div className="field">
                        <label>But are you a robot?</label>
                        <input type="radio" id="robot_yes" name="robot" onChange={this.handleChange} value="yes" /><label htmlFor="robot_yes">Yes</label>
                        <input type="radio" id="robot_no" name="robot" onChange={this.handleChange} value="no" /><label htmlFor="robot_no">No</label>
                        {errors.robot && <p style={{color:'#ff7496'}}>{errors.robot}</p>}
                    </div>
                </div>
                <ul className="actions special">
                    <li>
                        <input type="button" className="button" value="Close" onClick={this.handleHideForm} />
                        <input type="submit" className="button" value="Send" />
                    </li>
                </ul>
            </form>
        )
    }
}

export default ContactForm;