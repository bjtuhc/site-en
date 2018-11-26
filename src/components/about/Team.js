import React from 'react';

import { getMessage } from '../../utils';

import TeamMember from 'components/about/TeamMember';
import CEO from 'components/about/CEO';
import SectionTitle from 'components/HomePage/SectionTitle';
import huaPortrait from 'assets/team/team-hua.jpg';
import yanPortrait from 'assets/team/team-yan.png';
import qingPortrait from 'assets/team/team-qing.png';
import liPortrait from 'assets/team/team-li.png';
import kaifuPortrait from 'assets/team/team-kaifu.png';
import dianPortrait from 'assets/team/team-dian.png';
import takeoPortrait from 'assets/team/team-takeo.png';

export default class Team extends React.Component {
  render() {
    const memberNames = [
        getMessage('QingLu'),
        getMessage('YanLi'),
        getMessage('HuaZhong'),
        getMessage('LiZhang')
    ];
    const consultantNames = [
      getMessage("KaifuLi"),
      getMessage("DianKang"),
      getMessage("Takeo"),
    ];
    const memberTitles = getMessage("executiveTitles");
    const consultantTitles = [
      getMessage("BusinessAdvisorTitle"),
      getMessage("BusinessAdvisorTitle"),
      getMessage("TechnicalAdvisorTitle"),
    ];
    const memberPortraits = [
      qingPortrait,
      yanPortrait,
      huaPortrait,
      liPortrait,
    ];
    const consultantPortraits = [
      kaifuPortrait,
      dianPortrait,
      takeoPortrait,
    ];
    const memberBioContents = [
        getMessage('QingLuBio'),
        getMessage('YanLiBio'),
        getMessage('HuaZhongBio'),
        getMessage('LiZhangBio'),
    ];
    const consultantBioContents = [
        getMessage('KaifuLiBio'),
        getMessage("DianKangBio"),
        getMessage("TakeoBio"),
    ];

    return (
      <div className='team-container'>
        <SectionTitle caption={getMessage('Team')} />
        <div className='team'>
          <CEO />
          {memberNames.map((name, i) => {
            return (
              <TeamMember
                type='member'
                key={i}
                portrait={memberPortraits[i]}
                name={name}
                title={memberTitles[i]}
                bioContent={memberBioContents[i]}
              />
            );
          })}
          <SectionTitle marginTop={60} caption={getMessage('Consultant')} />
          {consultantNames.map((name, i) => {
            return (
              <TeamMember
                type='consultant'
                key={i}
                portrait={consultantPortraits[i]}
                name={name}
                title={consultantTitles[i]}
                bioContent={consultantBioContents[i]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
