
exports.chunks = function (arr, n) {

  if (!arr || !n) return arr

  const length = arr.length
  let slicePoint = 0
  let ret = []

  while (slicePoint < length) {
    ret.push(arr.slice(slicePoint, slicePoint+n))
    slicePoint += n
  }
  return ret
}

exports.pairs = function (arr) {
  return exports.chunks(arr, 2)
}
