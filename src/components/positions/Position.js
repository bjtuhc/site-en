import React from "react";
import { Headline, Markdown } from "grommet";
import controlSystem from "assets/positions/control-system-engineer.md";
import motionPlanning from "assets/positions/motion-planning.md";
import perception from "assets/positions/perception.md";
import frontend from "assets/positions/frontend.md";
import mappingLocalization from "assets/positions/mapping-localization.md";
import newGrads from "assets/positions/new-grad.md";
import intern from "assets/positions/intern.md";
import srITEngineer from "assets/positions/sr-IT-engineer.md";
import systemEngineer from "assets/positions/system-engineer.md";

export class ControlSystemEngineer extends React.Component {
  render() {
    return (
      <Position content={controlSystem}/>
    );
  }
}

export class MotionPlanningEngineer extends React.Component {
  render() {
    return (
      <Position content={motionPlanning}/>
    );
  }
}

export class PerceptionEngineer extends React.Component {
  render() {
    return (
      <Position content={perception}/>
    );
  }
}

export class FrontendEngineer extends React.Component {
  render() {
    return (
      <Position content={frontend}/>
    );
  }
}
export class MappingLocalizationEngineer extends React.Component {
  render() {
    return (
      <Position content={mappingLocalization}/>
    );
  }
}
export class SoftwareEngineerNewGrads extends React.Component {
  render() {
    return (
      <Position content={newGrads}/>
    );
  }
}
export class SoftwareEngineerIntern extends React.Component {
  render() {
    return (
      <Position content={intern}/>
    );
  }
}
export class SeniorITEngineerManager extends React.Component {
  render() {
    return (
      <Position content={srITEngineer}/>
    );
  }
}
export class SystemEngineer extends React.Component {
  render() {
    return (
      <Position content={systemEngineer}/>
    );
  }
}
export default class Position extends React.Component {
  render() {
    const { content } = this.props;

    return (
      <section>
        <div className="job-position">
          <Headline className="news-headline"
                    strong={true} size="medium" align="center">
          </Headline>
          <Markdown content={content} />
          <p className="jobs-footer">
            Apply jobs at <a href="engineer@weride.ai">
            engineer@weride.ai</a></p>
        </div>
      </section>
    );
  }
}
