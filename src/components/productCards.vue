<template>
  <div class="mh7">
    <div v-for="product in products" :key="product.id" class="dib">
      <article
        class="br2 ba dark-gray b--black-10 mv3 w-100 w-90-m w-90-l mw5 center"
      >
        <img v-bind:src="product.img" />
        <div class="pa2 ph3-ns pb3-ns bg-washed-red">
          <div class="dt w-100 mt1">
            <div class="">
              <h3 class="f6 mv0">{{ product.name }}</h3>
            </div>
            <div class="">
              <p class="f5 mv1">${{ product.price }}</p>
            </div>
            <div>
              <button
                class="bg-black white bn pa2 w-70 br2 f7 fw2 mv2 pointer"
                @click="addProductToCart(product)"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductsPage",
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
  },
};
</script>
