import React from 'react';

export default class BestScores extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { score } = this.props;
        return (
            <div className="count">{score}</div>
        );
    }
}