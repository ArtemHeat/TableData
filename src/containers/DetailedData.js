import React from 'react';
import {connect} from 'react-redux';

class DetailedData extends React.Component {
  constructor(props) {
    super(props);
  }

  findPerson = (element) => {
    const {detailedId, detailedFirstName,
      detailedLastName, detailedEmail} = this.props;
    return element.id === detailedId
      && element.firstName === detailedFirstName
      && element.lastName === detailedLastName
      && element.email === detailedEmail;
  };

  render() {
    const {persons, loaded, detailedId, detailedFirstName,
      detailedLastName, detailedEmail} = this.props;
    const person = persons.find(this.findPerson);
    if (!loaded && !person) return <h3></h3>;
    if (loaded && !person) return <h3>Select a row in the table above to display detailed information</h3>;
    return (
      <div>
        Выбран пользователь <b>{person.firstName}</b><br/>
        Описание:<br/>
        <textarea readOnly rows="10" cols="40" value={person.description} /><br/>
        Адрес проживания: <b>{person.address.streetAddress}</b><br/>
        Город: <b>{person.address.city}</b><br/>
        Провинция/штат: <b>{person.address.state}</b><br/>
        Индекс: <b>{person.address.zip}</b>
      </div>
    );
  };
};

export default connect((state) => ({
  persons: state.persons.persons,
  loaded: state.persons.loaded,
  detailedId: state.detailedInf.detailedId,
  detailedFirstName: state.detailedInf.detailedFirstName,
  detailedLastName: state.detailedInf.detailedLastName,
  detailedEmail: state.detailedInf.detailedEmail
}), {})(DetailedData);