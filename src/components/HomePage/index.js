import React from "react";
import Cover from "components/HomePage/Cover";
import Intro from "components/HomePage/Intro";
import Culture from "components/HomePage/Culture";
import Reservation from "components/HomePage/Reservation";
import { getLocale } from '../../utils';
import homePage from "assets/Homepage.jpg";
import cnHomePage from "assets/Homepage-cn.jpg";
import homePageSm from "assets/Homepage-sm.jpg";

export default class HomePage extends React.Component {
  componentWillMount() {
    this.props.setAnchor();
  }
  render() {
    return (
        <div>
          <Cover src={
            getLocale() === 'cn' ? 
            //document.documentElement.clientWidth < 1024
            cnHomePage : homePage} />
            <div className='container'>
                <Intro />
                <Culture />
            </div>
            {/*
            {getLocale() === 'cn' && <Reservation />}
            */}
        </div>
    );
  }
}
