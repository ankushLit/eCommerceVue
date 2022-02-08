import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    products: [
      {
        id: 1,
        name: "Ore Sweater",
        price: "15000",
        img: "https://images.unsplash.com/photo-1565548058654-6ba93b5e3135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        quantityInStock: 20,
      },
      {
        id: 2,
        name: "Ore Sweater",
        price: "15000",
        img: "https://images.unsplash.com/photo-1565548058654-6ba93b5e3135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        quantityInStock: 20,
      },
      {
        id: 3,
        name: "Ore Sweater",
        price: "15000",
        img: "https://images.unsplash.com/photo-1565548058654-6ba93b5e3135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        quantityInStock: 20,
      },
      {
        id: 1,
        name: "Ore Sweater",
        price: "15000",
        img: "https://images.unsplash.com/photo-1565548058654-6ba93b5e3135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        quantityInStock: 20,
      },
      {
        id: 1,
        name: "Ore Sweater",
        price: "15000",
        img: "https://images.unsplash.com/photo-1565548058654-6ba93b5e3135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        quantityInStock: 20,
      },
      {
        id: 1,
        name: "Ore Sweater",
        price: "15000",
        img: "https://images.unsplash.com/photo-1565548058654-6ba93b5e3135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        quantityInStock: 20,
      },
    ],
  },
  getters: {
    cartProducts(state) {
      return state.cart;
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    cartItems(state) {
      return state.cart.length;
    },
  },
  actions: {
    addProductToCart(context, product) {
      if (product.quantityInStock > 0) {
        const cartItem = context.state.cart.find(
          (item) => item.id === product.id
        );
        if (!cartItem) {
          context.commit("pushProductToCart", product);
        } else {
          context.commit("incrementProductQuantity", cartItem);
        }
      }
    },
    removeProduct(context, product) {
      context.commit("removeProductFromCart", product.id);
      context.commit("decrementProductQuanitityInStock", product);
    },
    removeCartProducts(context) {
      context.commit("removeAllProducts");
    },
  },
  mutations: {
    pushProductToCart(state, product) {
      state.cart.push({
        id: product.id,
        quantity: 1,
        name: product.name,
        price: product.price,
        newQuantityInStock: product.quantityInStock,
      });
    },
    removeProductFromCart(state) {
      state.cart.pop();
    },
    removeAllProducts(state) {
      state.cart = [];
    },
    decrementProductQuanitityInStock(state, product) {
      product.quantityInStock--;
    },
    incrementProductQuantity(state, cartItem) {
      const product = state.products.find(
        (product) => product.id === cartItem.id
      );
      cartItem.quantity++;
      product.quantityInStock--;
      cartItem.productprice = cartItem.quantity * product.price;
    },
  },
  modules: {},
});
