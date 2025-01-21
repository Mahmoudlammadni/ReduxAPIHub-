export default function Affichage(props) {
    return(
    
             //this is a component where props is used to affiche the data in other component 
               <div className="col-3">
              <img src={props.data.image} style={{width:"30px",height:"30px"}} alt="" />
                    <p>{props.data.title}</p>
                    <p>{props.data.price}</p>
                    <p>{props.data.description.slice(1,20)}</p>
                    <p>{props.data.category}</p>
                    </div>
            
        
        
    )
    
}