import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../assets/AddProd.css"

export class AddProd extends Component {

    render() {
        return (
            <div className="addProdDiv">
                <Link to="/"><button>Voltar</button></Link>
                <h2>Novo Produto</h2>
                <form className="addProd" action="http://localhost:8080/prod" method="POST">
                    <input type="file" name="file" placeholder="Foto"/>
                    <input type="text" name="name" placeholder="Nome do produto"/>
                    <input type="number" name="price" placeholder="Preco"/>
                    <button type="submit">OK</button>
                </form>
            </div>
        )
    }
}

export default AddProd
