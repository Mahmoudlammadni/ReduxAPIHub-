export default function Affichage(props) {
    return(
    
             //this is a component where props is used to affiche the data in other component 
               <div className="col-3">
                <div className="card" style={{width: "23rem",height:"20rem"}} >

              <img src={props.data.image} className="card-img-top" style={{width:"120px",height:"120px"}} alt="" />
              <div className="card-body">
              <h5 className="card-title">{props.data.title}</h5>
                
                    <p  className="card-text">{props.data.price}</p>
                    <p  className="card-text">{props.data.description.slice(1,20)}</p>
                    <p  className="card-text">{props.data.category}</p>
                    </div>
                    </div>
                    </div>
            
        
        
    )
    
}



