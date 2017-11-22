import React from 'react';
import ReactDOM from 'react-dom';
import './styles.sass';
import Header from './components/header.js';
import Main from './components/main.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            cells: this.createCells()
        };
        this.movement(this.state.cells);
    }
    movement(cells){
        setInterval(()=>{
            this.setState({
                cells: this.renewal(cells)
            })
        },200)
    }
    renewal(cells){
        let headCell = null;
        cells.forEach((cell)=> {
            if (!cell.empty) {
                if(cell.length == cell.lengthLeft) {
                    cell.lengthLeft--;
                    headCell = cell;
                }
                else if(cell.lengthLeft == 1) this.closeCell(cell);
                else this.moveCell(cell);
            }
        });
        this.nextCell(headCell,cells);
        return cells
    }
    nextCell(previousCell,arr){
        if(previousCell.direction == 'right'){
            let currentCell = arr.find(cell=> cell.index==previousCell.index+1);
            currentCell.direction = 'right';
            currentCell.empty = false;
            currentCell.length = previousCell.length;
            currentCell.lengthLeft = previousCell.lengthLeft+1;
            console.log(currentCell.lengthLeft);
        }
    }
    moveCell(cell){
        cell.lengthLeft--;
    }
    closeCell(cell){
        cell.direction = '';
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
        times (420) (() => {
            cells.push({
                empty: true,
                index: cells.length,
                id: cells.length + Date.now(),
                direction: '',
                length: 0,
                lengthLeft: 0,
                timer: 1000
            })
        });
        cells.forEach((cell)=>{
            if(cell.index == 190 || cell.index == 191){
                cell.empty = false;
                cell.direction = 'right';
                cell.length = 2;
                cell.lengthLeft = (cell.index == 190) ? 1 : 2
            }
        });
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