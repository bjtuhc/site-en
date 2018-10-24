import React from 'react';
import SectionTitle from 'components/HomePage/SectionTitle';
import { Markdown } from "grommet";

import softwareEngineer from
    "assets/positions-en-campus/software-engineer.md";
import perceptionEngineer from
    "assets/positions-en-campus/perception-engineer.md";
import frontendEngineer from
    "assets/positions-en-campus/frontend-engineer.md";
import motionPlanning from
    "assets/positions-en-campus/motion-planning-engineer.md";
import mappingLocal from
    "assets/positions-en-campus/mapping-localization-engineer.md";
import controlSystem from
    "assets/positions-en-campus/control-system-engineer.md";

export default class  extends React.Component {
    constructor(props) {
        super(props);
        const allPositions = {
            'software-engineer': {
                name: 'General Software Engineer/Intern',
                desc: softwareEngineer
            },
            'perception-engineer': {
                name: 'Perception Engineer',
                desc: perceptionEngineer
            },
            'frontend-engineer': {
                name: 'Front End Engineer',
                desc: frontendEngineer
            },
            'motion-planning-engineer': {
                name: 'Motion Planning Engineer',
                desc: motionPlanning
            },
            'mapping-localization-engineer': {
                name: 'Mapping & Localization Engineer',
                desc: mappingLocal
            },
            'control-system-engineer': {
                name: 'Control System Engineer',
                desc: controlSystem
            }
        };
        this.positions = allPositions;
    }

    render() {
        const content = [];
        const title = [];
        // generate URLs for 6 US campus recruiting jobs
        const jobIds = ['711624', '755524', '856610', '708191',
        '755416', '708189'];
        const baseURL = '/jobs?gh_jid=';
        Object.keys(this.positions).forEach((position, index) => {
            window.test = softwareEngineer;
            const v = this.positions[position];
            title.push(
                // <li key={k}><a href={'#' + k}>{v.name}</a></li>
                <li className='position-li-us'
                    key={position}><a href={baseURL + jobIds[index]}>
                    {v.name}</a>
                </li>
            );
            // content.push(
            //     <div key={k} className='campus-job'>
            //         <div id={k} className='campus-job-anchor'></div>
            //         {/* <Markdown content={v.desc} /> */}
            //     </div>
            // );
        });
        return (
            <div className='campus-container-us'>
                <ul className='title-list-us'>
                    {title}
                </ul>
                {/* <div className='job-list-us'>
                    {content}
                </div> */}
            </div>
        );
    }
}
