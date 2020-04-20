---
title: Excel (1)
lang: th_TH
tobeListed: false
meta:
  - name: description
    content: Excel
  - name: keywords
    content: Data Table and Functions / Formulas
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is281/)

## Excel - การจัดการตาราง (Data Table)

พื้นฐานการจัดการข้อมูลในแบบตาราง (Spreadsheet) ไม่ว่าจะเป็นการ input / edit / delete รวมไปถึงการบริหารจัดการข้อมูล เช่น การ format รูปแบบข้อมูลตารางตามเงื่อนไข

### การจัดการรูปแบบของข้อมูลใน Excel

รูปแบบข้อมูลหลัก ๆ จะมี

- ตัวเลข Numberic Value
- ตัวอักษร Text
- ฟังก์ชั่น หรือ สูตร Function / Formula
- ค่าผิดพลาด Error

เราสามารถกำหนดประเภทของข้อมูลในตารางได้ดังภาพ

![ประเภทของข้อมูลใน Excel](/assets/is281/wk11-01-data-type.png)

### การจัดการข้อมูลแบบ Custom Format

นอกจากรูปแบบข้อมูลข้างต้นแล้ว เรายังสามารถกำหนดรูปแบบของเราเอง Custom Format เช่น การใส่ `,` ขั้นหลักพัน หรือการกำหนดได้ดังภาพ

![ประเภทของข้อมูลใน Excel](/assets/is281/wk11-02-custom-data-type.png)

เลือก Custom ทางขวาจะมีให้เลือก พร้อมแสดงผลของการเลือกในช่อง Sample ด้านบน

- `#` แสดงแทนตัวเลขมีหรือไมม่ีก็ได้
- `0` แสดงแทนตัวเลข
- `_` แสดงแทนช่องว่าง
- `;` คั่นค่าบวกและค่าลบ
- `$` แทนสกุลเงิน
- นอกจากนี้อาจให้แสดงด้วยสีต่าง ๆ โดยใส่ค่าโค้ดสีก่อนรูปแบบตัวเลข เช่น [Red][Blue]
[Green][Yellow][Magenta][Cyan] หรือในเวอร์ชั่นภาษาไทย อาจจะใช้ภาษาไทยได้ เช่น [ชมพูแกมม่วง][น้ำเงินอมเขียว]
- เราสามารถกำหนดเงื่อนไขให้ตัวเลข
[Red][<500];[Green][>=500]

### การจัดรูปแบบข้อมูลเป็นตาราง

การจัดรูปแบบข้อมูลเป็นตาราง สามารถทำได้โดย เลือกขอบเขตข้อมูลที่เราต้องการ จากนั้นเลือก `Format as Table` และสามารถกำหนดได้ว่า ตารางของเรานั้นแถวแรกเป็นหัวตารางโดยเลือก `My table has headers`

![ประเภทของข้อมูลใน Excel](/assets/is281/wk11-03-format-as-table.png)

เราสามารถจัดการลบข้อมูลที่ซ้ำได้โดยการไปที่ `Table` หรือ `Table Design` และเลือก `Remove Duplicates`

![ลบข้อมูลซ้ำ](/assets/is281/wk11-04-remove-duplicates.png)

เรายังสามารถจัดการตารางได้ผ่าน `Table` หรือ `Table Design` ดังภาพ โดยมีฟังก์ชั่นอื่น ๆ อีก เช่น เปลี่ยนชื่อตาราง หรือแปลงข้อมูลกลับไปเป็นข้อมูลปกติ `Convert to Range`

![จัดการตาราง](/assets/is281/wk11-05-manipulate-table.png)

### การจัดรูปแบบ ๆ Highlight

กลับมาที่การปรับรูปแบบข้อมูลในตาราง เราสามารถที่จะปรับแต่งตามเงื่อนไขที่เรากำหนดได้ เช่นการ Highlight โดยมีตัวเลือกดังนี้ (ดูที่ภาพ)

