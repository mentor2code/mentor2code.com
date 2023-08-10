---
title:  การ Routing ระหว่าง Vue Components
lang: th-TH
tobeListed: false
meta:
  - name: description
    content: การ Routing ระหว่าง Vue Components
  - name: keywords
    content:  การ Routing ระหว่าง Vue Components
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/web_dev/)

## การ Routing ระหว่าง Vue Components

เมื่อเราสามารถสร้าง component หลาย ๆ แบบที่สามารถส่งข้อมูลระหว่าง component กันเองผ่าน state management library เช่น Vuex หรือการส่งข้อมูลไปเก็บยัง Backend Service ผ่าน Axios ขั้นต่อมาคือการเชื่อมโยงในส่วนที่ติดต่อกับผู้ใช้ หากเราสร้าง component โดยแบ่งออกเป็นหลาย ๆ page ในการที่จะส่งต่อไปมาระหว่าง page นั้นจะต้องมี router มาช่วยในการเชื่อมแต่ละ page

- Catch up การบ้าน week 9
  - ปรับแต่ง components ที่ทำใน wk07 ให้ support v-model
  - ใช้ Axios ดึงข้อมูลจาก Reddit และสร้าง Vue Components เพื่อแสดงผล
- ปรับแต่ง component week 8
  - จัดการปรับแต่ง Vuex ให้ offline
  - เพิ่ม Vue router เพื่อให้สามารถ route ไปมาระหว่าง Example 01-03 ได้

### แบบฝึกหัด

### 1. Catch up การบ้าน week 9

### 2. จัดการปรับแต่ง Vuex ให้ offline

ในบทเรียนนี้เราจะใช้ project ที่สร้างขึ้นในสัปดาห์ที่ 8 (wk08-xxx) เพื่อความคล่องตัวในการใช้ vue router จึงเป็นที่จะต้องปรับแต่ง vuex ในส่วนของ actions เพื่อลดความซับซ้อนของ elements ที่ต้องใช้ในการ run ระบบโดยรวม โดยมีขั้นตอนดังต่อไปนี้

- สร้างไฟล์ src/store/modules/people/actions-offline.js เพื่อที่จะทำให้ไม่ต้องเรียกใช้ข้อมูลจาก json server

```js
export const actions = {
  getPeople() {
  },
  addPerson(context, person){
    context.commit("addPerson", person);
  },
  deletePerson(context, person){
    context.commit("deletePerson", person);
  }
};
```

- แก้ไขไฟล์ src/store/modules/people/index.js เพื่อให้เรียกใช้งาน actions-offline แทน actions ปกติ

```js{2}
import { getters } from "./getters";
import { actions } from "./actions-offline";
import { mutations } from "./mutations";

const state = {
  people: [],
  status: null,
};
...
```

### 3. เพิ่ม Vue router เพื่อให้สามารถ route ไปมาระหว่าง Example 01-03 ได้

ในการเชื่อมต่อ components ต่าง ๆ ที่เราสร้างขึ้นโดยใช้ vue-router ในตัวอย่างนี้จะแสดงให้เห็นโดยการสร้าง navigation bar ซึ่งเมื่อ user คลิกที่ลิ็งค์บน navigation bar ในแต่ละเมนู หน้าจอ display ก็จะสลับไปยัง component นั้น ๆ โดย vue-router เป็นตัวจัดการให้ โดยขั้นตอนในการนำ vue-router มาใช้งาน มีรายละเอียด ดังนี้

- ติดตั้ง vue-router ลงใน project

```sh
yarn add vue-router
```

- สร้างโฟล์เดอร์ชื่อ router ใน src และสร้างไฟล์ index.js เพื่อเป็น default entry point ของ vue-router
  - ทำการ import VueRouter ดังบรรทัดที่ 2
  - ทำการ import components ที่จะให้ vue-router เป็นตัวเชื่อมโยง ดังบรรทัดที่ 4-6
  - สร้าง routeList เป็น path ต่าง ๆ ดังบรรทัดที่ 10 ซึ่งในแต่ละ route หลัก ๆ จะประกอบไปด้วย path และ component
  - จากนั้น export router component จาก routeList ที่สร้างดังบรรทัดที่ 29-31

