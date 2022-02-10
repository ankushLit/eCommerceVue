<template>
  <div>
    <header class="black-80 tc pt4 avenir" style="background:#d11d7a70;">
      <h1 class="mt2 mb0 baskerville i fw1 f1 mh2" style="color: #fe0083;">E-Commerce Store</h1>
      <nav class="bt bb tc center justify-between" >
        <a
          class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pv3 ph2 ph4-l"
          ><router-link class="link black relative" to="/">&#x2022; Home &#x2022;</router-link>
        </a>
        <a
          class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pv3 ph2 ph4-l"
        >
          <router-link class="link black relative" to="/cart">
            <div v-if="totalCartItems == 0">&#x2022; Cart &#x2022;</div>
            <div v-if="totalCartItems != 0">
              &#x2022; Cart
              <span class="bg-yellow pv1 ph2 br2">{{ totalCartItems }} &#x2022;</span>
            </div>
          </router-link>
        </a>
        <a
          class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pv3 ph2 ph4-l pointer"
        >
          <router-link class="link black relative" to="/login"
            >&#x2022; Login &#x2022;</router-link
          >
        </a>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  computed: {
    totalCartItems() {
      return this.$store.getters.cartItems;
    },
  },
  methods: {},
};
</script>
