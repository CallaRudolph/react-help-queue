import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import c from "./../constants";
import { v4 } from "uuid";

class NewTicketForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
  }

  handleNewTicketFormSubmission(event) {
    event.preventDefault();
    const { _names, _location, _issue } = this.refs;
    const { dispatch } = this.props;
    const action = {
      type: c.ADD_TICKET,
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpened: new Date().getTime()
    };
    dispatch(action);
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
  hideFormAfterSubmission: PropTypes.func
};

NewTicketForm = connect()(NewTicketForm);

export default NewTicketForm;
