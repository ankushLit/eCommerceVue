<template>
  <div class="home">
    <ProductsPage />
  </div>
</template>

<script>
import ProductsPage from "@/components/productCards.vue";
export default {
  name: "Home",
  components: {
    ProductsPage,
  },
};
</script>
