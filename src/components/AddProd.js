import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "../assets/AddProd.css"
import axios from "axios"

export class AddProd extends Component {
    
    state = {
        name: "",
        price: "",
        file: ""
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    postProduct = () => {
        const prod = {
            name: this.state.name,
            price: this.state.price,
            file: this.state.file
        }
        axios
            .post("http://localhost:8080/prod", {
                prod
            })
            .then(result => {
                alert('produto cadastrado com sucesso')
                window.location.href='/'
            });
    };

    render() {
        return (
            <div className="addProdDiv">
                <Link to="/"><button>Voltar</button></Link>
                <h2>Novo Produto</h2>
                <input type="file" name="file" placeholder="Foto" value={this.state.file} onChange={this.handleChange} />
                <input type="text" name="name" value={this.state.name} placeholder="Nome do produto" onChange={this.handleChange} />
                <input type="number" name="price" placeholder="Preco" value={this.state.price} onChange={this.handleChange} />
                <button onClick={() => this.postProduct()}>OK</button>
            </div>
        )
    }
}

export default AddProd
