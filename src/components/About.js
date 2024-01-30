import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"
import userContext from "../utils/userContext"

class About extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    render (){
        return ( <div>
            <h1>About</h1>
            <userContext.Consumer>
                {
                    ({loggedInUser})=>{
                        {console.log(loggedInUser)}
                        <h1 className="font-bold text-xl">{loggedInUser}</h1>
                    }
                }
            </userContext.Consumer>
            <p>This is the About  Section</p>
            <hr></hr>
            <UserClass name={"Sourav in class"} />
        </div>)
    }
}

export default About