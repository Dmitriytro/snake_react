import React from 'react';
import Count from './count';

export default class Scores extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { score } = this.props;
        return (
            <div className="scores">
                <img src="/img/apple.png" alt="" className="icon"/>
                <Count score={score}/>
            </div>
        );
    }
}