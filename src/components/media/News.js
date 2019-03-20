import React from "react";
import { Box } from "grommet";
import { Next } from 'grommet-icons';
import {Link} from "react-router-dom";

import SectionTitle from "components/HomePage/SectionTitle";

import { getMessage } from '../../utils';
import seriesAImg from "assets/news/series-a-news-car.jpg";
import seriesAUpdateImg from "assets/news/series-a-update-news-car.jpg";
import beyondLimit from "assets/news/beyond-limit.jpg";
import GTCImg from "assets/news/GTC.jpg";
import GTCUpdateImg from "assets/news/gtc-update.jpg";


class NewsItem extends React.Component {
  render() {
    const { thumbnail, title, url, date, content } = this.props;
    const readMore = getMessage('readMore');
    return (
      <div className='news-item'>
        <div>
          <img className='news-thumbnail'src={thumbnail} />
        </div>
        <div className='news-content'>
          <div className='news-title'>{title}</div>
          <div className='news-date'>{date}</div>
          <div className='news-text'>{content}</div>
          {url.startsWith('http') ?
          <a className='news-read-more' href={url} target='_blank'>
            {readMore}
            <Next className='news-read-more-icon'/>
          </a> :
          <Link to={url}
                style={{'color': '#2883d7'}}>
                {readMore}
          </Link>
          }
        </div>
      </div>
    );
  }
}

export default class News extends React.Component {
  render() {
    const titles = getMessage('NewsTitles');
    //const dates = getMessage('NewsDates');
    const contents = getMessage('NewsContents');
    const thumbnails = [
      GTCUpdateImg,
      GTCImg,
      beyondLimit,
      seriesAUpdateImg,
      seriesAImg,
    //  news180709,
    //  news180706,
    //  news180626,
    //  news180614,
    //  news180608,
    //  news180510,
    //  news180425,
    ];

    // Place the dates in descending order.
    const dates = [
      "3/18/2019",
      "3/8/2019",
      "2/19/2019",
      "1/4/2019",
      "10/31/2018"];
    const urls = [
      "/GTC-update",
      "/GTC",
      "/beyond-limit",
      "/series-a-update",
      "/series-a"];

    return (
      <div className='news-container'>
        <Box className="section-area">
          <div>
            {titles.map((title, index) => {
              return (
                <NewsItem
                  key={index}
                  title={title}
                  url={urls[index]}
                  date={dates[index]}
                  content={contents[index]}
                  thumbnail={thumbnails[index]}
              />);
            })}
          </div>
        </Box>
      </div>
    );
  }
}
