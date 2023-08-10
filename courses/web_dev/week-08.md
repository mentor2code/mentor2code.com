---
title:  การทำ State Management ผ่าน EventBus และ Vuex
lang: th-TH
tobeListed: false
meta:
  - name: description
    content: การทำ State Management ผ่าน EventBus และ Vuex
  - name: keywords
    content:  การทำ State Management ผ่าน EventBus และ Vuex
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/web_dev/)

## การทำ State Management ผ่าน EventBus และ Vuex

เมื่อเราสามารถสร้าง components ต่าง ๆ เองได้แล้ว ก็จะเกิดสถานการณ์ที่ว่าเรามี components หลาย ๆ ตัวที่จะประกอบร่าง รวมกันเป็น web page ซึ่งแต่ละ component นั้นมี data ของตัวเองสำหรับใช้ในการทำงาน โดยหลักการแล้วเราจะต้องสร้าง component หลัก เช่น MainPage เพื่อเป็นหน้ารวม ที่ประกอบไปด้วย components ต่าง ๆ โดยหน้าหลักจะทำหน้าที่ส่งผ่าน properties ไปให้แต่ละ components เพื่อ render แต่ละส่วนของหน้า page ขึ้นมา จากนั้นเมื่อ user มี interaction กับแต่ละ component ก็จะเกิดการเปลี่ยนแปลงของ data ในแต่ละส่วนซึ่งอยู่แยกกัน ซึ่ง data ในแต่ละส่วนนั้นจะต้องถูกส่งกลับมายัง component หน้าหลักเพื่อที่จะทำงานต่อ วิธีการส่งข้อมูลกลับมายัง component หลักนั้น มีหลายวิธี เช่น

- ทำให้ component แต่ละตัวนั้น support v-model
- ใช้ EventBus
- ใช้ Vuex

### แบบฝึกหัด

### 1. สร้าง Vue Project

ให้สร้าง vue project ขึ้นใหม่ ใน workspace เดิม โดยใช้ชื่อ wk08-name (เปลี่ยน name เป็นชื่อตัวเอง)

```sh{3}
d:\
cd toolb\workspace
vue create wk08-{เปลี่ยนชื่อด้วย}
```

### 2. เลือกใช้ CSS Framework สามารถใช้ได้ทั้ง

- Bootstrap
- Buefy*

แล้วแต่ถนัด (ตัวอย่างในบทนี้ใช้ Buefy ทั้งหมด)

### 3. ทำให้ component ที่เราสร้าง support v-model (ตัวอย่างที่ 1)

ตัวอย่างนี้ คือ เราจะสร้าง NameSection.vue ซึ่งเป็น component ที่ใช้สำหรับรับข้อมูล คำนำหน้าชื่อ, ชื่อ และนามสกุล โดย Ex01Page.vue นั้นเป็น component หน้าหลักจะรับส่งค่าผ่าน v-model

- สร้างโฟล์เดอร์ ex01 ไว้ในโฟลเดอร์ components เผื่อสำหรับเก็บ components ของตัวอย่างที่ 1
- สร้าง component ชื่อ NameSection.vue  ใน components/ex01 ดังภาพด้านล่าง
- ในการสร้าง component ที่ support v-model นั้น หลัก ๆ คือจะต้องกำหนดให้ component รับค่า props ที่ชื่อ value (สังเกตบรรทัดที่ 22) และส่งค่ากลับผ่านการเรียกฟังก์ชั่น this.$emit โดยใช้ event ชื่อ "input" (สังเกตบรรทัดที่ 34-38)
- โดยเราสามาถดักฟัง event ภายใน component ผ่าน v-on หรือ @ ได้และเรียก method ที่เรากำหนดไว้ (สังเกตบรรทัดที่ 5, 12 และ 15) ที่มีการเรียก fireChanges method
- สรุปลำดับขั้นคร่าว ๆ นั้นก็คือ
  - เมื่อ component ถูกสร้างขึ้นจะรับข้อมูลผ่าน props ชื่อ value
  - จากนั้น component จะนำค่าใน value props ไปใช้งานผ่าน data function
  - เมื่อมีการเปลี่ยนแปลงข้อมูล fireChanges methods จะถูกเรียก เพื่อส่งค่าใน data ผ่าน "input" event กลับไปยัง parent component

