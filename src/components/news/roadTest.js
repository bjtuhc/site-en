import React from "react";
import { Section, Headline, Box, Markdown } from "grommet";
import contentTemplate from "assets/news/roadTest.md";
import contentTemplateCN from "assets/news/roadTest-cn.md";
import { getMessage, getLocale } from "../../utils";

export default class RoadTest extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const isCN = getLocale() === 'cn';
    const content = isCN ? contentTemplateCN : contentTemplate;
    const roadTestHeadLine = getMessage('NewsTitles')[0];

    return (
      <section>
        <div className="news-series-a">
          <Headline className="news-headline"
                    strong={true} size="medium" align="center">
            {roadTestHeadLine}
          </Headline>

          <Markdown content={content} />
        </div>
      </section>
    );
  }
}
