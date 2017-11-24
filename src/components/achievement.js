import React from 'react';
import Scores from './scores';
import BestScores from './bestScores';

export default class Achievement extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { score } = this.props;
        const { bestScore } = this.props;
        return (
            <div className="achievement">
                <Scores score={score}/>
                <BestScores bestScore={bestScore}/>
            </div>
        );
    }
}