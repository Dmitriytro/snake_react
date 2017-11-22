import React from 'react';
import Snake from './snake.js'
export default class Cell extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { cell } = this.props;
        let snake = (!cell.empty) ? <Snake cell={cell}/> : '';
        return (
            <div className={'cell '+ (cell.index%2 ? 'cell_odd' : 'cell_even') }>{snake}</div>
        );
    }
}