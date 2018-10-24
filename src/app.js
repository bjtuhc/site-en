import 'font-awesome-webpack';
import 'grommet/scss/hpinc/index';
import 'roboto-npm-webfont';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import { toEN, toCN } from './utils';
import { App, Article, Footer } from 'grommet';
import AppHeader from 'components/appHeader/AppHeader';
import HomePage from 'components/HomePage';
import About from 'components/about/About';
import Media from 'components/media/Media';
import Technology from 'components/HomePage/Technology';
import Contact from "components/HomePage/Contact";
import {ControlSystemEngineer, MotionPlanningEngineer, PerceptionEngineer,
        FrontendEngineer, MappingLocalizationEngineer,
        SoftwareEngineerNewGrads, SoftwareEngineerIntern,
        SeniorITEngineerManager, SystemEngineer}
  from 'components/positions/Position';

import Jobs from 'components/Jobs';

import USCampusRecruit from 'components/USCampusRecruit';
import ChinaCampusRecruit from 'components/ChinaCampusRecruit';
import ChinaCampusRecruitPos from 'components/ChinaCampusRecruitPos';
import USCampusRecruitPos from 'components/USCampusRecruitPos';

import 'styles/main.scss';
import STORE from 'store';

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnchor: 'Careers',
      currentLanguage: 'en',
    };
  }
  onAnchorChange(value) {
    this.state.currentAnchor !== value && this.setState({
      currentAnchor: value,
    });
  }
  onLanguageChange(value) {
    value === 'cn' ? toCN() : toEN();
    this.setState({
      currentLanguage: value,
    });
  }
  render() {
    return (
      <Provider store={STORE}>
        <BrowserRouter>
          <App centered={false}>
            <Article>
              <AppHeader
                currentAnchor={this.state.currentAnchor}
                currentLanguage={this.state.currentLanguage}
                onLanguageChange={(value) => this.onLanguageChange(value)}
              />
                  <Route exact path='/' render={() =>
                    <HomePage
                      setAnchor={() => this.onAnchorChange('Home')}
                    />
                  }/>
                  <Route exact path='/about' render={() =>
                    <About
                      setAnchor={() => this.onAnchorChange('About')}
                    />
                  }/>
                  <Route exact path='/tech' render={() =>
                    <Technology
                      setAnchor={() => this.onAnchorChange('Technology')}
                    />
                  }/>
                  <Route exact path='/media' render={() =>
                    <Media
                      setAnchor={() => this.onAnchorChange('Media')}
                    />
                  }/>
                  <Route exact path='/jobs' component={Jobs}/>

                  <Route exact path='/control-system-engineer'
                    component={ControlSystemEngineer}
                  />
                  <Route exact path='/motion-planning-engineer'
                    component={MotionPlanningEngineer}
                  />
                  <Route exact path='/perception-engineer'
                    component={PerceptionEngineer}
                  />
                  <Route exact path='/software-engineer-front-end'
                    component={FrontendEngineer}
                  />
                  <Route exact path='/software-engineer-mapping-localization'
                    component={MappingLocalizationEngineer}
                  />
                  <Route exact path='/software-engineer-new-grads'
                    component={SoftwareEngineerNewGrads}
                  />
                  <Route exact path='/software-engineer-intern'
                    component={SoftwareEngineerIntern}
                  />
                  <Route exact path='/senior-IT-engineer-manager'
                    component={SeniorITEngineerManager}
                  />
                  <Route exact path='/system-engineer'
                    component={SystemEngineer}
                  />
                  <Route exact path='/us-campus-recruiting'
                    component={USCampusRecruit}
                  />
                  <Route exact path='/us-campus-recruiting-positions'
                    component={USCampusRecruitPos}
                  />
                  <Route exact path='/china-campus-recruiting'
                    component={ChinaCampusRecruit}
                  />
                  <Route exact path='/china-campus-recruiting-positions'
                    compurlonent={ChinaCampusRecruitPos}
                  />
              <Contact />
              <Footer justify='center'>
                <div id='footer'>
                  Copyright © 2018 JingChi.ai
                </div>
              </Footer>
            </Article>
          </App>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <AppRoot />,
  document.getElementById('root')
);
