import React from 'react';

export default class Snake extends React.Component {
    constructor() {
        super();
        this.changeDirection = this.changeDirection.bind(this)
    }
    componentWillMount(){
        if(this.props.cell.length == this.props.cell.lengthLeft){
            document.addEventListener("keydown", this.changeDirection, false);
        }
    }

    componentWillUnmount() {
        if(this.props.cell.length == this.props.cell.lengthLeft) {
            document.removeEventListener("keydown", this.changeDirection, false);
        }
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
                classes += ' snake-right';
                break;
            }
        }
        if(cell.length == cell.lengthLeft) classes += ' snake-head';
        if(cell.lengthLeft == 1) classes += ' snake-tail';
        return classes
    }
    changeDirection(event){
        event.preventDefault();
        if(this.cell.length == this.cell.lengthLeft && !this.cell.directionSelected){
            if(event.keyCode == 37 && this.cell.direction !== 'left' && this.cell.direction !== 'right'){
                this.cell.directionSelected = true;
                this.cell.direction = 'left';
                this.forceUpdate();
            } else if(event.keyCode == 38 && this.cell.direction !== 'up' && this.cell.direction !== 'down'){
                this.cell.directionSelected = true;
                this.cell.direction = 'up';
                this.forceUpdate();
            } else if(event.keyCode == 39 && this.cell.direction !== 'left' && this.cell.direction !== 'right'){
                this.cell.directionSelected = true;
                this.cell.direction = 'right';
                this.forceUpdate();
            } else if(event.keyCode == 40 && this.cell.direction !== 'up' && this.cell.direction !== 'down'){
                this.cell.directionSelected = true;
                this.cell.direction = 'down';
                this.forceUpdate();
            }

        }
    }
    render() {
        const { cell } = this.props;
        this.cell = cell;
        let classes = this.snakeClasses(cell);
        let head = (cell.length == cell.lengthLeft) ? this.renderHead() : '';
        return (
            <div className={'snake '+classes} style={head == '' || this.props.modal ? {} : {zIndex: 5}}>
                {head}
            </div>
        );
    }
}