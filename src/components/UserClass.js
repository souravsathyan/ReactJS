import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        console.log("child constructer")

    }

    componentDidMount() {
        console.log("child did mount")
    }

    render() {
        console.log("child render")

        return (
            <div>
                <div>
                    <h1>{this.props.name}</h1>
                    <p>Location : Kodungallur</p>
                    <p>Contact : 8921834447</p>
                </div>
                <div>

                    <button onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}>+</button>

                    <h1>{this.state.count}</h1>

                    <button onClick={() => {
                        this.setState({
                            count: this.state.count - 1
                        })
                    }}>-</button>

                </div>
            </div>
        )
    }
}

export default UserClass