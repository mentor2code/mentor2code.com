---
title: Excel - Power Pivot
lang: th_TH
tobeListed: false
meta:
  - name: description
    content: Excel - Power Pivot
  - name: keywords
    content: Power Pivot
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is281/)

## Excel - Power Pivot (Windows Version Only)

สืบเนื่องมากจากวิวัฒนาการของการวิเคราะห์เชิงธุรกิจ และ Excel ก็เป็น Tool ตัวหนึ่งที่ได้รับความนิยมในการใช้วิเคราะห์ข้อมูล โดยฟีเจอร์ต่าง ๆ ไม่ว่าจะเป็น Formula / Function (Lookup) / Pivot Table / Data Analysis นั้นยังขาดในส่วนของ การวิเคราะห์ข้อมูลจากหลาย ๆ แหล่ง Power Pivot จึงถูกเพิ่มเข้ามาเป็นหนึ่งในความสามารถของ Excel อย่างไรก็ตาม ณ ปัจจุบัน ฟีเจอร์นี้สามารถใช้ได้บน Excel สำหรับ Windows เท่านั้น เนื่องจากตัว Power Pivot นั้นเป็นโปรแกรมแยกที่ถูกเรียกใช้งานจากภายใน Excel อีกทีหนึ่ง โดยอาจจะต้องใช้เวลาอีกสักพัก ถึงจะมีให้ใช้บนแพลตฟอร์มอื่น ๆ

[ดาวน์โหลดไฟล์ประกอบการเรียนได้ที่นี่](</assets/is281/xls/07-PowerPivot.xlsx>)

### ขั้นตอนการเพิ่มฟีเจอร์ Power Pivot ใน Excel

ไปที่ File => Options จากนั้นเลือก Add-ins แล้วตรวจสอบดูว่า Power Pivot นั้น Active อยู่หรือไม่ หาสถานะเป็น Inactive ให้ไปที่ Manage แล้วเลือก COM Add-ins

![Power Pivot](</assets/is281/excel-07-01-power-pivot.png>)

จากนั้นให้เลือก `Microsoft Power Pivot for Excel` แล้วกด `OK`

![Power Pivot](</assets/is281/excel-07-02-power-pivot.png>)

สถานะของ Power Pivot จะเปลี่ยนเป็น `Active` ดังภาพ

![Power Pivot](</assets/is281/excel-07-03-power-pivot.png>)

ถัดมา คือการเปิดใช้งาน `Power Pivot` ที่ Ribbon ของ Excel ให้ไปที่ `Customise Ribbon` แล้วตรวจดูว่า `Power Pivot` นั้นถูกเลือกอยู่

![Power Pivot](</assets/is281/excel-07-04-power-pivot.png>)

เมื่อทำตามขั้นตอนการติดตั้งเรียบร้อย `Power Pivot` ก็จะสามารถใช้งานได้ผ่าน Excel Ribbon ดังภาพ

![Power Pivot](</assets/is281/excel-07-05-power-pivot.png>)

### การใช้งาน Power Pivot กับข้อมูลหลาย ๆ worksheet

เมื่อเทียบกับฟีเจอร์ `Pivot Table` ซึ่งมีข้อจำกัดว่าสามารถวิเคราะห์ข้อมูลได้จาก worksheet เพียงอันเดียว ทำให้ในการวิเคราะห์แต่ละครั้ง จะต้องทำการนำข้อมูลมาประกอบกันใน worksheet เดียวกันก่อน ซึ่งหากข้อมูลมีการเปลี่ยนแปลงบ่อย ๆ ก็จะทำให้ต้องเสียเวลาไปกับการเตรียมข้อมูล `Power Pivot` สามารถวิเคราะห์ข้อมูลจากหลาย ๆ worksheet ได้พร้อมกัน ดังตัวอย่างด้านล่าง มีข้อมูล `Customers` `InvoiceHeader` และ `InvoiceDetails` แยกกันเก็บใน 3 worksheet โดยมีลักษณะการเก็บข้อมูลที่แตกต่างกัน ดังภาพ

![Power Pivot](</assets/is281/excel-07-06-power-pivot.png>)

ในการใช้งาน Power Pivot เราจะต้องทำการแปลงข้อมูลให้เป็นตารางก่อน โดยใช้ `Format as Table` และทำการตั้งชื่อตารางทั้ง 3 ตารางดังภาพ

#### ตาราง `Customers`

![Power Pivot](</assets/is281/excel-07-07-power-pivot.png>)

#### ตาราง `InvoiceHeader`

![Power Pivot](</assets/is281/excel-07-08-power-pivot.png>)

#### ตาราง `InvoiceDetails`

