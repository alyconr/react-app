import React from "react";

function Login ({onNameHandleChange, onPasswordHandleChange, onSubmitChange} ) {
    return (
       
      
           
       <div className="col d-flex justify-content-center p-5 m-3 fs-2  "> 
            <form onSubmit={event => {onSubmitChange(event.target.value)}}  > 
                <div className="mb-3  ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                     <input onChange={ event => {onNameHandleChange(event.target.value)}}   type="text "  name="name"  placeholder="Enter your Username" 
                        className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 ">
                <label htmlFor="exampleInputPassword1" className="form-label " >Password</label>
                <input  onChange={ event => {onPasswordHandleChange(event.target.value)}}  type="text" name="password"  placeholder="Enter your password" className="form-control form-control-lg " id="exampleInputPassword1" />
                </div>
                <button  type="submit " className="btn btn-primary fs-2">Submit</button>
            </form>
        </div>
        
     
        
        
       
        

    );
   
}

export default Login;