import { Anchor } from 'grommet';
import React from 'react';

import classNames from 'classnames';
import { getMessage } from '../../utils';

export default class MenuAnchor extends React.Component {
  render() {
    const { label, href, marginLeft, marginRight, currentAnchor,
      onClick } = this.props;
    return (
      <div className='menu-anchor'>
        <Anchor
          href={href}
          label={getMessage(label)}
          className={classNames({
            'anchor-selected': currentAnchor === label,
            'anchor-not-selected': currentAnchor !== label,
          })}
          onClick={() => onClick && onClick()}
          style={{
            marginLeft: marginLeft ? marginLeft : 0,
            marginRight: marginRight,
            fontSize: 18,
          }}
        />
      </div>
    );
  }
}
