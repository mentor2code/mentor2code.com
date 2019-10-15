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

ในการพัฒนา web application ด้วย Vue.js Framework องค์ประกอบหลักที่เราจะต้องสร้างก็คือ Component ซึ่งเป็นการแยกส่วนของ Web Application ของเป็นส่วนย่อย ๆ เพื่อที่จะให้ง่ายต่อการ maintain และการ reuse เช่น เราสามารถที่จะสร้าง navbar ที่จะถูกใช้ซ้ำในทุก ๆ หน้าของ web application เป็นต้น Vue.js Component นั้นจะประกอบไปด้วย attribute ต่าง ๆ เช่น data, methods, computed, watched ฯลฯ [รายละเอียด](/courses/is322/week-06.md)

## การเขียน Vue.js Components (ต่อ)

พัฒนา registration form โดยเลือกระหว่างการใช้ Bootstrap หรือ Buefy (Bulma) [รายละเอียด](/courses/is322/week-07.md)

## การทำ State Management ผ่าน EventBus และ Vuex

เมื่อเราสามารถสร้าง components ต่าง ๆ เองได้แล้ว ก็จะเกิดสถานการณ์ที่ว่าเรามี components หลาย ๆ ตัวที่จะประกอบร่าง รวมกันเป็น web page ซึ่งแต่ละ component นั้นมี data ของตัวเองสำหรับใช้ในการทำงาน โดยหลักการแล้วเราจะต้องสร้าง component หลัก เช่น MainPage เพื่อเป็นหน้ารวม ที่ประกอบไปด้วย components ต่าง ๆ โดยหน้าหลักจะทำหน้าที่ส่งผ่าน properties ไปให้แต่ละ components เพื่อ render แต่ละส่วนของหน้า page ขึ้นมา จากนั้นเมื่อ user มี interaction กับแต่ละ component ก็จะเกิดการเปลี่ยนแปลงของ data ในแต่ละส่วนซึ่งอยู่แยกกัน ซึ่ง data ในแต่ละส่วนนั้นจะต้องถูกส่งกลับมายัง component หน้าหลักเพื่อที่จะทำงานต่อ วิธีการส่งข้อมูลกลับมายัง component หลักนั้น... [รายละเอียด](/courses/is322/week-08.md)

## การเชื่อมต่อกับ Backend Service ต่าง ๆ ผ่าน Axios

หลังจากที่ได้เรียนรู้การจัดการ data ระหว่าง components รวมไปถึงการใช้ Vuex ในการจัดการ state ในขั้นตอนถัดมา คือ การรับส่งข้อมูลระหว่าง Web Application กับ Back Services หรือเป็นการนำ state ของ Web Application ไปเก็บไว้ยัง Backend Service เพื่อให้ผู้ใช้อื่น ๆ สามารถเข้าถึงข้อมูลนั้นได้... [รายละเอียด](/courses/is322/week-09.md)

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
