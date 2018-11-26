import React from 'react';
import MemberBio from 'components/about/MemberBio';

import { getMessage } from '../../utils';
import classNames from 'classnames';
import tonyPortrait from 'assets/team/team-tony.png';

export default class CEO extends React.Component {
  render() {
    return (
      <div className={classNames({
        'team-member': true,
        'ceo': true,
      })}>
        <div className='ceo-info'>
          <img className='team-portrait' src={tonyPortrait}/>
          <div className='team-member-name'>{getMessage('TonyHan')}</div>
          <div className='team-member-job'>{getMessage('TonyHanTitle')}</div>
        </div>
        <div className='ceo-bio'>
          <MemberBio bio={getMessage('TonyHanBio')} />
        </div>
      </div>
    );
  }
}
