import React from 'react';
import {NavItems} from './NavItems'

class NavBar  extends React.Component {

render (){

    return(

        <nav className ="NavBarItems">
        <h1 className = "navbar-logo">Welcome to our Recipes<i className ="icons"></i></h1>
        <div className =" menu-icon">
        
        
        </div>
        <ul>
        {NavItems.map((item,index)=> {
            return (
                <li key={index}><a className ={item.cName} href={item.url}>{item.title}</a></li>
            )
        })}
        
        </ul>
        
        </nav>
    )
}
}
export default NavBar