for (let i = 1; i < arr.length; i++) {
  let key = arr[i]

  let j

  for (j = i - 1; j >= 0 && arr[j] > key; j = j - 1) {
    arr[j + 1] = arr[j]
  }

  arr[j + 1] = key
}

return arr
