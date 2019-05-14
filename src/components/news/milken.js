import React from "react";
import { Section, Headline, Box, Markdown } from "grommet";
import contentTemplate from "assets/news/milken.md";
import contentTemplateCN from "assets/news/milken-cn.md";
import seriesANewsCarImage from "assets/news/milken.jpg";
import { getMessage, getLocale } from "../../utils";

export default class Milken extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const isCN = getLocale() === 'cn';
    const content = isCN ? contentTemplateCN : contentTemplate;
    const MilkenHeadLine = getMessage('NewsTitles')[0];

    return (
      <section>
        <div className="news-series-a">
          <Headline className="news-headline"
                    strong={true} size="medium" align="center">
            {MilkenHeadLine}
          </Headline>

          <Markdown content={content} />
        </div>
      </section>
    );
  }
}
