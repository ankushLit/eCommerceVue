<template>
  <!--
   <div class="login">
    <h1>This is an Login page</h1>
  </div> 
  
  <form>
    <h3>Login</h3>
    <div class="form-group">
      <label for="username">Email</label>
      <input type="email" class="form-control" placeholder="Email" />
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" placeholder="Password" />
    </div>

    <button class="btn btn-primary btn-block">Login</button>
  </form> -->

  <div class="login">
    <h1>Sign In</h1>
    <form>
      <p>
        <input
          type="text"
          name="login"
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

      <a
        to="/"
        class="link bg-hot-pink ml2 mr2 mt3 pv2 ph3 bn br2 white tc db dib-ns pointer"
        @click="authenticateuser()"
        >Sign In</a
      >

      <router-link
        to="/signup"
        class="link bg-purple mt3 pv2 ph3 bn br2 white tc db dib-ns pointer"
        >Sign Up</router-link
      >
      <!-- <p class="submit">
        <input
          type="submit"
          name="commit"
          value="Sign In"
          @click="authenticateuser()"
        />
      </p> -->
    </form>
    <div id="msg"></div>
  </div>
</template>

<script>
export default {
  name: "Login",
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    authenticateuser() {
      var uname = document.getElementById("username").value;
      var passwrd = document.getElementById("password").value;
      console.log(uname);
      console.log(passwrd);
      var userCheck = false;
      for (const user of this.users) {
        if (
          uname.toLowerCase() == user.username.toLowerCase() &&
          passwrd == user.password
        ) {
          this.$store.dispatch("authenticateUser");
          this.$store.state.authUid = user.userid;
          console.log("correct ID" + this.$store.state.isAuthenticated);
          userCheck = true;
          this.$router.push("/");
          break;
        }
      }
      if (!userCheck) {
        // handle incorrect
        //alert("Incorect Id or password");
        //var div = document.getElementById("msg").value;
        document.getElementById("msg").className = "error";
        document.getElementById("msg").innerHTML = "Incorect Id or Password";
        console.log("Incorrect ID " + this.$store.state.isAuthenticated);
      } else {
        document.getElementById("msg").innerHTML = "";
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: white;
  padding: 5px;
  margin: 5px 0 15px 0;
  background: red;
}

.login {
  position: relative;
  margin: 30px auto;
  padding: 20px 20px 20px;
  width: 600px;
  background: lightpink;
  border-radius: 3px;
}

.login h1 {
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

.login p {
  margin: 20px 0 0;
}

.login p:first-child {
  margin-top: 0;
}

.login input[type="text"],
.login input[type="password"] {
  width: 278px;
}

.login p.submit {
  text-align: right;
}

.login-help {
  margin: 20px 0;
  font-size: 11px;
  color: white;
  text-align: center;
  text-shadow: 0 1px #2a85a1;
}

.login-help a {
  color: #cce7fa;
  text-decoration: none;
}

.login-help a:hover {
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
