import Affichage from "./affichage"
export default function Home(props){
    return(
      //this component is where the all the data is selected
      <div className="row">
        { props.yy.map((p)=>{
           return(
            
            <Affichage data={p}/>
           )
        })}
       </div>
    )
}