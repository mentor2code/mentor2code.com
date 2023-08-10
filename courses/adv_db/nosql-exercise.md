---
title: SQL vs NoSQL Exercises
lang: th-TH
tobeListed: false
meta:
  - name: description
    content: SQL vs NoSQL Exercises
  - name: keywords
    content: SQL vs NoSQL Exercises
sidebar: auto
sidebarDepth: 3
---

[กลับหน้าแรกของคอร์ส](/courses/adv_db/)

## SQL vs NoSQL Exercises

## แบบฝึกหัด

### ล๊อกอินไปยัง DB server

- ดาวน์โหลด private key สำหรับใช้ในการ authen กับ DB server ได้ [ที่นี่](/assets/is457/is457.ppk)
- เปิดโปรแกรม putty โดยสามารถดาวน์โหลดได้ [ที่นี่](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

- ไปที่ Connection >> Auth แล้วกด browse เพื่อระบุ private key สำหรับ authentication โดยเลือก private key ที่เพิ่งดาวน์โหลดจากขั้นตอนก่อนหน้า

![Putty Auth](/assets/courses/adv_db/putty-auth.png)

- ไปที่ session แล้ว is457@is457.mentor2code.com ลงในช่อง Host Name จากนั้นกด Open

![Putty session](/assets/courses/adv_db/putty-session.png)

- เมื่อทุกอย่างเรียบร้อย จะสามาถล๊อกอินเข้าสู้ DB server ได้

![Putty IS457](/assets/courses/adv_db/putty-is457.png)

### เชื่อมต่อ Database ทั้ง SQL และ NoSQL

เชื่อมต่อ MariaDB โดยใช้คำสั่ง mysql

```sh
mysql -u root -p -h 127.0.0.1
```

ใส่รหัสผ่าน

```sh
Enter password:
```

หากเชื่อมต่อ MariaDB และล๊อกอินสำเร็จจะได้ผลดังภาพด้านล่าง

```sh
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 55
Server version: 10.4.7-MariaDB-1:10.4.7+maria~bionic mariadb.org binary distribution

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]>
```

เชื่อมต่อ MongoDB โดยใช้คำสั่ง mongo

```sh
mongo -u root -p --authenticationDatabase admin
```

ใส่รหัสผ่าน

```sh
MongoDB shell version v3.6.3
Enter password:
```

หากเชื่อมต่อ MongoDB และล๊อกอินสำเร็จจะได้ผลดังภาพด้านล่าง

```sh
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 4.2.0
>
```

### สร้างฐานข้อมูล

- SQL

สร้าง database ที่จะใช้งาน

```sql
CREATE DATABASE mydb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE mydb;
```

- NoSQL

ไม่ต้องใช้คำสั่ง create เนื่องจาก MongoDB จะสร้าง database ให้โดยอัตโนมัติ

```sql
use mydb
```

### ทดลอง CRUD operation

- เปรียบเทียบ SQL และ NoSQL

[SQLvsNoSQL](https://docs.mongodb.com/manual/reference/sql-comparison/)

- NoSQL

[MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)

- SQL

[SQL Statements & Structure](https://mariadb.com/kb/en/library/sql-statements-structure/)

### Web UI สำหรับเข้าถึง SQL และ NOSQL

SQL - MariaDB [https://is457sql.mentor2code.com/](https://is457sql.mentor2code.com/)

NoSQL - MongoDB [https://is457nosql.mentor2code.com/](https://is457nosql.mentor2code.com/)
