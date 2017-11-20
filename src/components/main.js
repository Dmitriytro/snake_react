import React from 'react';
import Field from './field.js';

export default class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { cells } = this.props;
        return (
            <div className="main">
                <Field  cells={cells}/>
            </div>
        );
    }
}