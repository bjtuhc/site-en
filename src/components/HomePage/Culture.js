import React from "react";

import { Image } from "grommet";
import { getMessage } from '../../utils';

import SectionTitle from "components/HomePage/SectionTitle";
import growthIcon from "assets/culture/icon-growth.png";
import innovationIcon from "assets/culture/icon-innovation.png";
import resultsIcon from "assets/culture/icon-results-driven.png";
import teamIcon from "assets/culture/icon-team.png";

import carPhoto from "assets/culture/culture-car.jpg";
import funPhoto from "assets/culture/culture-fun.jpg";
import teamPhoto from "assets/culture/culture-team.jpg";
import workPhoto from "assets/culture/culture-work.jpg";

export default class Culture extends React.Component {
  render() {
    return (
      <section className='section-area section-title-team'>
        <SectionTitle id='culture' caption={getMessage('Culture')}/>
        <div>
          <div className='culture-tile'>
            <img className='culture-img' src={growthIcon} />
            <div className="culture-item-caption">
                {getMessage('GrowTogether')}
            </div>
            <Image className="photo" src={teamPhoto} />
          </div>
          <div className='culture-tile'>
            <img className='culture-img' src={resultsIcon} />
            <div className="culture-item-caption">
              {getMessage('ResultsDriven')}
            </div>
            <Image className="photo" src={carPhoto} />
          </div>
          <div className='culture-tile'>
            <img className='culture-img' src={innovationIcon} />
            <div className="culture-item-caption">
              {getMessage('Innovation')}
            </div>
            <Image className="photo" src={workPhoto} />
          </div>
          <div className='culture-tile'>
            <img className='culture-img' src={teamIcon} />
            <div className="culture-item-caption">
              {getMessage('TeamOriented')}
            </div>
            <Image className="photo" src={funPhoto} />
          </div>
        </div>
      </section>
    );
  }
}