![Power Pivot](</assets/is281/excel-07-09-power-pivot.png>)

เมื่อแปลงข้อมูลเป็นตารางครบแล้ว ให้ทำการเพิ่มตารางทั้งหมดเข้าไปที่ `Power Pivot Data Model` โดยเริ่มจากไปที่ Worksheet - `Customers` แล้วกดที่ `Add to Data Model` บน `Power Pivot` Ribbon จากนั้นทำเหมือนกันกับอีก 2 ตารางที่เหลือ โดยทุกครั้งที่กด `Add to Data Model` หน้าต่าง `Power Pivot for Excel` จะปรากฏขึ้นมาแสดงผลในการ add ข้อมูล

![Power Pivot](</assets/is281/excel-07-10-power-pivot.png>)

เมื่อ add ตารางครบแล้ว ที่หน้าต่าง `Power Pivot for Excel` เราสามารถกด `Diagram View` เพื่อแสดงตารางข้อมูลที่ถูกเพิ่มเข้ามาใน `Power Pivot` ได้

![Power Pivot](</assets/is281/excel-07-11-power-pivot.png>)

***หมายเหตุ*** หน้าต่าง `Power Pivot for Excel` เป็นโปรแกรมแยกต่างหากออกมาจาก Excel

ก่อนที่จะไปถึงขั้นตอนการสร้าง Relationship ให้ตรวจสอบข้อมูลในแต่ละ Table ใน `Data View` ก่อนว่ามีจำนวนกี่รายการ โดยดูได้จาก `Status Bar` ด้านล่าง หากมีจำนวนข้อมูลมากผิดปกติ แสดงว่าเรากำหนดให้ตารางนั้นรวมแถวที่ว่างมาด้วย ซึ่งจะทำให้ `Power Pivot` ไม่สามารถที่จะสร้าง relationship ได้ เราจะต้องแก้ไขตารางโดยการกลับไป `Resize Table` ที่หน้าต่าง Excel อีกรอบ จากนั้นจึงกลับมากด `Refresh` ที่หน้าต่าง `Power Pivot` ดังภาพ

![Power Pivot](</assets/is281/excel-07-12-power-pivot.png>)

เมื่อตรวจสอบและแก้ไขจำนวนข้อมูเรียบร้อย ให้กลับไปที่ `Design View` แล้วทำการสร้าง Relationship ระหว่าง Table โดยลาก ชื่อ Column ที่เหมือนกันไปวางยังอีก Table นึง

![Power Pivot](</assets/is281/excel-07-13-power-pivot.png>)

เราสามารถเพิ่มหรือแก้ไข Relationship ได้ผ่าน Design => Manage Relationships ดังภาพ

![Power Pivot](</assets/is281/excel-07-14-power-pivot.png>)

เมื่อทำการเชื่อมโยงข้อมูลเรียบร้อยแล้ว ในขั้นตอนถัดไป เราสามารถนำข้อมูลทั้ง 3 ตารางมาวิเคราะห์ด้วย `Pivot Table` โดยไปที่ Home => PivotTable ในหน้าต่างของ `Power Pivot` ดังภาพ

![Power Pivot](</assets/is281/excel-07-15-power-pivot.png>)

โดยเมื่อเลือกให้สร้าง New Sheet สำหรับ `Pivot Table` ก็จะได้ผลลัพธ์ออกมาเหมือนกับ `Pivot Table` ปกติ แต่ต่างกันตรงที่ว่าข้อมูลนั้นมาจาก 3 ตาราง ดังภาพ

![Power Pivot](</assets/is281/excel-07-16-power-pivot.png>)

#### ตัวอย่างการใช้งาน Pivot Table ที่ใช้ข้อมูลจาก Power Pivot

![Power Pivot](</assets/is281/excel-07-17-power-pivot.png>)

นอกจากการใช้งานข้อมูลจากหลาย ๆ Worksheet ใน Excel แล้ว เรายังสามารถจะนำเข้าข้อมูลจากแหล่งข้อมูลอื่น ๆ เช่น Database จากหลาย ๆ ผู้ให้บริการดังภาพ

![Power Pivot](</assets/is281/excel-07-18-power-pivot.png>)

## วิดีโอสำหรับเรียนย้อนหลัง

<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/5CRyP86-_jA?autoplay=0&origin=https://mentor2code.com"
  frameborder="0"></iframe>

## เอกสารอ้างอิง

- [1] Alexander, M., Kusleika, R. and Walkenbach, J. (2019), Excel 2019 Bible, John Wiley & Sons, Indianapolis, IN.
- [2] [Data](<https://media.wiley.com/product_ancillary/89/11195147/DOWNLOAD/Complete%20book_Worksheet.zip>)
