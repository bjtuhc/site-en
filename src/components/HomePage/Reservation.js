import React from "react";
import SectionTitle from "components/HomePage/SectionTitle";

import { getMessage } from '../../utils';
import { TextInput, Button } from "grommet";

export default class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      phone: null
    };
  }
  onSubmit() {
    const reg = /^[\u4E00-\u9FA5A-Za-z_  ]+$/;
    if (!this.state.name || !reg.test(this.state.name)) {
      alert('Please enter a valid name');
    } else if (!this.state.phone || this.state.phone.length !== 11) {
      alert('Please input a correct phone number');
    } else {
      fetch('http://localhost:6069/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          phone: this.state.phone,
        })
      }).then((response) => {
        console.log(response);
      });
    }
  }
  render() {
    return (
        <div className='reservation'>
          <div className='reservation-container'>
            <SectionTitle caption={getMessage('Reservation')} />
            <div className='reservation-row'>
              <TextInput
                placeHolder={getMessage('Name')}
                value={this.state.name}
                onDOMChange={(e) => this.setState({
                  name: e.target.value,
                })}
              />
              <TextInput
                placeHolder={getMessage('Phone')}
                value={this.state.phone}
                onDOMChange={(e) => {
                  const value = e.target.value.replace(/[^\d]+/, '');
                  this.setState({
                    phone: value,
                  });
                }}
              />
            </div>
            <Button
              className='paragraph-button'
              label={getMessage('Sumbit')}
              primary={true}
              onClick={() => this.onSubmit()}
            />
          </div>
        </div>
    );
  }
}
