---
title: Excel - Pivot Table
lang: th_TH
tobeListed: false
meta:
  - name: description
    content: Excel - Pivot Table
  - name: keywords
    content: Pivot Table
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is281/)

## Excel - Pivot Table

ในส่วนของ Pivot Table นั้นเป็นฟีเจอร์ ของ Excel ที่มีมาตั้งแต่ปี 1997 และถูกใช้ประโยชน์ในหลาย ๆ งาน เช่น การทำการวิเคราะห์ข้อมูลในหลากหลายมิติ ซึ่ง Pivot Table นั้นสามารถปรับเปลี่ยนรูปแบบของการแสดงผลข้อมูลได้แบบทันที

[ดาวน์โหลดไฟล์ประกอบการเรียนได้ที่นี่](/assets/is281/xls/04-PivotTable.xlsx)

ความหมายของคำว่า Pivot นั้นคือ การหมุนไปรอบ ๆ กล่าวคือ การที่เรากำหนดข้อมูลให้เป็นแกน แล้วเรามองข้อมูลนี้จากมุมมองต่าง ๆ กัน นั่นเอง

### ข้อมูลที่เหมาะสมสำหรับ Pivot Table

รูปแบบข้อมูลสำหรับการทำ Pivot Table นั้นแบ่งออกเป็นสองประเภทดังนี้

- Data ข้อมูลที่เป็นค่าตัวเลขต่าง ๆ เช่น ยอดเงินคงเหลือในบัญชี ยอดขาย
- Category คำอธิบาย ประเภทที่อธิบายลักษณะของข้อมูล เช่น วันที่ ประเภทบัญชี สาขา ภูมิภาค

จากภาพด้านล่าง แสดงให้เห็นข้อมูลที่ summarised แล้วซึ่งมีความละเอียดไม่เพียงพอและไม่เหมาะสำหรับการทำงานกับ Pivot Table

![Denormalised Data](/assets/is281/excel-04-01-denormalised-data.png)

หากต้องการจะใช้ Pivot Table จะต้องทำการ Normalise ข้อมูลให้อยู่ในรูปของ Table ที่มีข้อมูล Category และ Value ดังภาพ

![Normalised Data](/assets/is281/excel-04-02-normalised-data.png)

เราสามารถสร้าง Pivot Table อย่างง่าย ๆ ได้โดยการเลือกที่ `Insert` ที่ `Ribbon` จากนั้นกดปุ่ม `Recommended Pivot Tables` ซึ่งจะมี Dialog ให้เราเลือกช่วงของข้อมูล และเลือกว่าให้ใส่ Pivot Table ไว้ที่ไหน จากนั้นก็จะได้ Pivot Table ออกมาดังภาพ

![Pivot Table](/assets/is281/excel-04-03-recommended-pivot.png)

จากนั้นให้เราทำการปรับเปลี่ยนเงื่อนไขในช่อง PivotTable Fields โดยกำหนดให้ Columns เป็น `Qtr` กับ `Months` และ Rows เป็น `Region` กับ `State` และ Value เป็น `Sum of Sales` ดังภาพ (หากผลลัพธ์ไม่เหมือนให้สลับลำดับของ `Qtr` กับ `Months` และ `Region` กับ `State` ไปมา)

![Pivot Table](/assets/is281/excel-04-04-pivot.png)

ข้อควรระวัง - ในการเลือกช่วงของข้อมูลที่ต้องการวิเคราะห์ ต้องระวังไม่เลือกพื้นที่ในส่วนที่เป็น `Blank` มิฉะนั้น จะได้ Column ที่มีค่าเป็น `Blank` มารวมอยู่ในผลวิเคราะห์ด้วย

### แบบฝึกหัด

ข้อมูลตัวอย่างจากหนังสือ [1] สำหรับการฝึกใช้ Pivot Table โดยข้อมูลนี้เป็นข้อมูลบัญชีธนาคารจำนวน 712 รายการ โดยมีคอลัมน์ ดังต่อไปนี้

- วันที่เปิดบัญชี
- วันในสัปดาห์ที่เปิดบัญชี
- ยอดเงินฝากเพื่อเปิดบัญชี
- ประเภทบัญชี
- ใครเป็นผู้เปิดบัญชีให้
- สาขา
- ประเภทของลูกค้า (เก่า ใหม่)

![Exercise Data](/assets/is281/excel-04-05-exercise-data.png)

คำถามที่น่าสนในสำหรับนักวิเคราะห์ หรือผู้บริหาร เช่น

