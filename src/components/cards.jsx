
function Cards ({id, title, description, img, time, likes, comments}) {

    return (

       
            <div className="col">
                <div  className="card  ">
                 <img id="imagen" src={img} className="card-img-top " alt="teewt-Image" />
                    <div className="card-body">
                       <div className="row  ">
                            <div className="col ">
                                <h5>{time} min ago</h5>
                                
                            </div>
                            <div className="col d-flex justify-content-end">
                                <h5><a className="btn btn-lg btn-danger" href="#"><span                                                          className="glyphicon glyphicon-heart fs-4 ">{likes}k</span></a></h5>

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
