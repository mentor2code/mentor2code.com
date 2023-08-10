---
title:  JavaScript Framework
lang: th-TH
tobeListed: false
meta:
  - name: description
    content: JavaScript Framework
  - name: keywords
    content:  JavaScript, Framework
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/web_dev/)

## JavaScript Framework

Framework คือ โครงร่างของ application ซึ่งมีการจัดเตรียม function พื้นฐานไว้ให้นักพัฒนาสามารถนำไปใช้ในการพัฒนา application ไม่ว่าจะเป็น web, mobile โดย framework นั้นจะช่วยให้นักพัฒนาสามารถใช้เวลาในการพัฒนาในส่วนของ business logic หรือ business function โดยที่ไม่ต้องกังวลในส่วนของ non-function ต่าง ๆ เช่น การจัดการ network, การควบคุมการแสดงผลของ browser และ mobile

### แบบฝึกหัด

### 1. Vue Components => Data

Data เป็นองค์ประกอบหลักของ Vue components ซึ่งมีหน้าที่ในการเก็บค่าตัวแปรต่าง ๆ เพื่อใช้ในการแสดงผลใน component นั้น ๆ ซึ่งหากข้อมูลใน Data ถูกเปลี่ยนแปลงไม่ว่าจะเป็นจาก user input หรือ JS ข้อมูลจะถูกอัพเดทไปยัง DOM ที่แสดงผลโดยอัตโนมัติ

- ให้สร้าง vue project ขึ้นใหม่ ใน workspace เดิม โดยใช้ชื่อ wk05-name (เปลี่ยน name เป็นชื่อตัวเอง)

```sh
d:\
cd toolb\workspace
vue create wk05-is322
```

- สร้างไฟล์ ButtonCounter.vue ในโฟล์เดอร์ src/components ดังด้านล่าง

```vue{3,10-14}
<template>
  <div class="container">
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonCounter',
  data: function() {
    return {
      count: 0,
    }
  }
}
</script>
<style scoped>
</style>
```

- แก้้ไฟล์ App.vue ในโฟล์เดอร์ src ในส่วนของ script โดย import ButtonCounter components ที่เพิ่งสร้าง และ export รวมไปกับ components ของ main app ดังด้านล่าง

```vue{2,7}
<script>
import ButtonCounter from './components/ButtonCounter.vue'

export default {
  name: 'app',
  components: {
    ButtonCounter
  }
}
</script>
```

- จากนั้นเราสามารถเรียกใช้ ButtonCounter component ได้โดยการใส่ HTML tag ที่เป็นชื่อเดียวกับ component ในส่วนของ template ดังด้านล่าง (ไฟล์ App.vue)

```vue
<template>
  <div id="app">
    <ButtonCounter></ButtonCounter>
  </div>
</template>
```

- เราสามารถที่จะเรียกใช้ components ซ้ำหลาย ๆ ครั้ง (reuse) ได้โดยการเพิ่มจำนวน HTML tag

```vue
<template>
  <div id="app">
    <ButtonCounter></ButtonCounter>
    <ButtonCounter></ButtonCounter>
    <ButtonCounter></ButtonCounter>
  </div>
</template>
```

- เราสามารถเรียกใช้ component แบบ Sentence style แบบก่อนหน้า หรือแบบ hyphen style ดังด้านล่าง

```vue
<template>
  <div id="app">
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
  </div>
</template>
```

### 2. Vue Components => Properties

Components ต่าง ๆ ที่เราสร้างขึ้นนั้นสามารถรับข้อมูลจาก components ที่อยู่เหนือกว่าได้โดยการส่งข้อมูลผ่าน properties ดังตัวอย่าง

```vue
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```

- สร้างไฟล์ BlogPost.vue ในโฟล์เดอร์ src/components ดังด้านล่าง

```vue{3,10}
<template>
  <div class="container">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['title']
}
</script>
<style scoped>
</style>
```

- แก้้ไฟล์ App.vue ในโฟล์เดอร์ src ในส่วนของ script โดย import BlogPost components ที่เพิ่งสร้าง และ export รวมไปกับ components ของ main app ดังด้านล่าง

```vue{2,8}
<script>
import BlogPost from './components/BlogPost.vue'
import ButtonCounter from './components/ButtonCounter.vue'

export default {
  name: 'app',
  components: {
    BlogPost,
    ButtonCounter
  }
}
</script>
```

- จากนั้นเราก็ใส่ HTML tag ของ BlogPost component พร้อมใส่ properties ชื่อ title ดังด้านล่าง

```vue{3-5}
<template>
  <div id="app">
    <blog-post title="My journey with Vue"></blog-post>
    <blog-post title="Blogging with Vue"></blog-post>
    <blog-post title="Why Vue is so fun"></blog-post>
    <button-counter></button-counter>
  </div>
</template>
```

- จากตัวอย่างด้านบน จะเห็นว่าเราต้องเรียกใช้งาน BlogPost component ถึง 3 ครั้งหากเรามีข้อมูลมากกว่านี้ ก็จะต้องเขียน HTML tag ซ้ำ ๆ หลาย ๆ รอบ ซึ่ง Vue.js นั้นสามารถช่วยเราแก้ปัญหานี้ได้โดยการสร้าง data function ใน App.vue (อย่าลืมใส่ "," หลัง components{}) โดยใน data function จะเห็นว่ามี posts ซึ่งเป็น object array โดยแต่ละ object นั้นมี id และ title เป็น properties ซึ่งในที่นี้ posts มี 3 objects ใน array

```vue{11-19}
<script>
import BlogPost from './components/BlogPost.vue'
import ButtonCounter from './components/ButtonCounter.vue'

export default {
  name: 'app',
  components: {
    BlogPost,
    ButtonCounter
  },
  data: function() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  }
}
</script>
```

- จากนั้นทำการแก้ไข HTML template โดยเปลี่ยนจากการเรียกใช้ BlogPost component 3 ครั้งเป็นการเรียกใช้ครั้งเดียว แต่ใช้ List Rendering feature ผ่าน v-for ซึ่ง v-for จะทำหน้าที่วนลูปจาก array ใน posts ที่ได้จาก data function ซึ่ง v-for จะโยนค่าของ array แต่ละตัวลงในตัวแปล post (post in posts) จากนั้น v-bind จะนำหน้าที่ส่งต่อข้อมูลไปยัง properties ของ BlogPost component

**หมายเหตุ** v-for นั้นบังคับให้ต้องมี v-bind:key เพื่อใช้เป็นตัวกำหนด element แต่ละตัวใน array ซึ่งในที่นี้เราไม่ได้นำ key ไปใช้ต่อใน BlogPost component

```vue{3-7}
<template>
  <div id="app">
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title">
    </blog-post>
    <button-counter></button-counter>
  </div>
</template>
```

### 3. ทดลองสร้าง Vue components

- สร้าง Blog websites ที่ประกอบไปด้วย
  - Header
  - Navigation Bar/Menu Bar
  - Blogs List
  - Footer
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
git commit -m "week 05 homework"
git remote add origin https://github.com/is322/wkxx-name.git
git push -u origin master
```
