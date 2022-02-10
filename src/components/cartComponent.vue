<template>
  <div>
    <div class="ph7">
      <h1>Your Cart</h1>
      <div class="overflow-auto">
        <table class="f6 w-80 mw8 center" cellspacing="0">
          <thead>
            <tr class="stripe-dark">
              <th class="fw6 tl pa3 bg-white">Product</th>
              <th class="fw6 tl pa3 bg-white">Price</th>
              <th class="fw6 tl pa3 bg-white">Quantity</th>
              <th class="fw6 tl pa3 bg-white">Total</th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            <tr
              class="stripe-dark"
              v-for="product in products"
              :key="product.id"
            >
              <td class="pa3">{{ product.name }}</td>
              <td class="pa3">${{ product.price }}</td>
              <td class="pa3">
                <input
                  v-model.number="product.quantity"
                  min="1"
                  :max="product.newQuantityInStock"
                  type="number"
                  id="quantity"
                  class="form-control w-75 d-block"
                />
              </td>
              <td class="pa3">${{ product.price * product.quantity }}</td>
              <td class="pa3">
                <a
                  class="red pointer"
                  @click="removeProduct(product)"
                  id="delete-item"
                  >X</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-80 center" v-if="!products.length">
        <p class="bg-washed-red pv3 ph2 br2">No item in your cart!</p>
      </div>
      <div class="tl mw7 center w-100">
        <div v-if="products.length > 0" class="">
          <p class="f4">
            <span class="green fw6 mr2">Total:</span>${{ total }}
          </p>
        </div>
        <div class="flex justify-between">
          <router-link
            to="/"
            class="link bg-green mt3 pv2 ph3 bn br2 white dib-ns"
            >Continue Shopping</router-link
          >
          <router-link
            v-if="!isAuthenticated"
            to="/login"
            class="link bg-pink mt3 pv2 ph3 bn br2 white dib-ns"
            >Login to order</router-link
          >
          <a
            v-if="isAuthenticated && totalCartItems > 0"
            class="link bg-green mt3 pv2 ph3 bn br2 white dib-ns pointer"
            @click="placeOrder()"
            >Place Order</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartComponent",
  computed: {
    uid() {
      return this.$store.state.authUid;
    },
    products() {
      return this.$store.getters.cartProducts;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
    totalCartItems() {
      return this.$store.getters.cartItems;
    },
  },
  methods: {
    placeOrder() {
      this.$store.dispatch("pushProductToOrders", this.products);
    },
    removeProduct(product) {
      this.$store.dispatch("removeProduct", product);
    },
    removeCartProducts() {
      this.$store.dispatch("removeCartProducts");
    },
  },
};
</script>
