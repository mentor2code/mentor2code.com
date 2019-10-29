---
title:  การจัดการ Form Input และ Validation
lang: th-TH
tobeListed: false
meta:
  - name: description
    content: การจัดการ Form Input และ Validation
  - name: keywords
    content:  การจัดการ Form Input และ Validation
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is322/)

## การจัดการ Form Input และ Validation

ในการสร้าง component ที่เป็น form input เพื่อรับข้อมูลจากผู้ใช้ เพื่อที่จะนำข้อมูลเหล่านั้นไปประมวลผลต่อยัง Backend Service ต่าง ๆ นั้น จำเป็นต้องมีการตรวจสอบข้อมูลในฟอร์มเบื้องต้นก่อน เพื่อให้แน่ใจว่าข้อมูลที่จำเป็นนั้น ถูกกรอกมาอย่างครบถ้วนในฟอร์ม

- Catch up การบ้าน week 10
- ปรับแต่ง wk08-xxx ซึ่งบทเรียนนี้จะทำการสร้าง form input และใช้ vuelidate ในการทำ validation
  - ติดตั้ง vuelidate เพื่อใช้สำหรับการทำ form input validation
  - สร้างหน้า Login สำหรับรับข้อมูล username และ password และตั้งค่า vuelidate ในหน้า Login เพื่อตรวจสอบ input จาก user

### แบบฝึกหัด

### 1. Catch up การบ้าน week 10

ไม่มี

### 2. ติดตั้ง vuelidate เพื่อใช้สำหรับการทำ form input validation

Vuelidate เป็น model-based validation สำหรับ Vue.js ซึ่งสามารถนำมาใช้ในการทำ form input validation ได้โดยมีขั้นตอนดังต่อไปนี้

- ติดตั้ง vuelidate ผ่าน yarn

```sh
yarn add vuelidate
```

- สร้างไฟล์ vuelidate.js ในโฟล์เดอร์ src/plugins โดยมีข้อมูลดังภาพ (สังเกตได้ว่า เป็นเพียงการ import และเรียก Vue.use() เพื่อให้ Vue instance รู้จัก)

```js{4}
import Vue from "vue";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

```

- แก้ไขไฟล์ main.js เพื่อ import ไฟล์ vuelidate.js ที่สร้างขึ้นในขั้นตอนที่แล้ว (บรรทัดที่ 8) จากนั้นเราก็สามารถที่จะเรียกใช้งาน vuelidate ได้ในทุก components

```js{8}
import Vue from "vue";
import App from "./App.vue";

import { store } from "./store";
import { router } from "./router";

import "./plugins/buefy-vue";
import "./plugins/vuelidate";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount("#app");

```

### 3. สร้างหน้า Login สำหรับรับข้อมูล username และ password และตั้งค่า vuelidate ในหน้า Login เพื่อตรวจสอบ input จาก user

ในขั้นตอนนี้จะทำการสร้าง vue component สำหรับใช้เป็น Login page และจะใช้ vuelidate ในการตรวจสอบค่า input ว่าถูกต้องตามที่กำหนดหรือไม่ โดยมีขั้นตอนดังต่อไปนี้

- สร้างไฟล์ LoginPage.vue ในโฟล์เดอร์ components ดังภาพด้านล่าง
  - LoginPage component ประกอบไปด้วย NavBar component (บรรทัดที่ 3)
  - ส่วนของ input form ที่มีช่องให้ใส่ username, password และปุ่ม submit กับ reset (บรรทัดที่ 4-27)
  - สำหรับบรรทัดที่ 28-33 จะเอาไว้แสดง runtime variables ของ vuelidate เพื่อให้เข้าใจง่ายยิ่งขึ้น
  - ในการตั้งค่าใช้งาน vuelidate นั้นจะต้องทำการ import validators ที่ต้องการจะใช้ก่อน ตัวอย่างนี้ใช้ required และ between (บรรทัดที่ 39)
  - จากนั้นสร้าง validations attribute ให้ component (บรรทัดที่ 53) ซึ่งได้สร้าง object ชื่อ form ที่มีฟิลด์ username กับ password โดย assign required กับ between validators เพื่อกำหนดว่าสองฟิลด์นี้จำเป็นต้องกรอก และมีจำนวนตัวอักษรตามที่กำหนด (บรรทัดที่ 56 และ 60)
  - สร้าง method touch() เพื่อบอก vuelidate ว่า form ถูกใส่ข้อมูลผ่าน $touch() (ดูบรรทัดที่ 66)
  - สร้าง method reset() เพื่อบอก vuelidate ให้ reset การ validate ทั้งหมด (ดูบรรทัดที่ 69)
  - ในการกำหนดให้ vuelidate ทำงานจะต้องตั้งค่าตัวแปรทั้งที่ form, data function และ validations attribute ให้ตรงกัน ซึ่งในที่นี้คือ `form : {username: "", password: ""}`
    - ใน input form ให้กำหนดที่ v-model
    - ใน data function ให้ `return {}` ให้ตรงกัน
    - ใน validations attribute สามารถกำหนด validators ให้แต่ละฟิลด์ได้ เช่น `username: {required, between(8, 30)}`
  - ในขั้นถัดมา จะต้องทำการแสดงผลการ validate เพื่อให้ user ทราบว่าข้อมูลที่กรอกมานั้นไม่ตรงตามค่าที่กำหนดใดบ้าง
    - ตัวอย่างนี้ใช้ `<b-message></b-message>` ในการแสดงผล
    - ตัวแปร runtime ของ vuelidate ที่ใช้ในเบื้องต้นคือ `$v.form.$dirty` กับ `$v.form.$invalid` เพื่อเช็คว่า form ถูกกรอกข้อมูลหรือยังและข้อมูลนั้นผ่าน validation rules หรือไม่ จากนั้นจึงใช้ `v-if` มาช่วยในการแสดง message (ดูบรรทัดที่ 10)
    - นอกจากนี้สามารถใช้ `$v.form.username.required` เพื่อเช็คว่าข้อมูลที่ได้ถูกกรอกแล้วหรือไม่
    - ต่อด้วย `$v.form.username.between` เพื่อเช็คว่าความยาวของ input ตรงหรือไม่
    - จากนั้นให้แสดงผลแจ้ง user ด้วย `v-if` ดังตัวอย่างในบรรทัดที่ 11, 16, 17 และ 21
    - สามารถเช็ค runtime variable ของ vuelidate จากบรรทัดที่ 28-33 ผ่านหน้า LoginPage