- GreaterThan...ไฮไลท์เซลที่มีค่ามากกว่าท่ีกำหนด
- LessThan...ไฮไลท์เซลท่ีมีค่าน้อยกว่าที่กำหนด
- Between...ไฮไลท์เซลที่มีค่าระหวา่งค่าที่กำหนด
- EqualTo...ไฮไลท์เซลที่มีค่าเท่ากับค่าที่กำหนด
- Text that Contains...ไฮไลท์เซลล์ที่มีข้อความที่กำหนด
- A Date Occurring...ไฮไลท์เซลล์ที่มีวันที่ท่ีกำหนด
- DuplicateValues...ไฮไลท์ค่าที่ซ้ำกัน

![จัดการตาราง](/assets/is281/wk11-06-conditional-format-table.png)

ตัวอย่างเช่น เราเลือกว่าหากค่าใช้จ่ายในการเดินทาง Travel มีค่ามากกว่า 20,000 ให้แสดงผลเป็นสีแดง
![จัดการตาราง](/assets/is281/wk11-07-conditional-format.png)

![จัดการตาราง](/assets/is281/wk11-08-conditional-format.png)

### การจัดรูปแบบ ๆ Top/Bottom

เราสามารถ Filter รูปแบบการแสดงผลโดยมีตัวเลือกดังนี้

- Bottom / Top 10 Items...ไฮไลท์เซลที่มีค่าต่ำสุด/สูงสุด 10 อันดับแรกหรือกำหนดอันดับได้
- Bottom / Top 10%...ไฮไลท์เซลที่มีคา่เป็น % ต่ำสุด/สูงสุดในรายการ 10 อันดับ เช่น รันเลข 1-12 แล้วเลือก Top 10% จะได้ผล ดังภาพ (10% ของ 12 รายการคือ 0.1*12 = 1.2 รายการ)
- Below / AboveAverage...ไฮไลท์เซลที่มีค่าต่ำกว่า/สูงกว่าค่าเฉลี่ยในรายการ

![จัดการตาราง](/assets/is281/wk11-09-conditional-format.png)

### การแทรก Data Bars

การใช้ Data Bars ในการปรับแต่งรูปแบบข้อมูล จะช่วยให้เห็นภาพเปรียบเทียบความแตกต่างของข้อมูลได้ชัดเจนยิ่งขึ้น

![จัดการตาราง](/assets/is281/wk11-10-data-bars.png)

![จัดการตาราง](/assets/is281/wk11-11-data-bars.png)

### การใช้ Colour Scales

นอกจาก Data Bars แล้ว เราอาจจะใช้ Colour Scales เป็นอีกหนึ่งวิธีในการปรับแต่งรูปแบบการแสดงผลข้อมูล โดยเราอาจเลือก `More Rules` เพื่อที่จะทำการ customise scales ของสีตามที่เราต้องการเองได้

![จัดการตาราง](/assets/is281/wk11-12-colour-scales.png)

![จัดการตาราง](/assets/is281/wk11-13-colour-scales.png)

### การแทรก Icon Sets

`Icon Sets` เป็นการปรับแต่งการแสดงผลอีกรูปแบบหนึ่ง ที่อาจมองดูว่าเป็นการผสมระหว่าง `Data Bars` กับ `Colour Scales`

![จัดการตาราง](/assets/is281/wk11-14-icon-sets.png)

![จัดการตาราง](/assets/is281/wk11-15-icon-sets.png)

### การแทรก Custom Formatting Rules

นอกจากการใช้งาน `Data Bars` `Colour Scales` และ `Icon Sets` แล้ว เรายังสามารถสร้างที่จากสร้างเกณฑ์ในการปรับแต่งเองได้ โดยเลือก `Conditional Formatting` ตามด้วย `New Rule...` 

- Format all cells based on their values: จัดรูปแบบให้ทุก เซลล์มีค่าตามที่กำหนดไว้
- Format all only cells that contain: จัดรูปแบบเฉพาะเซลล์ท่ีมีค่าตามที่กาหนดไว้ **(มีเฉพาะใน Windows version)**
- Format only top or bottom ranked values: จัดรูปแบบเฉพาะเซลล์ท่ีมีค่าอยู่ในช่วงสูงสุดหรือ
ต่ำสุด
- Format only values that are above or below average: จัดรูปแบบเฉพาะเซลล์ที่มีค่าสูงหรือต่ำกว่าค่าเฉล่ีย
- Format only unique or duplicate values: จัด รูปแบบเฉพาะเซลล์ท่ีมีค่าไม่ซ้ำหรือซ้ำกับเซลล์อื่น

