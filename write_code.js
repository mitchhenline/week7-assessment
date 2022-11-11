sumZero = arr => {
    for (let i = 0; i < arr.length; i++){
        for (let j=0; j < arr.length; j++){
            if (arr[i] + arr[j] === 0){
                return true
            } 
        }
    }
    return false
}

//quadratic runtime because of the for loop nested in another for loop

// let coolArr = [1, 5, 6, -6, 3]
// console.log(sumZero(coolArr))

uniqChars = str => {
    splitStr = str.split('')
    for (let i =0; i < splitStr.length - 1; i++){
        for (let j=i+1; j < splitStr.length; j++){
            if (splitStr[i] === splitStr[j]){
                return false
            }
        }
    }
    return true
}

//quadratic runtime because of the for loop nested in another for loop

// console.log(uniqChars("soleil"))

isPangram = str => { 
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('') 
    let strLowercase = str.toLowerCase()
    let splitStr = strLowercase.split('')
    
    for(let i = 0; i < alphabet.length; i++){
        if(splitStr.indexOf(alphabet[i]) === -1){
          return false
        }
    }
    return true
}

// console.log(isPangram("the quick brown fox jumps over the lazy dog"))

//linear runtime because of one single loop

findLongestWord = arr => {
    let word = ""
    for (let i = 0; i < arr.length; i++){
          if (word.length < arr[i].length) {
            word = arr[i];
          }
        }
        return word;
      }

 //linear runtime because of one single loop

// console.log(findLongestWord(["hi", "hello", "please", "cat"]))