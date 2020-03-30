---
title: Excel (2)
lang: th_TH
tobeListed: false
meta:
  - name: description
    content: Excel
  - name: keywords
    content: Functions / Formulas
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is281/)

## Excel - การใช้งานฟังก์ชั่น Functions

หลังจากที่ได้ศึกษา วิธีการจัดการข้อมูลในตารางไปแล้ว จากบทเรียนก่อนหน้า ในบทเรียนนี้จะกล่าวถึงสูตร (Formulas) และ
การใช้ฟังก์ชั่น (Functions) ที่ทำหน้าที่ในการคำนวณข้อมูลในตารางของ Excel ซึ่งโดยปกติแล้ว ถ้าเราพิมพ์ข้อมูลลงไปตรง ๆ ข้อมูลนั้นจะเป็น `ค่าคงที่` แต่ถ้าหากเราต้องการให้เซลล์ใดเซลล์หนึ่งแสดงผลจากการคำนวณ เราสามารถใช้ `สูตรคำนวณ` หรือ `Excel Formulas` ได้โดยการเริ่มด้วยเครื่องหมาย `=` ในเซลล์นั้น ๆ

หรือเราต้องการใช้ฟังก์ชั่นของ Excel ในการคำนวณค่าต่าง ๆ เราก็สามารถทำได้โดยการพิมพ์ `=` แล้วตามด้วยชื่อฟังก์ชั่น หรืออาจจะกดที่เครื่องหมาย `fx` ใน Formula bar ดังภาพ

![Excel Formula](/assets/is281/wk12-01-formula.png)

ตัวอย่างเช่น

```JS
=PI()*A2^2
```

### สูตรคำนวณ Formula

สูตรคำนวณ หรือ Formula ของ Excel นั้น ประกอบไปด้วย

- ฟังก์ชั่น Functions... ใช้สำหรับคำนวณค่าต่าง ๆ จาก input เช่น `PI()` function จะให้ค่า pi: 3.142...

- ค่าอ้างอิง References... เป็นการอ้างอิงค่าจากเซลล์อื่น เช่น `A2` หมายถึงให้นำค่าจากเซลล์ `A2` มาแสดง

- ค่าคงที่ Constants... เป็นค่าคงที่ ไม่ว่าจะเป็นตัวอักษร หรือตัวเลข โดยตัวอย่างข้างบน คือค่า `2`

- โอเปอเรเตอร์ Operators... `^` หมายถึง ยกกำลัง และ `*` หมายถึง การคูณ

นอกจากนี้ ยังมีตัวอย่างอื่น ๆ ดังในตารางด้านล่าง

