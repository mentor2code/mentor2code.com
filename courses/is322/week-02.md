---
title: พื้นฐาน HTML และ UI Design
lang: th-TH
tobeListed: false
meta:
  - name: description
    content: พื้นฐาน HTML และ UI Design
  - name: keywords
    content: พื้นฐาน HTML และ UI Design
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is322/)

## พื้นฐาน HTML และ UI Design

ในส่วนนี้จะกล่าวถึงหน้าที่ของ HTML ซึ่งเป็นองค์ประกอบหลักในการควบคุมโครงสร้าง และเนื้อหาของ web application โดยมี CSS ทำหน้าที่ในการจัดและตกแต่งรูปแบบในการแสดงผล UI

### ขั้นตอนการติดตั้งเพิ่มเติม

### ติดตั้ง boostrap ลงใน vue project

- ติดตั้ง bootstrap ผ่าน yarn

```sh
yarn add vue bootstrap-vue bootstrap
```

- สร้าง folder ชื่อ plugins อยู่ level เดียวกับไฟล์ App.vue

- สร้างไฟล์ bootstrap-vue ใน plugins folder และโดยมี code ด้านล่าง

```js
import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
```

- แก้ไขไฟล์ main.js โดยเพิ่มบรรทัดที่ 3 ดังภาพ

```js{3}
import Vue from 'vue';
import App from './App.vue';
import './plugins/bootstrap-vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
```

- ทดสอบว่า boostrap ใช้งานได้ โดยการใส่โค้ดด้านล่างใน ไฟล์ HelloWorld.vue โดยแทรกระหว่าง tag template

```html
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>Column 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      <div class="col">
        <h3>Column 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      <div class="col">
        <h3>Column 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
    </div>
  </div>
<template>
```

- ทดสอบโดยเปลี่ยน class จาก container เป็น container-fluid ดังภาพ

```html
<template>
  <div class="container-fluid">
  ...
  </div>
</template>
```

- สามารถอธิบายความแตกต่างได้หรือไม่?

### ทดลอง bootstrap แบบต่างๆ

- [Tables](https://www.w3schools.com/bootstrap4/bootstrap_tables.asp)
- [Button](https://www.w3schools.com/bootstrap4/bootstrap_buttons.asp)
- [Progress Bars](https://www.w3schools.com/bootstrap4/bootstrap_progressbars.asp)
- [Spinners](https://www.w3schools.com/bootstrap4/bootstrap_spinners.asp)
- [Cards](https://www.w3schools.com/bootstrap4/bootstrap_cards.asp)
- [Forms](https://www.w3schools.com/bootstrap4/bootstrap_forms.asp)
