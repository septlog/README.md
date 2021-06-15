const PATH = require('path');
const fsp = require('fs').promises;

async function scan2(path, parent) {
  let stats = await fsp.stat(path);
  let item = { path };
  if (stats.isFile()) {
    return item;
  } else {
    item = { path, children: [] };
    let files = await fsp.readdir(path);

    for (let file of files) {
      let data = await scan2(PATH.join(path, file), item);
      item.children.push(data);
    }
  }
  return item;
}

scan2('C:\\Users\\septlog\\Desktop\\test\\Proxy', {
  path: 'C:\\Users\\septlog\\Desktop\\test\\Proxy'
}).then((c) => {
  console.log(JSON.stringify(c));
});
