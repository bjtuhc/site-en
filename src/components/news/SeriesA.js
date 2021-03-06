import React from "react";
import { Section, Headline, Box, Markdown } from "grommet";
import contentTemplate from "assets/news/series-a.md";
import contentTemplateCN from "assets/news/series-a-cn.md";
import seriesANewsCarImage from "assets/news/series-a-news-car.jpg";
import { getMessage, getLocale } from "../../utils";

export default class NewsSeriesA extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const isCN = getLocale() === 'cn';
    let content = isCN ? contentTemplateCN : contentTemplate;
    if (isCN) {
      content = content.replace('series-a-news-car-image',
        seriesANewsCarImage);
    }
    const seriesAHeadLine = getMessage('NewsTitles')[6];

    return (
      <section>
        <div className="news-series-a">
          <Headline className="news-headline"
                    strong={true} size="medium" align="center">
            {seriesAHeadLine}
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
