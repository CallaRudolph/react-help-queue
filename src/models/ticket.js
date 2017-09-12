class Ticket {
  constructor(names, location, issue) {
    this.names = names;
    this.location = location;
    this.issue = issue;
    this.timeOpened = new Date();
  }
}

export default Ticket;
