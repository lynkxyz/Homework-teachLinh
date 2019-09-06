// SUBJECT: Tim so lon nhat trong chuoi so

const arr = [1, 3, 7, 5, 12, 18]

function max(arr) {
  let a = 0
  let k = 0
  
  for (let i = 0; i <= arr.length; i++) {
    if (arr[a] >= arr[i]) {
      k = arr[a]
    } else if (a === arr.length - 1) {
      k = arr[a]
    } else {
      a = i
    }
  }
  
  return k
}

const result = max(arr)

console.log(result)
