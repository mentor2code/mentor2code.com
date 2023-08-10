---
title: Excel - Macro
lang: th_TH
tobeListed: false
meta:
  - name: description
    content: Excel - Macro
  - name: keywords
    content: Macro
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/excel/)

## Excel - Macro

สำหรับ Excel Macro นั้น มีชื่อเต็มว่า Visual Basic for Applications (VBA) Macro Language อาจจะเรียกย่อ ๆ ว่า VBA Macro ซึ่งเป็นฟีเจอร์ที่ช่วยให้เราสามารถสร้าง Automate task เพื่อให้ Excel ทำงานแทนเราได้ ตัวอย่างเช่น เราสามารถที่จะบันทึก Keystroke ที่เราพิมพ์ใน Worksheet แล้วสั่งให้ Excel ทำซ้ำ ๆ อีกหลาย ๆ ครั้งแทนได้ ซึ่งฟีเจอร์นี้เรียกว่า Recording VBA Macros

[ดาวน์โหลดไฟล์ประกอบการเรียนได้ที่นี่](</assets/courses/excel/xls/08-Macro.xlsm>)

### เราใช้ VBA Macro ทำอะไรได้บ้าง

ในบางครั้งที่เราต้องทำงานกับข้อมูลที่เป็น Text จำนวนมาก ๆ แล้ว Text Functions ต่าง ๆ นั้นไม่สามารถตอบโจทย์เหล่านั้นได้ ทีนี้ลองมาดูกันว่า เราสามารถใช้ VBA Macro ทำอะไรได้บ้าง

- ใช้สร้าง Boilerplate Text เช่น การเติมคำพูดที่ซ้ำ ๆ ในเซลล์ที่เราต้องการ
- สร้าง prodecure ที่ทำงานอัตโนมัติ
- สั่งให้ Excel ทำงานซ้ำ ๆ หลาย ๆ รอบ
- สร้างคำสั่งพิเศษ Custom Commands เพื่อไว้ใช้งาน

นอกจากนี้ VBA Macro ยังสามารถพัฒนาแอพลิเคชั่นสำหรับใช้งานบน Excel ได้ ตัวอย่างเช่น Add-ins ที่ในบทเรียนก่อน ๆ บางตัวนั้นถูกสร้างขึ้นโดยใช้ VBA Macro

### ขั้นตอนการเพิ่ม Developer

ในการจะใช้ VBA Macro จะต้องทำการเพิ่ม Developer Tab ที่ Ribbons ก่อน โดยไปที่ Options => Customise the Ribbon แล้วเลือก Developer จากนั้น Developer Tab จะปรากฏ ดังภาพ

![Macro](</assets/courses/excel/excel-08-01-macro.png>)

โดยปกติแล้ว VBA Macro นั้นจะถูก Disable เพื่อความปลอดภัย (อาจจะมี Malware ที่อยู่ในรูปแบบของ VBA Macro เป็นต้น)โดยการใช้งานทุกครั้ง เราในฐานะผู้ใช้งานจะต้องเป็นผู้อนุญาต เราสามารถดูได้จาก Macro Security ดังภาพ 

![Macro](</assets/courses/excel/excel-08-02-macro.png>)

***การเข้าถึง Macro Security*** บน Windows กับ Mac OS นั้นต่างกัน

โดยปกติแล้วไฟล์ Excel ที่มีการใช้งาน VBA Macro นั้นจะถูกบันทึกเป็น `.xlsm` (ปกติไฟล์ Excel จะเป็น `.xlsx`) โดยทุกครั้งที่มีการเปิดใช้งานไฟล์ที่มี Macro ก็จะมี Dialog เตือน ดังภาพด้านล่าง โดยเราต้องกด `Enable Macros` เพื่อเปิดการใช้งาน

![Macro](</assets/courses/excel/excel-08-03-macro.png>)

### การสร้าง VBA Macro

ในการสร้าง VBA Macro นั้น หลัก ๆ สามารถทำได้ 2 วิธี คือ

- เขียน Prodecure เอง ผ่าน Visual Basic Editor
- บันทึกจากการพิมพ์ หรือการคลิกเม้าส์ โดยตรงที่ Developer => Record Macro

#### การสร้าง VBA Macro ผ่าน Visual Basic Editor

ด้านล่างเป็นโค้ด VBA อยู่ในรูปแบบของ `Sub Procedure` โดยตั้งชื่อว่า `CurrentDate` ประกอบไปด้วย 6 คำสั่ง (บรรทัดที่ 3-8) ดังนี้

1. ใส่ค่าวันที่ปัจจุบันให้เซลล์ที่ Active หรือเซลล์ที่เราโฟกัสอยู่
2. ฟอร์แมตรูปแบบของวันที่เป็น `mmmm d, yyyy`
3. ฟอร์แมตฟอนต์เป็นตัวหนา
4. เปลี่ยนสีฟอนต์เป็นสีขาว
5. กำหนดพื้นหลังเป็นสีดำ
6. กำหนดความกว้างของคอลัมน์ให้พอดีกับความกว้างของข้อมูล

```VB
Sub CurrentDate()
'   Inserts the current date into the active cell
    ActiveCell.Value = Date
    ActiveCell.NumberFormat = "mmmm d, yyyy"
    ActiveCell.Font.Bold = True
    ActiveCell.Font.Color = vbWhite
    ActiveCell.Interior.Color = vbBlack
    ActiveCell.Columns.AutoFit
End Sub
```

เราสามารถสร้าง `Sub Procedure` โดยการไปที่ Developer => `Visual Basic Editor` ก็จะปรากฏหน้าต่าง Microsoft Visual Basic ดังภาพ

