import React,{Component} from 'react';

class ClassBasedComp extends Component{
    constructor(){
        super()
        this.state = {
            name:"suriya",
            password:"123"
        }
    }
        handle = ()=>{
            this.setState({
            name:this.state.updatename,
            password:this.state.updatepassword
        })
        }
    
    render(){
        return(
            <div className ="class-based ">
             <h1 style={{textAlign:"center",color:"red"}}>States in CBC</h1>
                <h2>Name :{this.state.name}</h2>
                <h2>Password :{this.state.password}</h2>
                <div className="row mx-5 my-3">
                    <div className="col-1">
                     <strong> Name: </strong>
                    </div>
                      <div className="col-9">
                        <input type="text" placeholder ="Enter your Name" onChange={(e)=>{
                            this.setState({updatename:e.target.value})
                        }}/>
                     </div>
                </div>

                <div className="row mx-5 my-3">
                    <div className="col-1">
                      <strong> Password: </strong>
                    </div>
                    <div className="col-9">
                        <input type="password" placeholder="Enter password" onChange={(e)=>{
                            this.setState({updatepassword:e.target.value})
                        }}/>
                    </div>
                </div>
                <div className="row my-4 mx-5">
                    <button className="btn btn-primary w-25" onClick={this.handle}>Update Details</button>
                </div>
            </div>
        )
    }
}
export default ClassBasedComp;