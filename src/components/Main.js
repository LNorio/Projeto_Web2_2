import React, {Component} from 'react'
import ProductsSearch from './ProductSearch'
import ProductsList from "./ProductsList" 
import {Link} from "react-router-dom"
import "../assets/Main.css"
export default class Main extends Component {
    state = {
        name: ""
    }
    render(){
        return (
            <div className="main">
                <h1>Lista de produtos</h1>
                <ProductsList/>
                <Link to="/prod/"></Link>
                <h2>Itens procurados</h2>
                <ProductsSearch name="kindred5"/>
            </div>
        )
    }  
}
