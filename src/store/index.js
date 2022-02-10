import { createStore } from "vuex";

export default createStore({
  state: {
    selectedProductId: 0,
    cart: [],
    isAuthenticated: false,
    authUid: 0,
    users: [
      {
        username: "rsharma6339@conestogac.on.ca",
        userid: 1,
        name: "Rajni Sharma",
        password: "test@123",
        orders: [
          {
            orderId: 1,
            date: "02/15/2022",
            items: [
              {
                id: 1,
                name: "Gluten Free Lipstic",
                price: "21",
                img: "https://m.media-amazon.com/images/I/51o0cDiIQ7L._SL1000_.jpg",
                quantity: 2,
                rating: 3,
                comment: {
                  id: 1,
                  date: "02/16/2021",
                  text: "hello",
                },
              },
            ],
          },
          {
            orderId: 2,
            date: "02/15/2022",
            items: [
              {
                id: 1,
                name: "Gluten Free Lipstic",
                price: "21",
                img: "https://m.media-amazon.com/images/I/51o0cDiIQ7L._SL1000_.jpg",
                quantity: 2,
                rating: 0,
                comment: null,
              },
            ],
          },
        ],
      },

      {
        username: "akarkar5918@conestogac.on.ca",
        userid: 2,
        name: "Ankush Karkar",
        password: "test@123",
        orders: [],
      },

      {
        username: "mlingam3499@conestogac.on.ca",
        userid: 3,
        name: "Mohan Lingam",
        password: "test@123",
        orders: [
          {
            orderId: 1,
            date: "02/15/2022",
            items: [
              {
                id: 1,
                name: "Gluten Free Lipstic",
                price: "21",
                img: "https://m.media-amazon.com/images/I/51o0cDiIQ7L._SL1000_.jpg",
                quantity: 2,
                rating: 3,
                comment: "Hello",
              },
            ],
          },
        ],
      },
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
        comments: [
          {
            name: "Rajni Sharma",
            date: "02/15/2021",
            rating: 5,
            comment: "This product rocks",
          },
          {
            name: "Ankush karkar",
            date: "02/15/2022",
            rating: 5,
            comment: "This product Amazing",
          },
          {
            name: "Mohan Lingam",
            date: "02/15/2020",
            rating: 5,
            comment: "This product yay",
          },
        ],
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
        comments: [
          {
            name: "Rajni Sharma",
            date: "02/15/2021",
            rating: 5,
            comment: "This product rocks",
          },
          {
            name: "Ankush karkar",
            date: "02/15/2022",
            rating: 5,
            comment: "This product Amazing",
          },
          {
            name: "Mohan Lingam",
            date: "02/15/2020",
            rating: 5,
            comment: "This product yay",
          },
        ],
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
        comments: [
          {
            name: "Rajni Sharma",
            date: "02/15/2021",
            rating: 5,
            comment: "This product rocks",
          },
          {
            name: "Ankush karkar",
            date: "02/15/2022",
            rating: 5,
            comment: "This product Amazing",
          },
          {
            name: "Mohan Lingam",
            date: "02/15/2020",
            rating: 5,
            comment: "This product yay",
          },
        ],
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
        comments: [
          {
            name: "Rajni Sharma",
            date: "02/15/2021",
            rating: 5,
            comment: "This product rocks",
          },
          {
            name: "Ankush karkar",
            date: "02/15/2022",
            rating: 5,
            comment: "This product Amazing",
          },
          {
            name: "Mohan Lingam",
            date: "02/15/2020",
            rating: 5,
            comment: "This product yay",
          },
        ],
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
        comments: [
          {
            name: "Rajni Sharma",
            date: "02/15/2021",
            rating: 5,
            comment: "This product rocks",
          },
          {
            name: "Ankush karkar",
            date: "02/15/2022",
            rating: 5,
            comment: "This product Amazing",
          },
          {
            name: "Mohan Lingam",
            date: "02/15/2020",
            rating: 5,
            comment: "This product yay",
          },
        ],
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
        comments: [
          {
            name: "Rajni Sharma",
            date: "02/15/2021",
            rating: 5,
            comment: "This product rocks",
          },
          {
            name: "Ankush karkar",
            date: "02/15/2022",
            rating: 5,
            comment: "This product Amazing",
          },
          {
            name: "Mohan Lingam",
            date: "02/15/2020",
            rating: 5,
            comment: "This product yay",
          },
        ],
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
    authenticateUser() {
      this.state.isAuthenticated = !this.state.isAuthenticated;
    },
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

    pushProductToOrders(context, products, userId) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      today = mm + "/" + dd + "/" + yyyy;
      for (var i = 0; i < this.state.users.length; i++) {
        if (this.state.users[i].userId == userId) {
          this.state.users[i].orders.push({
            orderId: Math.random(),
            date: today,
            items: products,
          });
        }
      }
    },
    addComment(context, orderPackage) {
      for (var x = 0; x < this.state.users.length; x++) {
        if (this.state.authUid == this.state.users[x].userid) {
          for (var i = 0; i < this.state.users[x].orders.length; i++) {
            if (this.state.users[x].orders[i].orderId == orderPackage.orderid) {
              for (
                var j = 0;
                j < this.state.users[x].orders[i].items.length;
                j++
              ) {
                console.log(j);
                if (
                  this.state.users[x].orders[i].items[j].id ==
                  orderPackage.productid
                ) {
                  const indexPackage = {
                    userIndex: x,
                    orderIndex: i,
                    productIndex: j,
                    comment: orderPackage.comment,
                  };
                  const commentPackage = {
                    productid: orderPackage.productid,
                    comment: orderPackage.comment,
                    rating: orderPackage.rating,
                  };
                  context.commit("addCommentTouser", indexPackage);
                  context.commit("addCommentToProduct", commentPackage);
                  break;
                }
              }
              break;
            }
          }
          break;
        }
      }
    },
  },
  mutations: {
    addCommentToProduct(state, commentPackage) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();
      today = mm + "/" + dd + "/" + yyyy;
      var user;
      for (var x = 0; x < state.users.length; x++) {
        if (state.authUid == state.users[x].userid) {
          user = state.users[x];
          break;
        }
      }

      for (var i = 0; i < state.products.length; i++) {
        if (commentPackage.productid == state.products[i].id) {
          state.products[i].comments.push({
            name: user.name,
            date: today,
            rating: commentPackage.rating,
            comment: commentPackage.comment,
          });
          break;
        }
      }
    },
    addCommentTouser(state, indexPackage) {
      console.log(indexPackage);
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();
      today = mm + "/" + dd + "/" + yyyy;
      state.users[indexPackage.userIndex].orders[indexPackage.orderIndex].items[
        indexPackage.productIndex
      ].comment = {
        id: Math.random(),
        date: today,
        text: indexPackage.comment,
      };
    },
    pushProductToCart(state, product) {
      state.cart.push({
        id: product.id,
        quantity: 1,
        img: product.img,
        name: product.name,
        price: product.price,
        newQuantityInStock: product.quantityInStock,
        rating: 0,
        comment: null,
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
