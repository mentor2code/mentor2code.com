---
title: CSS
lang: th-TH
tobeListed: false
meta:
  - name: description
    content: CSS
  - name: keywords
    content: CSS
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is322/)

## CSS

CSS หรือ Cascading Style Sheets นั้นทำหน้าในการ format รูปแบบของ HTML ที่จะแสดงผลบนหน้า web application โดยกลไกของ CSS นั้นประกอบไปด้วย selector และ declaration ซึ่ง CSS selector นั้นเป็นส่วนสำคัญที่ช่วยให้ web developer สามารถกำหนดได้ว่าส่วนไหนของ HTML นั้นที่ต้องการจะ apply CSS

### แบบฝึกหัด

- ทดลองใช้ selector แบบต่าง ๆ
- ทดลองใช้ media queries และใช้ developer feature ของ Google Chrome ประกอบ
- ทดลองใช้ CSS ควบคู่กับ Bootstrap

### ตรวจเช็คความเรียบร้อยของการติดตั้ง (สำหรับเครื่องใน lab 309)

เปิดโปรแกรม cmd ขึ้นมา แล้วทำการ set path ให้ครบถ้วนดังภาพ

```sh
set PATH=%PATH%;D:\toolb\nodejs\;D:\toolb\git\cmd;D:\toolb\code\bin;C:\Users\Administrator\AppData\Roaming\npm;C:\Users\Administrator\AppData\Local\Yarn\bin
```

- ตรวจสอบว่า VS Code, node และ git สามารถใช้งานได้

```sh
code -v
node -v
npm -v
git --version
```

- กรณี yarn และ vue หาย จะต้องทำการติดตั้งใหม่อีกครั้ง

```sh
npm install -g yarn
yarn global add @vue/cli
```

- เมื่อ yarn และ vue ใช้งานได้แล้ว ให้เปิด VS Code ใช้งานตามปกิ

```sh
d:
cd toolb\workspace
code .
```

- เปิด terminal ใน VS Code ขึ้นมาและ refresh node_modules ใน workspace (เปลี่ยน wkxx-name เป็น repository ของตัวเอง)

```sh
cd wkxx-name
yarn
```

- run development server

```sh
yarn serve
```

### การใช้งาน GitHub

- ตั้งค่า git โดยใส่ชื่อ ชื่อสกุล และอีเมล์เดียวกับที่ลงทะเบียนไว้กับ GitHub

```sh
git config --global user.name "FIRST_NAME LAST_NAME"
git config --global user.email "MY_NAME@example.com"
```

- สร้าง repository บน GitHub ในที่นี้ใช้ชื่อ wkxx-name (เปลี่ยนเลขทุกสัปดาห์ และใส่ชื่อของตัวเอง)

- ทำการ initial git และ push ไฟล์โปรเจ็คทั้งหมดไปยัง GitHub

```sh
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/is322/wkxx-name.git
git push -u origin master
```
