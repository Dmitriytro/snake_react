import React from 'react';

export default class Restart extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="restart">
                <img src="/img/restart.png" alt="" className="icon-small"/>
            </div>
        );
    }
}