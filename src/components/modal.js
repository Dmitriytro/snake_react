import React from 'react';
import Achievement from './achievement.js';
import Restart from './restart.js';

export default class Modal extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { restart } = this.props;
        const { score } = this.props;
        const { bestScore } = this.props;
        const { modal } = this.props;
        return (
            <div className={'modal ' + (modal ? 'modal-show' : '')}>
                <div className="modal-content">
                    <div className="modal-window">
                        <Achievement score={score} bestScore={bestScore}/>
                        <button className="restart-button" onClick={restart}> <div className="restart-button-text">Restart</div><Restart/></button>
                    </div>
                </div>
            </div>
        );
    }
}