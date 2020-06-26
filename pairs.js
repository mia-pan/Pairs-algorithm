//https://www.hackerrank.com/challenges/pairs/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
//

function pairs(k, arr) {
    let count = 0 
    for (let i = 0; i < arr.length - 1; i ++) {
        let j = i + 1 
        while (j < arr.length){
            if( Math.abs(arr[j] - arr[i]) == k ) count ++ 
            j ++ 
        }
    }
    return count 
}


// josh's solution 
// function pairs(k, arr) {
    
//     let count = 0
//     for (let i=0; i< arr.length-1; i++) {
//         let j=i+1
//         while (j < arr.length) {
//             if (Math.abs(arr[j] - arr[i]) == k) count++
//             j++
//         }
//     }
//     return count
// }

// function pairs(k, arr) {
//     let pairs = 0 
//     let obj = {}
//     arr.forEach(num => {
//         let pairValue =  num - k
//         obj[pairValue] =  (obj[pairValue]++ || 0 ) + 1  //obj[-1] =ture  
//     })
//     console.log(obj)
//     arr.forEach(num => {
//         if(obj[num]) pairs += obj[num]   //
//     })
//     return pairs
// }