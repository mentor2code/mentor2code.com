---
title:  การเชื่อมต่อกับ Backend Service ต่าง ๆ ผ่าน Axios
lang: th-TH
tobeListed: false
meta:
  - name: description
    content: การเชื่อมต่อกับ Backend Service ต่าง ๆ ผ่าน Axios
  - name: keywords
    content:  การเชื่อมต่อกับ Backend Service ต่าง ๆ ผ่าน Axios
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is322/)

## การเชื่อมต่อกับ Backend Service ต่าง ๆ ผ่าน Axios

หลังจากที่ได้เรียนรู้การจัดการ data ระหว่าง components รวมไปถึงการใช้ Vuex ในการจัดการ state ในขั้นตอนถัดมา คือ การรับส่งข้อมูลระหว่าง Web Application กับ Back Services หรือเป็นการนำ state ของ Web Application ไปเก็บไว้ยัง Backend Service เพื่อให้ผู้ใช้อื่น ๆ สามารถเข้าถึงข้อมูลนั้นได้ โดยผ่าน Axios ซึ่งเป็น Rest API/HTTP client library

- Catch up การบ้าน week 8
  - ทำให้ components ที่ส่งใน week 7 support v-model ทั้งหมด
  - เพิ่ม deletePerson ใน vuex และทำให้ component - ListPeople.vue สามารถลบ person ได้
- สร้าง fake backend service โดยใช้ json server
- ปรับแต่ง vuex ให้สามารถดึง, เพิ่ม และลบ people ได้่ผ่าน Axios get, post และ delete
- ใช้ Axios ดึงข้อมูลจาก Reddit และสร้าง Vue Components เพื่อแสดงผล

### แบบฝึกหัด

### 1. Catch up การบ้าน week 8

- เพิ่ม deletePerson ใน vuex และทำให้ component - ListPeople.vue สามารถลบ person ได้
- แก้ไฟล์ ListPeople.vue
  - บรรทัด 4 เพิ่ม event @dbClick เพื่อให้เรียกฟังก์ชั่น deletePerson ทุกครั้งที่มีการดับเบิ้ลคลิก
  - บรรทัดที่ 29-31 เพิ่มฟังก์ชั่น deletePerson ใน methods โดยให้ dispatch ไปยัง "people/deletePerson" action

```vue{4,16,29-31}
<template>
  <div class="card-content">
    <b-field label="แสดงรายชื่อทั้งหมด" v-if="people.length">
      <b-table @dblclick="deletePerson" :data="people" :columns="columns"
        :selected.sync="selected"
        focusable></b-table>
    </b-field>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      selected: {},
      columns: [
        { field: "title", label: "คำนำหน้า" },
        { field: "firstName", label: "ชื่อ" },
        { field: "lastName", label: "นามสกุล" },
        { field: "isActive", label: "Active" }
      ]
    };
  },
  computed: {
    ...mapState("people", ["people"])
  },
  methods: {
    deletePerson() {
      this.$store.dispatch("people/deletePerson", this.selected );
    }
  }
};
</script>
```

- แก้ไฟล์ actions.js ให้รองรับ deletePerson action และ commit state ดังบรรทัดที่ 8-10

```js{8-10}
export const actions = {
  getPeople(context) {
    context.commit("setPeople", null);
  },
  addPerson(context, person){
    context.commit("addPerson", person);
  },
  deletePerson(context, person){
    context.commit("deletePerson", person);
  }
};

```

- แก้ไฟล์ mutations.js โดยเพิ่มฟังก์ชั่น deletePerson ที่เรียกใช้ findIndex และ splice ฟังก์ชั่นของ Array เพื่อลบ person ออกจาก state ดังบรรทัดที่ 12-22

```js{12-22}
import Vue from "vue";

export const mutations = {
  setPeople(state, people) {
      Vue.set(state, "people", people);
  },
  addPerson(state, person) {
    let people = state.people;
    people.push(person);
    Vue.set(state, "people", people);
  },
  deletePerson(state, person) {
    let people = state.people;
    people.splice(
      people.findIndex(
        item => {
          return item.title == person.title
            && item.firstName == person.firstName 
            && item.lastName == person.lastName;
        }), 1);
    Vue.set(state, "people", people);
  }
};
```

