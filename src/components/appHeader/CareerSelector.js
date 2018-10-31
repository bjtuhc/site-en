import { Menu, Anchor } from 'grommet';
import React from 'react';
import { getMessage } from '../../utils';

import classNames from 'classnames';

export default class CareerSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }
  renderMenu() {
    return this.state.showMenu && (
      <div className='career-menu'>
        <ul>
          <li>
            <a href='https://app.mokahr.com/campus_apply/jingchi'
              target='_blank'>
              {getMessage('ChinaCampus')}
            </a>
          </li>
          <li>
            <a href='https://app.mokahr.com/apply/jingchi' target='_blank'>
              {getMessage('ChinaRecruiting')}
            </a>
          </li>
          <li>
            <a href='/us-campus-recruiting-positions'>
              {getMessage('USCampus')}
            </a>
          </li>
          <li>
            <a href='/jobs'>{getMessage('USRecruiting')}</a>
          </li>
        </ul>
      </div>
    );
  }
  handleClick(e) {
    e.stopPropagation();
    this.setState((prevState, props) => ({
      showMenu: !prevState.showMenu
    }));
  }
  onMouseOver() {
    document.documentElement.clientWidth > 1000 && this.setState({
      showMenu: true
    });
  }
  onMouseLeave() {
    document.documentElement.clientWidth > 1000 && this.setState({
      showMenu: false
    });
  }
  render() {
    return (
      <div className='careers'
        onMouseOver={() => this.onMouseOver()}
        onMouseLeave={() => this.onMouseLeave()}
        onClick={(e) => this.handleClick(e)}>
        <CareerAnchor
          currentAnchor={this.props.currentAnchor}
          showMenu={this.state.showMenu} />
        {this.renderMenu()}
      </div>
    );
  }
}

class CareerAnchor extends React.Component {
  render() {
    return (
      <a className={classNames({
        'grommet-anchor': true,
        'anchor-selected':
          this.props.currentAnchor === 'Careers' || this.props.showMenu,
        'anchor-not-selected': this.props.currentAnchor !== 'Careers',
      })}>
        {getMessage('Careers')}
        <i style={{marginLeft: 5}} className='fa fa-sort-down'> </i>
      </a>
    );
  }
}
