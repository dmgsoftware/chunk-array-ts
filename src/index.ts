export const chunks = function (arr: any[], n: number): any[][] {

  if (!arr || !n) return arr

  const length: number = arr.length
  let slicePoint: number = 0
  let ret: any[][] = []

  while (slicePoint < length) {
    ret.push(arr.slice(slicePoint, slicePoint+n))
    slicePoint += n
  }
  return ret
}

export const pairs = function (arr: any[]): any[][] {
  return chunks(arr, 2)
}

export default chunks;