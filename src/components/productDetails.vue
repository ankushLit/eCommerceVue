<template>
  <div class="ba bw2 b--orange br3" style="margin:2rem" >
    <div v-for="product in products" :key="product.id" class="dib">          
        <article v-if="product.id == 1" class="center">


<div class="mw9 center ">
  <div class="cf ">
    <div class="fl w-100 w-50-ns pa2">
        <img class="fl w-50 bg-dark-red" v-bind:src="product.img" />
    </div>
    <div class="fl w-100 w-50-ns pa2 bg-light-yellow">
     <div class="">
              <h1 class="f1">{{ product.name }}</h1>
            </div>
              <div class="">
              <h3 class="f3" >Brand :{{ product.brand }}</h3>
            </div>
            <div class="">
              <h3 class="f4" >Price : ${{ product.price }}</h3>
            </div>
            <div class="">
              <h3 class="f4" >Description : {{ product.decription }}</h3>
            </div>
            <div class=" ">
              <h4 class="f5" >Seller :{{ product.seller }}</h4>
            </div>
          
            <div>
              <button
                class="bg-hot-pink white bn pa2 w-70 br2 f7 fw2 mv2 pointer"
                @click="addProductToCart(product)"
              >
                Add to cart
              </button>
            </div>
    </div>
  </div>
</div>
      </article>
      </div>
      </div>
</template>
<script>
export default {
  name: "ProductDetailPage",
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
