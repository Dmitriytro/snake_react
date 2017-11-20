import React from 'react';
import Scores from './scores';
import BestScores from './bestScores';
import Sound from './sound';
import Restart from './restart';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="header">
                <Scores/>
                <BestScores/>
                <Restart/>
                <Sound/>
            </div>
        );
    }
}