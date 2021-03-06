import React from 'react';
import Scores from './scores';
import BestScores from './bestScores';
import Sound from './sound';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { score } = this.props;
        const { bestScore } = this.props;
        return (
            <div className="header">
                <Scores score={score}/>
                <BestScores bestScore={bestScore}/>
                <Sound/>
            </div>
        );
    }
}