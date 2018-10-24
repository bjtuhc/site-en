import React from "react";
import { Box, Paragraph, Button } from "grommet";
import { getMessage } from '../../utils';
import { Next } from 'grommet-icons';

import SectionTitle from "components/HomePage/SectionTitle";

export default class Intro extends React.Component {
  render() {
    return (
      <Box className="section-area"
           pad="medium">
        <SectionTitle id='about' caption={getMessage('Intro')} />
        <Paragraph
            className="spanning-paragraph"
            size="medium"
        >
            { getMessage('IntroContent') }
        </Paragraph>
        <Button
        //   icon={<Next />}
          href='/about'
          className='paragraph-button'
          label={getMessage('MoreInfo')}
          primary={true}
        />
      </Box>
    );
  }
}