```vue{5,12,15,22,26-28,34-38}
<template>
  <div class="card-content">
    <b-field grouped>
      <b-field label="คำนำหน้า">
        <b-select @input="fireChanges" v-model="profile.title" placeholder="คำนำหน้า" rounded>
          <option>นาย</option>
          <option>นาง</option>
          <option>นางสาว</option>
        </b-select>
      </b-field>
      <b-field label="ชื่อ" expanded>
        <b-input @input="fireChanges" v-model="profile.firstName" placeholder="ชื่อ" rounded></b-input>
      </b-field>
      <b-field label="นามสกุล" expanded>
        <b-input @input="fireChanges" v-model="profile.lastName" placeholder="นามสกุล" rounded></b-input>
      </b-field>
    </b-field>
  </div>
</template>
<script>
export default {
  props: ["value"],
  data() {
    return {
      profile: {
        title: this.value.title,
        firstName: this.value.firstName,
        lastName: this.value.lastName
      }
    };
  },
  methods: {
    fireChanges() {
      this.$emit("input", {
        title: this.profile.title,
        firstName: this.profile.firstName,
        lastName: this.profile.lastName
      });
    }
  },
};
</script>
```

- สร้าง component ชื่อ Ex01Page.vue  ใน components/ex01 ดังภาพด้านล่าง
- เรียกใช้ NameSection component โดยใช้ v-model (สังเกตบรรทัดที่ 5)
- ซึ่งตัวแปร fullName นั้นเราได้สร้างขึ้นไว้ใน data function

```vue{5,7,19-23}
<template>
  <div class="card-content">
    <name-section
      class="card"
      v-model="fullName">
    </name-section>
    <p> {{ fullName }} </p>
  </div>
</template>
<script>
import NameSection from './NameSection.vue';

export default {
  components: {
    NameSection,
  },
  data() {
    return {
      fullName: {
        title: '',
        firstName: '',
        lastName: '',
      }
    };
  }
}
</script>

```

- นำ Ex01Page ไป register ไว้ใน App.vue แล้วทดลองแสดงผล

### 4. การใช้ EventBus (ตัวอย่างที่ 2)

การใช้ v-model นั้น จำกัดการส่งข้อมูลระหว่าง parent กับ child component เท่านั้น ซึ่งหากเราต้องการที่จะส่งข้อมูลกันระหว่าง component ที่อยู่ในระดับเดียวกันโดยตรง การใช้ v-model อาจจะไม่เหมาะสม อีกทางเลือกหนึ่งที่สามารถทำได้คือการใช้ EventBus โดยตัวอย่างนี้จะเป็น components สองส่วนที่อยู่ในหน้าเดียวกัน คือ ส่วนที่เป็น number input ที่รับข้อมูลการกดปุ่ม +/- และทุกครั้งที่มีการเปลี่ยนแปลง อีกส่วนหนึ่งที่เป็น slider component ในส่วนของ display จะเปลี่ยนตาม ซึ่งข้อมูลการเปลี่ยนแปลงนี้จะส่งผ่านไปมาระหว่าง component ทั้งสองผ่าน EventBus โดยไม่ผ่าน parent component ขั้นตอนการเขียน EventBus มีดังนี้

- สร้างโฟล์เดอร์ ex02 ไว้ในโฟลเดอร์ components เผื่อสำหรับเก็บ components ของตัวอย่างที่ 2
- สร้างไฟล์ event-bus.js ใน folder src/plugins โดยมีข้อมูลดังภาพด้านล่าง โดย EventBus จะถูกเรียกใช้ผ่าน import { EventBus } ใน components ต่าง ๆ

```js{3}
import Vue from 'vue';

export const EventBus = new Vue();

```

- สร้าง component ชื่อ NumberInputSection.vue ใน components/ex02 ซึ่งเป็น component ที่จะส่งข้อมูล ดังภาพด้านล่าง
- จากภาพจะเห็นว่า
  - มีการ import { EventBus } เพื่อใช้งานในบรรทัดที่ 9
  - โดยทุกครั้งที่มีการกด +/- จะมีการเรียก fireChanges methods (บรรทัดที่ 4)
  - EventBus ก็จะปล่อย event ที่ชื่อ "user-change-number" พร้อมกับส่งค่าที่เปลี่ยนไปพร้อมกับ event (บรรทัดที่ 19)

