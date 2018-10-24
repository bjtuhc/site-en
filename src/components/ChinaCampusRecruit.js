import React from 'react';
import SectionTitle from 'components/HomePage/SectionTitle';
import { Paragraph } from 'grommet';

import cover from 'assets/recruit/recruit-cn.jpg';

export default class  extends React.Component {

  render() {
    return (
        <div className='container'>
            <div className='cover-container'>
                <div className='cover cover-non-fix'
                    style={{'backgroundImage': `url(${cover})`}}
                >
                </div>
            </div>
            <div className='campus-content-container'>
                <center className='job-btn-container'>
                    <a
                        className='job-btn'
                        href='/china-campus-recruiting-positions'
                    >
                        查看职位
                    </a>
                </center>
                <SectionTitle caption='行程' marginTop={60} />
                <ul className='recruit-schedule'>
                    <li className='schedule-li'>
                        <div className='conf-location'>
                            10/23, 中国科技大学, 西区科技实验室二楼报告厅, 19:00 - 21:00</div>
                    </li>
                    <li className='schedule-li'>
                        <div className='conf-location'>
                            10/27, 浙江大学, 计算机系曹光彪东楼502会议室, 19:00 - 21:00</div>
                    </li>
                    <li className='schedule-li'>
                        <div className='conf-location'>
                            10/30, 上海交通大学, 电信群楼3-200, 19:00 - 21:00</div>
                    </li>
                    <li className='schedule-li'>
                        <div className='conf-location'>
                            11/03, 西安交通大学, 文治学院报告厅, 15:00 - 17:00</div>
                    </li>
                    <li className='schedule-li'>
                        <div className='conf-location'>
                            11/06, 北京航空航天大学, 公共教学楼3号楼215教室, 19:00 - 21:00</div>
                    </li>
                    <li className='schedule-li'>
                        <div className='conf-location'>
                            11/07, 中国科学院大学, 中关村教学楼S104, 19:00 - 21:00</div>
                    </li>
                    <li className='schedule-li'>
                        <div className='conf-location'>
                            11/10, 清华大学, 学生职业发展指导中心天一厅, 14:00 - 16:00</div>
                    </li>
                </ul>
                <Paragraph
                    className='spanning-paragraph'
                    size='medium'
                    margin='none'
                    align='center'
                >
                如果希望提前进入面试环节，欢迎尽早提交简历至
                <a href='mailto:campus@jingchi.ai'>campus@jingchi.ai</a>。
                也可在宣讲会现场递交简历，与景驰的工程师团队深入交流！
                </Paragraph>
                <SectionTitle caption='面试流程' marginTop={60} />
                <ul className='process-ul'>
                    <li>提交简历至campus@jingchi.ai或直接带至宣讲会现场</li>
                    <li>参加在线笔试</li>
                    <li>参加1-2轮电话技术面试</li>
                    <li>参加onsite 技术面试</li>
                </ul>
                <SectionTitle caption='截止日期' marginTop={60} />
                <Paragraph
                    className='spanning-paragraph'
                    size='medium'
                    margin='none'
                    align='center'
                >我们不设招聘上限，全年都有职位开放，欢迎有工程背景的同学随时加入景驰团队！
                </Paragraph>
            </div>
        </div>
    );
  }
}