- ยอดเปิดบัญชีรายวันเป็นเท่าไหร่ในแต่ละสาขา
- วันไหนในสัปดาห์ที่มียอดเงินฝากสูงสุด
- มูลค่าการเปิดบัญชีในแต่ละสาขา จำแนกตามประเภทบัญชี
- จำนวนเงินที่ถูกใช้ในการเปิดบัญชี
- ประเภทของบัญชีที่ Teller มักเป็นคนเปิดให้
- สาขาไหนที่ Teller เปิดบัญชีกระแสรายวันให้กับลูกค้าใหม่มากที่สุด

ภาพล่างเป็นการสร้าง Pivot Table เพื่อแสดงมูลค่าการเปิดบัญชีในแต่ละสาขา จำแนกตามประเภทบัญชี

![Exercise Data](/assets/is281/excel-04-06-exercise.png)

Pivot Table นั้นสามารถปรับเงื่อนไข โดยให้ที่ Rows นั้นแสดงข้อมูล 2 ประเภท ตัวอย่างเช่น ประเภทบัญชี และผู้เปิดบัญชี ก็จะสามารถช่วยตอบคำถาม ที่เกริ่นไว้ด้านบน เช่น ประเภทของบัญชีที่ Teller มักเป็นคนเปิดให้ และสาขาไหนที่ Teller เปิดบัญชีกระแสรายวันให้กับลูกค้าใหม่มากที่สุด เป็นต้น

![Exercise Data](/assets/is281/excel-04-07-exercise.png)

### ตัวอย่าง - ยอดเปิดบัญชีรายวันเป็นเท่าไหร่ในแต่ละสาขา

ตัวอย่างนี้เป็นการรวมยอดตามเงื่อนไข

![Exercise Data](/assets/is281/excel-04-08-exercise.png)

### ตัวอย่าง - วันไหนในสัปดาห์ที่มียอดเงินฝากสูงสุด

ตัวอย่างนี้จะต้องใช้ `Conditional Formatting` เข้ามาช่วย

![Exercise Data](/assets/is281/excel-04-09-exercise.png)

### ตัวอย่าง - จำนวนเงินที่ถูกใช้ในการเปิดบัญชี

โดยตัวอย่างนี้จะเป็นการวิเคราะห์ข้อมูล Amount เพียงอย่างเดียว และต้องมีการกำหนดเงื่อนไขในแต่ละส่วนดังต่อไปนี้

- โดยในส่วนของ Rows นั้นต้องทำการ Group Selection เพื่อกำหนดให้ Pivot Table นั้นแบ่งความถี่ตามมูลค่าในการเปิดบัญชีตามจำนวนเงินทุก ๆ 5,000 ไปเรื่อย ๆ เป็นขั้น ๆ
- ในส่วนของ Count ให้เพิ่ม Amount ไปในช่อง Values ของ Pivot Table และเปลี่ยนการคำนวณจาก Sum เป็น Count
- ในส่วนของ Pct ให้เพิ่ม Amount อีกรอบ และเปลี่ยนเงื่อนไขจาก Summarise by เป็น Show data as `Percent of Column Total` ก็จะได้ผลดังภาพ

![Exercise Data](/assets/is281/excel-04-10-exercise.png)

### ตัวอย่าง - ประเภทของบัญชีที่ Teller มักเป็นคนเปิดให้

โดยตัวอย่างนี้จะคล้าย ๆ กับตัวอย่างก่อนหน้า ต่างกันเพียงใช้ข้อมูลคนละตัว โดยในกรณีนี้ใช้ `AcctType` มาเป็นตัวหลักในการวิเคราะห์ และมีการใช้ Filter โดยเพิ่ม `OpenedBy` ไปที่ช่อง Filter ก็จะได้ผลดังภาพ

![Exercise Data](/assets/is281/excel-04-11-exercise.png)

### ตัวอย่าง - สาขาไหนที่ Teller เปิดบัญชีกระแสรายวันให้กับลูกค้าใหม่มากที่สุด

ตัวอย่างนี้จะมีการใช้ Filter ถึงสามตัว คือ `Customer`, `OpenedBy` และ `AcctType`

![Exercise Data](/assets/is281/excel-04-12-exercise.png)

## วิดีโอสำหรับเรียนย้อนหลัง

<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/9DUPHmen4xM?autoplay=0&origin=https://mentor2code.com"
  frameborder="0"></iframe>

## เอกสารอ้างอิง

- [1] Alexander, M., Kusleika, R. and Walkenbach, J. (2019), Excel 2019 Bible, John Wiley & Sons, Indianapolis, IN.
- [2] [Data](<https://media.wiley.com/product_ancillary/89/11195147/DOWNLOAD/Complete%20book_Worksheet.zip>)