```vue{4,9,19}
template>
  <div class="card-content">
    <b-field>
      <b-numberinput @input="fireChanges" v-model="number" min="0" max="100"></b-numberinput>
    </b-field>
  </div>
</template>
<script>
import { EventBus } from "../../plugins/event-bus.js";

export default {
  data() {
    return {
      number: 0
    };
  },
  methods: {
    fireChanges() {
      EventBus.$emit("user-change-number", this.number);
    }
  }
};
</script>

```

- สร้าง component ชื่อ DisplaySection.vue ใน components/ex02 ซึ่งเป็น component ที่จะรับข้อมูล ดังภาพด้านล่าง
- จากภาพจะเห็นได้ว่า
  - มีการ import { EventBus } เพื่อใช้งานในบรรทัดที่ 9 ซึ่งเหมือนกับ component ที่จะส่งข้อมูล
  - สิ่งที่ต่างกันจะอยู่ที่การรับข้อมูลนั้นจะต้องทำโดยการ register กับ EventBus โดยเรียก EventBus.$on แล้วใส่ชื่อ event ที่ตรงกันกับ component ที่จะส่งข้อมูลมา
  - ส่วนอีก parameter นึงก็คือ function ที่จะประมวล event นี้ต่อ (บรรทัดที่ 13)
  - โดยการ register EventBus นั้นสามารถทำได้โดยการใส่ไว้ใน created() function ของ Vue (บรรทัดที่ 12)

```vue{9,12-14}
<template>
  <div class="card-content">
    <b-field label="ค่าที่เลือก">
      <b-slider size="is-large" v-model="sliderValue"></b-slider>
    </b-field>
  </div>
</template>
<script>
import { EventBus } from "../../plugins/event-bus.js";

export default {
  created() {
    EventBus.$on('user-change-number', (number) => (this.sliderValue = number));
  },
  data() {
    return {
      sliderValue: 0,
    };
  }
};
</script>

```

- สร้าง component ชื่อ Ex02Page.vue  ใน components/ex02 ดังภาพด้านล่าง
- เรียกใช้ NumberInputSection และ DisplaySection components
- ซึ่งตัวแปร fullName นั้นเราได้สร้างขึ้นไว้ใน data function

```vue{3-4,8-9,13-14}
<template>
  <div class="card-content">
    <display-section class="card"></display-section>
    <number-input-section class="card"></number-input-section>
  </div>
</template>
<script>
import DisplaySection from './DisplaySection.vue';
import NumberInputSection from './NumberInputSection.vue';

export default {
  components: {
    DisplaySection,
    NumberInputSection,
  }
}
</script>

```

- นำ Ex02Page ไป register ไว้ใน App.vue แล้วทดลองแสดงผล

### 5. การใช้ Vuex (ตัวอย่างที่ 3)

จากตัวอย่างก่อนหน้า ที่มีการสื่อสารระหว่าง components ทั้งสองวิธีนั้น ซึ่งมีข้อจำกัด ดังนี้

- v-model ใช้ได้เฉพาะกรณีการส่งข้อมูลไปมาระหว่าง parent กับ child components เท่านั้น
- EventBus ใช้ได้เฉพาะการส่งข้อมูลแบบ 1 ต่อ 1 คือ ระหว่าง component A กับ component B โดยไม่มี storage สำหรับเก็บข้อมูลกลาง

Vuex เป็นอีกทางเลือกหนึ่ง เนื่องจากเป็น component ที่ถูกออกแบบมาเพื่อทำหน้าที่ state management ให้กับ Vue.js โดยเฉพาะ ซึ่งในการใช้งาน Vuex สามารถเพิ่มเข้าไปใน Vue project ได้ โดยมีขั้นตอน ดังต่อไปนี้

- ติดตั้ง Vuex

```sh
yarn add vuex
```

