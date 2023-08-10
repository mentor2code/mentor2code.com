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
[กลับหน้าแรกของคอร์ส](/courses/web_dev/)

## การเขียน Vue.js Components

ในการพัฒนา web application ด้วย Vue.js Framework องค์ประกอบหลักที่เราจะต้องสร้างก็คือ Component ซึ่งเป็นการแยกส่วนของ Web Application ของเป็นส่วนย่อย ๆ เพื่อที่จะให้ง่ายต่อการ maintain และการ reuse เช่น เราสามารถที่จะสร้าง navbar ที่จะถูกใช้ซ้ำในทุก ๆ หน้าของ web application เป็นต้น Vue.js Component นั้นจะประกอบไปด้วย attribute ต่าง ๆ เช่น data, methods, computed, watched ฯลฯ

### แบบฝึกหัด

### 1. สร้าง Vue Project

ให้สร้าง vue project ขึ้นใหม่ ใน workspace เดิม โดยใช้ชื่อ wk06-name (เปลี่ยน name เป็นชื่อตัวเอง)

```sh{3}
d:\
cd toolb\workspace
vue create wk06-{เปลี่ยนชื่อด้วย}
```

### 2. เพิ่ม bootstrap

เพิ่ม bootstrap ใน Vue project ที่สร้างขึ้น ดูขั้นตอน [ที่นี่](/courses/web_dev/week-02.md)

### 3. สร้าง Vue.js component ที่เป็น online questionnaire

- โดยในการสร้าง online questionnaire ด้วย Vue.js component นั้น จะประกอบไปด้วย component structure ดังนี้
  - App.vue => component หลักของ Vue.js
    - MainPage.vue => หน้าหลักของ online questionnaire ประกอบไปด้วย 2 ส่วน คือ ข้อมูลทั่วไป และคำถาม
    - DemographicSection.vue => ส่วนข้อมูลทั่วไป
    - QuestionSection.vue => ส่วนคำถาม
      - LikertSection.vue => component คำถามที่เป็นแบบ likert scale

[ตัวอย่าง](/courses/web_dev/week-06-demo.md)

### 4. เริ่มสร้าง online questionnaire

- สร้าง folder ชื่อ questionnaire ใน folder - src/components จากนั้นสร้างไฟล์ LikertQuestion.vue โดยมี content ตามด้านล่าง

```vue{19}
<template>
  <div class="form-row">
    <div class="form-group col-md">
      <label class="h6" for="range">Q{{ questionNo }}. {{ questionText }}</label>
      <input type="range" class="custom-range" min="1" v:model="degree" v:bind:max="scaleRange" id="range" />
      <div class="row justify-content-between">
        <div class="col-2">
          <label>{{ minDegreeText }}</label>
        </div>
        <div class="col-2 justify-content-md-end">
          <label>{{ maxDegreeText }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ['questionNo', 'questionText', 'minDegreeText', 'maxDegreeText', 'scaleRange'],
    data: function(){
        return {
            degree : 1,
        }
    }
}
</script>
```

- สร้างไฟล์ QuestionSection.vue ใน folder - src/components โดยมี content ตามด้านล่าง

```vue{3-11,15,18,22-33}
<template>
  <div>
    <likert-question
      v-for="item in questionItems"
      v-bind:key="item.id"
      v-bind:questionNo="item.id"
      v-bind:questionText="item.questionText"
      v-bind:minDegreeText="item.minDegreeText"
      v-bind:maxDegreeText="item.maxDegreeText"
      v-bind:scaleRange="item.scaleRange"
    ></likert-question>
  </div>
</template>
<script>
import LikertQuestion from "./questionnaire/LikertQuestion.vue";
export default {
  components: {
    LikertQuestion
  },
  data: function() {
    return {
      questionItems: [
        {id: 1, questionText : "New ideas and projects sometimes distract me from previous ones.", minDegreeText : "Not like me at all", maxDegreeText : "Very much like me", scaleRange : "5"},
        {id: 2, questionText : "Setbacks don’t discourage me. I don’t give up easily.", minDegreeText : "Not like me at all", maxDegreeText : "Very much like me", scaleRange : "5"},
        {id: 3, questionText : "I often set a goal but later choose to pursue a different one.", minDegreeText : "Not like me at all", maxDegreeText : "Very much like me", scaleRange : "5"},
        {id: 4, questionText : "I am a hard worker.", minDegreeText : "Not like me at all", maxDegreeText : "Very much like me", scaleRange : "5"},
        {id: 5, questionText : "I have difficulty maintaining my focus on projects that take more than a few months to complete.", minDegreeText : "Not like me at all", maxDegreeText : "Very much like me", scaleRange : "5"},
        {id: 6, questionText : "I finish whatever I begin.", minDegreeText : "Not like me at all", maxDegreeText : "Very much like me", scaleRange : "5"},
        {id: 7, questionText : "My interests change from year to year.", minDegreeText : "Not like me at all", maxDegreeText : "Very much like me", scaleRange : "5"},
        {id: 8, questionText : "I am diligent. I never give up.", minDegreeText : "Not like me at all", maxDegreeText : "Very much like me", scaleRange : "5"},
        {id: 9, questionText : "I have been obsessed with a certain idea or project for a short time but later lost interest.", minDegreeText : "Not like me at all", maxDegreeText : "Very much like me", scaleRange : "5"},
        {id: 10, questionText : "I have overcome setbacks to conquer an important challenge.", minDegreeText : "Not like me at all", maxDegreeText : "Very much like me", scaleRange : "5"},
      ]
    };
  }
}
</script>
```

