---
title: Excel - Data Analysis
lang: th_TH
tobeListed: false
meta:
  - name: description
    content: Excel - Data Analysis
  - name: keywords
    content: Data Analysis
sidebar: auto
sidebarDepth: 3
---
[กลับหน้าแรกของคอร์ส](/courses/is281/)

## Excel - Data Analysis

การทำ Data Analysis ด้วย Excel

[ดาวน์โหลดไฟล์ประกอบการเรียนได้ที่นี่ - What-If Analysis](</assets/is281/xls/05-DataAnalysisWhatIf.xlsx>)

[ดาวน์โหลดไฟล์ประกอบการเรียนได้ที่นี่ - Solver/Analysis Toolpak](</assets/is281/xls/05-DataAnalysisSolverATP.xlsx>)

### What-If Analysis

ตัว Excel เองนั้นสนับสนุนการทำ Data Analysis ผ่านการใช้ Formulas และ Functions ต่าง ๆ โดยเชื่อมโยงการผ่านการทำ Referencing หรือจะเรียกอีกแบบว่า Dynamic Model ก็ได้ เพราะหากเรามีการเปลี่ยนแปลงข้อมูลใด ๆ ข้อมูล หรือสูตรคำนวณอื่น ๆ ที่เชื่อมโยงกันก็จะอัพเดตไปโดยอัตโนมัติ ซึ่งฟีเจอร์นี้เอง นำไปสู่การทำ What-If Analysis ซึ่งเป็นการตั้งคำถามวิเคราะห์ ตัวอย่างเช่น

- จะเกิดอะไรขึ้นถ้าดอกเบี้ยเงินกู้เปลี่ยนเป็น 7.5%
- อะไรจะเกิดขึ้นถ้าเราขึ้นราคาสินค้าอีก 5%

ตัวอย่างจากภาพด้านล่าง ข้อมูลการกู้ยืมเงินแบบจดจำนองสินทรัพย์ โดยข้อมูลนำเข้ามี ราคา เงินดาวน์ งวดผ่อน และดอกเบี้ย และผลการคำนวณจะได้เป็น ยอดเงินกู้ ยอดชำระรายเดือน รวมเงินที่ต้องจ่ายทั้งหมด และรวมดอกเบี้ย

![Mortgage Loan](</assets/is281/excel-05-01-mortage-loan.png>)

จากตัวอย่างนี้ เราอาจจะทำ What-If Analysis แบบง่าย ๆ โดยตั้งคำถามดังต่อไปนี้

- จะเป็นอย่างไร ถ้าเราสามารถต่อรองราคาในการซื้อสินทรัพย์ให้ลดลงได้อีก
- จะเป็นอย่างไร ถ้าผู้ให้กู้ต้องการเงินดาวน์ถึง 20%
- จะเป็นอย่างไร ถ้าเราสามารถผ่อนชำระได้ถึง 40 ปี
- จะเป็นอย่างไร ถ้าดอกเบี้ยขึ้นไปถึง 5.5%

โดยเราสามารถที่จะปรับแก้ไขค่าในเซลล์ `C4:C7` แล้วดูผลการเปลี่ยนแปลงใน Result Cells

#### Types of What-If Analyses

การทำ What-If Analyses นั้นแบ่งออกเป็น 3 ประเภท ดังนี้

- แบบ Manual คือการทำ What-If analysis แบบใช้สูตรผูกกับฟังก์ชั่นต่าง ๆ แล้วก็เชื่อมกันผ่าน Cell Referencing ที่เราทำการมาในบทเรียนก่อน ๆ
- แบบ Data tables คือการสร้างตารางแบบพิเศษมาเพื่อแสดงผลการคำนวณที่เปลี่ยนแปลงไปอย่างเป็นระบบ ตัวอย่างเช่น ตารางคำนวณอัตราผ่อนชำระค่างวด โดยแสดงให้เห็นถึงความสัมพันธ์ระหว่างค่างวด กับอัตราดอกเบี้ยและจำนวนระยะเวลาที่ผ่อนชำระ
- แบบ Scenario Manager คือการสร้างสถานการณ์จำลองในรูปแบบ outlines หรือ PivotTables.
- แบบ Goal Seek คือ การปรับ Input เพื่อให้ได้ผลตามเป้าหมายที่เราต้องการ

