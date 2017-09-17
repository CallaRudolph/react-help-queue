import ticketList from './../../src/reducers/ticket-list-reducer';
import constants from './../../src/constants';

describe("Ticket list reducer", () => {

  test('should return equivalent state if no action type is recognized', () => {
    expect(ticketList([], { type: null})).toEqual([]);
  });

  test('imported value should match action type string', () => {
    expect(constants.ADD_TICKET).toEqual('testing testing 12223');
  });

});
