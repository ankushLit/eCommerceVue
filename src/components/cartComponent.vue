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
                <a class="red" @click="removeProduct(product)" id="delete-item"
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
        <router-link
          to="/"
          class="link bg-green mt3 pv2 ph3 bn br2 white tc db dib-ns"
          ><i class="fas fa-space-shuttle mr2"></i>Continue
          Shopping</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartComponent",
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
  },
  methods: {
    removeProduct(product) {
      this.$store.dispatch("removeProduct", product);
    },
    removeCartProducts() {
      this.$store.dispatch("removeCartProducts");
    },
  },
};
</script>
