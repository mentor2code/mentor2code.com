---
title: การพัฒนาเว็บแอปพลิเคชัน
lang: th-TH
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

### ภาษาที่ใช้

ภาษา [HTML](https://www.w3schools.com/html/)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
Put your content here.
</body>
</html>
```

ภาษา [CSS](https://www.w3schools.com/css/)

```css
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```

ภาษา [JavaScript](https://www.w3schools.com/js/)

```js
var myObj = {name: "John", age: 31, city: "New York"};
var myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;
```

### กระบวนการทำงานของ Browser

ตัวบราวเซอร์นั้นจะมีกระบวนการทำงาน หรือที่เรียกว่าการ render ตัวเนื้อหาของเว็บโดยมี input จาก 3 ส่วน คือ HTML, CSS และ JS ดังภาพ โดยบราวเซอร์ จะอ่านข้อมูลทั้ง 3 แบบแล้วนำมาสร้างเป็น DOM ก่อนที่จะ render ผลออกทางหน้าจอ
![Browser Rendering](<https://i0.wp.com/storage.googleapis.com/blog-images-backup/1*VmD21Exnic6eQxj5xGrA-Q.png?resize=3812%2C1958&ssl=1>)
ภาพจาก: [How browser rendering works — behind the scenes](<https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/>)

![WebKit Flow](<https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/webkitflow.png>)

ภาพจาก: [How Browsers Work: Behind the scenes of modern web browsers](<https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/>)
