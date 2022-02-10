<template>
  <div>
    <header class="black-80 tc pt4 avenir bg-light-red">
      <h1 class="mt2 mb0 baskerville i fw1 f1 mh2" style="color: #fe0083">
        E-Commerce Store
      </h1>
      <nav class="bt bb tc center justify-between">
        <router-link class="link black relative" to="/">
          <a
            class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pv3 ph2 ph4-l"
            >&#x2022; Home &#x2022;
          </a></router-link
        >
        <router-link class="link black relative" to="/cart">
          <a
            class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pv3 ph2 ph4-l"
          >
            <div v-if="totalCartItems == 0">&#x2022; Cart &#x2022;</div>
            <div v-if="totalCartItems != 0">
              &#x2022; Cart
              <span class="bg-yellow pv1 ph2 br2"
                >{{ totalCartItems }} &#x2022;</span
              >
            </div>
          </a>
        </router-link>
        <router-link class="link black relative" to="/orderhistory">
          <a
            v-if="isAuthenticated"
            class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pv3 ph2 ph4-l pointer"
          >
            &#x2022; Order History &#x2022;
          </a></router-link
        >
        <router-link class="link black relative" to="/account"
          ><a
            v-if="isAuthenticated"
            class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pv3 ph2 ph4-l pointer"
          >
            &#x2022; Address &#x2022;</a
          ></router-link
        >
        <a
          v-if="isAuthenticated"
          @click="logout()"
          class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pv3 ph2 ph4-l pointer"
        >
          &#x2022;Logout&#x2022;</a
        >
        <router-link class="link black relative" to="/login">
          <a
            v-if="!isAuthenticated"
            class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pv3 ph2 ph4-l pointer"
          >
            &#x2022; Login &#x2022;
          </a></router-link
        >
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
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("authenticateUser");
      this.$router.push("/");
    },
  },
};
</script>
