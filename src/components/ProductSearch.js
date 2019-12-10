import React, { Component } from 'react'
import axios from 'axios'
import '../assets/Products.css'
import '../assets/Search.css'
import { Link } from "react-router-dom"

export default class ProductsList extends Component {
    state = {
        products: [],
        name: ''
    };

    getProductsFromApi = () => {
        axios
            .get(`http://localhost:8080/search?name=${this.state.name}`, {
                crossDomain: true
            })
            .then(result => {
                console.log(result.data)
                console.log(this.props.name)
                this.setState({ products: result.data });
            });
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        this.getProductsFromApi();
    }

    sell(id) {
        console.log(id)
    }

    render() {
        return (
            <div className="search">
                <Link to='/'><a href="">Voltar</a></Link>
                <h2>Procurando na lista</h2>
                <input name="name" placeholder="Digite seu produto" value={this.state.file} onChange={this.handleChange}></input>
                <button onClick={() => this.getProductsFromApi()}>Procurar</button>
                <div className="lista">
                    {this.state.products.map(element => {
                        console.log(element)
                        return (
                            <div className="prod" key={element._id}>
                                <h3>Nome: {element.name}</h3>
                                <img src={element.url} alt="produto" />
                                <h3>Preco: R${element.price}</h3>
                                <Link to="/buy"><button onClick={() => this.sell(element._id)}>Comprar</button></Link>
                            </div>
                        )
                    })}
                </div>
            </div>  
        )
    }

}
