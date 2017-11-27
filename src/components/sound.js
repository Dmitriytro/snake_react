import React from 'react';

export default class Sound extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="sound" style={{display:'none'}}>
                <img src="/img/speaker.png" alt="" className="icon-small"/>
                <div className="speaker"/>
            </div>
        );
    }
}