import Affichage from "./affichage"
export default function Man(props) {
    return(
         //this component is where the data is filtred to select only the category of men's clothing
        <div className="row">
            {props.ll.filter((o)=>o.category==="men's clothing")
        .map((i,l)=>{
            return(
                <Affichage data={i} key={l}/>
            )
        })}
        </div>
    )
    
}