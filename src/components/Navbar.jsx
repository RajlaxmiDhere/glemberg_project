import { NavLink } from "react-router-dom";

function Nav() {
  
    const ulStyle = {
        display: "flex",                
        justifyContent: "flex-end",     
        listStyle: "none",
        margin: "50px",
        padding: "50px",
        background: " #0b5ed7;",
        
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

