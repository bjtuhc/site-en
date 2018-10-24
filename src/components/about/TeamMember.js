import React from 'react';
import MemberBio from 'components/about/MemberBio';

import { getMessage } from '../../utils';
import { Down, Up } from 'grommet-icons';
import { Button } from 'grommet';

import classNames from 'classnames';

export default class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      fullSize: false,
    };
  }
  onClick() {
    this.setState((prevState, props) => ({
      fullSize: !prevState.fullSize,
    }));
  }
  render() {
    const { portrait, name, title, bioContent, type } = this.props;
    return (
      <div className={classNames({
        'team-member': type === 'member',
        'team-consultant': type === 'consultant',
        'team-member-full': this.state.fullSize,
      })}>
        <img className='team-portrait' src={portrait}/>
        <div className='team-member-name'>{name}</div>
        <div className='team-member-job'>{title}</div>
        <MemberBio bio={bioContent} />
        {(name === 'Dian Kang' || name === '康典' ||
            title === 'Technical Advisor') &&
          <div className={classNames({
            'bio-button-container': true,
            'bio-button-container-big': title === 'VP Operations',
            'up-button': this.state.fullSize,
          })}>
            <Button className='bio-button'
              icon={this.state.fullSize ?
                <Up className='button-icon' /> :
                <Down className='button-icon' />}
              onClick={() => this.onClick()}/>
          </div>
        }
      </div>
    );
  }
}
