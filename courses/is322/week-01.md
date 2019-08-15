---
title: การพัฒนาเว็บแอปพลิเคชัน
lang: th_TH
tobeListed: false
meta:
  - name: description
    content: การพัฒนาเว็บแอปพลิเคชัน
  - name: keywords
    content: การพัฒนาเว็บแอปพลิเคชัน
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is322/)

## การพัฒนาเว็บแอปพลิเคชัน

ในส่วนนี้จะกล่าวถึง Web application & Web architecture รวมไปถึงองค์ประกอบของการพัฒนา web application นอกจากนี้ยังมีเรื่องราวของการทำ version control และการเข้าถึง code ของ framework, tools, และ components ต่าง ๆ ที่มีการแบ่งปันผ่าน GitHub ซึ่งครอบคลุมถึงการติดตั้งและใช้งาน Visual Studio Code และทำความรู้จักกับ JavaScript Framework

## แบบฝึกหัดก่อนเริ่มบทเรียน

## ติดตั้งโปรแกรมที่ต้องใช้

1. [VsCode เวอร์ชั่นล่าสุด](https://code.visualstudio.com/) ==> ติดตั้งที่ d:\toolb\code
2. [Node v12](https://nodejs.org/en/) ==> ติดตั้งที่ d:\toolb\nodejs
3. [Git เวอร์ชั่นล่าสุด](https://git-scm.com/downloads) ==> ติดตั้งที่ d:\toolb\git
4. [Putty เวอร์ชั่นล่าสุด](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) ==> ติดตั้งที่ d:\toolb\putty

หมายเหตุ ไฟล์ถูกดาวน์โหลดมาให้แล้วที่ไดร์ฟ D

## ตรวจสอบความเรียบร้อยในการติดตั้ง

เปิดโปรแกรม cmd ขึ้นมา

- ตรวจสอบ VS Code

```bash
code -v
```

- ตรวจสอบ node

```bash
node -v
```

- ตรวจสอบ npm

```bash
npm -v
```

- ตรวจสอบ git

```bash
git --version
```

- ตรวจสอบความเรียบร้อยของ path

```bash
path

PATH=C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;D:\toolb\nodejs\;D:\toolb\git\cmd;C:\ProgramData\chocolatey\bin;C:\Users\user\AppData\Local\Microsoft\WindowsApps;D:\toolb\code\bin;C:\Users\user\AppData\Roaming\npm
```

หากมีปัญหาในการเรียกใช้ command ดังกล่าว ให้ลองดูวิธีแก้[ที่นี่](/courses/is322/#trouble-shooting)

## ทดลองสร้าง web project

### 1. สร้าง workspace ซึ่งเป็น folder สำหรับใช้งาน

- เปิดโปรแกรม cmd ขึ้นมา

```bash
d:
cd toolb
mkdir workspace
```

### 2. เปิดโปรแกรม VS Code

- ตรวจสอบว่าอยู่ที่ d:\toolb\workspace แล้วพิมพ์คำสั่ง

```bash
code .
```

### 3. ติดตั้ง tool ที่ต้องใช้

- ติดตั้ง yarn

```bash
npm install -g yarn
```

- ทดสอบว่า yarn ถูกติดตั้งเรียบร้อย

```bash
yarn -v
```

- ติดตั้ง Vue CLI

```bash
yarn global add @vue/cli
```

- ทดสอบว่า Vue CLI ถูกติดตั้งเรียบร้อย

```bash
vue --version
```

### 4. สร้าง web project  

- ใช้ Vue CLI โดยเลือกค่า default ทั้งหมด

```bash
vue create {ชื่อโปรเจ็ค}
```

- ตรวจสอบโครงสร้างโฟล์เดอร์ ดังรูป

![Vue folder structure](/assets/is322/wk01-vue-folder-structure.png)

- เมื่อติดตั้งเรียบร้อย ให้ทำการทดสอบโดยใช้คำสั่งด้านล่าง

```bash
cd myfirstsite
yarn serve
```

- ทดสอบโดยการเปิด browser แล้วใส่ URL - http://localhost:{port เดียวกับที่หน้า console}

![Vue first site](/assets/is322/wk01-vue-firstsite.png)

- ในการเขียน web application ด้วย Vue.js นั้นจะต้องใช้ทักษะ 3 ภาษา
  - ภาษา [HTML](https://www.w3schools.com/html/)
  - ภาษา [CSS](https://www.w3schools.com/css/)
  - ภาษา [JavaScript](https://www.w3schools.com/js/)

- โดยในการพัฒนา web application นั้น จะทำโดยการสร้าง component ย่อย ๆ แยกเป็นไฟล์ .vue (ดูตัวอย่าง App.vue)

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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

### 5. ปรับแต่ง Hello Webpage ให้เป็น App ตัวเอง

ให้เลือก app ที่ตนเองสนใจ เช่น app ใน smartphone แล้วลองสร้างหน้าเว็บเพจคร่าวๆ โดยใช้ [HTML](https://www.w3schools.com/html/)

### 6. ใส่ CSS stylesheet (Optional)

ใส่ [CSS](https://www.w3schools.com/css/) ให้สวยงาม

### 7. Upload project ขึ้น GitHub

- สมัครสมาชิก GitHub

- สร้าง repository บน GitHub ในที่นี้ใช้ชื่อ myfirstsite

- ทำการ initial git และ push ไฟล์โปรเจ็คทั้งหมดไปยัง GitHub

```bash
echo "# myfirstsite" >> README.md
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/mentor2code/myfirstsite.git
git push -u origin master
```
