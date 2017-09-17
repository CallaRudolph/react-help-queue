import React from "react";
import Ticket from "../models/Ticket.js";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

class NewTicketForm extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
  }

  handleNewTicketFormSubmission(event) {
    event.preventDefault();
    const { _names, _location, _issue } = this.refs;
    var newTicket = new Ticket(_names.value, _location.value, _issue.value);
    this.props.onNewTicketCreation(newTicket);
    this.props.hideFormAfterSubmission();
  }

  render(){
    return (
        <div>
            <form onSubmit={this.handleNewTicketFormSubmission}>
                <input
                    ref="_names"
                    type="text"
                    id="names"
                    placeholder="Pair Names"/>
                <br/><br/>
                <input
                    ref="_location"
                    type="text"
                    id="location"
                    placeholder="Location"/>
                <br/><br/>
                <textarea
                    ref="_issue"
                    id="issue"
                    placeholder="Describe your issue."/>
                <br/><br/>
                <Button bsStyle="success" type="submit">Help!</Button>
            </form>
        </div>
    );
  }

}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func,
};

NewTicketForm = connect()(NewTicketForm);

export default NewTicketForm;
