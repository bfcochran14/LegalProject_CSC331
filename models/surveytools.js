var fs = require('fs');  //filesystem

function readJSONFile (file, callback){
  var obj;

  fs.readFile(file, 'utf8', function(err, data){
    if(err) throw err;
    obj= JSON.parse(data);
    if(callback)
      callback(obj);
  });
}

function writeJSONFile (object, file){

  fs.writeFile(file, JSON.stringify(object,NULL, 2), "utf-8");

}
module.exports = {readJSONFile};
