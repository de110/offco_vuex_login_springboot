<template>
  <div>
    <h1>offco</h1>
    <h2>로그인 유지<input type="checkbox" v-model="setlogin" /></h2>
    <input
      class="form"
      type="text"
      placeholder="아이디"
      v-model="userid"
    /><br />
    <input
      class="form"
      type="password"
      placeholder="비밀번호"
      v-model="password"
      @keyup.enter="login()"
    /><br />
    <button class="bt_login_form" v-on:click="login" type="submit">LOGIN</button
    ><br />
    <h3>
      <router-link to="/findid">아이디 찾기</router-link>&nbsp;&nbsp;&nbsp; |
      <router-link to="/findpw">&nbsp;&nbsp;&nbsp;비밀번호 찾기</router-link>
    </h3>
    <button class="bt_signup_form" v-on:click="signup">회원가입</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userid: "",
      password: "",
      setlogin: false
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        userid: this.userid,
        password: this.password,
        setlogin: this.setlogin
      });
    },
    signup() {
      this.$router.replace("./signup");
    }
    // staylogin() {
    //     this.off =! this.off

    //     if(this.off == true) {
    //         if(this.username == ""){
    //             this.username = JSON.parse(localStorage.getItem("user")).sigid
    //         }if(this.userpassword == "") {
    //             this.userpassword = JSON.parse(localStorage.getItem("user")).sigpw
    //         }
    //         else{
    //             this.username = JSON.parse(localStorage.getItem("user")).sigid
    //             this.userpassword = JSON.parse(localStorage.getItem("user")).sigpw
    //         }
    //     }
    //     // console.log(this.off);
    //     // this.username = localStorage.getItem("user").sigid
    //     // console.log(this.username);
    //     // this.userpassword = localStorage.getItem("user").sigpw
    // }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kite+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap");
div {
  font-size: 10px;
  background-color: rgb(254, 249, 239);
  text-align: center;
  width: 100vw;
  height: 100vh;
}

h1 {
  display: inline-block;
  font-family: "Kite One", sans-serif;
  font-weight: lighter;
  color: rgb(255, 134, 94);
  font-size: 9em;
  width: 62.5vw;
  height: 22.8vh;
  margin-top: 0.45em;
  margin-bottom: 0;
}
h2 {
  margin-left: auto;
  margin-right: 2em;
  font-weight: lighter;
  font-family: "Gothic A1", sans-serif;
  font-size: 1.3em;
  width: 28.1vw;
  height: 2.63vh;
  margin-top: 2.31em;
}
.form {
  display: inline-block;
  width: 82vw;
  height: 6.1vh;
  margin-left: 0;
  margin-bottom: 1.15em;
  border: 1px solid rgba(162, 210, 255, 100);
  border-radius: 15px;
}
.bt_login_form {
  font-family: "Gothic A1", sans-serif;
  font-size: 2.6em;
  width: 82vw;
  height: 9vh;
  border: rgb(28, 31, 34);
  border-radius: 15px;
  background-color: rgb(162, 210, 255);
  color: rgb(57, 62, 70);
  margin-top: 0.8em;
  margin-bottom: 0.8em;
}
.bt_signup_form {
  font-family: "Gothic A1", sans-serif;
  font-size: 2.6em;
  width: 82vw;
  height: 9vh;
  border: 1px solid rgb(255, 134, 94);
  border-radius: 15px;
  background-color: white;
  color: rgb(255, 134, 94);
  margin-top: 0.8em;
}
a {
  text-decoration: none;
  color: rgb(57, 62, 70);
  margin-top: 0;
}
h3 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: normal;
}
</style>
