// 1.N natural son berilgan. Dastlabki n ta toq sondan tashkil topgan array qaytaruvchi getInitialOdds(n) nomli function tuzing input: 3 output: [1,3,5]
function getInitialOdds(n) {
  let arr = []
  for (let i = 1; i < 2 * n; i += 2) {
    arr.push(i)
  }
  return arr
}
// console.log(getInitialOdds(5));



// 2. string da nechta unli harf borligini toping bunda unli harflar ro'yxatini alohida array ko'rinishida shakllantirib olib keyin loop qilib bajaring
function vowelLetters(str = "Abdullajon") {
  let arr = ['a', 'e', 'i', 'o', 'u', "o'"]
  let count = 0;
  for (let item of str.toLowerCase()) {
    if (arr.includes(item)) {
      count++
    }
  }
  return `${count} ta unli harf bor`
}
// console.log(vowelLetters());



// 3.N ta element dan iborat bo’lgan array yarating va arraydagi eng katta va eng kichkina sonlar o’rnini almashtiring: arr = [1, 3, 2, 0, 4, 5], result = [1,3,2,5,4,0]
function reversMinMax() {
  let newArr = []
  let arr = [1, 3, 2, 0, 4, 5]
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  
  for (let item of arr) {
    if (item === min) {
      newArr.push(max)
    } else if (item === max) {
      newArr.push(min)
    }else {
      newArr.push(item)
    }
  }

  return newArr
}
// console.log(reversMinMax());



// 4. argument sifatida berilgan so'z da nechta a harfi ishtirok etganini aniqlaydigan function tuzing 
function letterSearch (str = "Abdullajonaa") {
  let letter = 'a'
  let count = 0
  for(let item of str.toLowerCase()) {
    if (item === letter) {
      count++
    }
  }
  return `${count} ta a harifi bor`
}
// console.log(letterSearch());



// 5. nums = [2,7,11,15], target = 9 => ixtiyoriy array va biron bir target nomli o'zgaruvchi olinsin. Array ichidagi sonlar yig'indisi target ga teng bulgan sonlarni index si topilsin Misol uchun 2 va 7 soni yig'indisi 9 ga teng, masala sharti mana shu 2 va 7 soni indexi console ga chiqarilsin
function targetIndex () {
  let nums = [0,3,2,11,15,7]
  let target = 9
  let indexs = []

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    if (nums[i] == target) {
      indexs.push(i)
    } else {
      for (let j = 1; j < nums.length; j++) {
        sum = nums[i] + nums[j]
        if (sum == target) {
          indexs.push({i,j})
          i += nums.length
        }
      }
    }
  }
  return indexs
}
console.log(targetIndex());




// 6. Ixtiyoriy n ta element dan iborat bo’lgan array yarating va uning ichidagi dublicate bo’lgan item larni o’chiring:

function dublicateNums () {
  let arr = [4,2,3,0,4,3,6,7,7,8,3]
  let newArr = []
  for (let item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item)
    }
  }
  return newArr
}
// console.log(dublicateNums())