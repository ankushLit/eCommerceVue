<template>
  <div class="ba bw2 b--orange br3" style="margin: 2rem">
    <div v-for="product in products" :key="product.id" class="dib">
        
      <article v-if="product.id == selectedProductId" class="center">
        <div class="mw9 center bg-light-yellow">
          <div class="cf">
            <div class="flex items-center">
              <img class="fl w-40 bg-dark-red" v-bind:src="product.img" />
              <div class="fl w-100 w-50 pa2">
                <div class="">
                  <h1 class="f1">{{ product.name }}</h1>
                </div>
                <div class="">
                  <h3 class="f3">Brand :{{ product.brand }}</h3>
                </div>
                <div class="">
                  <h3 class="f4">Price : ${{ product.price }}</h3>
                </div>
                <div class="">
                  <h3 class="f4">Description : {{ product.decription }}</h3>
                </div>
                <div class=" ">
                  <h4 class="f5">Seller :{{ product.seller }}</h4>
                </div>

                <button
                  class="bg-hot-pink white bn pa2 w-70 br2 f7 fw2 mv2 pointer"
                  @click="addProductToCart(product)">
                  Add to cart
                </button>
                <div v-for="cartItem in cartItems" :key="cartItem" class="dib">
                <div v-if="cartItem.id == selectedProductId" >
                <h1>Cart Item:</h1> <input
                  v-model.number="cartItem.quantity"
                  min="1"
                  :max="product.newQuantityInStock"
                  type="number"
                  id="quantity"
                  class="form-control w-75 d-block"
                />
              </div>
              </div>

              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-column items-start">
        <h1 class="fl">Reviews</h1>
        <div class="flex flex-wrap"> 
        <div class="outline w-49 pa3 mr2 ml2 mt2 mb2" v-for="review in product.comments" :key="review">
          <h3 class="f4">{{ review.name }}</h3>
          <p class="">Rating {{review.rating}}/5</p>
          <p class="">{{review.comment}}</p>
          <h4 class="f6">Date :- {{ review.date }}</h4>
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
    selectedProductId() {
      return this.$store.state.selectedProductId;
    },
    cartItems(){
      return this.$store.state.cart;
    }
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
  },
};
</script>
