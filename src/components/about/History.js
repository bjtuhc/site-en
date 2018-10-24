import React from 'react';

import { getMessage } from '../../utils';
import { Box } from "grommet";

import SectionTitle from 'components/HomePage/SectionTitle';

export default class History extends React.Component {
  render() {
    const titles = getMessage('HistoryTitles');
    const contents = getMessage('HistoryContents');
    const toBeContinue = getMessage('ToBeContinue');
    return (
        <Box className="section-area"
             pad="medium">
          <SectionTitle id='about' caption={getMessage('History')} />
          <div className='history'>
            {titles.map((title, i) => {
              return (i % 2 === 0 ? (
                  <div key={i} className='history-content-left'>
                    <div className='history-title'>{title}</div>
                    <div className='history-text-left'>{contents[i]}</div>
                  </div>
                ) : (
                  <div key={i}>
                    <div className='history-content-right'>
                      <div className='history-title'>{title}</div>
                      <div className='history-text-right'>{contents[i]}</div>
                    </div>
                    <div className='history-content-empty'></div>
                  </div>
                )
              );
            })}
            <div className='history-content'>
              <div>{toBeContinue[0]}</div>
              <div>{toBeContinue[1]}</div>
              <div>{toBeContinue[2]}</div>
            </div>
          </div>
        </Box>
    );
  }
}
