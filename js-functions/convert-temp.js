import readline from "readline"; //เป็นการ "หยิบกล่องเครื่องมือ" ชื่อว่า readline มาจาก Node.js ตัวนี้เอาไว้ใช้สำหรับอ่านข้อมูลที่เราพิมพ์เข้าไปใน Terminal

function celsiusToFahrenheit(C) {
  return (C * 9) / 5 + 32;
}

function fahrenheitToCelsius(F) {
  return ((F - 32) * 5) / 9;
}

const rl = readline.createInterface({
  input: process.stdin, // รับข้อมูลจากคีย์บอร์ด (Standard Input)
  output: process.stdout, // แสดงผลออกทางหน้าจอ (Standard Output)
}); //Process คือ โปรแกรมที่ 'กำลังทำงาน' อยู่ในขณะนั้น

//rl.question สั่งให้หน้าจอพิมพ์คำว่า "Enter temperature:" และหยุดรอให้เราพิมพ์

rl.question("Enter temperature:", function (tempInput) {
  const temp = parseFloat(tempInput); //parseFloat(tempInput)แปลงข้อความที่พิมพ์ (String) ให้กลายเป็น ตัวเลขที่มีทศนิยม (Float) เพื่อเอาไปคำนวณคณิตศาสตร์ได้

  rl.question("Enter unit (C or F):", function (unitInput) {
    const unit = unitInput.trim().toUpperCase(); //unitInput.trim()ตัดช่องว่างหัว-ท้ายทิ้ง (กันคนพิมพ์เคาะ Spacebar เกินมา) .toUpperCase()เปลี่ยนเป็นตัวใหญ่ทั้งหมด (พิมพ์ 'c' เล็กมา ก็จะกลายเป็น 'C' ใหญ่

    let result;

    //if statement

    if (unit === "C") {
      result = celsiusToFahrenheit(temp);
      console.log(`${temp}C is ${result.toFixed(2)}F`);
    } else if (unit === "F") {
      result = fahrenheitToCelsius(temp);
      console.log(`${temp}F is ${result.toFixed(2)}C`);
    } else {
      console.log(`Invalid unit! Please enter C or F.`);
    }
    rl.close(); //เป็นการบอกว่า "ทำงานเสร็จแล้วนะ ปิดได้เลย" เพื่อให้โปรแกรมหยุดทำงานและคืนหน้าจอ Terminal กลับมาให้เรา
  });
});
