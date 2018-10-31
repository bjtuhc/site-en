import React from "react";
import { Section, Headline, Box, Markdown } from "grommet";
import contentTemplate from "assets/news/hq-en.md";
import fleetImage from "assets/news/car-fleet.jpg";
import contractImage from "assets/news/sign-contract.jpg";
import sirSpeechImage from "assets/news/sir-speech.jpg";
import jingSpeechImage from "assets/news/jing-speech.jpg";
import carInRainImage from "assets/news/car-in-rain.jpg";

export default class NewsHQ_EN extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const content = contentTemplate
    .replace("hq-news-fleet-image", fleetImage)
    .replace("hq-news-contract-image", contractImage)
    .replace("hq-news-sir-image", sirSpeechImage)
    .replace("hq-news-jing-image", jingSpeechImage)
    .replace("hq-news-car-in-rain-image", carInRainImage);

    return (
      <section>
        <div className="news-pre-a">
          <Headline className="news-headline"
                    strong={true} size="medium" align="center">
JingChi Global Headquarters Settled in Guangzhou Huangpu Development District
          </Headline>

          <Markdown content={content} />
          <p className="news-footer">For additional information</p>
          <p className="news-footer">
            <i className="fa fa-envelope" />
            <a href="mailto:PR@jingchi.ai">PR@jingchi.ai</a>
          </p>
          <p className="news-footer">
            <i className="fa fa-phone-square" />
            408-645-7118
          </p>
        </div>
      </section>
    );
  }
}
