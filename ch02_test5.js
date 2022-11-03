var calc = require('./calc');

/* 파일 이름을 상대경로로 찾아봄 1. calc.js 를 찾아보고 없으면 calc 폴더를 찾아봄 
 * 만약 폴더가 있다면 그 안의 index.js 파일을 불러들임
 * 즉 calc 폴더를 만들고 그 안에 index.js 파일을 넣은 후 index.js 파일 안에 모듈 기능을
 * 위한 자바스크립트 코드를 입력한 경우에도 require('./calc') 커드로 모듈 파일을 불러올 수 있다
 */

console.log('모듈로 분리한 후 - calc.add 함수 호출 결과: %d', calc.add(10, 10));

var calc2 = require('./calc2');

console.log('모듈로 분리한 후 - calc2.add 함수 호출 결과: %d', calc2.add(10, 10))