import React from "react";
import { Box } from "grommet";
import { Next } from 'grommet-icons';
import {Link} from "react-router-dom";

import SectionTitle from "components/HomePage/SectionTitle";

import { getMessage } from '../../utils';
import news180425 from "assets/news/180425.jpg";
import news180510 from "assets/news/180510.jpg";
import news180608 from "assets/news/180608.jpg";
import news180614 from "assets/news/180614.jpg";
import news180626 from "assets/news/180626.jpg";
import news180706 from "assets/news/180706.jpg";
import news180709 from "assets/news/180709.jpg";
import news180711 from "assets/news/180711.jpg";
import news180712 from "assets/news/180712.jpg";

class NewsItem extends React.Component {
  render() {
    const { thumbnail, title, url, date, content } = this.props;
    const readMore = getMessage('readMore');
    console.log(url);
    console.log(url.startsWith('http'));
    return (
      <div className='news-item'>
        {/*
        <a href={url} target='_blank'>
          <img className='news-thumbnail' src={thumbnail} />
        </a>
        */}
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
    //const titles = getMessage('NewsTitles');
    //const dates = getMessage('NewsDates');
    const contents = getMessage('NewsContents');
    //const urls = getMessage('NewsUrls');
    //const thumbnails = [
    //  news180712,
    //  news180711,
    //  news180709,
    //  news180706,
    //  news180626,
    //  news180614,
    //  news180608,
    //  news180510,
    //  news180425,
    //];
    const titles = [
      "ALLIANCE VENTURES LEADS STRATEGIC INVESTMENT IN WERIDE.AI"];
    const dates = ["10/31/2018"];
    const urls = ["/series-a"];

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
              />);
            })}
          </div>
        </Box>
      </div>
    );
  }
}
