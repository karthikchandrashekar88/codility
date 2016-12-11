// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.

// Write a function:

// int solution(int N);
// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.

// Assume that:

// N is an integer within the range [1..2,147,483,647].
// Complexity:

// expected worst-case time complexity is O(log(N));
// expected worst-case space complexity is O(1).


function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var binaryArr = getBinaryArr(N);
    var largestGap = getlargestGap(binaryArr);
    return largestGap;
}

function getBinaryArr(N){
  var binaryFormat = Number(N).toString(2);
  var ele = binaryFormat.split('').join(',');
  return ele.split(',');
};



function getlargestGap(binaryArr){
  var gapIndex = -1;
  var arrOneIndex = [];
  var enter = false;
  var zeroCount = 0;
  for(var i=0;i<binaryArr.length;i++){
      if(binaryArr[i] === '1'){
          arrOneIndex.push(i);
      }
  }
  if(arrOneIndex.length===0)return 0;
  var greatNum=0;
  for(var j=0;j<arrOneIndex.length-1;j++){
      var diff=0;
      diff = arrOneIndex[j+1]-arrOneIndex[j];
      if(greatNum<diff){
          greatNum = diff;
      }
  }
  return greatNum-1;
};