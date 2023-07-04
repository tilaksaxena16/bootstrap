
import React from "react";
export class Navbar extends React.Component
{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="container-fluid">
                <h3>{this.props.brandName}</h3>
                <nav className="d-flex justify-content-around bg-danger p-2">
                    {
                        this.props.navItems.map(item=>
                            <button className="btn btn-danger me-3">{item}</button>
                            )
                    }
                </nav>
            </div>
        )
    }
}