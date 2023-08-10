---
title: Web Application Development
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

# Web Application Development

## HTML (1)

HTML หรือ Hyper Text Markup Language เป็นภาษาสำหรับใช้ในการสร้างเว็บ โดย HTML ทำหน้าที่เป็นตัวกำหนดโครงสร้างเนื้อหาของเว็บ ซึ่งในการพัฒนาเว็บนั้นยังต้องมีเทคโนโลยีอื่น ๆ ที่มาช่วยเสริมความสามารถของ HTML อีก เช่น CSS สำหรับช่วยในเรื่องของ Appearance/Presentation และ JavaScript สำหรับ Functionality / Interaction / Behaviour [รายละเอียดเพิ่มเติม](html-01.md)

## HTML (2)

ในการพัฒนาเว็บนั้น มีอยู่ในรูปแบบของการพัฒนาแบบเป็นทีม โดยมีเว็บมาสเตอร์หลาย ๆ คนร่วมพัฒนาร่วมกัน ซึ่ง GitHub Pages นั้น support กับสร้างเว็บในรูปแบบของทีมด้วยเช่นกัน นอกจากนี้ ในบทเรียนนี้จะมีการใช้ CSS Framework เพื่อช่วยในการสร้างเว็บร่วมกับ HTML และ CSS ที่ปรับแต่งเองด้วย [รายละเอียดเพิ่มเติม](html-02.md)

## การพัฒนาเว็บแอปพลิเคชัน

ในส่วนนี้จะกล่าวถึง Web application & Web architecture รวมไปถึงองค์ประกอบของการพัฒนา web application นอกจากนี้ยังมีเรื่องราวของการทำ version control และการเข้าถึง code ของ framework, tools, และ components ต่าง ๆ ที่มีการแบ่งปันผ่าน GitHub ซึ่งครอบคลุมถึงการติดตั้งและใช้งาน Visual Studio Code และทำความรู้จักกับ JavaScript Framework [รายละเอียด](/courses/web_dev/week-01.md)

## พื้นฐาน HTML และ UI Design

ในส่วนนี้จะกล่าวถึงหน้าที่ของ HTML ซึ่งเป็นองค์ประกอบหลักในการควบคุมโครงสร้าง และเนื้อหาของ web application โดยมี CSS ทำหน้าที่ในการจัดและตกแต่งรูปแบบในการแสดงผล UI [รายละเอียด](/courses/web_dev/week-02.md)

## ภาษา CSS

CSS หรือ Cascading Style Sheets นั้นทำหน้าที่ในการ format รูปแบบของ HTML ที่จะแสดงผลบนหน้า web application โดยกลไกของ CSS นั้นประกอบไปด้วย selector และ declaration ซึ่ง CSS selector นั้นเป็นส่วนสำคัญที่ช่วยให้ web developer สามารถกำหนดได้ว่าส่วนไหนของ HTML นั้นที่ต้องการจะ apply CSS [รายละเอียด](/courses/web_dev/week-03.md)

## เรียนรู้ภาษา JavaScript (JS)

JS หรือ JavaScript นั้นทำหน้าที่ในการควบคุมเนื้อหาของเว็บเพจผ่าน HTML tag และรูปแบบการแสดงผลของ CSS กล่าวอีกอย่างหนึ่งคือ เป็นกลไกแกนหลักในการควบคุม web application โดย JS นั้นสามารถทำงานได้ทั้งบนฝั่ง client และฝั่ง server [รายละเอียด](/courses/web_dev/week-04.md)

## รู้จัก JavaScript Framework

Framework คือ โครงร่างของ application ซึ่งมีการจัดเตรียม function พื้นฐานไว้ให้นักพัฒนาสามารถนำไปใช้ในการพัฒนา application ไม่ว่าจะเป็น web, mobile โดย framework นั้นจะช่วยให้นักพัฒนาสามารถใช้เวลาในการพัฒนาในส่วนของ business logic หรือ business function โดยที่ไม่ต้องกังวลในส่วนของ non-function ต่าง ๆ เช่น การจัดการ network, การควบคุมการแสดงผลของ browser และ mobile [รายละเอียด](/courses/web_dev/week-05.md)

## การเขียน Vue.js Components

ในการพัฒนา web application ด้วย Vue.js Framework องค์ประกอบหลักที่เราจะต้องสร้างก็คือ Component ซึ่งเป็นการแยกส่วนของ Web Application ของเป็นส่วนย่อย ๆ เพื่อที่จะให้ง่ายต่อการ maintain และการ reuse เช่น เราสามารถที่จะสร้าง navbar ที่จะถูกใช้ซ้ำในทุก ๆ หน้าของ web application เป็นต้น Vue.js Component นั้นจะประกอบไปด้วย attribute ต่าง ๆ เช่น data, methods, computed, watched ฯลฯ [รายละเอียด](/courses/web_dev/week-06.md)

## การเขียน Vue.js Components (ต่อ)

พัฒนา registration form โดยเลือกระหว่างการใช้ Bootstrap หรือ Buefy (Bulma) [รายละเอียด](/courses/web_dev/week-07.md)

## การทำ State Management ผ่าน EventBus และ Vuex

