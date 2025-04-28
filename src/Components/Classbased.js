
import React from "react";

class Classbased extends React.Component{
    constructor(props){

        super(props)

        this.state ={
            count:0
        }
        console.log('Constructor')

    }
    componentDidMount(){
        console.log('Compoent did mount')
    }

    render(){

        const {name, designation} = this.props;
        console.log('Compoent rendered')
        return(
            <div className="parent-container">
                <h2>{name}</h2>
                <h3>{designation}</h3>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count+1
                    })
                }}>Click me : {this.state.count}</button>

            </div>
        )
    }

}

export default Classbased;