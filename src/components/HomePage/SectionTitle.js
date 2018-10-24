import React from 'react';

const SectionTitle = (props) => {
    const {id, caption = '', marginTop = 0} = props;
    return (
    <div style={{position: 'relative', marginTop: marginTop}}>
        <div id={id} className='section-anchor'></div>
        <div className='section-title'>{caption}</div>
    </div>
    );
};

export default SectionTitle;
