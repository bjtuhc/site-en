import React from "react";
import { Section, Headline, Box, Markdown } from "grommet";
import contentTemplate from "assets/news/series-a-update.md";
import contentTemplateCN from "assets/news/series-a-update-cn.md";
import seriesAUpdateCarImage from "assets/news/series-a-update-news-car.jpg";
import { getMessage, getLocale } from "../../utils";

// Series A update news on 1/4/2019, by SenseTime and ABC Internaltional.
export default class NewsSeriesAUpdate extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const isCN = getLocale() === 'cn';
    let content = isCN ? contentTemplateCN : contentTemplate;
    content = content.replace('series-a-update-news-car-image',
      seriesAUpdateCarImage);
    // HeadLine is placed inside markdown.
    // const seriesAHeadLine = getMessage('NewsTitles')[0];

    return (
      <section>
        <div className="news-series-a">
          {/* <Headline className="news-headline"
                    strong={true} size="medium" align="center">
            {seriesAHeadLine}
          </Headline> */}

          <Markdown content={content} />
        </div>
      </section>
    );
  }
}
