import React from 'react';

export default class AppTableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const person = this.props.person;
    const tabindex = this.props.tabindex;
    return (
      <tr tabIndex={tabindex} >
        <td>{person.id}</td>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.email}</td>
        <td>{person.phone}</td>
      </tr>
    );
  }
}
