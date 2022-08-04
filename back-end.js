const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {

  // parse json data here...
  resp.on("data", (res) => {
    let x = (JSON.parse(res.toString()));
    x = deleteNAorEmpty(x)

    console.log(JSON.stringify(x))
  })
  

});

deleteNAorEmpty = (param) => {
  for(let i in param){
    if(param[i] instanceof Object) {
      if(Object.keys(param[i]).length == 0){
        delete param[i];
      } else{
        deleteNAorEmpty(param[i]);
      }
      if(Object.values(param[i]) === null) {
        delete values(param[i])
      }
    }
    else if(
          param[i] === "" || param[i] == 'N/A'
          || param[i] === null || param[i] === '-' || typeof param[i] === 'undefined' ||
          (param[i] instanceof Object && Object.keys(param[i]).length == 0)
        ){
          delete param[i];
        }
  }
  
  let result = JSON.parse(JSON.stringify(param, (k,v) => Array.isArray(v)?v.filter(e=>e !==null) : v ));

  return result;
}