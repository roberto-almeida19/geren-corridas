import React from 'react';
import './itemLista.css';

class ItemLista extends React.Component{

    render(){
        const items = this.props.item;
        return (
            <div >
            {items.map(item =>(
                <article key={item.id} className="item-lista">
                <p>Id:{item.id}</p>
                <p>Nome:{item.nome}</p>
                <p>Endereco: {item.endereco.logradouro}, {item.endereco.numero}</p>
                </article>
            ))}
            </div>
        )
    }
}
export default ItemLista;