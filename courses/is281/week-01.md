---
title: HTML (1)
lang: th_TH
tobeListed: false
meta:
  - name: description
    content: HTML
  - name: keywords
    content: HTML CodePen GitHub W3Schools
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is281/)

## การเขียนเว็บด้วย HTML

HTML หรือ Hyper Text Markup Language เป็นภาษาสำหรับใช้ในการสร้างเว็บ โดย HTML ทำหน้าที่เป็นตัวกำหนดโครงสร้างเนื้อหาของเว็บ ซึ่งในการพัฒนาเว็บนั้นยังต้องมีเทคโนโลยีอื่น ๆ ที่มาช่วยเสริมความสามารถของ HTML อีก เช่น CSS สำหรับช่วยในเรื่องของ Appearance/Presentation และ JavaScript สำหรับ Functionality / Interaction / Behaviour

นอกจาก HTML, CSS และ JavaScript ที่เป็นภาษาที่ใช้ในการเขียนเว็บแล้ว ยังต้องมีเครื่องมืออื่น ๆ อีกเช่น GitHub ที่เป็นฟรี code version control สำหรับเก็บโค้ดของเว็บที่เขียน และยังสามารถเป็นฟรีเว็บโฮสต์ได้ สำหรับ Editor ที่ใช้สำหรับเขียนโค้ด สำหรับคลาสนี้จะใช้ CodePen ซึ่งเป็น HTML playground ที่สนับสนุนการแสดงผล HTML+CSS เรียลไทม์

โดยในสัปดาห์แรกจะเป็นเนื้อหาในส่วนของการเขียนเว็บเบื้องต้นด้วย HTML และการ deploy เว็บจาก HTML ที่เขียนขึ้นบนเว็บโฮสต์

## Resources / Technologies ที่ใช้ในการเรียน

- [GitHub](https://github.com/) - Source control + Free Web Hosting
- [CodePen](https://codepen.io/) - HTML Playground
- [W3Schools](https://www.w3schools.com/) - Web References
  - [HTML](https://www.w3schools.com/html/) - HTML References
  - [CSS](https://www.w3schools.com/css/) - CSS References

## แบบฝึกหัด

### 1. สร้างเว็บบน GitHub Pages

ในส่วนนี้เราจะทำการสร้างเว็บของตัวเองโดยใช้ GitHub Pages เป็น Host ซึ่งเราสามารถที่จะ Deploy หน้าเว็บที่ทำเสร็จ และเผยแพร่บนอินเตอร์เน็ตได้ทันทีตามขั้นตอนดังต่อไปนี้

- สมัครสมาชิก [GitHub](https://github.com/) โดยจะต้องทำการกำหนด
  - username => มีผลต่อการกำหนด URL ของแต่ละคน
  - email => ใส่อีเมล์ที่ใช้งานจริง
  - password => ความยาวไม่น้อยกว่า 8 ตัวอักษร

![GitHub sign up](/assets/is281/wk01-github.png)

- สร้าง repository สำหรับ publish เว็บ
  - ไปที่เมนู Repositories แล้วกดปุ่ม New เพื่อสร้าง repository
  - กำหนดชื่อ repository เป็น **username.github.io** เท่านั้น
  - จากนั้นเช็คช่อง "Initialize this repository with a README" แล้วกดปุ่ม "Create repository"
  
![Create github repo](/assets/is281/wk01-create-repo.png)

- เมื่อเสร็จแล้วจะได้ GitHub repository สำหรับเก็บโค้ด HTML
![Initial github repo](/assets/is281/wk01-initial-repo.png)

- ทำสร้างไฟล์ index.html เพื่อทดสอบ โดยมีเนื้อหาตามด้านล่าง

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>เว็บของ {ชื่อ นามสกุล}</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="" />
  </head>
  <body>Hello World</body>
</html>

```

- โดยให้เปลี่ยนรายละเอียด {ชื่อ นามสกุล} ใน `<title></title>`
- พิมพ์ index.html ลงในช่อง ชื่อไฟล์

![Create index.html](/assets/is281/wk01-create-index-html.png)

- จากนั้นใส่ commit message แล้วกดปุ่ม "Commit new file"

![Commit index.html](/assets/is281/wk01-commit-index-html.png)

- ในหน้าแรกของ repository จะแสดงผลดังนี้

![Repo with index.html](/assets/is281/wk01-repo-with-index-html.png)

- จากนั้นไปที่เมนู Settings และเลื่อนลงไปดูที่ Github Pages เพื่อตรวจสอบดูผลการ publish site โดยดูจากข้อความ "Your site is published at ..." ดังภาพ

![Github Pages](/assets/is281/wk01-github-pages.png)

- จากนั้นคลิกที่ลิ้งค์เพื่อเข้าสู่หน้าเว็บ index.html ที่สร้างขึ้น

![Github Pages](/assets/is281/wk01-github-io.png)

### 2. ใช้ CodePen เป็น Playground ในการเขียนเว็บ

ในการเขียนเว็บด้วย HTML นั้นจะต้องใช้ Editor หรือ IDE ในการเขียน โดยปกติแล้วจะเป็น application ที่ถูกติดตั้งในคอมพิวเตอร์ เช่น [Visual Studio Code](https://code.visualstudio.com/) หรือ [Notepad++](https://notepad-plus-plus.org/downloads/) ซึ่งเหมาะกับ serious developer ที่ใช้ในการเขียนเว็บ สำหรับในการเรียนในชั้นเรียนนั้น มีอีกทางเลือก ก็คือ การใช้ HTML Playground ซึ่งสามารถเขียนเว็บและแสดงผลได้ทันที โดยในที่นี้เราจะใช้ [CodePen](https://codepen.io/)

![CodePen](/assets/is281/wk01-codepen-io.png)

ตัวอย่างการใช้ CodePen เพื่อแสดงผลโค้ด HTML ตัวอย่างที่เราเพิ่งสร้าง

![CodePen](/assets/is281/wk01-codepen-new-pen.png)

ทดลองตัวอย่างจากบทเรียนของ [W3Schools](https://www.w3schools.com/) โดยใช้ CodePen

- [HTML](https://www.w3schools.com/html/) - HTML References
- [CSS](https://www.w3schools.com/css/) - CSS References

### 3. Chrome Developer Tools

เราสามารถใช้ Dev Tools ของ Google Chrome เพื่อช่วยในการตรวจสอบการทำงานของโค้ด HTML ของเราได้ว่ามีข้อผิดปกติอย่างไรดังภาพ

![CodePen](/assets/is281/wk01-chrome-devtools.png)

## Individual Assignment

- สร้างหน้า About Me โดยมีข้อกำหนดดังนี้
  - รูป
  - รายละเอียดส่วนตัว
  - ประวัติการศึกษา
  - กิจกรรม / งานอดิเรก + รูป
