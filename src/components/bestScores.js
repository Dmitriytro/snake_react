import React from 'react';
import Count from './count';

export default class BestScores extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { bestScore } = this.props;
        return (
            <div className="bestScores">
                <img src="/img/cup.png" alt="" className="icon"/>
                <Count score={bestScore}/>
            </div>
        );
    }
}