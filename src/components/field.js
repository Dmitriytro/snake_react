import React from 'react';
import Cell from './cell.js';
export default class Field extends React.Component {
    constructor() {
        super();
    }

    render() {
        const CellsComponents = this.props.cells.map((cell) => {
            return <Cell key={cell.id} cell={cell}/>;
        });
        return (
            <div className="field" >{CellsComponents}</div>
        );
    }
}