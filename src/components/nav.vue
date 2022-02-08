<template>
  <div>
    <header class="bg-white black-80 tc pt4 avenir">
      <h1 class="mt2 mb0 baskerville i fw1 f1 mh2">E-Commerce Store</h1>
      <nav class="bt bb tc mw7 center mt4 flex justify-between flex-wrap">
        <a
          class="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph2 ph4-l"
          ><router-link class="link black relative" to="/">Home</router-link>
        </a>
        <a
          class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pv3 ph2 ph4-l"
        >
          <router-link class="link black relative" to="/cart">
            <div v-if="totalCartItems == 0">Cart</div>
            <div v-if="totalCartItems != 0">
              Cart
              <span class="bg-yellow pv1 ph2 br2">{{ totalCartItems }}</span>
            </div>
          </router-link>
        </a>
        <a
          class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pv3 ph2 ph4-l pointer"
        >
          <router-link class="link black relative" to="/login"
            >Login</router-link
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