- สร้างโฟล์เดอร์ store ใน src เพื่อเก็บโค้ดในส่วนของ Vuex ทั้งหมด โดยจะมีไฟล์ทั้งหมด 5 ไฟล์ ดังนี้
  - store/modules/people/actions.js
  - store/modules/people/mutations.js
  - store/modules/people/getters.js
  - store/modules/people/index.js
  - store/index.js

![Vuex folder structure](/assets/web_dev/wk08-vuex-folder-structure.png)

- สร้างไฟล์ store/modules/people/actions.js โดยมีโค้ด ดังภาพ

```js
export const actions = {
  getPeople(context) {
    //TODO get people from API
    context.commit("setPeople", null);
  },
  addPerson(context, person){
    context.commit("addPerson", person);
  }
};

```

- สร้างไฟล์ store/modules/people/mutations.js โดยมีโค้ด ดังภาพ

```js
import Vue from "vue";

export const mutations = {
  setPeople(state, people) {
      Vue.set(state, "people", people);
  },
  addPerson(state, person) {
    let people = state.people;
    people.push(person);
    Vue.set(state, "people", people);
  }
};

```

- สร้างไฟล์ store/modules/people/getters.js โดยมีโค้ด ดังภาพ

```js
export const getters = {
  activePeople: state => {
    return state.people.filter(people => people.isActive);
  }
};

```

- สร้างไฟล์ store/modules/people/index.js โดยมีโค้ด ดังภาพ

```js
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  people: [],
  status: null,
};

const namespaced = true;

export const people = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

```

- สร้างไฟล์ store/index.js โดยมีโค้ด ดังภาพ

```js
import Vue from "vue";
import Vuex from "vuex";
import { people } from "./modules/people";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    people,
  }
});

```

- แก้ไขไฟล์ main.js ใน src โดยเพิ่มบรรทัดที่ 3 และ 10 ดังภาพ (อย่าลืมใส่ , ท้ายบรรทัดที่ 9)

```js{3,10}
import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import "./plugins/buefy-vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
}).$mount("#app");

```

- สร้างโฟล์เดอร์ ex03 ไว้ในโฟลเดอร์ components เผื่อสำหรับเก็บ components ของตัวอย่างที่ 3
- ในตัวอย่างนี้จะมี components ทั้งหมด 4 components คือ PersonForm.vue, PeopleList.vue, ActivePeopleList.vue และ Ex03Page.vue
- เริ่มสร้าง PersonForm.vue ใน components/ex03 ซึ่งเป็น component ที่จะรับข้อมูล person ดังภาพด้านล่าง
- เมื่อกดปุ่ม save แล้ว PersonForm จะเรียก $store.dispatch เพื่อส่งข้อมูลให้ "people/addPerson" โดยส่งค่า title, firstName, lastName และ isActive

```vue{23,31-37,42-47}
<template>
  <div class="card-content">
    <b-field grouped>
      <b-field label="คำนำหน้า">
        <b-select v-model="person.title" placeholder="คำนำหน้า" rounded>
          <option>นาย</option>
          <option>นาง</option>
          <option>นางสาว</option>
        </b-select>
      </b-field>
      <b-field label="ชื่อ" expanded>
        <b-input v-model="person.firstName" placeholder="ชื่อ" rounded></b-input>
      </b-field>
      <b-field label="นามสกุล" expanded>
        <b-input v-model="person.lastName" placeholder="นามสกุล" rounded></b-input>
      </b-field>
    </b-field>
    <b-field class="buttons" grouped>
      <b-field>
        <b-checkbox v-model="person.isActive">Active</b-checkbox>
      </b-field>
      <b-field>
        <b-button @click="savePerson" type="is-primary">Save</b-button>
      </b-field>
    </b-field>
  </div>
</template>
<script>
export default {
  data() {
    return {
      person: {
        title: "",
        firstName: "",
        lastName: "",
        isActive: false,
      }
    };
  },
  methods: {
    savePerson() {
      this.$store.dispatch("people/addPerson", {
        title: this.person.title,
        firstName: this.person.firstName,
        lastName: this.person.lastName,
        isActive: this.person.isActive,
      });
    }
  }
};
</script>

```

