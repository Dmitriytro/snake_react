import React from 'react';
import Count from './count';

export default class BestScores extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="bestScores">
                <img src="/img/cup.png" alt="" className="icon"/>
                <Count/>
            </div>
        );
    }
}