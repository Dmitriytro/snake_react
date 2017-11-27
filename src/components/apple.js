import React from 'react';

export default class Apple extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div><img className="apple" src="img/apple.png" alt="icon-apple"/></div>
        );
    }
}