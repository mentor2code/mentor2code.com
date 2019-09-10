---
title: IS322 Application Development Tool (B)
lang: th-TH
tobeListed: true
meta:
  - name: description
    content: พัฒนาเว็บแอพพลิเคชั่นด้วย JavaScript Framework
  - name: keywords
    content: HTML, CSS, JS, Vue.JS
sidebar: auto
sidebarDepth: 2
---

# IS322 Application Development Tool (B)

## การพัฒนาเว็บแอปพลิเคชัน

ในส่วนนี้จะกล่าวถึง Web application & Web architecture รวมไปถึงองค์ประกอบของการพัฒนา web application นอกจากนี้ยังมีเรื่องราวของการทำ version control และการเข้าถึง code ของ framework, tools, และ components ต่าง ๆ ที่มีการแบ่งปันผ่าน GitHub ซึ่งครอบคลุมถึงการติดตั้งและใช้งาน Visual Studio Code และทำความรู้จักกับ JavaScript Framework [รายละเอียด](/courses/is322/week-01.md)

## พื้นฐาน HTML และ UI Design

ในส่วนนี้จะกล่าวถึงหน้าที่ของ HTML ซึ่งเป็นองค์ประกอบหลักในการควบคุมโครงสร้าง และเนื้อหาของ web application โดยมี CSS ทำหน้าที่ในการจัดและตกแต่งรูปแบบในการแสดงผล UI [รายละเอียด](/courses/is322/week-02.md)

## ภาษา CSS

CSS หรือ Cascading Style Sheets นั้นทำหน้าที่ในการ format รูปแบบของ HTML ที่จะแสดงผลบนหน้า web application โดยกลไกของ CSS นั้นประกอบไปด้วย selector และ declaration ซึ่ง CSS selector นั้นเป็นส่วนสำคัญที่ช่วยให้ web developer สามารถกำหนดได้ว่าส่วนไหนของ HTML นั้นที่ต้องการจะ apply CSS [รายละเอียด](/courses/is322/week-03.md)

## เรียนรู้ภาษา JavaScript (JS)

JS หรือ JavaScript นั้นทำหน้าที่ในการควบคุมเนื้อหาของเว็บเพจผ่าน HTML tag และรูปแบบการแสดงผลของ CSS กล่าวอีกอย่างหนึ่งคือ เป็นกลไกแกนหลักในการควบคุม web application โดย JS นั้นสามารถทำงานได้ทั้งบนฝั่ง client และฝั่ง server [รายละเอียด](/courses/is322/week-04.md)

## รู้จัก JavaScript Framework

Framework คือ โครงร่างของ application ซึ่งมีการจัดเตรียม function พื้นฐานไว้ให้นักพัฒนาสามารถนำไปใช้ในการพัฒนา application ไม่ว่าจะเป็น web, mobile โดย framework นั้นจะช่วยให้นักพัฒนาสามารถใช้เวลาในการพัฒนาในส่วนของ business logic หรือ business function โดยที่ไม่ต้องกังวลในส่วนของ non-function ต่าง ๆ เช่น การจัดการ network, การควบคุมการแสดงผลของ browser และ mobile [รายละเอียด](/courses/is322/week-05.md)

## การเขียน Vue.js Components

## การเขียน Vue.js Components (ต่อ)

## การทำ State Management ผ่าน EventBus และ Vuex

## การเชื่อมต่อกับ Backend Service ต่าง ๆ ผ่าน Axios

## การ Routing ระหว่าง Vue Component

## การจัดการ Form Input และ Validation

## การทำ Authentication

## การประยุกต์ใช้งาน components ต่าง ๆ ที่ถูกแบ่งปันบน GitHub

## การ deploy แอพพลิเคชั่นที่พร้อมใช้งาน

## เอกสารอ้างอิง

- Filipova, O. (2016), Learning Vue.js 2, Packt Publishing Ltd, Birmingham, UK.
- Filipova, O. (2017), Vue.js 2 and Bootstrap 4 Web Development, Packt Publishing Ltd, Birmingham, UK.
- Passaglia, A. (2017), Vue.js 2 Cookbook, Packt Publishing Ltd, Birmingham, UK.
- [Vue.js 2 Guide](<https://vuejs.org/v2/guide/>)

## Trouble Shooting

### [Fixing npm path in Windows 8 and 10](<https://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8-and-10/32159233#32159233>)

- ตรวจสอบดูว่า path ที่ npm ถูกติดตั้งนั้นอยู่ที่ไหน:

```bash
npm config get prefix
```

- กรณีที่ใช้คำสั่ง npm หรือ yarn ไม่ได้ ให้เพิ่ม path - C:\Users\%USER%\AppData\Roaming\npm ไว้ในตัวแปร path ของ Windows โดยใช้คำสั่ง

```bash
set PATH=%PATH%;C:\Users\%USER%\AppData\Roaming\npm
```

- กรณีที่ใช้คำสั่ง vue ไม่ได้ ให้เพิ่ม path - C:\Users\%USER%\AppData\AppData\Local\Yarn\bin ไว้ในตัวแปร path ของ Windows โดยใช้คำสั่ง

```bash
set PATH=%PATH%;C:\Users\%USER%\AppData\Local\Yarn\bin
```
