import React from 'react';
import Cover from "components/HomePage/Cover";
import SectionTitle from 'components/HomePage/SectionTitle';
import { Paragraph } from 'grommet';

import cover from "assets/recruit/recruit-us.jpg";

export default class  extends React.Component {

  render() {
    return (
      <div>
        <Cover src={cover} />
            <div className='campus-content-container'>
                <center className='job-btn-container'>
                    <a
                        className='job-btn'
                        href='us-campus-recruiting-positions'
                    >
                        View Positions
                    </a>
                </center>
                {/* <SectionTitle caption='Schedule' marginTop={60} />
              <div className='recruit-schedule-div-us'>
                <ul className='recruit-schedule-us'>
                    <li>
<div>09/15, University of Illinois at Urbana–Champaign, Career Fair</div>
                    </li>
                    <li>
<div>10/15, Carnegie Mellon University, 5:30 PM - 9:00 PM,
    Room 4623, Wean Hall</div>
                    </li>
                    <li>
<div>10/23, University of California, Berkeley, 6:30 PM - 9:00 PM,
    Student Union Stephens Lounge</div>
                    </li>
                    <li>
<div>11/03, Stanford University, 6:30 PM - 9:00 PM,
    C102 (Wells Classroom), Knight Management Center,
    Graduate School of Business</div>
                    </li>
                    <li>
<div>10/30, University of Southern California, 5:30 PM - 8:00 PM,
    Seeley G Mudd(SGM) 101</div>
                    </li>
                </ul>
              </div> */}
                {/* <Paragraph
                    className='spanning-paragraph'
                    size='medium'
                    margin='none'
                    align='center'
                >
                Please send your resume
                to <a href='mailto:campus@jingchi.ai'>campus@jingchi.ai</a>
                </Paragraph> */}
                <SectionTitle caption='Process' marginTop={60} />
                <ul className='process-ul'>
                    <li className='process-li'>Submit your resume on the
                        Job page or at the info sessions.</li>
                    <li className='process-li'>Participate a written test.</li>
                    <li className='process-li'>
                        Participate tech phone interviews.</li>
                    <li className='process-li'>
                        Participate onsite tech interviews.</li>
                    <li className='process-li'>
                        Get an offer and join JingChi team!</li>
                </ul>
                <SectionTitle caption='Deadline' marginTop={60} />
                <Paragraph
                    className='spanning-paragraph-us'
                    size='medium'
                    margin='none'
                    align='center'
                >We are hiring all year round,
                so we welcome top students with
                an engineering degree at any time.
                </Paragraph>
                <Paragraph
                    className='spanning-paragraph-us'
                    size='medium'
                    margin='none'
                    align='center'
                >Please only apply
                for 1 position. You’ll be considered for
                all opportunities and we’ll discuss
                the best fit for you during the interview.
                </Paragraph>
            </div>
      </div>
    );
  }
}