#### ตัวอย่าง What-If Analysis: Data table

จากตัวอย่างการกู้ยืมเงินแบบจดจำนองสินทรัพย์ เราสามารถทำ What-If Analysis แบบ Data table ได้โดยการ สร้างตารางบนพื้นที่ `E2:I12` โดยให้ `Interest rate` นั้นเพิ่มขึ้นทีละ .25 และให้คอลัมน์ `F:I` แสดงผลการคำนวณตามแบบใน Result Cells

![What-If Analysis: Data table](</assets/is281/excel-05-02-whatif-data-table.png>)

เราสามารถทำ What-If Analysis: Data table โดยการเลือกช่วงเซลล์ที่ต้องการสร้าง Data table ในกรณีนี้คือ `E3:I12` แล้วไปที่ Ribbon => Data => What-if Analyis => Data Table จากนั้น เลือก `C7` ซึ่งเป็นค่า Interest rate ให้เป็น Column input cell ดังภาพ

![What-If Analysis: Data table](</assets/is281/excel-05-03-whatif-data-table.png>)

หลังจากกด OK เราก็จะได้ค่าผลลัพธ์ที่คำนวณตามอัตราดอกเบี้ยจากคอลัมน์ E ดังภาพ

![What-If Analysis: Data table](</assets/is281/excel-05-04-whatif-data-table.png>)

จากตัวอย่างข้างต้น เป็นการทำ What-If Analysis จาก Input เดียว ทีนี้เราลองมาดูตัวอย่างแบบ 2 Inputs กันบ้าง โดยตัวอย่างนี้ เป็นการคำนวณต้นทุน และกำไรสุทธิในการโปรโมชั่นผ่านจดหมาย ซึ่งจะใช้ตัวแปรสองตัวก็คือ จำนวนจดหมาย และอัตราการตอบกลับ ซึ่งการทำ What-If Analysis จะสร้างตารางวิเคราะห์กำไรสุทธิในช่วงเซลล์ `E4:M14` โปรดสังเกตที่เซลล์ `E4` นั้นได้มีการทำ Reference ไปยัง Net Profit

![What-If Analysis: Data table](</assets/is281/excel-05-05-whatif-data-table.png>)

เราสามารถทำ What-If Analysis: Data table โดยการเลือกช่วงเซลล์ที่ต้องการสร้าง Data table ในกรณีนี้คือ `E4:M14` แล้วไปที่ Ribbon => Data => What-if Analyis => Data Table จากนั้น เลือก `B5` ซึ่งเป็นค่า Respone rate ให้เป็น Row input cell และ `B4` ซึ่งเป็นค่า Number mailed ให้เป็น Column input cell ดังภาพ

![What-If Analysis: Data table](</assets/is281/excel-05-06-whatif-data-table.png>)

หลังจากกด OK เราก็จะได้ค่า Net Profit ที่คำนวณตาม `E4` แต่ใช้ข้อมูล Number mailed และ Response reate จาก Data table เป็น 2 inputs ในการคำนวณ ดังภาพ

![What-If Analysis: Data table](</assets/is281/excel-05-07-whatif-data-table.png>)

#### ตัวอย่าง What-If Analysis: Scenario Manager

เนื่องจาก Data table นั้นมีข้อจำกัดในเรื่องของจำนวน input ที่มีได้แค่สองตัว Scenario Manager นั้นสามารถใส่ Input ได้มากตามจำนวน Scenario ที่มี ดูจากตัวอย่างด้านล่าง จะเป็นการคำนวณต้นทุนและกำไรของการผลิตสินค้า A, B และ C โดยมี input คือ ค่าแรงรายชั่วโมง และต้นทุนวัตถุดิบ ซึ่งมีค่าแปรผันไปตาม scenario 3 แบบ คือ Best case, Worst case และ Most likely

![What-If Analysis: Scenario Manager](</assets/is281/excel-05-08-whatif-scenario-manager.png>)

ในการใช้ Scenario Manager มีขั้นตอนดังต่อไปนี้

- สร้าง Scenario โดยไปที่ Ribbon => Data => What-if Analyis => Scenario Manager แล้วจะปรากฏหน้าต่างดังภาพ

