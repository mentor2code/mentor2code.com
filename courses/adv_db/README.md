---
title: Advanced Database Management
lang: th-TH
tobeListed: true
meta:
  - name: description
    content: Advanced Database Management
  - name: keywords
    content: DevOps Design for DB, Microservice, Scaling, BigQuery
sidebar: auto
sidebarDepth: 2
---

# IS457 Advanced Database Management

## DevOps Design and NoSQL Architecture

การออกแบบเชิง DevOps (Development และ Operations) เป็นการออกแบบขั้นตอนการทำงานที่ครอบคลุมตั้งแต่การพัฒนา (Development) ไปจนถึงการปฏิบัติการ (Operations) ซึ่งจะช่วยร่นระยะเวลาในการพัฒนาระบบ ที่ใช้วิธีแบบดั้งเดิม (Traditional Way) โดยวิธีเดิมนั้นจะแยกขั้นตอนสำหรับ Dev และ Ops ออกจากกัน โดยที่นักพัฒนา (Dev) เมื่อพัฒนาและทดสอบระบบเสร็จแล้ว จะต้องทำ deployment plan เผื่อส่งต่อให้ทีมปฏิบัติการนำระบบไปติดตั้งและใช้งาน ซึ่งเป็น task ที่ใช้เวลาและทรัพยาการมาก เพราะตัวระบบนั้นมีการเปลี่ยนแปลงอยู่ตลอดเวลา

NoSQL หรือ not only SQL คือ อีกหนึ่งทางเลือกของระบบฐานข้อมูลที่ถูกพัฒนาขึ้นมาเพื่อแก้ปัญหาของ SQL database


## DB Roles in Microservice Architecture

Microservice เป็นแนวคิดในการออกแบบระบบให้มีขนาดเล็ก และไม่ผูกติดกับระบบอื่นๆ เพื่อเพิ่มความคล่องตัวในการทำงาน โดยบทบาทของระบบฐานข้อมูลใน Microservice นั้นก็คือ ตัวระบบฐานข้อมูลเองนั้นจะมีขนาดเล็กลง และเน้นความคล่องตัวในการจัดเก็บข้อมูล โดยอาจจะลดระดับความเข้มข้นในการบริหารจัดการบางส่วนลง


## DB Scaling and BigQuery

การย่อ-ขยายขนาดของระบบฐานข้อมูล (Scaling) สนับสนุนการขยายตัวของธุรกิจ หรือข้อมูลธุรกิจ โดยการทำ scaling นั้น สามารถแบ่งออกเป็น 2 วิธี คือ การ scale ในแนวตั้ง (Vertical) และในแนวนอน (Horizontal) ซึ่งการทำ scaling นี้สนับสนุนการพัฒนา Infrastructure ขององค์กรธุรกิจให้เติบโตไปสู่ Big Data หากแต่ว่าไม่ใช่ทุกองค์กรนั้นจะสามารถลงทุนใน infrastructure ที่เป็น Big Data ได้ Big Query จึงถูกพัฒนาขึ้นโดย Google เพื่อเป็นทางเลือกหนึ่งสำหรับองค์กรขนาดเล็กที่ต้องการทำ Business Analytics บน Infrastructure ประสิทธิภาพสูง


## แบบฝึกหัด

- [SQL vs NoSQL](/courses/adv_db/nosql-exercise.md)
