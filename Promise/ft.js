const fs = require('fs');
const fsp = require('fs').promises;
const PATH = require('path');
function dt(path, parent = []) {
  fsp.stat(path).then((stats) => {
    if(stats.isDirectory()) {
        fsp.readdir(path).then(())
    } else {

    }
  });
}

let result = [];
dt('C:\\Users\\septlog\\Desktop\\test', result);
// console.log(result);
