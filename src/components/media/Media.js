import React from "react";

import { getMessage } from '../../utils';

import Cover from "components/HomePage/Cover";
import SectionTitle from "components/HomePage/SectionTitle";
import News from "./News";
import Videos from "./Videos";
import Events from "./Events";

import classNames from 'classnames';
import news from 'assets/News.jpg';
import videos from 'assets/Videos.jpg';
import events from 'assets/Events.jpg';
import newsSm from 'assets/News-sm.jpg';
import videosSm from 'assets/Videos-sm.jpg';
import eventsSm from 'assets/Events-sm.jpg';

export default class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'News',
    };
  }
  onPageChange(value) {
    this.setState({
      currentPage: value
    });
  }
  componentWillMount() {
    this.props.setAnchor();
  }
  getBanner() {
    if (document.documentElement.clientWidth < 1024) {
      return this.state.currentPage === 'News' ? newsSm :
        this.state.currentPage === 'Videos' ? videosSm : eventsSm;
    } else {
      return this.state.currentPage === 'News' ? news :
        this.state.currentPage === 'Videos' ? videos : events;
    }
  }
  render() {
    return (
      <div>
        <div className='media-container'>
          <Cover src={this.getBanner()} />
          <div className='media-selector'>
            <div
              className={classNames({
                'media-option': true,
                'media-option-selected': this.state.currentPage === 'News'
              })}
              onClick={() => this.onPageChange('News')}
            >
              {getMessage('News')}
            </div>
            <div
              className={classNames({
                'media-option': true,
                'media-option-selected': this.state.currentPage === 'Videos'
              })}
              onClick={() => this.onPageChange('Videos')}
            >
              {getMessage('Videos')}
            </div>
            <div
              className={classNames({
                'media-option': true,
                'media-option-selected': this.state.currentPage === 'Events'
              })}
              onClick={() => this.onPageChange('Events')}
            >
              {getMessage('Events')}
            </div>
          </div>
        </div>
        {this.state.currentPage === 'News' && <News />}
        {this.state.currentPage === 'Videos' && <Videos />}
        {this.state.currentPage === 'Events' && <Events />}
      </div>
    );
  }
}