- ถัดมาให้สร้าง PeopleList.vue ใน components/ex03 ซึ่งเป็น component ที่จะแสดงข้อมูล people ทั้งหมด ดังภาพด้านล่าง
- ใน PeopleList จะเรียกใช้ mapState ของ vuex เพื่อคอยฟังว่า state ที่ชื่อ people มีการเปลี่ยนแปลง ผ่าน computed ของ Vue (สังเกตบรรทัดที่ 9 และ 23)
- จากนั้นส่งข้อมูลที่ได้จาก state ไปแสดงผลใน table (สังเกตบรรทัดที่ 4)

```vue{4,9,23}
<template>
  <div class="card-content">
    <b-field label="แสดงรายชื่อทั้งหมด" v-if="people.length">
      <b-table :data="people" :columns="columns"></b-table>
    </b-field>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
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
  }
};
</script>

```

- นอกจากจะ List ข้อมูลทั้งหมดแล้ว เรายังสามารถสร้างอีก component หนึ่งเพื่อแสดงผลข้อมูลของ people ที่ active ไปพร้อม ๆ กันได้ โดยสร้าง ActivePeopleList.vue ใน components/ex03 ดังภาพด้านล่าง
- ใน ActivePeopleList จะเรียกใช้ mapGetters ของ vuex เพื่อดึงข้อมูลใน state เฉพาะ people ที่ activeผ่าน computed ของ Vue (สังเกตบรรทัดที่ 9 และ 23)
- จากนั้นส่งข้อมูลที่ได้จาก getters ไปแสดงผลใน table (สังเกตบรรทัดที่ 4)

```vue{4,9,23}
<template>
  <div class="card-content">
    <b-field label="แสดงรายชื่อที่ Active" v-if="activePeople.length">
      <b-table :data="activePeople" :columns="columns"></b-table>
    </b-field>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      columns: [
        { field: "title", label: "คำนำหน้า" },
        { field: "firstName", label: "ชื่อ" },
        { field: "lastName", label: "นามสกุล" },
        { field: "isActive", label: "Active" }
      ]
    };
  },
  computed: {
    ...mapGetters("people", ["activePeople"])
  }
};
</script>

```

- สร้าง component ชื่อ Ex03Page.vue ใน components/ex03 ดังภาพด้านล่าง
- เรียกใช้ PersonForm, PeopleList และ ActivePeopleList components
- สังเกตุได้ว่า component นี้จะทำหน้าเพียงจัดวาง components อื่น ๆ โดยไม่ได้มีหน้าที่ในการจัดการ data หรือ state ใด ๆ ทั้งสิ้น

```vue
<template>
  <div class="card-content">
    <person-form class="card"></person-form>
    <people-list class="card"></people-list>
    <active-people-list class="card"></active-people-list>
  </div>
</template>
<script>
import PersonForm from "./PersonForm.vue";
import PeopleList from "./PeopleList.vue";
import ActivePeopleList from "./ActivePeopleList.vue";

export default {
  components: {
    PersonForm,
    PeopleList,
    ActivePeopleList
  }
}
</script>

```

- นำ Ex03Page ไป register ไว้ใน App.vue แล้วทดลองแสดงผล

### 6. ทบทวน

- ให้ปรับปรุง components ที่ทำใน wk07 ให้ support v-model
- แก้ตัวอย่างที่ 2 ให้ DisplaySection component สามารถส่งข้อมูลกลับไปยัง NumberInputSection component ได้

### 7. ส่งงาน

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
git commit -m "week 08 homework"
git remote add origin https://github.com/is322/wkxx-name.git
git push -u origin master
```

## เอกสารอ้างอิง

- [\[1\] Vuex - A state management pattern + library for Vue.js applications](<https://vuex.vuejs.org/>)
- [\[2\] Adding v-model Support to Custom Vue.js Components](<https://alligator.io/vuejs/add-v-model-support/>)
- [\[3\] Creating a Global Event Bus with Vue.js](<https://alligator.io/vuejs/global-event-bus/>)
- [\[4\] Managing state in Vue.js with Vuex](<https://itnext.io/managing-state-in-vue-js-with-vuex-f036fd71f432>)
