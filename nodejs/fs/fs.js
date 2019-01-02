const fs = require('fs')

fs.readFile('a.txt', (err, data) => {
  if (err) {
    console.log('失败')
  } else {
    console.log(data.toString())
  }
})

fs.writeFile('b.txt', 'abcdefg', (err) => {
  console.log(err)
})
