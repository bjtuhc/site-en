import React from "react";
import { Headline, Markdown } from "grommet";
import contentTemplate from "assets/news/gtc.md";
import contentTemplateCN from "assets/news/gtc-cn.md";
import GTCImage from "assets/news/GTC.jpg";
import { getMessage, getLocale } from "../../utils";

export default class BeyondLimit extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const isCN = getLocale() === 'cn';
    let content = isCN ? contentTemplateCN : contentTemplate;
    content = content.replace('gtc-image',
      GTCImage);
    const beyondHeadLine = getMessage('NewsTitles')[2];

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
