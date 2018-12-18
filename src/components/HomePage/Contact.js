import React from "react";

import { getMessage } from '../../utils';

import classNames from 'classnames';
import logo from "assets/logo.png";

// This component lists the contact info of an office.
const OfficeContact = (props) => (
  <div className='contact-location'>
    <div className='contact-title'>{props.officeName}</div>
    <div>
      <div className='contact-subtitle'>{props.phoneLabel}</div>
      <div className={classNames({
        'contact-subtitle': true,
        'contact-inline-content': true,
      })}>
        {props.phone}
      </div>
    </div>
    {/*
    <div>
      <div className='contact-subtitle'>{getMessage('Fax')}</div>
      <div className={classNames({
        'contact-subtitle': true,
        'contact-inline-content': true,
      })}>
        408-752-0208
      </div>
    </div>
    */}
    <div>
      <div className='contact-subtitle'>{props.addressLabel}</div>
      <div className={classNames({
        'contact-subtitle': true,
        'contact-small-content': true,
      })}>
        {props.address}
      </div>
    </div>
  </div>
);

const EmailContactCard = (props) => (
  <div>
    <div className='contact-subtitle'>
      {props.emailLabel}
    </div>
    <div className={classNames({
      'contact-subtitle': true,
      'contact-inline-content': true,
    })}>
      {props.email}
    </div>
  </div>
);

export default class Contact extends React.Component {
  render() {
    const emails = ['contactus@weride.ai', 'pr@weride.ai',
      'careers@weride.ai'];
    const emailLabelMsg = ['Email', 'PREmail', 'HREmail'];
    const phoneLabel = getMessage('Phone');
    const addressLabel = getMessage('Address');
    const USAddress = '330 Gibraltar Drive, Sunnyvale, CA, 94089';

    return (
      <div className='contact-container'>
        <div className='contact'>
          <div className='contact-main'>
            <div>
              <img src={logo} />
              <div style={{paddingLeft: 2, marginTop: 40}}>
              {
                emails.map((email, i) => {
                  return (
                    <EmailContactCard emailLabel={
                                        getMessage(emailLabelMsg[i])}
                                      email={email}/>
                  );
                })
              }
              </div>
            </div>
          </div>

          <div className='contact-sub'>
            <OfficeContact officeName={getMessage('GZContact')}
                           phoneLabel={phoneLabel}
                           phone="+86 20-2909 3399"
                           addressLabel={addressLabel}
                           address={getMessage('GuangzhouAddress')}/>
            <OfficeContact officeName={getMessage('USContact')}
                           phoneLabel={phoneLabel}
                           phone="+1 408 645 7118"
                           addressLabel={addressLabel}
                           address={USAddress}/>
            <OfficeContact officeName={getMessage('AQContact')}
                           phoneLabel={phoneLabel}
                           phone="+86 556-5860 000"
                           addressLabel={addressLabel}
                           address={getMessage('AnqingAddress')}/>
            <OfficeContact officeName={getMessage('BJContact')}
                           phoneLabel={phoneLabel}
                           phone="+86 10-6205 7601"
                           addressLabel={addressLabel}
                           address={getMessage('BeijingAddress')}/>
          </div>
        </div>
      </div>
    );
  }
}
