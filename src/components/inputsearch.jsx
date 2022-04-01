


function Inputsearch ({ onSearch, onChangeBar}) {
    
 
    
        return (

            <div className="container">
            <div className="col-xl d-flex">
            <input  onChange={ event => {onSearch(event.target.value ); onChangeBar(event.target.value) } } className="form-control m-2 p-3" type="search" placeholder="Search" aria-label="Search" /> 
            </div>
         
            </div>
          
           

        );
        
    
    }


export default Inputsearch;