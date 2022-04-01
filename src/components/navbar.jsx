function Navbar({onClickProfile, onLogoClick})   {

  
    return (
      <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
      <button onClick={() => { onLogoClick(); }} className="navbar-brand fs-1 fw-bold btn btn-link" >
        <span className="glyphicon glyphicon-flash logo " ></span>
        THREE PICS
      </button>
      <button  className="btn btn-link"  onClick={() => {
        onClickProfile();
      } } > <span className="glyphicon glyphicon-user logo "></span> </button>
      
    </div>
  
  </nav>
  
    );
  }

  export default Navbar;