![Macro](</assets/courses/excel/excel-08-04-macro.png>)

ในกรอบ `Project - VBAProject` ด้านซ้าย ให้เลือก `ThisWorkbook` เพื่อให้แน่ใจว่า VBA Macro ที่เราเขียนนั้นจะถูกบันทึกไว้ที่ไฟล์นี้ จากนั้นก็ลองวาดโค้ดตัวอย่างจากด้านบน ไว้ที่หน้าต่าง Code ดังภาพ

![Macro](</assets/courses/excel/excel-08-05-macro.png>)

เราสามารถเรียกใช้งาน Macro นี้ หลังจาก Save และปิดหน้าต่าง VB Editor โดยเลือกเซลล์ `B3` แล้วไปที่ Developer => `Macros` ก็จะปรากฏหน้าต่าง Macro โดยให้เลือก `ThisWorkbook.CurrentDate` ซึ่งเป็น Macro ที่เราเพิ่งบันทีกไว้ แล้วกด Run

![Macro](</assets/courses/excel/excel-08-06-macro.png>)

ในเซลล์ `B3` ก็ปรากฏผลลัพธ์ จากการทำงานของ Macro ดังภาพ

![Macro](</assets/courses/excel/excel-08-07-macro.png>)

การเรียกใช้งาน Macro นอกจากผ่านหน้าต่าง Macro แล้ว เรายังสามารถสร้าง Button ไว้สำหรับเรียกใช้ Macro ได้ดังภาพ โดยมีขั้นตอนก็คือ

- กด Button ที่ Developer Ribbon
- จากนั้นก็ลากพื้นที่ว่าง ๆ ใน Worksheet เพื่อสร้างปุ่ม
- กำหนด Macro ที่จะถูกเรียกเมื่อปุ่มถูกกดให้เป็น `ThisWorkbook.CurrentDate`

![Macro](</assets/courses/excel/excel-08-08-macro.png>)

#### การสร้าง VBA Macro โดยการ Record

นอกจากการเขียนโค้ด VBA เป็น Macro แล้ว เรายังสามารถบันทึก Record การพิมพ์ การคลิกเม้าส์ หรือ Action อื่น ๆ ไว้เรียกใช้งานทีหลังได้ โดยตัวอย่างด้านล่าง เป็นรายชื่อพนักงาน ซึ่งเราอยากจะเพิ่มช่องว่าง ระหว่างชื่อพนักงานแต่ละคน ขั้นตอนมีดังนี้

- ไปที่ Developer => Record Macro
- ใส่ชื่อ Macro name ที่ต้องการแล้วกด OK
- จากนั้นก็ทำการเพิ่มแถวว่างระหว่างชื่อพนักงาน

![Macro](</assets/courses/excel/excel-08-09-macro.png>)

- ทำซ้ำ ๆ ไปสัก 3 รายการแล้วกด `Stop Recording`

![Macro](</assets/courses/excel/excel-08-10-macro.png>)

- เปิดหน้าต่าง `Microsoft Visual Basic` ขึ้นมาแล้วที่ `Project - VBAProject` เลือกที่ Modules => Module1 จะเห็น `Macro1` ที่เราบันทึกไว้ ดังภาพ

![Macro](</assets/courses/excel/excel-08-11-macro.png>)

- จากนั้นเราสามารถปรับแก้ Macro ที่เราบันทึกไว้โดยใส่ `For Loop` เพื่อให้ทำซ้ำไป 1,000 ครั้ง

```vb{9}
Sub Macro1()
'
' Macro1 Macro
'

'
    Dim oddRow As Integer

    For oddRow = 3 To 1000
        Rows(CStr(oddRow) + ":" + CStr(oddRow)).Select
        Selection.Insert Shift:=xlDown, CopyOrigin:=xlFormatFromLeftOrAbove

        oddRow = oddRow + 1
    Next oddRow
End Sub
```

***หมายเหตุ*** คำสั่ง `Next oddRow` นั้นมีค่าเท่ากับ `oddRow = oddRow + 1` ดังนั้นวิธีเขียนแบบนี้จะทำให้ `+1` สองครั้งที่บรรทัดที่ 13 และ 14

- จากนั้นเอาโค้ดไปใส่แทนใน `Visual Basic Editor`

![Macro](</assets/courses/excel/excel-08-12-macro.png>)

- เรียกใช้ Macro โดยเลือก Macro1

![Macro](</assets/courses/excel/excel-08-13-macro.png>)

- Macro จะทำงานได้ผลดังภาพ

![Macro](</assets/courses/excel/excel-08-14-macro.png>)

- เราสามารถเปลี่ยนวิธีเขียนจาก `For Loop` เป็น `While Loop` แทนได้ดังนี้

```vb
Sub Macro1()
'
' Macro1 Macro
'
    Dim oddRow As Integer

    oddRow = 3

    Do While oddRow < 1000
        Rows(CStr(oddRow) + ":" + CStr(oddRow)).Select
        Selection.Insert Shift:=xlDown, CopyOrigin:=xlFormatFromLeftOrAbove

        oddRow = oddRow + 2
    Loop
End Sub
```

## วิดีโอสำหรับเรียนย้อนหลัง

<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/bv0UkCvZyBw?autoplay=0&origin=https://mentor2code.com"
  frameborder="0"></iframe>

## เอกสารอ้างอิง

- [1] Alexander, M., Kusleika, R. and Walkenbach, J. (2019), Excel 2019 Bible, John Wiley & Sons, Indianapolis, IN.
- [2] [Data](<https://media.wiley.com/product_ancillary/89/11195147/DOWNLOAD/Complete%20book_Worksheet.zip>)
