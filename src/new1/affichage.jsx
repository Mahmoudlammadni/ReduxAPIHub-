import add from "./action";
import { useDispatch } from 'react-redux'

export default function Affichage(props) {
  const dis =useDispatch()
    return(
    
             //this is a component where props is used to affiche the data in other component 
               <div className="col-3">
                <div className="card" style={{width: "23rem",height:"22rem"}} >

              <img src={props.data.image} className="card-img-top" style={{width:"120px",height:"120px"}} alt="" />
              <div className="card-body">
              <h5 className="card-title">{props.data.title.slice(1,30)}</h5>
                
                    <p  className="card-text">{props.data.price}</p>
                    <p  className="card-text">{props.data.description.slice(1,20)}</p>
                    <p  className="card-text">{props.data.category}</p>
                    <button className="btn btn-success" onClick={()=>dis(add(props.data))}>to basket</button>
                    </div>
                    </div>
                    </div>
            
        
        
    )
    
}



