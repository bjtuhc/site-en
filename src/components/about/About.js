import React from "react";
import Cover from "components/HomePage/Cover";
import Team from "components/about/Team";
import History from "components/about/History";
import SectionTitle from "components/HomePage/SectionTitle";

import about from "assets/About.jpg";
import aboutSm from "assets/About-sm.jpg";

import { Box, Paragraph } from "grommet";
import { getMessage } from '../../utils';

export default class About extends React.Component {
  componentWillMount() {
    this.props.setAnchor();
  }
  render() {
    return (
        <div>
            <Cover src={document.documentElement.clientWidth < 1024
              ? aboutSm : about} />
            <div className='about-container'>
              <Box className="section-area-sm"
                   pad="medium">
                <SectionTitle caption={getMessage('Intro')} />
                <Paragraph
                    className="spanning-paragraph"
                    size="medium"
                >
                  { getMessage('IntroContent') }
                </Paragraph>
              </Box>
              <Box className="section-area-sm"
                   pad="medium">
                <SectionTitle caption={getMessage('Concept')} />
                <Paragraph
                    className="spanning-paragraph"
                    size="medium"
                >
                  { getMessage('ConceptContent') }
                </Paragraph>
              </Box>
            </div>
            <Team />
            <History />
        </div>
    );
  }
}
