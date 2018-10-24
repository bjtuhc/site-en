import React from "react";
import {Link} from "react-router-dom";
import { Box, Paragraph } from "grommet";
import SectionTitle from "components/HomePage/SectionTitle";

import { getMessage, getLocale } from '../../utils';

class Job extends React.Component {
  render() {
    const { name, url } = this.props;

    return (
      <li className="job-list-item">
        <Link to={url}>
          {name}
        </Link>
      </li>
    );
  }
}

class OurJobs extends React.Component {
  render() {
    const jobNames = [
      getMessage('ControlSystemEngineer'),
      getMessage('MotionPlanningEngineer'),
      getMessage('PerceptionEngineer'),
      getMessage('SoftwareEngineerFrontend'),
      getMessage('SoftwareEngineerMappingLocalization'),
      getMessage('SoftwareEngineerNewGrads'),
      getMessage('SoftwareEngineerIntern'),
      getMessage('SrITEngineerManagerBeijing'),
      getMessage('SystemEngineer')
    ];

    const jobUrls = [
      "/control-system-engineer",
      "/motion-planning-engineer",
      "/perception-engineer",
      "/software-engineer-front-end",
      "/software-engineer-mapping-localization",
      "/software-engineer-new-grads",
      "/software-engineer-intern",
      "/senior-IT-engineer-manager",
      "/system-engineer",
    ];

    return (
      <ul className="jobs-list">
        {jobNames.map((name, i) => {
          return (
            <Job key={i} name={name} url={jobUrls[i]}/>
          );
        })}
      </ul>
    );
  }
}

export default class Career extends React.Component {

  render() {
    const isCN = getLocale() === 'cn';
    const jobs = isCN ? (
        <center>
            <a
                className="job-btn"
                href='https://app.mokahr.com/apply/jingchi'
                target='_blank'
            >
              查看职位
            </a>
        </center>
      ) : (
        <center>
            <a
                className='job-btn'
                href='/jobs'
            >
                View Jobs
            </a>
        </center>

    );
    return (
      <Box className="section-area" pad="medium">
        <SectionTitle id='career' caption={getMessage('Careers')} />
        <Paragraph className="spanning-paragraph"
                   size="medium" margin="none" align='center'>
            {getMessage('CareerDesc')}
         {/* <a href="engineer@jingchi.ai">engineer@jingchi.ai</a>. */}
        </Paragraph>
        {jobs}
      </Box>
    );
  }
}
