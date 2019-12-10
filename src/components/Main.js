import React, {Component} from 'react'
import ProductsList from "./ProductsList" 
import "../assets/Main.css"
import Header from "./Header"
export default class Main extends Component {
    state = {
        name: ""
    }
    render(){
        return (
            <div className="main">
                <Header/>
                <h1>Lista de produtos</h1>
                <ProductsList/>
            </div>
        )
    }  
}
