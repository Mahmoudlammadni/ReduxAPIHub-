import { useDispatch, useSelector } from "react-redux";
import Affichage from "./affichage";
export default function Basket() {
    const dat = useSelector(data=>data.panier)
    return(
        <div className="row">
            {
                dat.map((p,i)=>{
    
                    return (
                    <div className="col-3" key={i}>
                                    <div className="card" style={{width: "23rem",height:"22rem"}} >
                    
                                  <img src={p.image} className="card-img-top" style={{width:"120px",height:"120px"}} alt="" />
                                  <div className="card-body">
                                  <h5 className="card-title">{p.title.slice(1,30)}</h5>
                                    
                                        <p  className="card-text">{p.price}</p>
                                        <p  className="card-text">{p.description.slice(1,40)}</p>
                                        <p  className="card-text">{p.category}</p>
                                        </div>
                                        </div>
                                        </div>
                                
                     
                    ) 
    
                })
            }
    
        </div>
      )
}