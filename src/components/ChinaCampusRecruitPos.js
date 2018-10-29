import React from 'react';
import SectionTitle from 'components/HomePage/SectionTitle';
import { Markdown } from "grommet";

import softwareEngineer from
    "assets/positions-cn-campus/software-engineer.md";
import perceptionEngineer from
    "assets/positions-cn-campus/perception-engineer.md";
import frontendEngineer from
    "assets/positions-cn-campus/frontend-engineer.md";
import motionPlanning from
    "assets/positions-cn-campus/motion-planning-engineer.md";
import mappingLocal from
    "assets/positions-cn-campus/mapping-localization-engineer.md";
import controlSystem from
    "assets/positions-cn-campus/control-system-engineer.md";

export default class extends React.Component {
    constructor(props) {
        super(props);
        const positions = new Map();
        positions.set(
            'software-engineer', {
                name: '软件工程师',
                desc: softwareEngineer
            }
        );
        positions.set(
            'perception-engineer', {
                name: '计算机视觉工程师',
                desc: perceptionEngineer
            }
        );
        positions.set(
            'frontend-engineer', {
                name: '前端软件工程师',
                desc: frontendEngineer
            }
        );
        positions.set(
            'motion-planning-engineer', {
                name: '运动规划工程师',
                desc: motionPlanning
            }
        );
        positions.set(
            'mapping-localization-engineer', {
                name: '地图与定位工程师',
                desc: mappingLocal
            }
        );
        positions.set(
            'control-system-engineer', {
                name: '控制系统工程师',
                desc: controlSystem
            }
        );
        this.positions = positions;
    }

    render() {
        const content = [];
        const title = [];
        this.positions.forEach((v, k) => {
            window.test = softwareEngineer;
            title.push(
                <li key={k}><a href={'#' + k}>{v.name}</a></li>
            );
            content.push(
                <div key={k} className='campus-job'>
                    <div id={k} className='campus-job-anchor'></div>
                    <Markdown content={v.desc} />
                </div>
            );
        });
        return (
            <div className='campus-container'>
                <div className='submit-resume-cn'>
                    请投递简历至 <a href="mailto:campus@weride.ai">campus@weride.ai
                        </a></div>
                <ul className='title-list'>
                    {title}
                </ul>
                <div className='job-list'>
                    {content}
                </div>
            </div>
        );
    }
}
