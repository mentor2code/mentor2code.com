---
title:  การทำ Authentication
lang: th-TH
tobeListed: false
meta:
  - name: description
    content: การทำ Authentication
  - name: keywords
    content: การทำ Authentication
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is322/)

## การทำ Authentication

เมื่อสร้าง components ประกอบเป็น pages เพื่อใช้งานตามฟังก์ชั่นต่าง ๆ เช่น ฟอร์ม และการทำ input validation ขั้นตอนถัดมา คือ การทำ authentication เพื่อเป็นการระบุตัวตนของผู้ใช้งานในกรณีที่ web application ที่ถูกสร้างขึ้นนั้นมีความจำเป็นที่ต้องจำกัดการเข้าถึงเฉพาะกับผู้ที่ได้รับอนุญาต หรือระบุตัวตนได้เท่านั้น โดยในการทำ authentication นั้นสามารถทำได้หลายวิธี โดยในบทเรียนนี้จะใช้ Firebase Auth ซึ่งเป็นบริการของ Google Cloud Platform โดยที่เราไม่ต้องมี backend service ของตัวเอง

- Catch up การบ้าน week 11
  - แก้ไข **wk07-xxx** โดยใส่ vuelidate เพื่อตรวจสอบการกรอกข้อมูลในเบื้องต้น
  - เฉลย **wk09-xxx** ดึงข้อมูลจาก reddit มาแสดงผล
- ปรับแต่ง **wk08-xxx** ให้สามารถ login ได้ ซึ่งบทเรียนนี้จะทำการนำ Firebase Auth มาใช้งานเป็น authentication service
  - ติดตั้ง firebase เพื่อใช้สำหรับการทำ authentication
  - สร้างหน้า Login สำหรับรับข้อมูล username และ password และตั้งค่า vuelidate ในหน้า Login เพื่อตรวจสอบ input จาก user

### แบบฝึกหัด

### 1. Catch up การบ้าน week 11

- แก้ไข **wk07-xxx** โดยใส่ vuelidate เพื่อตรวจสอบการกรอกข้อมูลในเบื้องต้น
- เฉลย **wk09-xxx** ดึงข้อมูลจาก reddit มาแสดงผล

### 2. ปรับแต่ง **wk08-xxx** ให้สามารถ login ได้

- ติดตั้ง firebase ลงในโปรเจ็ค wk08-xxx ดังภาพ

```sh
yarn add firebase
```

- สร้าง firebase.js ในโฟล์เดอร์ src/plugins โดยมีเนื้อหาดังภาพ
  - import firebase ดังบรรทัดแรก
  - สร้างตัวแปร firebaseConfig ดังบรรทัดที่ 3 (สำหรับ API key ให้ดูใน google class)
  - Initial firebaseApp ดังบรรทัดที่ 14

```js{3,14}
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "ใส่ apiKey",
    authDomain: "mentor2code.firebaseapp.com",
    databaseURL: "https://mentor2code.firebaseio.com",
    projectId: "mentor2code",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
  };

firebase.initializeApp(firebaseConfig);

```

- แก้ไขไฟล์ main.js โดย import firebase plugins ดังบรรทัดที่ 3

```js{3}
import "./plugins/buefy-vue";
import "./plugins/vuelidate";
import "./plugins/firebase";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount("#app");
```

- แก้ไขไฟล์ LoginPage.vue โดยให้ import firebase ดังภาพ
  - ใส่ตัวแปร loginResult เพิ่มใน data ฟังก์ชั่นดังบรรทัดที่ 26
  - แสดงผลตัวแปร loginResult ดังบรรทัดที่ 10
  - import firebase เพื่อใช้งาน ดังบรรทัดที่ 17-18

