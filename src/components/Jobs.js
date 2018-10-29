import React from 'react';

import Script from "react-load-script";

export default class extends React.Component {
    render() {
        const url =
            'https://boards.greenhouse.io/embed/job_board/js?for=weridecorp';
        return (
            <div className='greenhouse-job'>
                <div id="grnhse_app"></div>
                <Script url={url}
                    onError={() => {}}
                    onLoad={() => {}} />
            </div>
        );
    }
}
