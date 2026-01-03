import { NavLink } from "react-router-dom";

function Nav() {
  
    const ulStyle = {
        display: "flex",                
        justifyContent: "flex-end",     
        listStyle: "none",
        margin: "0px",
        padding: "0px",
        background: "yellow",
        
    };
    

    const liStyle = {
        padding: "10px" 
    };

    return (
        <>
            <ul style={ulStyle}>
                <li style={liStyle}> <NavLink to="/">Home</NavLink> </li>
                <li style={liStyle}> <NavLink to="/about">About Us </NavLink> </li>
                <li style={liStyle}> <NavLink to="/products">Products</NavLink> </li>
                <li style={liStyle}> <NavLink to="/contact">Contact Us</NavLink> </li>
              
            </ul>
        </>
    );
}

export default Nav;

