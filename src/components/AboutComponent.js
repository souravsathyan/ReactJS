import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"

class AboutComponent extends Component {

    constructor(props){
        super(props)
        console.log("parent constructer")
    }

    componentDidMount(){
        console.log("parent did mount")
    }

    render (){

        console.log("parent render")

        return ( <div>
            <h1>About</h1>
            <p>This is the About  Section</p>
            <hr></hr>
            <User name={"Sourav"}/>
            <UserClass name={"Sourav in class"} />
            <UserClass name={"Sourav in class"} />
        </div>)
    }
}

export default AboutComponent