import Affichage from "./affichage";
export default function Elec(props) {
    return(
        <div className="row">
            {
                props.elec.filter((p)=>p.category==="electronics")
                .map((e,i)=>{
                    return(
                        <Affichage data={e} key={i}/>
                    )
                })
            }
        </div>
    )
}