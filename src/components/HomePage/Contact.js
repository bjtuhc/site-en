import React from "react";

import { getMessage } from '../../utils';

import classNames from 'classnames';
import logo from "assets/logo-blue.png";


export default class Contact extends React.Component {
  render() {
    return (
      <div className='contact-container'>
        <div className='contact'>
          <div className='contact-main'>
            <div>
              <img src={logo} />
              <div style={{paddingLeft: 2, marginTop: 40}} >
                <div>
                  <div className={classNames({
                    'contact-subtitle': true,
                    'contact-inline-content': true,
                  })}>
                    contactus@jingchi.ai
                  </div>
                </div>
                <div>
                  <div className='contact-subtitle'>
                    {getMessage('PREmail')}
                  </div>
                  <div className={classNames({
                    'contact-subtitle': true,
                    'contact-inline-content': true,
                  })}>
                    pr@jingchi.ai
                  </div>
                </div>
                <div>
                  <div className='contact-subtitle'>
                    {getMessage('HREmail')}
                  </div>
                  <div className={classNames({
                    'contact-subtitle': true,
                    'contact-content': true,
                  })}>
                    professionaljobs@jingchi.ai
                  </div>
                  <div className={classNames({
                    'contact-subtitle': true,
                    'contact-content': true,
                  })}>
                    campusjobs@jingchi.ai
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-sub'>

            <div className='contact-location'>
              <div className='contact-title'>{getMessage('USContact')}</div>
              <div>
                <div className='contact-subtitle'>{getMessage('Phone')}:</div>
                <div className={classNames({
                  'contact-subtitle': true,
                  'contact-inline-content': true,
                })}>
                  408-645-7118
                </div>
              </div>
              <div>
                <div className='contact-subtitle'>{getMessage('Fax')}</div>
                <div className={classNames({
                  'contact-subtitle': true,
                  'contact-inline-content': true,
                })}>
                  408-752-0208
                </div>
              </div>
              <div>
                <div className={classNames({
                  'contact-subtitle': true,
                  'contact-small-content': true,
                })}>
                  330 Gibraltar Drive, Sunnyvale, CA, 94089
                </div>
              </div>
            </div>

            <div className='contact-location'>
              <div className='contact-title'>{getMessage('BJContact')}</div>
              <div>
                <div className='contact-subtitle'>{getMessage('Phone')}:</div>
                <div className={classNames({
                  'contact-subtitle': true,
                  'contact-inline-content': true,
                })}>
                  (010) 6205 7601
                </div>
              </div>
              <div>
                <div className={classNames({
                  'contact-subtitle': true,
                  'contact-small-content': true,
                })}>
                  {getMessage('BeijingAddress')}
                </div>
              </div>
            </div>

            <div className='contact-location'>
              <div className='contact-title'>{getMessage('GZContact')}</div>
              <div>
                <div className='contact-subtitle'>{getMessage('Phone')}: </div>
                <div className={classNames({
                  'contact-subtitle': true,
                  'contact-inline-content': true,
                })}>
                  020-29093399
                </div>
              </div>
              <div>
                <div className='contact-subtitle'>{getMessage('Fax')}</div>
                <div className={classNames({
                  'contact-subtitle': true,
                  'contact-inline-content': true,
                })}>
                  020-29093398
                </div>
              </div>
              <div>
                <div className={classNames({
                  'contact-subtitle': true,
                  'contact-small-content': true,
                })}>
                  {getMessage('GuangzhouAddress')}
                </div>
              </div>
            </div>

            <div className='contact-location'>
              <div className='contact-title'>{getMessage('AQContact')}</div>
              <div>
                <div className='contact-subtitle'>{getMessage('Phone')}:</div>
                <div className={classNames({
                  'contact-subtitle': true,
                  'contact-inline-content': true,
                })}>
                  0556-5860000
                </div>
              </div>
              <div>
                <div className={classNames({
                  'contact-subtitle': true,
                  'contact-small-content': true,
                })}>
                  {getMessage('AnqingAddress')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
