import React from "react";

export default class Cover extends React.Component {
    render() {
        const { src } = this.props;
        return (
          <div className='cover-container'>
            <img className='cover' src={src} />
          </div>
        );
    }
}
