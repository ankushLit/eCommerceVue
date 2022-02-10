import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    orders:[{
      orderid: "1",
      item:[{
        itemid:"1",
        qty:"1",
      comment:""
      },{
        itemid:"3",
        qty:"2",
      comment:""
      }],
      
      comment:""
    },{
      orderid: "2",
      item:[{
        itemid:"1",
        qty:"1",
      comment:""
      },{
        itemid:"3",
        qty:"2",
      comment:""
      }],
      
      comment:""
    }
    ],
    products: [
      {
        id: 1,
        name: "Gluten Free Lipstic",
        price: "21",
        img: "https://m.media-amazon.com/images/I/51o0cDiIQ7L._SL1000_.jpg",
        decription:
          "Honeybee Gardens Truly Natural Lipstick Bermuda | Vegan Gluten Free Cruelty Free",
        brand: "Honeybee Gardens",
        seller: "Amazon",
        quantityInStock: 20,
      },
      {
        id: 2,
        name: "Revlon Red Enamel",
        price: "5",
        img: "https://i0.wp.com/thefemininefiles.com/wp-content/uploads/2021/04/Revlon-Daredevil.png?ssl=1",
        quantityInStock: 20,
        decription: "Daredevil is a deep teal creme.",
        brand: "Revlon",
        seller: "Nykaa",
      },
      {
        id: 3,
        name: "10 Piece Rose Brush Set",
        price: "50",
        img: "https://i.pinimg.com/564x/02/83/1a/02831afe656b721a6872c2cf47eddc48.jpg",
        quantityInStock: 20,
        decription:
          "Professional-Grade Beauty Tools That Do No Harm to Animals or the Planet",
        brand: "Luxie",
        seller: "Walmart",
      },
      {
        id: 4,
        name: "Vegan Eyeliner",
        price: "10",
        img: "https://tartecosmetics.com/dw/image/v2/BBPW_PRD/on/demandware.static/-/Sites-master-catalog-tarte/default/dw0919bcd6/796/ImageUpdate_9.28/796-tarteist-double-take-eyeliner-black-ALT-3.jpg?sw=610&sh=610&sm=fit",
        quantityInStock: 20,
        decription: "Kat Von D Tattoo Vegan Liner",
        brand: "Kat Von D",
        seller: "Amazon",
      },
      {
        id: 5,
        name: "Concealer",
        price: "20",
        img: "https://media.ilmakiage.com/media/catalog/product/cache/1/image/538x538/9df78eab33525d08d6e5fb8d27136e95/2/_/2_4.jpg",
        quantityInStock: 20,
        decription: "The Vegan Concealer that Erases Dark Circles",
        brand: "IL Makiage",
        seller: "IL Makiage",
      },
      {
        id: 6,
        name: "Natural Vegan Compact",
        price: "30",
        img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557162431-untitled-2-1528818065.jpg?crop=0.7575xw:1xh;center,top&resize=480:*",
        quantityInStock: 20,
        decription:
          "Sante Organic Natural Vegan Compact Face Powder 02 Neutral Beige 9g Brand NEW",
        brand: "Sante",
        seller: "Amazon",
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