- สร้างไฟล์ DemographicSection.vue ใน folder - src/components โดยมี content ตามด้านล่าง

```vue{87-93}
<template>
<div>
  <form>
    <div class="form-row">
      <div class="form-group col-md-2">
        <label for="prefix">Prefix</label>
        <select id="prefix" class="form-control" v-model="demoInfo.prefix">
          <option selected>Not specified</option>
          <option>Mr</option>
          <option>Mrs</option>
          <option>Miss</option>
        </select>
      </div>
      <div class="form-group col-md-5">
        <label for="firstName">FirstName</label>
        <input type="text" v-model="demoInfo.firstName" class="form-control" id="firstName" placeholder="FirstName" />
      </div>
      <div class="form-group col-md-5">
        <label for="lastName">LastName</label>
        <input type="text" v-model="demoInfo.lastName" class="form-control" id="lastName" placeholder="LastName" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-2">
        <label for="sex">Sex</label>
        <select  v-model="demoInfo.sex" id="sex" class="form-control">
          <option selected>Not specified</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <label for="age">Age</label>
        <select  v-model="demoInfo.age" id="age" class="form-control">
          <option selected>Choose...</option>
          <option v-for="age in ageList"
            v-bind:key="age"
            v-bind:value="age"
            >{{ age }}</option>
        </select>
      </div>
      <div class="form-group col-md-8">
        <label for="occupation">Occupation</label>
        <input type="text" v-model="demoInfo.occupation" class="form-control" id="occupation" placeholder="Occupation" />
      </div>
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" v-model="demoInfo.address" class="form-control" id="address" placeholder="1234 Main St" />
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="district">District</label>
        <input type="text" v-model="demoInfo.district" class="form-control" id="district" />
      </div>
      <div class="form-group col-md-4">
        <label for="city">City</label>
        <input type="text" v-model="demoInfo.city" class="form-control" id="city" />
      </div>
      <div class="form-group col-md-2">
        <label for="postcode">Postcode</label>
        <input type="text" v-model="demoInfo.postcode" class="form-control" id="postcode" />
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      demoInfo : {
        prefix : '',
        firstName : '',
        lastName : '',
        sex : '',
        age : 1,
        address : '',
        district : '',
        city : '',
        postcode : '',
      },
      maxAge : 100,
    };
  },
  computed: {
    ageList: function() {
        return Array(this.maxAge)
                .fill(null).map( (x,i) => i )
                .filter( (x) => x > 15);
    }
  }
};
</script>
```

- สร้างไฟล์ MainPage.vue ใน folder - src/components โดยมี content ตามด้านล่าง

```vue{10-11,16-17,21-22}
<template>
  <div class="container">
    <div class="card">
      <div class="card-body jumbotron">
        <h1 class="display-4">Grit Scale</h1>
        <p class="lead">
            Here are a number of statements that may or may not apply to you. There are no right or wrong answers, so just answer honestly, considering how you compare to most people. At the end, you’ll get a score that reflects how passionate and persevering you see yourself to be.</p>
        <p class="lead">Refer to https://angeladuckworth.com/grit-scale/</p>
      </div>
      <demographic-section class="card-body"></demographic-section>
      <question-section class="card-body"></question-section>
    </div>
  </div>
</template>
<script>
import DemographicSection from "./DemographicSection.vue";
import QuestionSection from "./QuestionSection.vue";

export default {
  components: {
    DemographicSection,
    QuestionSection
  }
};
</script>
```

- แก้ไฟล์ App.vue ในบรรทัดที่ 3, 8 และ 13 ตามภาพ
- ลบ text-align: center; ในบรรทัดที่ 22 ทิ้ง

```vue{3,8,13,22}
<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';

export default {
  name: 'app',
  components: {
    MainPage
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### 5. ทบทวน

- เหตุใดจึงต้องแยก component ต่าง ๆ เป็นรูปแบบข้างต้น
- เราสามารถใช้ computed ในส่วนใด ได้อีกบ้าง
- เราสามารถใช้ dynamic rendering ในส่วนใดได้อีกบ้าง
- หากต้องการเพิ่มประเภทของคำถามนอกเหนือจาก Likert scale จะต้องทำอย่างไร

### 6. ส่งงาน

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
git commit -m "week 06 homework"
git remote add origin https://github.com/is322/wkxx-name.git
git push -u origin master
```
