import React from "react";
import { Box } from "grommet";

import SectionTitle from "components/HomePage/SectionTitle";

import { getMessage } from '../../utils';
import events180704 from "assets/events/events180704.jpg";
import events170526 from "assets/events/events170526.jpg";
import events180427 from "assets/events/events180427.jpg";

class EventsItem extends React.Component {
  render() {
    const { picture, title, location, date } = this.props;
    return (
      <div className='events-item'>
        <img className='events-picture' src={picture} />
        <div className='events-content'>
          <div className='events-title'>{title}</div>
          <div className='events-location'>
            {getMessage('Location')}
            {location}
          </div>
          <div className='events-date'>{getMessage('Date')}{date}</div>
        </div>
      </div>
    );
  }
}

export default class Events extends React.Component {
  render() {
    const titles = getMessage('EventsTitle');
    const locations = getMessage('EventsLocation');
    const dates = getMessage('EventsDate');
    const pictures = [
      events180704,
      events180427,
      events170526
    ];
    return (
      <div className='container'>
        <Box className="section-area">
          <SectionTitle caption={getMessage('PastEvents')} />
          <div>
            {titles.map((title, index) => {
              return (
                <EventsItem
                  title={title}
                  location={locations[index]}
                  date={dates[index]}
                  picture={pictures[index]}
              />);
            })}
          </div>
        </Box>
      </div>
    );
  }
}
