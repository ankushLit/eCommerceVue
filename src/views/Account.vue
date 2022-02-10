<template>
  <div class="account">
    <h1>Update Address</h1>
    <form>
      <p>
        <input
          type="text"
          name="shippingaddress"
          v-bind:value="userAddress"
          id="shippingaddress"
          placeholder="Shipping Address"
        />
      </p>

      <a
        to="/"
        class="link bg-hot-pink mt3 pv2 ph3 bn br2 white tc db dib-ns pointer"
        @click="updateaddress()"
        >Update</a
      >
      <div id="msg"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Account",
  computed: {
    userAddress() {
      for (var i = 0; i < this.$store.state.users.length; i++) {
        if (this.$store.state.authUid == this.$store.state.users[i].userid) {
          return this.$store.state.users[i].shippingaddress;
        }
      }
      return "";
    },
  },
  methods: {
    updateaddress() {
      var shippingaddress = document.getElementById("shippingaddress").value;
      console.log(shippingaddress);
      for (var i = 0; i < this.$store.state.users.length; i++) {
        if (this.$store.state.authUid == this.$store.state.users[i].userid) {
          document.getElementById("msg").className = "success";
          document.getElementById("msg").innerHTML = "Address updated";
          console.log("Incorrect ID " + this.$store.state.isAuthenticated);
          this.$store.state.users[i].shippingaddress = shippingaddress;
        }
      }
    },
  },
};
</script>

<style scoped>
.success {
  color: white;
  padding: 5px;
  margin: 5px 5px 15px 0;
  background: green;
}

.account {
  position: relative;
  margin: 30px auto;
  padding: 20px 20px 20px;
  width: 600px;
  background: lightpink;
  border-radius: 3px;
}

.account h1 {
  margin: -20px -20px 21px;
  line-height: 40px;
  font-size: 15px;
  font-weight: bold;
  color: #555;
  text-align: center;
  text-shadow: 0 1px white;
  background: #f3f3f3;
  border-bottom: 1px solid #cfcfcf;
  border-radius: 3px 3px 0 0;
  background-image: -webkit-linear-gradient(top, whiteffd, #eef2f5);
  background-image: -moz-linear-gradient(top, whiteffd, #eef2f5);
  background-image: -o-linear-gradient(top, whiteffd, #eef2f5);
  background-image: linear-gradient(to bottom, whiteffd, #eef2f5);
  -webkit-box-shadow: 0 1px whitesmoke;
  box-shadow: 0 1px whitesmoke;
}

.account p {
  margin: 20px 0 0;
}

.account p:first-child {
  margin-top: 0;
}

.account input[type="text"] {
  width: 278px;
}

.account p.submit {
  text-align: right;
}

:-moz-placeholder {
  color: #c9c9c9 !important;
  font-size: 13px;
}

::-webkit-input-placeholder {
  color: #ccc;
  font-size: 13px;
}

input {
  font-family: "Lucida Grande", Tahoma, Verdana, sans-serif;
  font-size: 14px;
}

input[type="text"] {
  margin: 5px;
  padding: 0 10px;
  width: 200px;
  height: 34px;
  color: #404040;
  background: white;
  border: 1px solid;
  border-color: #c4c4c4 #d1d1d1 #d4d4d4;
  border-radius: 2px;
  outline: 5px solid #eff4f7;
  -moz-outline-radius: 3px;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12);
}

input[type="text"]:focus {
  border-color: #7dc9e2;
  outline-color: #dceefc;
  outline-offset: 0;
}

input[type="submit"] {
  padding: 0 18px;
  height: 29px;
  font-size: 12px;
  font-weight: bold;
  color: #527881;
  text-shadow: 0 1px #e3f1f1;
  background: #cde5ef;
  border: 1px solid;
  border-color: #b4ccce #b3c0c8 #9eb9c2;
  border-radius: 16px;
  outline: 0;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  background-image: -webkit-linear-gradient(top, #edf5f8, #cde5ef);
  background-image: -moz-linear-gradient(top, #edf5f8, #cde5ef);
  background-image: -o-linear-gradient(top, #edf5f8, #cde5ef);
  background-image: linear-gradient(to bottom, #edf5f8, #cde5ef);
  -webkit-box-shadow: inset 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.15);
}

input[type="submit"]:active {
  background: #cde5ef;
  border-color: #9eb9c2 #b3c0c8 #b4ccce;
  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
}

.lt-ie9 input[type="text"] {
  line-height: 34px;
}
</style>
