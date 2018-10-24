import React from "react";

import { Box, Video } from "grommet";
import { getMessage } from '../../utils';

import simulator from "assets/videos/simulator.mp4";
import rainyFast from "assets/videos/rainy_fast.mp4";
import mixRoad from "assets/videos/mix_road.mp4";
import smallRoad from "assets/videos/small_road.mp4";
import smallRoadSlowdown from "assets/videos/small_road_slowdown.mp4";
import ersha from "assets/videos/ersha.mp4";

export default class Videos extends React.Component {
  render() {
    return (
      <div className='container'>
        <Box className="section-area">
          <div>
            <Video fit="cover" muted={true}>
              <source src={ersha} type="video/mp4" />
            </Video>
            <div className='video-title'>{getMessage('ersha')}</div>
          </div>
          <div>
            <Video fit="cover" muted={true}>
              <source src={rainyFast} type="video/mp4" />
            </Video>
            <div className='video-title'>{getMessage('rainyFast')}</div>
          </div>
          <div>
            <Video fit="cover" muted={true}>
              <source src={mixRoad} type="video/mp4" />
            </Video>
            <div className='video-title'>{getMessage('mixRoad')}</div>
          </div>
          <div>
            <Video fit="cover" muted={true}>
              <source src={smallRoad} type="video/mp4" />
            </Video>
            <div className='video-title'>{getMessage('smallRoad')}</div>
          </div>
          <div>
            <Video fit="cover" muted={true}>
              <source src={smallRoadSlowdown} type="video/mp4" />
            </Video>
            <div className='video-title'>{getMessage('smallRoadSlowdown')}</div>
          </div>
          <div>
            <Video fit="cover" muted={true}>
              <source src={simulator} type="video/mp4" />
            </Video>
            <div className='video-title'>{getMessage('simulator')}</div>
          </div>
        </Box>
      </div>
    );
  }
}