เมื่อเราสามารถสร้าง components ต่าง ๆ เองได้แล้ว ก็จะเกิดสถานการณ์ที่ว่าเรามี components หลาย ๆ ตัวที่จะประกอบร่าง รวมกันเป็น web page ซึ่งแต่ละ component นั้นมี data ของตัวเองสำหรับใช้ในการทำงาน โดยหลักการแล้วเราจะต้องสร้าง component หลัก เช่น MainPage เพื่อเป็นหน้ารวม ที่ประกอบไปด้วย components ต่าง ๆ โดยหน้าหลักจะทำหน้าที่ส่งผ่าน properties ไปให้แต่ละ components เพื่อ render แต่ละส่วนของหน้า page ขึ้นมา จากนั้นเมื่อ user มี interaction กับแต่ละ component ก็จะเกิดการเปลี่ยนแปลงของ data ในแต่ละส่วนซึ่งอยู่แยกกัน ซึ่ง data ในแต่ละส่วนนั้นจะต้องถูกส่งกลับมายัง component หน้าหลักเพื่อที่จะทำงานต่อ วิธีการส่งข้อมูลกลับมายัง component หลักนั้น... [รายละเอียด](/courses/web_dev/week-08.md)

## การเชื่อมต่อกับ Backend Service ต่าง ๆ ผ่าน Axios

หลังจากที่ได้เรียนรู้การจัดการ data ระหว่าง components รวมไปถึงการใช้ Vuex ในการจัดการ state ในขั้นตอนถัดมา คือ การรับส่งข้อมูลระหว่าง Web Application กับ Back Services หรือเป็นการนำ state ของ Web Application ไปเก็บไว้ยัง Backend Service เพื่อให้ผู้ใช้อื่น ๆ สามารถเข้าถึงข้อมูลนั้นได้... [รายละเอียด](/courses/web_dev/week-09.md)

## การ Routing ระหว่าง Vue Components

เมื่อเราสามารถสร้าง component หลาย ๆ แบบที่สามารถส่งข้อมูลระหว่าง component กันเองผ่าน state management library เช่น Vuex หรือการส่งข้อมูลไปเก็บยัง Backend Service ผ่าน Axios ขั้นต่อมาคือการเชื่อมโยงในส่วนที่ติดต่อกับผู้ใช้ หากเราสร้าง component โดยแบ่งออกเป็นหลาย ๆ page ในการที่จะส่งต่อไปมาระหว่าง page นั้นจะต้องมี router มาช่วยในการเชื่อมแต่ละ page... [รายละเอียด](/courses/web_dev/week-10.md)

## การจัดการ Form Input และ Validation

ในการสร้าง component ที่เป็น form input เพื่อรับข้อมูลจากผู้ใช้ เพื่อที่จะนำข้อมูลเหล่านั้นไปประมวลผลต่อยัง Backend Service ต่าง ๆ นั้น จำเป็นต้องมีการตรวจสอบข้อมูลในฟอร์มเบื้องต้นก่อน เพื่อให้แน่ใจว่าข้อมูลที่จำเป็นนั้น ถูกกรอกมาอย่างครบถ้วนในฟอร์ม... [รายละเอียด](/courses/web_dev/week-11.md)

## การทำ Authentication

เมื่อสร้าง components ประกอบเป็น pages เพื่อใช้งานตามฟังก์ชั่นต่าง ๆ เช่น ฟอร์ม และการทำ input validation ขั้นตอนถัดมา คือ การทำ authentication เพื่อเป็นการระบุตัวตนของผู้ใช้งานในกรณีที่ web application ที่ถูกสร้างขึ้นนั้นมีความจำเป็นที่ต้องจำกัดการเข้าถึงเฉพาะกับผู้้ที่ได้รับอนุญาต หรือระบุตัวตนได้เท่านั้น ในการทำ authentication นั้น... [รายละเอียด](/courses/web_dev/week-12.md)

## การประยุกต์ใช้งาน components ต่าง ๆ ที่ถูกแบ่งปันบน GitHub

นอกจาก components ที่เราสร้างขึ้นเองจากบทเรียนก่อนหน้านี้แล้ว เรายังสามารถที่จะนำ components ที่ถูกสร้างขึ้นโดยนักพัฒนาคนอื่นๆ ที่แบ่งปันกันบน GitHub มาใช้กับ Web Application ที่เราสร้างขึ้นได้เช่นกัน [รายละเอียด](/courses/web_dev/week-13.md)

## การ deploy แอพพลิเคชั่นที่พร้อมใช้งาน

เมื่อพัฒนา web application ได้สมบูรณ์ระดับหนึ่ง และต้องการทดสอบ web application หรือเปิดให้มีการใช้งานจริง ขั้นตอนถัดไปคือ จะต้องทำการ build ตัว web application นี้และนำไป deploy ขึ้น Host [รายละเอียด](/courses/web_dev/week-14.md)

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
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

- กรณีที่ใช้คำสั่ง vue ไม่ได้ ให้เพิ่ม path - C:\Users\%USER%\AppData\AppData\Local\Yarn\bin ไว้ในตัวแปร path ของ Windows โดยใช้คำสั่ง

```bash
set PATH=%PATH%;C:\Users\%USER%\AppData\Local\Yarn\bin
```