### 2. สร้าง fake backend service โดยใช้ json server

โดยปกติ Backend Service นั้นจะถูกพัฒนาขึ้นโดย Backend Developer โดยมี Frameworks ต่าง ๆ ให้เลือกใช้แล้วแต่ความถนัด ไม่ว่าจะเป็น Express.js สำหรับคนถนัด JavaScript หรือ Nest.js สำหรับ TypeScript นอกจากนี้ยังมี Flask หรือ Django สำหรับคนที่ถนัด Python เป็นต้น

สำหรับ Frontend Developer ก็สามารถสร้าง fake backend server ได้อย่างง่าย ๆ โดยใช้ json server โดยมีขั้นตอนดังต่อไปนี้

- ติดตั้ง json server

```sh
yarn global add json-server
```

- ติดตั้ง [postman](<https://www.getpostman.com/downloads/>) สำหรับใช้ทดสอบ json-server

- สร้าง db.json ในโฟล์เดอร์ src/db โดยมีเนื้อหาดังภาพด้านล่าง

```json
{
  "people": [
    {
      "id": 1,
      "title": "นาย",
      "firstName": "กกก",
      "lastName": "กกก",
      "isActive": true
    },
    {
      "id": 2,
      "title": "นางสาว",
      "firstName": "ขขข",
      "lastName": "ขขข",
      "isActive": true
    },
    ,
    {
      "id": 3,
      "title": "นาง",
      "firstName": "คคค",
      "lastName": "คคค",
      "isActive": true
    }
  ]
}
```

- run json server ผ่านคำสั่งดังภาพ (ให้แน่ใจว่า cd ไปยัง wk08-xxx ของแต่ละคนแล้ว)

```sh
json-server --watch src/db/db.json
```

- ทดสอบ json server
  - เรียก URL - <http://localhost:3030/people> ผ่านเว็บบราวเซอร์
  - ทดสอบและทำความเข้าใจการเรียก backend ผ่าน Postman
    - เรียกข้อมูลผ่าน GET
    - เพิ่มข้อมูลผ่าน POST
    - ลบข้อมูลผ่าน DELETE

### 3. ปรับแต่ง vuex ให้สามารถดึง, เพิ่ม และลบ people ได้่ผ่าน Axios get, post และ delete

ในการปรับแต่ง Vuex ให้สามารถใช้งาน Axios ได้มีขั้นตอนดังต่อไปนี้

- ติดดั้ง Axios ดังภาพ

```sh
yarn add axios
```

- แก้ไข้ actions.js เพื่อให้ทำการรับส่งข้อมูลกับ json server ก่อนที่จะแก้ไขข้อมูลใน state
  - บรรทัดที่ 1 และ 3 => ทำการ import axios และประกาศตัวแปรสำหรับเก็บ URL ของ json server
  - บรรทัดที่ 6 => แก้ไข getPeople ฟังก์ชั่นให้ดึงข้อมูลจาก json server ผ่าน axios.get
  - บรรทัดที่ 16 => แก้ไข addPerson ฟังก์ชั่นให้ทำการส่งข้อมูลไปเก็บยัง json server ผ่าน axios.post
  - บรรทัดที่ 22 => แก้ไข deletePerson ฟังก์ชั่นให้ทำการลบข้อมูลบน json server ผ่าน axios.delete
  - โดย axios นั้นเป็น JavaScript Promise Object ดังนั้นเมื่อทำการรับส่งข้อมูลผ่าน axios ไปยัง json server แล้ว ให้ call ฟังก์ชั่น then เพื่อ commit Vuex state เป็นลำดับถัดไป

```js
import axios from "axios";

const backend_url = "http://localhost:3000/people";

export const actions = {
  getPeople(context) {
    axios.get(backend_url)
      .then(response => {
        let people = response.data;
        context.commit("setPeople", people);
      })
      .catch(() => {
        context.commit("setPeople", null);
      });
  },
  addPerson(context, person){
    axios.post(backend_url, person)
      .then(() => {
        context.commit("addPerson", person);
      });
  },
  deletePerson(context, person){
    axios.delete(backend_url + "/" + person.id)
      .then(() => {
        context.commit("deletePerson", person);
      });
  }
};

```

- แก้ไขไฟล์ PeopleList.vue โดยเพิ่ม created ฟังก์ชั่นเพื่อให้ดึงข้อมูล people จาก json server ทุกครั้งที่เปิดใช้งานครั้งแรก

```vue{4-6}
<script>
...
export default {
  created() {
    this.$store.dispatch("people/getPeople");
  },
  ...
}
</script>
```

- แก้ไขไฟล์ PersonForm.vue เพื่อให้สามารถ refresh ข้อมูลจาก json server ได้ โดยการเพิ่มปุ่ม refresh ดังบรรทัดที่ 6 และให้เรียกฟังก์ชั่น getPeople เมื่อมีการคลิก โดยที่ฟังก์ชั่น getPeople จะทำการ dispatch action ที่ชื่อ "people/getPeople" ดังบรรทัดที่ 23

```vue{5-6,22-24}
<template>
  <div class="card-content">
  ...
    <b-field class="buttons" grouped>
        <b-button @click="savePerson" type="is-primary">Save</b-button>
        <b-button @click="getPeople" type="is-primary">Refresh</b-button>
    </b-field>
  </div>
</template>
<script>
export default {
  ...
  methods: {
    savePerson() {
      this.$store.dispatch("people/addPerson", {
        title: this.person.title,
        firstName: this.person.firstName,
        lastName: this.person.lastName,
        isActive: this.person.isActive
      });
    },
    getPeople() {
      this.$store.dispatch("people/getPeople");
    }
  }
};
</script>

```

- ทดสอบ เพิ่ม และลบข้อมูลบน json server ผ่าน postman และกดปุ่ม refresh เพื่ออัพเดตข้อมูล

### 4. ใช้ Axios ดึงข้อมูลจาก Reddit และสร้าง Vue Components เพื่อแสดงผล

บางเว็บไซต์ เช่น reddit นั้นเปิด API ให้เราสามารถดึงข้อมูลได้ผ่าน Rest API แต่สิ่งที่ต้องคำนึงถึงก็คือ ตัวโครงสร้างข้อมูลของแต่ละแหล่งนั้นมีควาหลากหลาย เช่น

- เปิดหน้า reddit ของห้อง vuejs <https://www.reddit.com/r/vuejs> ผ่านบราวเซอร์
- ทดลองเรียก json api ของ reddit ผ่าน URL - <https://www.reddit.com/r/vuejs.json>
- ลองใช้ postman ดึงข้อมูล
- สร้าง Vue project โดยสร้าง component สำหรับ List ข้อมูลใน reddit
  - ให้สร้าง vue project ขึ้นใหม่ ใน workspace เดิม โดยใช้ชื่อ wk09-name (เปลี่ยน name เป็นชื่อตัวเอง)
  - เลือกใช้ CSS Framework
  - ในกรณี reddit เนื่องจากมีข้อมูลหลายฟิลด์ที่ได้รับจาก API เราสามารถเลือกเฉพาะฟิลด์ที่เราต้องการเพื่อนำมาแสดงผลต่อ โดยใช้ Array.map() ดังภาพด้านล่าง

```js
  Array.map(child => {
    return {
      thumbnail: child.data.thumbnail,
      title: child.data.title,
    };
  });
```

### 5. ส่งงาน

- Push งานขึ้นบน GitHub ตาม repository ของแต่ละคน โดยใส่ commit msg ว่า "Week 9 - Homework"

## เอกสารอ้างอิง

- [\[1\] Managing state in Vue.js with Vuex](<https://itnext.io/managing-state-in-vue-js-with-vuex-f036fd71f432>)
- [\[2\] Get a full fake REST API with zero coding in less than 30 seconds (seriously)](<https://github.com/typicode/json-server>)
- [\[3\] Vue.js REST API Consumption with Axios](https://alligator.io/vuejs/rest-api-axios/>)
- [\[4\] Promise based HTTP client for the browser and node.js](<https://github.com/axios/axios>)
