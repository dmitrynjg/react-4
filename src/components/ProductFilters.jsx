import React from "react";
import Checkbox from "./Checkbox";
import { view } from "@risingstack/react-easy-state";
import state from "../store";

class ProductFilters extends React.Component {
  render() {
    return (
      <div>
        <Checkbox
          label="Выбрать все"
          checked={state.filters.isAllChecked}
          onChange={() => {
            state.filters.isAllChecked = !state.filters.isAllChecked;
            state.filters.isFruitChecked = state.filters.isAllChecked;
            state.filters.isVegetablesChecked = state.filters.isAllChecked;
            state.filters.isCannedfoodChecked = state.filters.isAllChecked;
            state.filters.isAllChecked === true ? state.sortTypeProduct = ['fruit','vegetable','canned_food'] :
            state.sortTypeProduct = [];
          }}
        />
        <hr />
        <Checkbox
          label="Фрукты"
          checked={state.filters.isFruitChecked}
          onChange={() =>
            {state.filters.isFruitChecked = !state.filters.isFruitChecked
             state.filters.isAllChecked = false;
             state.sortTypeProduct.indexOf('fruit') !== -1 ? state.sortTypeProduct.splice(state.sortTypeProduct.indexOf('fruit'),1) :
             state.sortTypeProduct.push('fruit');
            }
          }
        />
        <Checkbox
          label="Овощи"
          checked={state.filters.isVegetablesChecked}
          onChange={() =>
            {state.filters.isVegetablesChecked = !state.filters
              .isVegetablesChecked
              state.filters.isAllChecked = false;
              state.sortTypeProduct.indexOf('vegetable') !== -1 ? state.sortTypeProduct.splice(state.sortTypeProduct.indexOf('vegetable'),1) :
              state.sortTypeProduct.push('vegetable');
            }
              
          }
        />
        <Checkbox
          label="Консервы"
          checked={state.filters.isCannedfoodChecked}
          onChange={() =>
            {state.filters.isCannedfoodChecked = !state.filters.isCannedfoodChecked
            state.filters.isAllChecked = false;
            state.sortTypeProduct.indexOf('canned_food') !== -1 ? state.sortTypeProduct.splice(state.sortTypeProduct.indexOf('canned_food'),1) :
            state.sortTypeProduct.push('canned_food');
            }
          }
        />
      </div>
    );
  }
}

export default view(ProductFilters);