```vue{3,39,53,56-57,60-61,66,69}
<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    <b-field label="Username" expanded>
      <b-input v-model="form.username" maxlength="30" expanded></b-input>
    </b-field>
    <b-field label="Password" expanded>
      <b-input type="password" v-model="form.password" maxlength="16" password-reveal></b-input>
    </b-field>
    <b-field v-if="$v.form.$dirty && $v.form.$invalid">
      <b-message type="is-danger" has-icon v-if="!$v.form.username.required">กรุณาใส่ชื่อผู้ใช้</b-message>
      <b-message
        type="is-danger"
        has-icon
        v-if="!$v.form.username.between"
      >ชื่อผู้ใช้ต้องอยู่ระหว่าง 8-30 ตัวอักษร</b-message>
      <b-message type="is-danger" has-icon v-if="!$v.form.password.required">กรุณาใส่รหัสผ่าน</b-message>
      <b-message
        type="is-danger"
        has-icon
        v-if="!$v.form.password.between"
      >รหัสผ่านต้องอยู่ระหว่าง 4-16 ตัวอักษร</b-message>
    </b-field>
    <b-field class="buttons" grouped>
      <b-button type="is-primary" @click="touch">Login</b-button>
      <b-button type="is-primary" @click="reset">Reset</b-button>
    </b-field>
    <p>Dirty : {{ $v.form.$dirty }}</p>
    <p>Invalid : {{ $v.form.$invalid }}</p>
    <p>Require username: {{ $v.form.username.required }}</p>
    <p>User name between 8-30: {{ $v.form.username.between }}</p>
    <p>Require password: {{ $v.form.password.required }}</p>
    <p>Password between 4-16: {{ $v.form.password.between }}</p>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";

import { required, between } from "vuelidate/lib/validators";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  validations: {
    form: {
      username: {
        required,
        between: between(8, 30)
      },
      password: {
        required,
        between: between(4, 16)
      }
    }
  },
  methods: {
    touch() {
      this.$v.form.$touch();
    },
    reset() {
      this.$v.form.$reset();
    }
  }
};
</script>

```

- แก้ไขไฟล์ src/route/index.js เพื่อเพิ่ม LoginPage.vue ไว้เป็นหน้า Home

```js{7,14}
import Vue from "vue";
import VueRouter from "vue-router";

import Ex01Page from "../components/ex01/Ex01Page.vue";
import Ex02Page from "../components/ex02/Ex02Page.vue";
import Ex03Page from "../components/ex03/Ex03Page.vue";
import LoginPage from "../components/LoginPage.vue";

Vue.use(VueRouter);

const routeList = [
  {
    path: "/",
    component: LoginPage,
  },
  ...
];
...

```

### 4. ทบทวน

- ทดลองใส่ validators อื่น ๆ เพิ่ม [Builtin validators](<https://vuelidate.netlify.com/#sub-builtin-validators>)
- แก้ไข wk07-xxx โดยใส่ vuelidate เพื่อตรวจสอบการกรอกข้อมูลในเบื้องต้น

### 5. ส่งงาน

- Push งานขึ้นบน GitHub ตาม repository ของแต่ละคน โดยใส่ commit msg ว่า "Week 11 - Homework"

## เอกสารอ้างอิง

- [\[1\] Model-based Form Validation with Vue.js and Vuelidate](<https://alligator.io/vuejs/model-form-validation-vuelidate/>)
- [\[2\] Template-Based Form Validation with Vue.js and vee-validate](<https://alligator.io/vuejs/template-form-validation-vee-validate/>)
- [\[3\] Vuelidate: Rethinking Validations for Vue.js](<https://www.monterail.com/blog/vuelidate-vuejs>)
- [\[4\] Vuelidate: Simple, lightweight model-based validation for Vue.js 2.0](<https://vuelidate.netlify.com/>)

## Trouble Shooting

- วิธีแก้ปัญหากรณี Buefy ไม่แสดง icon ให้แทรกบรรทัดด้านล่าง ไว้ในไฟล์ public/index.html ระหว่าง tag `<head></head>`
  
```html{5}
<!DOCTYPE html>
<html lang="en">
  <head>
  ...
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
  ...
  </head>
  <body>
  </body>
</html>
```
