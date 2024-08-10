import React from "react";


class PropsClass extends React.Component{
    constructor(props){
        super (props)
    }
    render(){
        return(
            <div className ="itemStyle">
                <h1> Hello {this.props.name}</h1>
            </div>
        )
    }
}

export default PropsClass