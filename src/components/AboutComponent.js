import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"

class AboutComponent extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    render (){
        return ( <div>
            <h1>About</h1>
            <p>This is the About  Section</p>
            <hr></hr>
            <UserClass name={"Sourav in class"} />
        </div>)
    }
}

export default AboutComponent