| ตัวอย่าง | คำอธิบาย |
| :--- | :-------- |
| =100*.05 | คำนวณค่าจากการเอา 100 คูณด้วย .05 |
| =A1 | เอาค่าจากเซลล์ A1 มาแสดง |
| =A1+A2 | คำนวณค่าจากการเอา A1 บวกกับ A2 |
| =SUM(A1:A100 | หาผลรวมโดยใช้ฟังก์ชั่น SUM() จากค่าในเซลล์ A1 ถึง A100 |
| =A1=B2 | เปรียบเทียบค่าในเซลล์ A1 กับ B2 โดยจะแสดงผลเป็น TRUE เมื่อค่าเท่ากัน หรือเป็น FALSE เมื่อค่าไม่เท่ากัน |

### การใช้ Operators

เครื่องหมายในการทำงานทางคณิตศาสตร์ที่ใช้กับ Excel มีดังนี้

| เครื่องหมาย | คำอธิบาย |
| :--- | :-------- |
| + | บวก |
| - | ลบ |
| * | คูณ |
| / | หาร |
| ^ | ยกกำลัง |
|  | การเปรียบเทียบระหว่างสองค่า โดยแสดงผลเป็น True / False |
| = | เท่ากับ |
| > | มากกว่า |
| < | น้อยกว่า |
| >= | มากกว่าหรือเท่ากับ |
| <= | น้อยกว่าหรือเท่ากับ |
| <> | ไม่เท่ากับ |

นอกจากนี้ Excel Operators นั้นยังมีในส่วนของลำดับการทำงาน ซึ่งถ้าหากเราไม่ได้ใส่ `()` กำกับไว้ Excel จะทำการประมวลผลลำดับ และจากซ้ายไปขวา ในกรณีที่เครื่องหมายอยู่ในลำดับเดียวกัน ดังตารางด้านล่าง

| ลำดับ | Operators |
| :--- | :-------- |
| 1 | `^` |
| 2 | `*`, `/` |
| 3 | `+`, `-` |
| 4 | `&` |
| 5 | `=`, `<`, `>` |

ตัวอย่าง เช่น

```JS
=C2-C3*C4
```

ในการคำนวณ Excel จะเอา `C3` คูณกับ `C4` ก่อน แล้วจึงทำการเอา `C2` มาลบด้วยผลลัพธ์จากการคูณ

### การใช้งานฟังก์ชั่น Function

จากที่เราได้ลองใช้ Operators ในการคำนวณการบวก ลบ คูณ หาร ฯลฯ ในสูตรของ Excel ไปแล้วนั้น ถัดมาจะเป็นการใช้งานฟังก์ชั่น Function ของ Excel ซึ่งจะช่วยให้เราสามารถทำงานได้สะดวกรวดเร็วมากยิ่งขึ้น เช่น หากเราต้องการคำนวณผลรวมของค่าที่อยู่ใน เซลล์ `A1` ถึง `A100` ถ้าใช้แค่ Operator เราอาจจะต้องพิมพ์สูตรที่ยาว ดังด้านล่าง

```JS
=A1+A2+A3+A4+A5+A6+A7+A8+A9+...+A100
```

ซึ่งเราสามารถใช้ฟังก์ชั่น `SUM()` ในการคำนวณแทนการใช้ Operator ได้ ดังภาพ

```JS
=SUM(A1:A100)
```

โดยการใช้งานฟังก์ชั่นนั้น สามารถแบ่งประเภทไ ด้ตามจำนวนของค่านำเข้า arguments ได้ดังนี้

- ไม่ต้องใส่ค่า No arguments... เช่น NOW(), PI()
- ใส่ค่าเดียว One argument
- ใส่ค่าเป็นจำนวนตามที่กำหนด A fixed number of arguments
- ไม่ทราบจำนวนค่าที่แน่นอน An indeterminate number of arguments
- ค่าที่จะใส่หรือไม่ใส่ก็ได้ Optional arguments

นอกจากนี้ยังมีประเภทของ arguments เช่น

- อ้างถึงค่าในเซลล์อื่น Cell reference: =SUM(A1:A24)
- ใส่ค่าตัวเลขไปตรง ๆ Literal value: =SQRT(121)
- ใส่ค่าตัวอักษร Literal text string: =PROPER(“john f. smith”)
- ใส่การคำนวณ Expression: =SQRT(183+12)
- ใส่ฟังก์ชั่นอื่น ๆ Other functions: =SQRT(SUM(A1:A24))

ในการใช้ฟังก์ชั่นของ Excel เราสามารถใช้งานผ่าน Formula Builder ของ Excel ได้โดยการกด `fx` จากนั้น Excel ก็จะทำการแสดงฟังก์ชั่นที่ใช้บ่อยขึ้นมา ดังภาพ

![Excel Formula Builder](/assets/is281/wk12-02-formula-builder.png)

โดยในการใช้งานฟังก์ชั่นของ Excel นั้น ตัว Formula Builder เองก็จะแสดงวิธีใช้และวิธีการป้อนค่า arguments ให้ ตัวอย่างเช่น ฟังก์ชั่น `SUM()` Excel ตัวช่วยในการป้อนข้อมูล ซึ่งหากเราจะใส่ arguments เป็นช่วงของเซลล์ เราก็สามารถที่จะทำการลากช่วงเซลล์ได้เลย ดังภาพ

![Excel Sum](/assets/is281/wk12-03-formula-sum.png)

นอกจากการใช้ Formula Builder แล้ว เรายังสามารถใช้ Tab - Formulas ที่ Ribbons เพื่อเลือกใช้ฟังก์ชั่นตามประเภทได้ โดย Excel ได้แบ่งฟังก์ชั่นออกเป็น

- ฟังก์ชั่นหาผลรวม Auto-sum (Aggregate)
- ฟังก์ชั่นที่ใช้ล่าสุด Recently used
- ฟังก์ชั่นทางการเงิน Financial
- ฟังก์ชั่นทางตรรกะ Logical
- ฟังก์ชั่นที่เกี่ยวกับตัวอักษร Text
- ฟังก์ชั่นที่เกี่ยวกับวันที่และเวลา Date & Time
- ฟังก์ชั่นในการค้นหาและอ้างอิง Lookup & Reference
- ฟังก์ชั่นทางคณิตศาสตร์ Maths & Trig
- ฟังก์ชั่นอื่น ๆ

![Excel Formula Ribbon](/assets/is281/wk12-04-formula-ribbon.png)

### หลักการทำ Cell References

การอ้างอิงข้อมูลจากเซลล์อื่น ๆ Cell References เป็นวิธีการที่ใช้งานบ่อย ควบคู่กับการใช้งานฟังก์ชั่น โดยในการอ้างอิง แบ่งออกเป็น

- การอ้างอิงแบบ Relative... โดยการอ้างอิงจะเปลี่ยนหรือขยับช่วงไปตามเซลล์ ที่เราคัดลอกไปวาง
- การอ้างอิงแบบ Absolute... เป็นการอ้างอิงแบบคงที่โดยไม่เปลี่ยน ไม่ว่าเราจะทำการคัดลอกไปไหวที่ไหนก็ตาม
- การอ้างอิงแบบ Mixed... เป็นการผสมระหว่างการอ้างอิงสองแบบข้างต้น

การใช้ฟังก์ชั่นใน Excel นั้นจะมีการอ้างอิงข้อมูลในเซลล์อื่น ๆ ไม่ว่าจะเป็นในชีตเดียวกัน ระหว่างชีต หรือแม้กระทั่งข้ามเวิร์คบุ๊คกัน ดังนั้น ให้ระมัดระวังปัญหาเรื่องของ Reference Error ด้วย

***ข้อควรระวัง***

- ข้อผิดพลาดจากค่าตัวหารเป็นศูนย์ Divide-by-zero
- การปัดเศษ Rounding Numbers

### ฟังก์ชั่นหาผลรวม Auto-sum (Aggregate)

- SUM()
- AVERAGE()
- COUNT()
- MAX()
- MIN()
- MEDIAN()
- MODE()
- LARGE()
- SMALL()

### ฟังก์ชั่นทางการเงิน Financial

- SLN()
- DDB()
- SYD()
- PMT()
- PPMT()
- IPMT()
- ISPMT()
- NPER()
- RATE()
- PV()
- FV()
- NPV()
- IRR()

### ฟังก์ชั่นทางตรรกะ Logical

- IF()
- IFERROR()
- AND()
- OR()
- NOT()

### ฟังก์ชั่นที่เกี่ยวกับตัวอักษร Text

- FIND()
- FINDB()
- SEARCH()
- REPLACE()
- SUBSTITUTE()
- DOLLAR()
- FIXED()
- LOWER()
- UPPER()
- PROPER()
- BAHTTEXT()
- TEXT()
- N()
- LEFT()
- RIGHT()
- MID()
- CONCATENATE()
- REPT()
- TRIM()
- LEN()
- EXACT()
- INDIRECT()

### ฟังก์ชั่นที่เกี่ยวกับวันที่และเวลา Date & Time

- DAY()
- MONTH()
- YEAR()
- HOUR()
- MINUTE()
- SECOND()
- NETWORKDAYS()

### ฟังก์ชั่นในการค้นหาและอ้างอิง Lookup & Reference

- LOOKUP()
- INDEX()
- MATCH()
- CHOOSE()
- ROW()
- COLUMN()
- ROWS()
- COLUMNS()

### ฟังก์ชั่นทางคณิตศาสตร์ Maths & Trig

- ROUND()
- ROUNDUP()
- ROUNDDOWN()
- EVEN()
- ODD()
- CEILING()
- FLOOR()
- SUMIF()
- SUMIFS()
- SUMPRODUCT()
- SUMSQ()
- ABS()
- MOD()
- SQRT()
- POWER()
- RAND()

## เอกสารอ้างอิง

- [1] Alexander, M., Kusleika, R. and Walkenbach, J. (2019), Excel 2019 Bible, John Wiley & Sons, Indianapolis, IN.
- [2] [Overview of Formulas in Excel](<https://support.office.com/en-us/article/overview-of-formulas-in-excel-ecfdc708-9162-49e8-b993-c311f47ca173?wt.mc_id=fsn_excel_formulas_and_functions>)
- [3] [Formulas and functions](<https://support.office.com/en-us/article/formulas-and-functions-294d9486-b332-48ed-b489-abe7d0f9eda9?ui=en-US&rs=en-US&ad=US#ID0EAABAAA=Functions>)
- [4] [Data](<https://media.wiley.com/product_ancillary/89/11195147/DOWNLOAD/Complete%20book_Worksheet.zip>)
