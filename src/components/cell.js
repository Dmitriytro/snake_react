import React from 'react';
export default class Cell extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { index } = this.props;
        return (
            <div className={'cell '+ (index%2 ? 'cell_odd' : 'cell_even') }/>
        );
    }
}