const PATH = require('path');
const fsp = require('fs').promises;

async function scan2(path, parent) {
  //   let files = await fsp.readdir(directoryName);
  //   for (let f of files) {
  //     let fullPath = path.join(directoryName, f.name);
  //     if (f.isDirectory()) {
  //       await scan2(fullPath, results);
  //     } else {
  //       parent.children.push(fullPath);
  //     }
  //   }
  let stats = await fsp.stat(path);
  if (stats.isFile()) {
    parent.children.push({ path });
  } else {
    let files = await fsp.readdir(path);
    parent.children = [];
    files.forEach((file) => {
      //   let data = await scan2(PATH.join(path, file));
      //   parent.children.push(data);

      scan2(PATH.join(path, file)).then((data) => {
        parent.children.push(data);
      });
    });
  }
  return parent;
}

scan2('C:\\Users\\septlog\\Desktop\\test', {
  path: 'C:\\Users\\septlog\\Desktop\\test\\',
  children: []
}).then((c) => {
  console.log(c);
});
