import React, { Component } from 'react'
import "./LotteryBall.css"

class LotteryBall extends Component {
    static defaultProps = {
        number: "00"
    }

    render() {
        return (
            <div className="LotteryBall">{this.props.number}</div>
        )
    }

}

export default LotteryBall;