<template>
  <div>
    <div class="ph7">
      <h1>Your Orders</h1>
      <div class="overflow-auto">
        <div
          v-for="order in orders"
          :key="order.orderId"
          class="flex flex-column bg-washed-red mt2"
        >
          <div class="bg-near-black moon-gray">
            <h3 class="fl ml5">Order Number: {{ order.orderId }}<br /></h3>
            <h3 class="fr mr6">Date: {{ order.date }}</h3>
          </div>
          <div class="flex justify-around ph3 pv3">
            <div class="w-25 mr2">
              <span class="fw6 tl fl">Product</span>
            </div>
            <div class="w-25 mr2">
              <span class="fw6 tl fl">Price</span>
            </div>
            <div class="w-25 mr2">
              <span class="fw6 tl fl">Quantity</span>
            </div>
            <div class="w-25 mr2">
              <span class="fw6 tl fl">Total</span>
            </div>
          </div>
          <div
            v-for="product in order.items"
            :key="product.id"
            class="bg-light-gray"
          >
            <!-- product details section -->
            <div class="flex justify-around ph3 bg-washed-yellow">
              <div class="w-25 pv3 mr2">
                <span class="fl tl">{{ product.name }}</span>
              </div>
              <div class="w-25 pv3 mr2">
                <span class="fl tl">{{ product.price }}</span>
              </div>
              <div class="w-25 pv3 mr2">
                <span class="fl tl">{{ product.quantity }}</span>
              </div>
              <div class="w-25 pv3 mr2">
                <span class="fl tl"
                  >${{ product.price * product.quantity }}</span
                >
              </div>
            </div>
            <!-- comment adding section -->
            <div
              v-if="product.comment == null"
              class="flex justify-around ph3 bg-washed-blue"
            >
              <div class="w-100 pv3 mr2 fl">
                <textarea
                  class="w-100"
                  type="text"
                  name="comment"
                  value=""
                  v-bind:id="product.itemId"
                  placeholder="Comment"
                />
              </div>
              <div class="w-50 pv3 mr2">
                <span class="fl"
                  >Rating<input
                    v-model.number="product.rating"
                    min="1"
                    :max="5"
                    type="number"
                    id="rating"
                    class="form-control w-25 d-block ma2"
                /></span>
              </div>
              <div class="w-50 pv3 mr2">
                <a
                  to="/"
                  class="link bg-green pv2 ph3 bn br2 white tc db dib-ns pointer ma2 fl"
                  @click="addComment(order.orderId, product.id, product.itemId)"
                  >Add</a
                >
              </div>
            </div>
            <!-- old comments -->

            <div
              v-if="product.comment != null"
              class="flex flex-column w-100 mr2 pa3"
            >
              <div class="fw6 tl fl flex justify-between">
                Comment
                <div class="fw6 tl fl">
                  Rating
                  <span class="bg-red pv1 ph2 br2 white"
                    >{{ product.rating }}
                  </span>
                </div>
                <span class="mt1">{{ product.comment.date }}</span>
              </div>
              <div class="tl fl mt1">{{ product.comment.text }}</div>
            </div>

            <!-- end old comments -->
          </div>
        </div>
      </div>
      <div class="w-80 center" v-if="!orders.length">
        <p class="bg-washed-red pv3 ph2 br2">No Orders yet!</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderHistoryComponent",
  computed: {
    orders() {
      for (const user of this.$store.state.users) {
        if (this.$store.state.authUid == user.userid) {
          return user.orders;
        }
      }
      return [];
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
    addComment(orderid, productid, itemId) {
      var comment = document.getElementById(itemId).value;
      var rating = document.getElementById("rating").value;
      const orderPackage = {
        orderid: orderid,
        productid: productid,
        comment: comment,
        rating: rating,
      };
      this.$store.dispatch("addComment", orderPackage);
    },
  },
};
</script>
