import React from "react";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";
import {connect} from "react-redux";

class Queue extends React.Component {

  constructor(props) {
    super(props);
    this.updateTicketTimeSinceOpened = this.updateTicketTimeSinceOpened.bind(this);
  }

  componentDidMount() {
    this.timeSinceOpenedChecker = setInterval(() =>
      this.updateTicketTimeSinceOpened(),
    5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeSinceOpenedChecker);
  }

  updateTicketTimeSinceOpened() {
    // let newMasterTicketList = this.state.masterTicketList.slice();
    // newMasterTicketList.forEach((ticket) =>
    //   ticket.setTimeSinceOpened()
    // );
    // this.setState({masterTicketList:newMasterTicketList});
    this.forceUpdate();
  }

  render() {
    return (
        <div>
            <TicketList ticketList = {this.props.masterTicketList} />
            <NewTicketControl />
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTicketList : state
  };
};

export default connect(mapStateToProps)(Queue);
