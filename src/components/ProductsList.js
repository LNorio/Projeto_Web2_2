import React, { Component } from 'react'
import axios from 'axios'
import '../assets/Products.css'
import {Link} from "react-router-dom"

export default class ProductsList extends Component {
    state = {
        products: []
    };

    getProductsFromApi = () => {
        axios
            .get("http://localhost:8080/prod", {
                crossDomain: true
            })
            .then(result => {
                this.setState({ products: result.data });
            });
    };

    componentDidMount() {
        this.getProductsFromApi();
    }

    sell(id){
        console.log(id)
    }

    render() {
        return (
            <div className="lista">
                {this.state.products.map(element => {
                    console.log(element)
                    return (
                        <div className="prod" key={element._id}>
                            <h3>Nome: {element.name}</h3>
                            <img src={element.url} alt="produto"/>
                            <h3>Preco: R${element.price}</h3>
                            <Link to="/buy"><button onClick={() => this.sell(element._id)}>Comprar</button></Link>
                        </div>    
                    )
                })}
            </div>
        )
    }

}
