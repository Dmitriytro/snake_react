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
            name: 'Snake',
            cells: this.createCells()
        };
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
                id: cells.length + Date.now()
            })
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