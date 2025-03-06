const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);  
const numbers = input[1].trim().split(' ').map(Number);
const total = numbers.reduce((sum, num) => sum + num, 0);

// n개를 선택하는 모든 조합 중 합이 최소가 되는 조합 찾기
let minMaxGroupSum = Infinity;

// 백트래킹으로 조합 찾기
function findMinMaxGroupSum(index, selectedCount, selectedSum) {
  // n개를 선택했을 때
  if (selectedCount === n) {
    // 첫 번째 그룹의 합이 selectedSum이면
    // 두 번째 그룹의 합은 total - selectedSum
    const otherGroupSum = total - selectedSum;
    const maxGroupSum = Math.max(selectedSum, otherGroupSum);
    
    // 최댓값이 최소가 되는 조합 갱신
    minMaxGroupSum = Math.min(minMaxGroupSum, maxGroupSum);
    return;
  }
  
  // 더 이상 선택할 수 없는 경우
  if (index >= numbers.length) {
    return;
  }
  
  // 현재 숫자를 선택하는 경우
  findMinMaxGroupSum(index + 1, selectedCount + 1, selectedSum + numbers[index]);
  
  // 현재 숫자를 선택하지 않는 경우
  findMinMaxGroupSum(index + 1, selectedCount, selectedSum);
}

findMinMaxGroupSum(0, 0, 0);
console.log(minMaxGroupSum);