![What-If Analysis: Scenario Manager](</assets/is281/excel-05-09-whatif-scenario-manager.png>)

- จากนั้นให้กด `+` เพื่อเพิ่ม Scenario โดยให้ใส่ Scenario name และกำหนด Changin cells เป็น `B2:B3` ตามภาพ

![What-If Analysis: Scenario Manager](</assets/is281/excel-05-10-whatif-scenario-manager.png>)

- ขั้นตอนถัดไป คือการกำหนดค่าตาม Scenario ซึ่งในกรณี Best Case คือ `Hourly Cost = 30` และ `Material Cost = 57`

![What-If Analysis: Scenario Manager](</assets/is281/excel-05-11-whatif-scenario-manager.png>)

- ใส่ Scenario จนครบตามภาพ

![What-If Analysis: Scenario Manager](</assets/is281/excel-05-12-whatif-scenario-manager.png>)

- จากนั้นกด Summary... เพื่อทำการวิเคราะห์

![What-If Analysis: Scenario Manager](</assets/is281/excel-05-13-whatif-scenario-manager.png>)

- หากเลือก Scenario summary ก็จะได้ผลตามภาพ

![What-If Analysis: Scenario Manager](</assets/is281/excel-05-14-whatif-scenario-manager.png>)

#### ตัวอย่าง What-If Analysis: Goal Seek

ในการคำนวณการผ่อนชำระเงินกู้ ที่ใช้ในตัวอย่างก่อนหน้าจะเป็นการวิเคราะห์แบบไปข้างหน้า Forward แต่หากเราอยากจะกลับคำนวณย้อนกลับ Reverse เช่น เราอยากระบุว่าเราต้องการชำระเงินงวดละไม่เกิน $1,800 ก็สามารถทำได้ โดยใช้ Goal Seek โดยมีขั้นตอน ดังนี้

- ไปที่ Ribbon => Data => What-if Analyis => Goal Seek และกำหนดค่า Set cell เป็น `C11` Monthly Payment ใส่ค่า To value เป็น `1800` ในกรณีนี้เราจะกำหนดให้ปรับเปลี่ยนที่ Purchase Price โดยกำหนด By changing cell เป็น `C4` ดังภาพ

![What-If Analysis: Goal Seek](</assets/is281/excel-05-15-whatif-goal-seek.png>)

- เมื่อวิเคราะห์เสร็จ จะเห็นว่า Purchase Price ถูกเปลี่ยนจาก `$385,500` เป็น `$362,185` ดังภาพ

![What-If Analysis: Goal Seek](</assets/is281/excel-05-16-whatif-goal-seek.png>)

### Solver

ในการทำ What-If Analysis ด้วย Goal Seek นั้นมีข้อจำกัด คือ ไม่สามารถกำหนดการปรับเปลี่ยนค่าในหลาย ๆ เซลล์ได้ หรืออาจจะถึงขั้นวิเคราะห์ย้อนกลับแบบหลาย ๆ Scenarios ซึ่ง Solver เป็นฟีเจอร์ของ Excel ที่เข้ามาตอบโจทย์นี้ โดย Solver สามารถที่จะ

- กำหนดให้ปรับค่าได้หลาย ๆ เซลล์
- กำหนดเงื่อนไขให้ค่าที่จะปรับในแต่ละเซลล์ได้
- หา solution ได้ทั้งแบบ maximise และ minimise
- หาคำตอบได้หลายทางเลือกให้คำโจทย์ที่ต้องการจะแก้

อย่างไรก็ตาม Solver นั้นยังทำงานไม่สมบูรณ์ใน Excel เวอร์ชั่นอื่น ๆ ที่ไม่ใช่ Windows

[ดาวน์โหลดไฟล์ประกอบการเรียนได้ที่นี่ - Solver/Analysis Toolpak](</assets/is281/xls/05-DataAnalysisSolverATP.xlsx>)

#### ตัวอย่าง Solver - Three Products

ตัวอย่างนี้จะแสดงการคำนวณกำไรจากผลิตภัณฑ์สามตัว ซึ่งมีจำนวนหน่วย กำไรต่อหน่วย และกำไรต่อผลิตภัณฑ์ (คำนวณจากการเอาจำนวนหน่วย x กำไรต่อหน่วย) ดังภาพ

