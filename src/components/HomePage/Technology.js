import React from "react";
import { Box } from "grommet";
import { getMessage } from '../../utils';

import Cover from "components/HomePage/Cover";
import SectionTitle from "components/HomePage/SectionTitle";
import HDMap from "assets/tech/HDMap.png";
import multiSensor from "assets/tech/multi-sensor.png";
import simulationSystem from "assets/tech/simulation-system.png";
import localization from "assets/tech/localization.png";
import softHardware from "assets/tech/soft-hardware.png";
import recognition from "assets/tech/recognition.png";
import tech from 'assets/Tech.jpg';
import techSm from 'assets/Tech-sm.jpg';

class TechItem extends React.Component {
  render() {
    const { thumbnail, caption } = this.props;
    return (
      <div className='tech-item'>
        <img className='tech-thumbnail' src={thumbnail} />
        <div className='tech-desc-cap'>{caption}</div>
      </div>
    );
  }
}

export default class Technology extends React.Component {
  componentWillMount() {
    this.props.setAnchor();
  }
  render() {
    const pics = [
      recognition,
      HDMap,
      multiSensor,
      simulationSystem,
      softHardware,
      localization
    ];
    const titles = getMessage('TechTitles');
    return (
      <div>
        <Cover src={document.documentElement.clientWidth < 1024
          ? techSm : tech} />
        <div className='container'>
          <Box className="section-area">
            <SectionTitle caption={getMessage('Technology')} />
            <div>
              {titles.map((title, index) => {
                return (
                  <TechItem thumbnail={pics[index]}
                    caption={title} />
                );
              })}
            </div>
          </Box>
        </div>
      </div>
    );
  }
}
