import { store } from "@risingstack/react-easy-state";

const state = store({
  filters: {
    isAllChecked: true,
    isFruitChecked: true,
    isVegetablesChecked: true,
    isCannedfoodChecked: true
  },
  products: [
    { id: 1, name: "Апельсины", price: 1000, amount: 30, category: "fruit" },
    { id: 2, name: "Бананы", price: 1000, amount: 30, category: "fruit"},
    { id: 3, name: "Помидоры", price: 2000, amount: 10, category: "vegetable" },
    { id: 4, name: "Консервы", price: 1000, amount: 20, category: "canned_food" }
  ],
  sort:'asc',
  sortTypeProduct:['fruit','vegetable','canned_food']
});

export default state;
