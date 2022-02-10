<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <form>
      <p>
        <input
          type="text"
          name="fullname"
          value=""
          id="fullname"
          placeholder="Full Name"
        />
      </p>
      <p>
        <input
          type="text"
          name="name"
          value=""
          id="username"
          placeholder="Username or Email"
        />
      </p>
      <p>
        <input
          type="password"
          name="password"
          value=""
          id="password"
          placeholder="Password"
        />
      </p>
      <p>
        <!-- <input
          type="text"
          name="shippingaddress"
          value=""
          id="shippingaddress"
          placeholder="Shipping Address"
        /> -->
        <textarea rows="5" id="shippingaddress" name="shippingaddress">
        </textarea>
      </p>
      <a
        to="/"
        class="link bg-green mt3 pv2 ph3 bn br2 white tc db dib-ns pointer"
        @click="adduser()"
        >Sign Up</a
      >
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  methods: {
    adduser() {
      var uname = document.getElementById("username").value;
      var fname = document.getElementById("fullname").value;
      var passwrd = document.getElementById("password").value;
      var shippingaddress = document.getElementById("shippingaddress").value;
      this.$store.state.users.push({
        username: uname,
        userid: Math.floor(Math.random() * (100000 - 1) + 1),
        name: fname,
        password: passwrd,
        shippingaddress: shippingaddress,
        orders: [],
      });
      this.$store.dispatch("authenticateUser");
      this.$store.state.authUid =
        this.$store.state.users[this.$store.state.users.length - 1].userid;
      this.$router.push("/");
      console.log(this.$store.state.users);
      console.log(fname);
      console.log(passwrd);
    },
  },
};
</script>

<style scoped>
.signup {
  position: relative;
  margin: 30px auto;
  padding: 20px 20px 20px;
  width: 600px;
  background: lightpink;
  border-radius: 3px;
}

.signup h1 {
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

.signup p {
  margin: 20px 0 0;
}

.signup p:first-child {
  margin-top: 0;
}

.signup input[type="text"],
.signup input[type="password"] {
  width: 278px;
}

.signup p.submit {
  text-align: right;
}

.signup-help {
  margin: 20px 0;
  font-size: 11px;
  color: white;
  text-align: center;
  text-shadow: 0 1px #2a85a1;
}

.signup-help a {
  color: #cce7fa;
  text-decoration: none;
}

.signup-help a:hover {
  text-decoration: underline;
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

input[type="text"],
input[type="password"] {
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

input[type="text"]:focus,
input[type="password"]:focus {
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

.lt-ie9 input[type="text"],
.lt-ie9 input[type="password"] {
  line-height: 34px;
}
</style>
