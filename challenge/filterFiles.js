const fs = require('fs')
const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

fs.readdir(folder, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

})

function extension(folder, ext, callback) {

  files.filter((file) => {
    if (path.extname(file) === ext) {
      let arr = file;
      return arr
    }
  })
}
