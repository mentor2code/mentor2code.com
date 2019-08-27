---
title: IS457 Advanced Database Management
lang: th-TH
tobeListed: true
meta:
  - name: description
    content: IS457 Advanced Database Management
  - name: keywords
    content: DevOps Design for DB, Microservice, Scaling, BigQuery
sidebar: auto
sidebarDepth: 2
---

# IS457 Advanced Database Management

## DevOps Design and NoSQL Architecture

การออกแบบเชิง DevOps (Development และ Operations) เป็นการออกแบบขั้นตอนการทำงานที่ครอบคลุมตั้งแต่การพัฒนา (Development) ไปจนถึงการปฏิบัติการ (Operations) ซึ่งจะช่วยร่นระยะเวลาในการพัฒนาระบบ ที่ใช้วิธีแบบดั้งเดิม (Traditional Way) โดยวิธีเดิมนั้นจะแยกขั้นตอนสำหรับ Dev และ Ops ออกจากกัน โดยที่นักพัฒนา (Dev) เมื่อพัฒนาและทดสอบระบบเสร็จแล้ว จะต้องทำ deployment plan เผื่อส่งต่อให้ทีมปฏิบัติการนำระบบไปติดตั้งและใช้งาน ซึ่งเป็น task ที่ใช้เวลาและทรัพยาการมาก เพราะตัวระบบนั้นมีการเปลี่ยนแปลงอยู่ตลอดเวลา

NoSQL หรือ not only SQL คือ อีกหนึ่งทางเลือกของระบบฐานข้อมูลที่ถูกพัฒนาขึ้นมาเพื่อแก้ปัญหาของ SQL database

- [เอกสารประกอบ](/assets/is457/IS457-01.pdf)
- [แบบฝึกหัด](/courses/is457/nosql-exercise.md)

## DB Roles in Microservice Architecture

Microservice เป็นแนวคิดในการออกแบบระบบให้มีขนาดเล็ก และไม่ผูกติดกับระบบอื่นๆ เพื่อเพิ่มความคล่องตัวในการทำงาน โดยบทบาทของระบบฐานข้อมูลใน Microservice นั้นก็คือ ตัวระบบฐานข้อมูลเองนั้นจะมีขนาดเล็กลง และเน้นความคล่องตัวในการจัดเก็บข้อมูล โดยอาจจะลดระดับความเข้มข้นในการบริหารจัดการบางส่วนลง

คลาสวันศุกร์ที่ 23 สิงหาคม 2562 เจอกันที่ห้อง Lab 309

- [เอกสารประกอบ](/assets/is457/IS457-02.pdf)
- [แบบฝึกหัด](/courses/is457/nosql-exercise.md)

## DB Scaling and Big Query

การขยายขนาดของระบบฐานข้อมูล (Scaling)

- [เอกสารประกอบ](/courses/is457/)
- [แบบฝึกหัด](/courses/is457/)

## เอกสารอ้างอิง