![Data Analysis: Solver](</assets/is281/excel-05-17-solver.png>)

หากมองดูผิวเผินก็จะเห็นว่า Product C นั้นทำกำไรสูงสูด แต่ในสถานการณ์จริงนั้น จะมีเงื่อนไขต่าง ๆ ที่มาเป็นตัวกำหนดในการผลิต ดังนี้

- จำนวนการผลิตทั้งหมดต้องเป็น 300 หน่วย
- มีความต้องการ Product A จำนวน 50 หน่วย จากยอดสั่งซื้อเดิม
- มีความต้องการ Product B จำนวน 40 หน่วย จากการคาดการณ์
- เนื่องจาก Demands ไม่มากจึงควรผลิต Product C ไม่เกิน 40 หน่วย

จากเงื่อนไขข้างต้น เราสามารถใช้ Solver ในการคำนวณหาหน่วยการผลิตได้ ดังนี้

- ไปที่ Ribbon => Data => Solver

![Data Analysis: Solver](</assets/is281/excel-05-18-solver.png>)

- จากนั้นให้ทำการกำหนดค่าพารามิเตอร์ต่าง ๆ ให้ Solver ดังนี้
  - กำหนดเป้าหมายที่ Set Objective ในที่นี้คือ Total Profit ที่ `D6`
  - โดยกำหนดให้ To เป็น `Max` ซึ่งก็คือกำไรสูงสุด
  - กำหนดให้ Changing Variable Cells เป็น `B3:B5` ซึ่งก็คือ จำนวนสินค้าที่จะผลิต
  - จากนั้นกำหนดเงื่อนไขต่าง ๆ
    - Product A : `B3` >= 50
    - Product B : `B4` >= 40
    - Product C : `B5` <= 40
    - Total Product : `B6` <= 300
  - เลือก Solving Method เป็น Simplex LP
  
![Data Analysis: Solver](</assets/is281/excel-05-19-solver.png>)

- จากนั้นกด Solve แล้ว Solver ก็จะทำการคำนวณ จำนวนการผลิตที่ให้ได้กำไรสูงสุด ภายใต้เงื่อนไขต่าง ๆ ที่กำหนด ได้ผลดังภาพ

![Data Analysis: Solver](</assets/is281/excel-05-20-solver.png>)

#### ตัวอย่าง Solver - Investment Portfolio (Excel for Windows only)

ตัวอย่างถัดมา เป็นการจัดการ portfolio การลงทุนอย่างง่าย ๆ โดยมีเงื่อนไข ดังต่อไปนี้

- การลงทุนใน New car loans ต้องเป็น 3 เท่าของ Used car loans
- การลงทุนใน Car loans ทั้งสองแบบต้องมากกว่า 15% ของทั้งพอร์ต
- Unsecured loans ไม่ควรเกิน 25% ของ Portfolio
- อย่างน้อย 10% ของ Portfolio ควรเป็นการลงทุนใน Bank CDs
- ยอดเงินลงทุนทั้งหมดคือ $5,000,000
- การลงทุนทั้งหมดควรจะได้ผลตอบแทนในแดนบวก หรือเท่าทุน

![Data Analysis: Solver](</assets/is281/excel-05-21-solver.png>)

- จากนั้นให้ทำการกำหนดค่าพารามิเตอร์ต่าง ๆ ให้ Solver ดังนี้
  - กำหนดเป้าหมายที่ Set Objective ในที่นี้คือ Total Yeild ที่ `D12`
  - โดยกำหนดให้ To เป็น `Max` ซึ่งก็คือกำไรสูงสุด
  - กำหนดให้ Changing Variable Cells เป็น `C5:C9` ซึ่งก็คือ จำนวนเงินลงทุน
  - จากนั้นกำหนดเงื่อนไขต่าง ๆ
    - ยอดรวมเงินลงทุน : `C10` = `B1`
    - การลงทุนใน New car loans : `C5` >= `C6*3`
    - เงินลงทุนใน Auto Loan : `D14` >= 0.15
    - เงินลงทุนใน Unsecured Loan : `E8` <= 0.25
    - เงินลงทุนใน Bank CDs : `E9` >= 0.1
  - เลือก Make Unconstrained Variables Non-Negative
  - เลือก Solving Method เป็น GRG Nonlinear

