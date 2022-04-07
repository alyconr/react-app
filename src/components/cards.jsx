import Counter from "./counter";
import React  from "react";


function Cards ({  title, description, img, time,  comments}) {



    return (

       
        <div className="col">
            <div  className="card  ">
                <img id="imagen" src={img} className="card-img-top " alt="tweet" />
                     <div className="card-body">
                         <div className="row  ">
                             <div className="col ">
                                <h5>{time}min ago</h5>
                             </div>
                                <div className="col d-flex justify-content-end">
                                    <Counter />
                                    
                                </div>
                        </div>
                       
                       
                        <h5 className="card-title display-5">@{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="row">
                            <div className="col">
                               <h5 > <span className="glyphicon glyphicon-comment text-muted"> </span> Comments ({comments}) </h5> 
                            </div>
                        </div>
                   </div>
                </div>
            </div>
           

    );
}

export default Cards;
