import React from "react";

class Employee extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
        this.state ={
            name :"aldo Wiranata",
            gender:" Laki-Laki",
            salary : "100000",
            age: 18
        }
    }

    changeAge=()=>{
        this.setState({
            age : document.getElementById("newAge").value
        })
    }

    render(){
        return (
            <div>
                <h1>I am developer</h1>

                <p>{this.state.name}</p>
                <p>{this.state.gender}</p>
                <p>{this.state.salary}</p>
                <p>{this.state.age}</p>

                <input type="text" id="newAge"/>

                <button type="button" onClick={this.changeAge}>
                 New age
                </button>


            </div>

           
        )
    }
}

export default Employee