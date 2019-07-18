import React from 'react';
import './itemLista.css';

class ItemLista extends React.Component{

    render(){
        const items = this.props.item;
        console.log(items.urlFoto);
        let altFoto = `Foto do ${this.props.pessoa}`
        altFoto = altFoto.slice(0,altFoto.length-1);
        return (
            <div className='container-items'>
            {items.map(item =>(
                <article key={item.id} className="item-lista">
                    <div className='img-foto'><img src={item.urlFoto} alt={altFoto}/></div>
                    <div className='info-pessoa'>
                        <p>Nome:{item.nome}</p>
                        <p>Endereco: {item.endereco.logradouro}, {item.endereco.numero}</p>
                        <p></p>
                    </div>
                </article>
            ))}
            </div>
        )
    }
}
export default ItemLista;