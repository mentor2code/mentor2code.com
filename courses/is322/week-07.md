---
title:  Vue.js Component
lang: th-TH
tobeListed: false
meta:
  - name: description
    content: Vue.js Component
  - name: keywords
    content:  Vue.js Component
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is322/)

## การเขียน Vue.js Components

พัฒนา registration form โดยเลือกระหว่างการใช้ Bootstrap หรือ Buefy (Bulma)

### แบบฝึกหัด

### 1. สร้าง Vue Project

ให้สร้าง vue project ขึ้นใหม่ ใน workspace เดิม โดยใช้ชื่อ wk07-name (เปลี่ยน name เป็นชื่อตัวเอง)

```sh{3}
d:\
cd toolb\workspace
vue create wk07-{เปลี่ยนชื่อด้วย}
```

### 2. สร้าง Vue.js component ที่เป็น registration form

สร้าง registration form โดยใช้[แบบฟอร์มนี้](http://www.hospital.tu.ac.th/RegisterOnline/regis_thai.php)เป็นตัวอย่าง

### 3. เลือกใช้ CSS Framework สามารถใช้ได้ทั้ง Bootstrap หรือ Buefy แล้วแต่ชอบ

### ติดตั้ง buefy ลงใน vue project

ขั้นตอนการติดตั้งเพิ่มเติมหากต้องการใช้ Buefy ซึ่งเป็น CSS component สำหรับ Vue โดย Bulma

- ติดตั้ง buefy ผ่าน yarn

```sh
yarn add buefy
```

- สร้าง folder ชื่อ plugins อยู่ level เดียวกับไฟล์ App.vue

- สร้างไฟล์ buefy-vue.js ใน plugins folder และโดยมี code ด้านล่าง

```js
import Vue from 'vue';

import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);
```

- แก้ไขไฟล์ main.js โดยเพิ่มบรรทัดที่ 3 และเติม ; ท้ายบรรทัดให้ครบ ดังภาพ

```js{3}
import Vue from 'vue';
import App from './App.vue';
import './plugins/buefy-vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
```

### 4. ส่งงาน

- Push งานขึ้นบน GitHub ตาม repository ของแต่ละคน

### วิธีการใช้งาน GitHub

- ตั้งค่า git โดยใส่ชื่อ ชื่อสกุล และอีเมล์เดียวกับที่ลงทะเบียนไว้กับ GitHub

```sh
git config --global user.name "FIRST_NAME LAST_NAME"
git config --global user.email "MY_NAME@example.com"
```

- สร้าง repository บน GitHub ในที่นี้ใช้ชื่อ wkxx-name (เปลี่ยนเลขทุกสัปดาห์ และใส่ชื่อของตัวเอง)

- ทำการ initial git และ push ไฟล์โปรเจ็คทั้งหมดไปยัง GitHub **(อย่าลืมเปลี่ยน wkxx-name เป็นชื่อ repository ของตัวเอง)**

```sh{3-4}
git init
git add .
git commit -m "week 07 homework"
git remote add origin https://github.com/is322/wkxx-name.git
git push -u origin master
```
