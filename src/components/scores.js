import React from 'react';
import Count from './count';

export default class Scores extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="scores">
                <img src="/img/apple.png" alt="" className="icon"/>
                <Count/>
            </div>
        );
    }
}