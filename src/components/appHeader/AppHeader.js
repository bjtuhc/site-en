import { Header, Title, Menu, Image } from 'grommet';
import CareerSelector from './CareerSelector';
import MenuAnchor from './MenuAnchor';
import React from 'react';
import {Menu as MenuIcon} from 'grommet-icons';

import classNames from 'classnames';
import logo from 'assets/logo-w.png';


export default class AppHeader extends React.Component {
  render() {
    const { currentAnchor, onLanguageChange, currentLanguage } = this.props;
    return (
      <Header size='large'
              className='header'
              pad={{horizontal: 'medium'}}
              justify='between'
              fixed={true}
              colorIndex='grey-1'
              float={true}>
          <Menu
              className='header-menu'
              direction='row'
              size='small'
              icon={document.documentElement.clientWidth < 1024
                && <MenuIcon className='menu-icon'/>}
          >
              <MenuAnchor
                href='/'
                label='Home'
                currentAnchor={currentAnchor}
                marginRight={62}
              />
              <MenuAnchor
                href='/about'
                label='About'
                currentAnchor={currentAnchor}
                marginRight={40}
              />
              <MenuAnchor
                href='/tech'
                label='Technology'
                currentAnchor={currentAnchor}
                marginRight={280}
              />
              <div class="menu-anchor"></div>
              {/*
              <CareerSelector
                currentAnchor={currentAnchor}
              />
              */}
              {/*
              <MenuAnchor
                href='/media'
                label='Media'
                currentAnchor={currentAnchor}
                marginRight={44}
              />
              */}
              <div>
                  <div className={classNames({
                       'language-selector': true,
                       'language-selected': currentLanguage === 'cn',
                     })}
                     onClick={() => onLanguageChange('cn')}>
                     <a href="http://cn.weride.ai">中</a>
                  </div>
                  <div className='language-seperator'><a>|</a></div>
                  <div className={classNames({
                       'language-selector': true,
                       'language-selected': currentLanguage === 'en',
                     })}
                     onClick={() => onLanguageChange('en')}>
                      <a href="http://www.weride.ai">EN</a>
                  </div>
              </div>
          </Menu>
      </Header>
    );
  }
}
