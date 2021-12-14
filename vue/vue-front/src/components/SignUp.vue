<template>
  <div>
      <h1>offco</h1>
      <i class="fas fa-times  cancel" v-on:click="cancel"></i>
      <hr style= "width:100%; height:2px; border:none; background-color:rgb(255, 134, 94)">
      <h2>회원가입</h2>
      <form v-on:submit.prevent="check">
           <input class="sg_form" type="text" placeholder="이름" v-model="username"><br>
           <input class="sg_form" type="text" placeholder="이메일" v-model="usermail"><br>
           <input class="id_form" type="text" placeholder="아이디" v-model="userid">
           <button class="check" v-on:click.prevent="idcheck">중복확인</button><br>
           <input class="sg_form" type="password" placeholder="비밀번호" v-model="userpassword"><br>
           <input class="sg_form" type="password" placeholder="비밀번호 확인" v-model="checkpassword"><br>
           <button class="bt_signup_form" type="submit">회원가입</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return{
            username: '',
            usermail: '',
            userid: '',
            userpassword: '',
            checkpassword: ''

        }
    },
    methods: {
        check() {
            if(this.userpassword != this.checkpassword) {
                alert(' 비밀번호를 다시 확인해주세요')
            }
            else {
                this.signup()
            }
        },
        signup() {
            this.$store.dispatch('signup', {username: this.username, usermail: this.usermail, userid: this.userid, userpassword: this.userpassword, checkpassword: this.checkpassword})
            this.$router.push('./login')
        },
        idcheck() {
            return new Promise((resolve, reject) => {
                axios.get(`${'http://localhost:8000'}/signup?userid=${this.userid}`).then((res) => {
                    console.log(res.data);
                if(res.data == 0 ) {
                    alert('사용가능한 아이디입니다')
                }
                else {
                    alert('이미 사용중인 아이디입니다')
                }
                resolve(res);
            }).catch((error) => {
                reject(error);
            })
            })
        },
        cancel() {
            this.$router.push('./login')
        }
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kite+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
div {
    font-size: 10px;
    background-color: white;
    text-align: center;
    /* margin: auto 0; */
    /* width: 100vw; */
    /* height: 100vh; */
    position: relative;
    
}

h1 {
    display: inline-block;
    font-family: 'Kite One', sans-serif;
    font-weight: lighter;
    color: rgb(255, 134, 94);
    font-size: 3em;
    width: 22vw;
    height: 7vh;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
  }
   h2 {
      display: inline-block;
      font-family: 'Kite One', sans-serif;
      font-weight: normal;
      color: rgb(255, 134, 94);
      font-size: 18px;
      width: 25vw;
      height: 6vh;
      margin: 0
  }
  .sg_form {
      display: inline-block;
      position: relative;
      width: 82vw;
      height: 6.1vh;
      margin-left: 0;
      margin-bottom: 1.15em;
      border:1px solid rgba(57, 62, 70, 100);
      border-radius: 0px;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
  }
  .id_form {
      /* float: left; */
      display: inline-block;
      position: relative;
      justify-content: space-between;
      /* margin-left: -130px; */
      width: 57vw;
      height: 6.1vh;
      /* margin-left: 2em; */
      margin-bottom: 1.15em;
      border:1px solid rgba(57, 62, 70, 100);
      border-radius: 0px;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
  }

  .bt_signup_form {
      font-family: 'Gothic A1', sans-serif;
      font-size: 2.6em;
      width: 82vw;
      height: 9vh;
      border:1px solid rgb(255, 134, 94);
      border-radius: 15px;
      background-color: white;
      color: rgb(255, 134, 94);
      margin-top: 0.8em;
  }
  .check {
      /* float: right; */
      /* position: absolute; */
      display: inline-block;
      justify-content: flex-end;
      font-family: 'Gothic A1', sans-serif;
      font-size: 1.5em;
      width: 25vw;
      height: 6.9vh;
      border:1px solid rgb(255, 134, 94);
      border-radius: 15px;
      background-color: white;
      color: rgb(255, 134, 94);
      left: 70vw;
      top: -1.5vh;
      
  }
  .cancel {
    /* display: flex; */
    position: absolute;
    color: rgb(255, 134, 94);
    font-size: 3em;
    /* margin-left: auto; */
    margin-top: 0.5em;
    margin-bottom: 0.2em;
    left: 85%;
    /* width: 55vw; */
  }
  label {
    display: inline;
     font-family: 'Gothic A1', sans-serif;
     font-size: 15px;
     margin-left: 0;
     text-align: left;
  }
  
  input {
      position: relative;
      display: inline-block;
      justify-content: space-between;
  }
</style>