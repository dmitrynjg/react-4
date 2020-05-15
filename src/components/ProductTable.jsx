import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../store';

class ProductTable extends React.Component {
  sortToQuant(){
    if(state.sort === 'asc'){
      state.products.sort((nextElement,currentElement) => {
        return nextElement.amount - currentElement.amount;
      });
      state.sort = 'desc'
    } else {
      state.products.sort((currentElement,PrevElement) => {
        return PrevElement.amount - currentElement.amount;
      });
      state.sort = 'asc'
    }
  }
  render() {
    return (
      <table border='1' width='500px'>
        <tr>
          <td>Название</td>
          <td>Категория</td>
          <td>Цена (шт.)</td>
          <td>
            Кол-во <button 
            onClick={this.sortToQuant}
            >сортировка</button>
          </td>
        </tr>
    
        {state.products.map((product) => {
          if (state.sortTypeProduct.indexOf(product.category) !== -1) {
            return (
              <tr>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.amount}</td>
              </tr>
            );
          }


        })}
      
      </table>
    );
  }
}

export default view(ProductTable);
