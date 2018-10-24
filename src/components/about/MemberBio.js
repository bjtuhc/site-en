import React from "react";

export default class MemberBio extends React.Component {
  render() {
    return (
      <ul className='team-member-bio'>
        {this.props.bio.map &&
          this.props.bio.map((content, i) => {
            return (
              <li key={i}><span>{content}</span></li>
            );
          }
        )}
      </ul>
    );
  }
}
