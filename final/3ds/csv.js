

const csvFilePath='produceList.csv'
const csv = require('csvtojson');
  csv()
  .fromFile(csvFilePath)
  .on("end_parsed", function(jsonArrayObj){
    console.log(jsonArrayObj);
  })
  .on('done',(error)=>{
    console.log('end')
  })
