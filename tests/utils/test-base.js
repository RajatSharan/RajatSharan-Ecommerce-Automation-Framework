const base=require('@playwright/test')


exports.customtest=base.test.extend(

{

    testDataForOrder :  
    {
        username   : "testrajat34@gmail.com",
        password    : "Rajat@25",
        productName : "adidas original"
        },


}

)