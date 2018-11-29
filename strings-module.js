const reverse = (str) => {
  return str.split("").reverse().join("")
}

const firstLetter = (str) => {
  return str.slice(0,1)
}

const concatt = (str1, str2) => {
  return str1.concat(" ").concat(str2)
}

module.exports = {
  reverse: reverse,
  firstLetter: firstLetter,
  concatt: concatt
}
