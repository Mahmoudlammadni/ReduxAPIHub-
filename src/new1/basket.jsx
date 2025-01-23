import { useDispatch, useSelector } from "react-redux";
import Affichage from "./affichage";
import { delet } from "./action";

export default function Basket() {
    const dat = useSelector(data=>data.panier)
    const dis = useDispatch()
    const totalPrice = dat.reduce((total, i) => total+= i.price, 0);
    return(
        <>
             <div className="mb-4">
        <h4>Total Price: ${totalPrice}</h4> 
      </div>

        
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
                                        <button className="btn btn-danger" onClick={()=>dis(delet(p.id))}>delete</button>
                                        </div>
                                        </div>
                                        </div>
                                
                     
                    ) 
    
                })
            }
    
        </div>
        </>
      )
}