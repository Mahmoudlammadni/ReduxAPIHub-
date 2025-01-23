import { useState } from "react"
import Affichage from "./affichage"
export default function Home(props){
      const [serch , setsearch]=useState('')
      const filtereddata =props.yy.filter((p)=>{
        return p.title.toLowerCase().includes(serch.toLocaleLowerCase()
         )
      })

    return(
      //this component is where the all the data is selected

      <div className="row">
           <div className="search-bar">
        <input type="text" placeholder="Search..." value={serch} onChange={(e) => setsearch(e.target.value)} className="form-control mb-3"
        />
      </div>
        { filtereddata.map((p)=>{
           return(
            
            <Affichage data={p}/>
           )
        })}
       </div>
    )
}

