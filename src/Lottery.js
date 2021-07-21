import React, { Component } from 'react'
import "./Lottery.css"
import LotteryBall from "./LotteryBall"

class Lottery extends Component {
    static defaultProps = {
        title: "Lottery",
        numBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props);
        this.state = {
            lotoNums: Array.from({ length: this.props.numBalls })
        };
        this.makeLottoBalls = this.makeLottoBalls.bind(this);
    }

    makeLottoBalls() {
        this.setState(curState => ({
            lotoNums: curState.lotoNums.map((rand) => {
                return Math.floor(Math.random() * this.props.maxNum) + 1
            }
            )
        }))
    }


    render() {


        return (
            <div className="Lottery">
                <h1 className="LotteryTitle">{this.props.title}</h1>
                <div className="LotteryBallContainer">
                    {this.state.lotoNums.map((num) => {
                        return (
                            <LotteryBall number={num} />
                        );
                    }
                    )}
                </div>

                <button onClick={this.makeLottoBalls}>Generate Numbers</button>
            </div>
        )
    }
}


export default Lottery;