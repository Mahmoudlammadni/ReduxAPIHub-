import { Link } from "react-router-dom";
export default function Navbar() {
    return (
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link active" >Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/j" className="nav-link active" >jew</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/e" className="nav-link active" >Elec</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/m" className="nav-link active" >Man</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/w" className="nav-link active" >women</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/b" className="nav-link active" style={{ color: "maroon", fontWeight: "bold" }}>Basket</Link>
                    </li>
                    <li className="nav-item">
 
</li>

                    
                </ul>
            </div>
        </nav>
    );
}
