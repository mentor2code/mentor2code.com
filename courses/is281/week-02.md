---
title: HTML (2)
lang: th_TH
tobeListed: false
meta:
  - name: description
    content: HTML
  - name: keywords
    content: HTML GitHub Bootstrap
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is281/)

## การเขียนเว็บด้วย HTML

ในการพัฒนาเว็บนั้น มีอยู่ในรูปแบบของการพัฒนาแบบเป็นทีม โดยมีเว็บมาสเตอร์หลาย ๆ คนร่วมพัฒนาร่วมกัน ซึ่ง GitHub Pages นั้น support กับสร้างเว็บในรูปแบบของทีมด้วยเช่นกัน นอกจากนี้ ในบทเรียนนี้จะมีการใช้ CSS Framework เพื่อช่วยในการสร้างเว็บร่วมกับ HTML และ CSS ที่ปรับแต่งเองด้วย

## แบบฝึกหัด

### 1. สร้าง Organisation บน GitHub Pages

แต่ละ GitHub Account นั้นสามารถที่จะสร้าง Organisation เพื่อที่จะรองรับงานเป็นทีม หรือองค์กรได้

- โดยเราสามารถสร้าง Organisation ได้โดยการกดที่ + ด้านบนขวามีอ

![GitHub - Create Organisation](/assets/is281/wk02-create-org.png)

- จากนั้นให้เลือก Plan โดยเราสามารถเลือกแบบ Team for Open Source ซึ่ง GitHub ให้บริการฟรีได้

![GitHub - Choose Plan](/assets/is281/wk02-choose-plan.png)

- จากนั้นให้ใส่
  - Organisation Name ซึ่งชื่อนี้จะต้องไม่ซ้ำกับชื่อที่มีอยู่แล้วบน GitHub
  - Contact Email โดยให้ใส่อีเมล์ของตัวแทนหลักของทีม
  - เลือกเป็นแบบ Personal Account

![GitHub - Enter Details](/assets/is281/wk02-enter-org-details.png)

- เมื่อสร้าง Organisation เรียบร้อย GitHub จะถามให้เรา invite members ซึ่งเราสามารถที่จะ invite ตอนนี้หรือ skip ไปทำภายหลังก็ได้

![GitHub - Complete Creating Organisation](/assets/is281/wk02-complete-org.png)

- เมื่อเรียบร้อยแล้วจะเข้าสู่หน้า Home ของ Organisation ซึ่งส่วนนี้จะแตกต่างจากหน้า Home ของแต่ละผู้ใช้ เพราะจะเป็นส่วนที่ทีมสามารถเข้ามาทำงานร่วมกันได้

![GitHub - Organisation Home](/assets/is281/wk02-org-home.png)

- เราสามารถเพิ่มผู้ใช้ GitHub คนอื่นเพื่อเข้ามาร่วมทีม
  - ไปที่ Tab => People แล้วกดปุ่ม invite members
  - จากนั้นให้พิมพ์ชื่อ GitHub User ที่ต้องการเพิ่ม
  - ให้เลือก Role เป็น Owner เพื่อให้สมาชิกทุกคนในทีมมีสิทธิ์ในการแก้ไขเท่ากัน

![GitHub - Invite members](/assets/is281/wk02-invite-members.png)

- เราสามารถสร้าง repository สำหรับเก็บเว็บไซต์ของทีม หรือ Organisation ของเราได้
  - ขั้้นตอนเหมือนกับการสร้าง Repository ส่วนตัว แตกต่างกันเพียงแค่ต้องสร้าง Repository ในระดับ Organisation
  - เมื่อกด New Repository แล้วให้ตรวจสอบว่า Owner เป็น Organisation ที่เราสร้าง และ Repository Name ต้องอยู่ในรูปของ organisation-name.github.io
  - กด Create Repository

![GitHub - Create Organisation Repository](/assets/is281/wk02-create-org-repo.png)

- เมื่อสร้าง Repository สำหรับ Host เว็บของ Organisation เรียบร้อย จะได้ผลดังภาพ

![GitHub - Organisation Main Repository](/assets/is281/wk02-main-repo.png)

- ขั้นตอนถัดไปเราสามารถที่จะเข้าไปที่ Repository ของ Organisation เพื่อสร้างไฟล์ HTML, CSS

### 2. Group Assignment

- สร้าง Organisation โดยมีสมาชิกในกลุ่มไม่เกิน 5 คน
- นำหน้าประวัติของสมาชิกทุกคนมาใส่ใน Organisation
- สร้างหน้า Landing Page โดยมีลิงค์เชื่อมไปยังหน้าประวัติของแต่ละคน

### 3. การใช้ CSS ร่วมกับ HTML

การใช้ CSS ในการปรับแต่งการแสดงผลของ HTML นั้น สามารถทำได้หลายวิธี ดังนี้

- Inline HTML => มีผลกับ HTML tag นั้น ๆ เท่านั้น

```html
<p style="text-align:center">My paragraph</p>

```

- Internal CSS => มีผลกับ HTML ไฟล์นั้น (ตาม selector ที่กำหนด) ไม่สามารถใช้ในไฟล์อื่นได้

```html{9-13}
<!DOCTYPE html>
<html>
  <head>
    <title>เว็บของวิชา IS281</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body {
        text-color: red;
      }
    </style>
  </head>
  <body>Hello World</body>
</html>
```

- External CSS => มีผลกับ HTML ไฟล์ที่เรียกใช้ผ่าน `<link rel="stylesheet" href="main.css">`

```html{8}
<html>
  <head>
    <title>เว็บของวิชา IS281</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="main.css">
  </head>
  <body>Hello World</body>
</html>
```

- ซึ่งใน main.css เราสามารถเขียน CSS ได้เหมือนใน `<style></style>`

```css
body {
  text-color: red;
}

```

- ในการใช้ CSS จะต้องมี Selector ซึ่งเป็นตัวกำหนดว่า CSS ที่เราเขียนในจะถูก apply กับ HTML Tag ไหนบ้าง (อ้างอิงจาก Handout)

### 4. การใช้ Bootstrap ร่วมกับ HTML

ในการเขียน CSS เพื่อจัดแต่ง HTML นั้นใช้เวลามาก ดังนั้นจึงมีการพัฒนา CSS Framework ให้ช่วยลดระยะเวลาของการเขียน CSS อีกทั้งยังมีฟีเจอร์ที่ช่วยในการจัด Layout ของ HTML content อีกด้วย

[Bootstrap](<https://getbootstrap.com/docs/4.4/getting-started/introduction/>) เป็น CSS Framework ที่ได้รับความนิยมในการนำมาใช้ปรับแต่ง HTML โดยเราสามารถที่จะนำ Bootstrap มาใช้ได้เพียงใส่ `<link>` ดังบรรทัดที่ 8

```html{8,10}
<html>
  <head>
    <title>เว็บของวิชา IS281</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="" />
    <!-- Required meta tags -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  </head>
  <body>Hello World</body>
</html>
```

- ในการใช้งาน Bootstrap นั้น หลังจากขั้นตอนข้างต้น เพียงแค่ระบุชื่อ class ของ Bootstrap ใน HTML ก็สามารถใช้งานได้ทันที

```html
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
```

### 5. Group Assignment (Continue)

- นำ Bootstrap ไปใช้ในทุก HTML Pages ของ Organisation
