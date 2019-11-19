---
title:  การ deploy แอพพลิเคชั่นที่พร้อมใช้งาน
lang: th-TH
tobeListed: false
meta:
  - name: description
    content: การ deploy แอพพลิเคชั่นที่พร้อมใช้งาน
  - name: keywords
    content: การ deploy แอพพลิเคชั่นที่พร้อมใช้งาน
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is322/)

## การ deploy แอพพลิเคชั่นที่พร้อมใช้งาน

เมื่อพัฒนา web application ได้สมบูรณ์ระดับหนึ่ง และต้องการทดสอบ web application หรือเปิดให้มีการใช้งานจริง ขั้นตอนถัดไปคือ จะต้องทำการ build ตัว web application นี้และนำไป deploy ขึ้น Host โดยในปัจจุบันนั้นมี Host ให้เลือกมากมายตามความต้องการของนักพัฒนา ซึ่ง Vue/CLI นั้นมี Host List ให้เลือกดังนี้
  
- GitHub Pages
- GitLab Pages
- Netlify
- Firebase
- Heroku
- Docker (Nginx)

Host List ข้างต้นนั้น เป็น static host ที่ให้ใช้บริการได้ฟรี ยกเว้น Docker (Nginx) ที่เป็นเพียง configuration ที่เราต้องหา cloud engine มา deploy อีกทีหนึ่ง ในแบบฝึกหัดนี้ เราจะใช้ GitHub Pages เป็น Host ในการทดสอบ deploy web application เพราะเป็นบริการที่ GitHub มีให้ นอกจากบริการ source control ที่เราใช้กันมาตลอดบทเรียนในคอร์สนี้

### แบบฝึกหัด

### 1. Deploy โปรเจ็คเดี่ยวขึ้น GitHub Page

- สร้างไฟล์ deploy.bat กรณี Windows หรือ deploy.sh กรณี Mac OS / Linux
  - เปลี่ยน # เป็น rem หรือ :: กรณี Windows เพราะ # ใช้สำหรับ comment บน Mac OS หรือ Linux เท่านั้น

```sh
# build โปรเจ็ค
yarn build

# cd ไปยัง build output
cd .vuepress/dist

# สั่ง git เพื่อ init/add และ commit
git init
git add -A
git commit -m 'deploy'

# ถ้าต้องการ deploy ไปที่ https://<USERNAME>.github.io ให้ uncomment คำสั่งด้านล่าง
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# ถ้าต้องการ deploy ไปที่  https://<USERNAME>.github.io/<REPO> ให้ uncomment คำสั่งด้านล่าง
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
```

### 2. Catch up โปรเจ็ค

- Follow up โปรเจ็คเดี่ยว
- Follow up โปรเจ็คกลุ่ม

### 3. ส่งงาน

- Deploy/Publish โปรเจ็คเดี่ยวบน GitHub Page
- Push งานเดี่ยวขึ้นบน GitHub ตาม repository ของแต่ละคน โดยใส่ commit msg ว่า "Week 14 - Progress"
- Push งานกลุ่มขึ้นบน GitHub repository ของกลุ่ม โดยใส่ commit msg ว่า "Week 14 - Progress"

## เอกสารอ้างอิง

- [\[1\] Vue CLI - Deployment](<https://cli.vuejs.org/guide/deployment.html>)