![Data Analysis: Solver](</assets/is281/excel-05-22-solver.png>)

- จากนั้นกด Solve แล้ว Solver ก็จะทำการคำนวณ % Total Yeild สูงสุด ภายใต้เงื่อนไขต่าง ๆ ที่กำหนด ได้ผลดังภาพ

![Data Analysis: Solver](</assets/is281/excel-05-23-solver.png>)

***หมายเหตุ*** ตัวอย่างนี้ไม่สามารถใช้กับ Excel for Mac ได้

### Analysis Toolpak

Analysis Toolpak เป็นส่วนเสริมของ Excel ที่ช่วยในการวิเคราะห์เชิง Scientific, Engineering, Statistics ซึ่งถือเป็นการวิเคราะห์ในขั้นสูง และต้องการพื้นฐานความรู้ในเชิงทฤษฎี จึงจะสามารถใช้งานได้ ส่วนการใช้งาน Analysis Toolpak ในบางกรณีอาจจะต้องทำการติดตั้งเพิ่มเติม ซึ่งสามารถหาวิธีติดตั้งได้จากอินเตอร์เน็ต

ในบทเรียนนี้จะเป็นการแนะนำการใช้งาน Analysis Toolpak อย่างง่าย ๆ

#### ตัวอย่าง Analysis Toolpak

ข้อมูลดังภาพด้านล่างเป็นตัวอย่างคะแนนของ นักเรียนสองกลุ่ม โดยเราสามารถทำการวิเคราะห์ Descriptive Statistics โดยการไปที่ Data => Data Analysis

![Data Analysis: ATP](</assets/is281/excel-05-24-atp.png>)

เมื่อเลือก Descriptive Statistics แล้วจะต้องกรอก Input ดังนี้

- Input Range: `A1:B10`
- เลือก Labels in first row
- เลือก Output Rage: `D1`
- เลือก Summary statistics

![Data Analysis: ATP](</assets/is281/excel-05-25-atp.png>)

เมื่อกด OK แล้วจะได้ตาราง Descriptive Statistics ดังภาพ

![Data Analysis: ATP](</assets/is281/excel-05-26-atp.png>)

ถัดไปจะเป็นการทดสอบความแปรปรวน F-Test ของนักเรียนทั้งสองกลุ่ม เพื่อวิเคราะห์ว่า ทั้งสองกลุ่มมีความแตกต่างกัน ในเชิงสถิติหรือไม่ โดยเลือก F-Test Two-Sample for Variances ดังภาพ

![Data Analysis: ATP](</assets/is281/excel-05-27-atp.png>)

จากนั้นกำหนด Input ของ F-Test ดังนี้

- Variable 1 Range: `A1:A10`
- Variable 2 Range: `B1:B10`
- เลือก Label
- Alpha: `0.05`
- Output Range: `D1`

![Data Analysis: ATP](</assets/is281/excel-05-28-atp.png>)

เมื่อกด OK แล้วก็จะได้ผลการวิเคราะห์ F-Test ดังภาพ โดยในกรณีนี้ สามารถสรุปได้ว่า ทั้งสองกลุ่มมีความแตกต่างกันในทางสถิติ โดยดูจากค่า P ในเซลล์ `E9` ที่มีค่าน้อยกว่า 0.05

![Data Analysis: ATP](</assets/is281/excel-05-29-atp.png>)

## วิดีโอสำหรับเรียนย้อนหลัง

### Clip: What-If Analysis

<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/Jacoe6q9G44?autoplay=0&origin=https://mentor2code.com"
  frameborder="0"></iframe>

### Clip: Solver / Analysis Toolpak

TBD

<!-- <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/Jacoe6q9G44?autoplay=0&origin=https://mentor2code.com"
  frameborder="0"></iframe> -->

## เอกสารอ้างอิง

- [1] Alexander, M., Kusleika, R. and Walkenbach, J. (2019), Excel 2019 Bible, John Wiley & Sons, Indianapolis, IN.
- [2] [Data](<https://media.wiley.com/product_ancillary/89/11195147/DOWNLOAD/Complete%20book_Worksheet.zip>)
