import React from "react";
import { Section, Headline, Box, Markdown } from "grommet";
import contentTemplate from "assets/news/gtc-update.md";
import contentTemplateCN from "assets/news/gtc-update-cn.md";
import GTCUpdateImageCN from "assets/news/gtc-update-cn.jpg";
import { getMessage, getLocale } from "../../utils";

export default class GTCUpdate extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const isCN = getLocale() === 'cn';
    let content = isCN ? contentTemplateCN : contentTemplate;
    if (isCN) {
      content = content.replace('gtc-update',
        GTCUpdateImageCN);
    }
    const HeadLine = getMessage('NewsTitles')[0];

    return (
      <section>
        <div className="news-series-a">
          <Headline className="news-headline"
                    strong={true} size="medium" align="center">
            {HeadLine}
          </Headline>

          <Markdown content={content} />
        </div>
      </section>
    );
  }
}
