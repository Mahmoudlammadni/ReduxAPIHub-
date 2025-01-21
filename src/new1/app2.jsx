// here is the app where the routing is used to call the othere components 
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Man from "./man";
import { BrowserRouter,Route,Routes ,Link} from "react-router-dom";
import Home from "./home";
import Jew from "./jew";
import Elec from "./elect";
import Women from "./women";
import Navbar from "./Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App2() {
    const [products,setproducts]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>setproducts(res.data))
        .catch((er)=>console.log('error'))
    })
 
    return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home yy={products}/>}></Route>
        <Route path="/m" element={<Man ll={products}/>}></Route>
        <Route path="/j" element={<Jew oo={products} />}></Route>
        <Route path="/e" element={<Elec elec={products} />}></Route>
        <Route path="/w" element={<Women women={products} />}></Route>
      

    </Routes>
    
    </BrowserRouter>
      
      
    )
    
}