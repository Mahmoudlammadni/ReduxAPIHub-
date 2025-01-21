import Affichage  from "./affichage";
export default function Women(props) {
    return(
        <div className="row">
            {
                props.women.filter((w)=>w.category==="women's clothing")
                  .map((p,i)=>{
                      return(
                          <Affichage data={p} key={i}/>
                      )
                  })
            }
        </div>
    )
    
}