```js{2,4-6,10,29-31}
import Vue from "vue";
import VueRouter from "vue-router";

import Ex01Page from "../components/ex01/Ex01Page.vue";
import Ex02Page from "../components/ex02/Ex02Page.vue";
import Ex03Page from "../components/ex03/Ex03Page.vue";

Vue.use(VueRouter);

const routeList = [
  {
    path: "/",
    redirect: "/ex01",
  },
  {
    path: "/ex01",
    component: Ex01Page,
  },
  {
    path: "/ex02",
    component: Ex02Page,
  },
  {
    path: "/ex03",
    component: Ex03Page,
  }
];

export const router = new VueRouter({
  routes: routeList,
});

```

- แก้ไขไฟล์ src/main.js เพื่อเพิ่ม vue-router เข้ากับ vue project

```sh{5,14}
import Vue from "vue";
import App from "./App.vue";

import { store } from "./store";
import { router } from "./router";

import "./plugins/buefy-vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount("#app");

```

- เมื่อทำการ add vue-router ใน vue project และสร้าง routeList ที่เชื่อมโยงกับ components ทั้ง Ex01, Ex02 และ Ex03 แล้ว ขั้นตอนถัดมา คือ สร้าง navigation bar เพื่อเป็นเมนูสำหรับให้ user ใช้สลับไปมาระหว่าง components โดยมีรายละเอียดในขึ้นตอนถัดไป

- สร้าง NavBar.vue ใน src/components ดังรายละเอียดด้านล่าง
  - จากบรรทัดที่ 5-8 นั้น มีการใช้ router-link tag เพิื่อเป็นการบอกให้ vue-router รู้ว่า link ที่สร้างไว้ใน NavBar.vue นั้นจะให้ vue-router เป็นตัวจัดการส่งต่อไปให้ component ที่ถูก config ไว้ใน routeLits
  - ในตัวอย่างนี้ เป็นการทำใช้งาน vue-router กับ b-navbar ของ Buefy ซึ่งเป็นตัวอย่างเฉพาะ
  - โดยปกติในการทำ link ที่ต้องใช้ vue-router นั้นจะใช้ tag `<router-link to="/path">Path Name</router-link>`

```vue{5-8}
<template>
  <div class="card-content">
    <b-navbar>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/ex01' }">Example 01</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/ex02' }">Example 02</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/ex03' }">Example 03</b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

```

- นำ NavBar ที่สร้างไปสร้างแล้วไปแทรกไว้ใน components ทุกอันสร้างไว้แล้ว (Ex01Page, Ex02Page และ Ex03Page)

```vue
<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    ...
  </div>
</template>
<script>
...
import NavBar from "../NavBar.vue";

export default {
  components: {
    ...
    NavBar,
  },
...
}
</script>

```

- แก้ไขไฟล์ App.vue เพื่อให้เรียกใช้ vue-router

```vue{3}
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
```

- ลอง run และทดสอบ vue-router เพื่อดูผลลัพธ์

### 4. ทบทวน

- สังเกต state ของแต่ละ component หลังจากมีการสลับไปมา ผ่าน vue-router
- ทำอย่างไร ถึงจะสามารถเก็บ state ให้ยังอยู่เมื่อย้อนกลับมายัง component ที่เคยใช้งานได้
  - ใช้ Vuex
  - ใช้ `<keep-alive></keep-alive>` ครอบ `<router-view></router-view>`

### 5. ส่งงาน

- Push งานขึ้นบน GitHub ตาม repository ของแต่ละคน โดยใส่ commit msg ว่า "Week 10 - Labwork"

## เอกสารอ้างอิง

- [\[1\] Introduction to Routing in Vue.js with vue-router](<https://alligator.io/vuejs/intro-to-routing/>)
- [\[2\] Updating Page Title & Metadata with Vue.js & vue-router](<https://alligator.io/vuejs/vue-router-modify-head/>)
- [\[3\] Vue Router](<https://router.vuejs.org/>)
