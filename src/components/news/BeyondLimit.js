import React from "react";
import { Section, Headline, Box, Markdown } from "grommet";
import contentTemplate from "assets/news/beyond-limit.md";
import contentTemplateCN from "assets/news/beyond-limit-cn.md";
import { getMessage, getLocale } from "../../utils";

export default class BeyondLimit extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const isCN = getLocale() === 'cn';
    const content = isCN ? contentTemplateCN : contentTemplate;
    const beyondHeadLine = getMessage('NewsTitles')[0];

    return (
      <section>
        <div className="news-series-a">
          <Headline className="news-headline"
                    strong={true} size="medium" align="center">
            {beyondHeadLine}
          </Headline>

          <Markdown content={content} />
        </div>
      </section>
    );
  }
}
