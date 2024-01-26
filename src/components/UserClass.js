import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userInfo:{
                name:"",
                avtar:""
            }
        }
    }

   async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo:json
        })
    }

    render() {
        const {name,avatar_url, location} = this.state.userInfo
        return (
            <div className="about-card">
                <div>
                    <h1>{name}</h1>
                    <p>Location : {location}</p>
                    <p>Contact : 8921834447</p>
                </div>
                <div className="about-image-container">
                <img src={avatar_url} width={"100px"} height={"100px"} />
                </div>
            </div>
        )
    }
}

export default UserClass