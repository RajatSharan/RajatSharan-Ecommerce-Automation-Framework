const ExcelJS=require('exceljs')

async function excelTest()
{
const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile("D:/Playwright_Automation/exceldownload.xlsx")

    const worksheet=workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row,rowNumber)=>{

    row.eachCell((cell,colNumber)=>{

      if(cell.value === 'Apple'){

        console.log(rowNumber)
        console.log(colNumber)
      }


    })

})


}

excelTest()