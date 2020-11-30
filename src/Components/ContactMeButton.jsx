import React from 'react';

class ContactMeButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleShowForm = this.handleShowForm.bind(this);
    }

    handleShowForm() {
        this.props.onButtonClick();
    }

    render() {

        return (
            <input type="button" className="button" value="Contact Me" onClick={this.handleShowForm} />
        )

    }
    
}

export default ContactMeButton;