import Affichage from "./affichage";
export default function Jew(props) {
    return(
    //this component is where the data is filtred to select only the category of jewelery
    <div className="row">
        {  props.oo.filter((p)=>p.category==="jewelery")
        .map((j,i)=>{
            return(
                <Affichage data={j} key={i}/>
                    
            )
        })}
    </div>
        
    )
}