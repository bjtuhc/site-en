import React from "react";
import { Section, Headline, Box, Markdown } from "grommet";
import contentTemplate from "assets/news/series-a.md";

export default class NewsSeriesA extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const content = contentTemplate;

    return (
      <section>
        <div className="news-series-a">
          <Headline className="news-headline"
                    strong={true} size="medium" align="center">
ALLIANCE VENTURES LEADS STRATEGIC INVESTMENT IN WERIDE.AI
          </Headline>

          <Markdown content={content} />
          {/*
          <p className="news-footer">For additional information</p>
          <p className="news-footer">
            <i className="fa fa-envelope" />
            <a href="mailto:PR@jingchi.ai">PR@weride.ai</a>
          </p>
          <p className="news-footer">
            <i className="fa fa-phone-square" />
            408-645-7118
          </p>
          */}
        </div>
      </section>
    );
  }
}
