import React from 'react';
import Snake from './snake.js'
import Apple from './apple.js'

export default class Cell extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { cell } = this.props;
        let snake = (!cell.empty && cell.length > 1) ? <Snake cell={cell} modal={this.props.modal}/> : '';
        let apple = (!cell.empty && cell.length == 1) ? <Apple cell={cell}/> : '';
        return (
            <div className={'cell '+ (cell.index%2 ? 'cell_odd' : 'cell_even') }>{snake}{apple}</div>
        );
    }
}