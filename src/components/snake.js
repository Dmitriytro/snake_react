import React from 'react';

export default class Snake extends React.Component {
    constructor() {
        super();
    }

    renderHead(){
        return <div className="faceWrapper">
                    <div className="eye eye-left"><div className="eye-white"><div className="eye-retina"/></div></div>
                    <div className="eye eye-right"><div className="eye-white"><div className="eye-retina"/></div></div>
                    <div className="nose nose-left"/>
                    <div className="nose nose-right"/>
                </div>
    }
    snakeClasses(cell){
        let classes = '';
        switch(cell.direction) {
            case "left": {
                classes += ' snake-left';
                break;
            }
            case "up": {
                classes += ' snake-up';
                break;
            }
            case "down": {
                classes += ' snake-down';
                break;
            }
            case "right": {
                break;
            }
        }
        if(cell.length == cell.lengthLeft) classes += ' snake-head';
        if(cell.lengthLeft == 1) classes += ' snake-tail';
        return classes
    }
    render() {
        const { cell } = this.props;
        const { timer } = this.props;

        let classes = this.snakeClasses(cell);
        let head = (cell.length == cell.lengthLeft) ? this.renderHead() : '';
        return (
            <div className={'snake '+classes}>
                {head}
            </div>
        );
    }
}