```vue{10,17-18,26}
<template>
  <div>
    ....
    <p>Dirty : {{ $v.form.$dirty }}</p>
    <p>Invalid : {{ $v.form.$invalid }}</p>
    <p>Require username: {{ $v.form.username.required }}</p>
    <p>User name must be email: {{ $v.form.username.email }}</p>
    <p>Require password: {{ $v.form.password.required }}</p>
    <p>Password must be longer than 4: {{ $v.form.password.minLength }}</p>
    <p>Login result : {{ this.loginResult }}</p>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";

import { required, minLength, email } from "vuelidate/lib/validators";
import firebase from "firebase/app";
import "firebase/auth";
...
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      loginResult: {}
    };
...
</script>

```

- แก้ไข touch method เพื่อเพิ่มขั้นตอนการ login ผ่าน firebase
  - เพิ่มขั้นตอนในการตรวจสอบว่า หาก validate form แล้ว invalid ให้ไม่ดำเนินการต่อ (ดูบรรทัดที่ 7)
  - เรียกใช้งาน firebase.auth() เพื่อ login ด้วย email และ password (ดูบรรทัดที่ 11)
  - หาก login สำเร็จให้ route ไปหน้า /ex03 (ดูบรรทัดที่ 14)

```vue{7-9,11,14}
<script>
  ...
  methods: {
    touch() {
      this.$v.form.$touch();

      if (this.$v.form.$invalid){
        return;
      }

      firebase.auth().signInWithEmailAndPassword(this.form.username, this.form.password)
        .then(data => {
          this.loginResult = data.user;
          this.$router.push("/ex03");
        })
        .catch(error => {
          this.loginResult = error;
        });
    },
  ...
  }
</script>
```

- แก้ไข reset method เพื่อเพิ่มขั้นตอนการ logout ผ่าน firebase
  - เรียกใช้งาน firebase.auth() เพื่อ login (ดูบรรทัดที่ 7)

```vue{7}
<script>
  methods: {
    ...
    reset() {
      this.$v.form.$reset();

      firebase.auth().signOut()
        .then(data => {
          this.loginResult = data;
        })
        .catch(error => {
          this.loginResult = error;
        });
    }
  }
</script>
```

- เราสามารถจำกัดการเข้าถึง components ต่าง ๆ หาก user ยังไม่ได้ทำการ login ผ่าน vue-router ได้ โดยมีขั้นตอนดังนี้
  - แก้ไขไฟล์ index.js ในโฟล์เดอร์ src/router
  - เพิ่มการ import firebase ดังบรรทัดที่ 4-5
  - เพิ่ม router.beforeEach เพื่อเป็นการตรวจสอบว่าในการเข้าถึงในแต่ละ route นั้น user ได้ทำการ login แล้วหรือยัง หาก user ยังไม่ได้ login ให้ route กลับไปยังหน้า login ทุกครั้ง

```js{4-5,11,13-15}
import Vue from "vue";
import VueRouter from "vue-router";

import firebase from "firebase/app";
import "firebase/auth";
...
export const router = new VueRouter({
  routes: routeList,
});

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      next("/");
    }
  });

  next();
});

```

### 3. ทบทวน

- สร้างหน้า registration จาก wk07 ที่ใส่ vuelidate แล้ว
- เพิ่ม message ที่หน้า login หาก user ถูก redirect กลับมายังหน้า login เพราะไม่เคย login มาก่อน
  - ใช้ event-bus
  - ใช้ vuex
- Review โปรเจ็คเดี่ยว
- Initial โปรเจ็คกลุ่ม

### 4. ส่งงาน

- Push งานขึ้นบน GitHub ตาม repository ของแต่ละคน โดยใส่ commit msg ว่า "Week 12 - Homework"

## เอกสารอ้างอิง

- [\[1\] Build a Vue App with Firebase Authentication and Database](<https://blog.bitsrc.io/build-a-vue-app-with-firebase-authentication-and-database-e7d6816f79af>)
- [\[2\] Vue + Firebase authentication](<https://blog.logrocket.com/vue-firebase-authentication/>)
- [\[3\] How to use Firebase Authentication with Vue](<https://garywoodfine.com/vue-app-with-firebase-authentication/>)
- [\[4\] Firebase Authentication](<https://firebase.google.com/docs/auth>)
