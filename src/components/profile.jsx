

function Profile () {

    return (
       
           
            <div className="col-md d-flex justify-content-center">
            <div className="card m-2 p-3" style={{width: "25rem", height: "30rem"}}>
                <img  src={process.env.PUBLIC_URL + 'cat.jpg'} className="cat" alt="profile" />
                 <div >
                     <h2 className="text-center p-2">@pepe</h2>
                    <p >Some quick example text to build on the card title and make up the bulk of the. Some quick example text to build on the card title and make up the bulk of the. </p>
                </div>
            </div>
            </div>

            
           
       
        

    );
}

export default Profile;
