import React from 'react';
import ReactDOM from 'react-dom';
import './styles.sass';
import Header from './components/header.js';
import Main from './components/main.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.speed = 100;
        this.startIndex = 190;
        this.fieldWidth = 21;
        this.fieldHeight = 20;
        this.cellsQuantity = this.fieldWidth*this.fieldHeight;
        this.state = {
            cells: this.createCells()
        };
        this.movement(this.state.cells);
    }
    movement(cells){
        this.intervalID = setInterval(()=>{
            if(!this.gameOverCheck(cells)){
                this.setState({
                    cells: this.renewal(cells)
                })
            }
        },this.speed);

    }
    gameOverCheck(cells){
        let cell = cells.find(cell => !cell.empty && cell.length == cell.lengthLeft);
        if(cell.direction == 'right' && (cell.index+1)%this.fieldWidth == 0 ||
        cell.direction == 'left' && cell.index%this.fieldWidth == 0 ||
        cell.direction == 'up' && cell.index-this.fieldWidth<0 ||
        cell.direction == 'down' && cell.index+this.fieldWidth>this.cellsQuantity+1) {
            cell.directionSelected = true;
            this.restartWindow();
            clearInterval(this.intervalID);
            return true
        } else return false
    }
    restartWindow(){
        console.log('game over');
    }
    renewal(cells){
        let headCell = null;
        cells.forEach((cell,i,arr)=> {
            if (!cell.empty && cell.length>1) {
                let nextIsApple = this.isAppleInFront(cell,arr);
                cell.directionSelected = false;
                if(cell.length == cell.lengthLeft) {
                    if(!nextIsApple){
                        cell.lengthLeft--;
                    } else cell.length++;
                    headCell = cell;
                }
                else if(cell.lengthLeft == 1) {
                    if(!nextIsApple){
                        this.closeCell(cell);
                    } else cell.length++
                }
                else if(!nextIsApple){
                    this.moveCell(cell);
                } else cell.length++;
            }
        });
        cells = this.nextCell(headCell,cells);
        return cells
    }
    computeNextCell(previousCell){
        if(previousCell.direction == 'right') return previousCell.index+1;
        else if(previousCell.direction == 'left') return previousCell.index-1;
        else if(previousCell.direction == 'up') return previousCell.index-this.fieldWidth;
        else if(previousCell.direction == 'down') return previousCell.index+this.fieldWidth;
    }
    isAppleInFront(currentCell,arr) {
        let index = this.computeNextCell(currentCell);
        return arr.find(cell=>cell.index == index).length == 1
    }
    addApple(cells,point){
        let emptyCells = cells.slice().filter(obj => obj.empty == true);
        let randomIndex = emptyCells[Math.floor(Math.random()*emptyCells.length)].index;
        let currentCell = cells.find(cell=>cell.index == randomIndex);
        currentCell.empty = false;
        currentCell.length = 1;
        if(point){console.log('plus 1 point')}
        return cells
    }
    nextCell(previousCell,arr){
        let currentCell = arr.find(cell=> cell.index==this.computeNextCell(previousCell));
        if(currentCell.length==1){arr = this.addApple(arr,true)}
        currentCell.direction = previousCell.direction;
        currentCell.empty = false;
        currentCell.length = previousCell.length;
        currentCell.lengthLeft = previousCell.lengthLeft+1;
        currentCell.directionSelected = false;
        return arr
    }
    moveCell(cell){
        cell.lengthLeft--;
    }
    closeCell(cell){
        cell.direction = '';
        cell.directionSelected = false;
        cell.length = 0;
        cell.lengthLeft = 0;
        cell.empty = true;
    }

    createCells() {
        const times = x => f => {
            if (x > 0) {
                f();
                times (x - 1) (f)
            }
        };
        let cells = [];
        times (this.cellsQuantity) (() => {
            cells.push({
                empty: true,
                index: cells.length,
                id: cells.length + Date.now(),
                direction: '',
                length: 0,
                lengthLeft: 0
            })
        });
        cells.forEach((cell)=>{
            if(cell.index == this.startIndex || cell.index == this.startIndex+1){
                cell.empty = false;
                cell.direction = 'right';
                cell.length = 2;
                cell.lengthLeft = (cell.index == this.startIndex) ? 1 : 2;
            }
        });
        cells = this.addApple(cells);
        return cells
    }


    handleChange(e) {
        this.setState({name: e.target.value});
    }
    render() {
        return (
            <div className="content">
                <div className="content-align">
                    <Header className="header"/>
                    <Main className="main" cells={this.state.cells}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));