![จัดการตาราง](/assets/is281/wk11-16-new-rules.png)

### การลบและจัดการ Rules

เราสามารถลบและจัดการ Rules ต่าง ๆ ที่เราสร้างขึ้นโดยเลือก

- Clear Rules From Selected Cells: ล้างกฎในพื้นที่เซลล์ที่เลือกเท่านั้น
- Clear Rules From Entire Sheet: ล้างกฎทั้งชีต
- Clear Rules From This Table: ล้างกฎในตารางที่เลือกเท่านั้น
- Clear Rules From Pivot Table: ล้างกฎในรายงาน Pivot Table ที่เลือกเท่านั้น

![จัดการตาราง](/assets/is281/wk11-17-manage-rules.png)

### การจัดตรวจสอบข้อมูลที่ input (Data Validation)

ในการบันทึกข้อมูลลงในตารางนั้น ผู้ใช้สามารถใส่ข้อมูลอะไรก็ได้ ทำให้อาจเกิดสถานการณ์ข้อมูลที่ไม่ตรงกับความต้องการ ดังนั้น Excel จึงมี Data Validation ไว้ให้เราทำการกำหนดการตรวจสอบการนำเข้าข้อมูล ดังภาพ

![ตรวจสอบข้อมูล](/assets/is281/wk11-18-data-validation.png)

โดย Data Validation แบ่งเงื่อนไข ดังนี้

- Any value... ใส่ค่าอะไรก็ได้
- Whole number.. ใส่ได้เฉพาะตัวเลขจำนวนเต็ม
- Decimal... ใส่เลขที่มีทศนิยม
- List... ให้เลือกจากลิสต์ที่กำหนด
- Date... เป็นข้อมูลวันที่
- Time... เป็นข้อมูลเวลา
- Text length... กำหนดความยาวของข้อความที่นำเข้า

![ตรวจสอบข้อมูล](/assets/is281/wk11-19-data-validation.png)

ตัวอย่างการใช้ Data Validation ที่เป็น List เช่น คำนำหน้าชื่อ เราสามารถสร้างลิสต์ไว้ก่อน (ในสถานการณ์จริงอาจจะเก็บลิสต์ไว้ในชีตอื่น) แล้วจึงกำหนด Data Validation ให้เงื่อนไขเป็น List จากนั้นก็เลือกกำหนดช่วงของข้อมูล `E3:E7` โดยเช็คที่ `In-cell drop-down` จากนั้นก็เราจะได้เซลล์ที่สามารถเลือกค่าจากลิสต์ได้

![ตรวจสอบข้อมูล](/assets/is281/wk11-20-list-validation.png)

![ตรวจสอบข้อมูล](/assets/is281/wk11-21-list-validation.png)

นอกจากนี้เรายังสามารถกำหนดช่วงของข้อมูลในเซลล์ `B4` เช่น อายุไม่ต่ำกว่า 18 โดยสามารถปรับค่าได้จากการอ้างอิงไปยังอีกเซลล์ `E8` ดังภาพ

![ตรวจสอบข้อมูล](/assets/is281/wk11-22-input-validation.png)

เราสามารถกำหนด Error Message ได้เอง เพื่อเป็นการเพิ่มประสิทธิภาพในการสื่อสารให้กับผู้นำเข้าข้อมูล

![ตรวจสอบข้อมูล](/assets/is281/wk11-23-input-validation.png)

![ตรวจสอบข้อมูล](/assets/is281/wk11-24-input-validation.png)

## เอกสารอ้างอิง

- Alexander, M., Kusleika, R. and Walkenbach, J. (2019), Excel 2019 Bible, John Wiley & Sons, Indianapolis, IN.
