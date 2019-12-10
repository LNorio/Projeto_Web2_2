import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/Header.css'

export default () => {
    return (
        <div className="header">
            <ul>
                <li>
                    <Link to="/prod"><a href="">Procurar produtos</a></Link>
                </li>
                <li>
                    <Link to="/add_prod"><a href=""> Adicionar produtos</a></Link>
                </li>
            </ul>
        </div>
    )
}
