var result = 0;

console.time('duration_sum'); //실행 시간을 측정하기 위한 시작 시간 기록

for(var i = 1; i <= 1000; i++){
    result += i;
}

console.timeEnd('duration_sum');
console.log('1 부터 1000까지 더한 결과물: %d', result); // 실행 시간을 측정하기 위한 끝 시간 기록

console.log('현재 실행한 파일의 이름: %s',__filename); //파일의 전체 path가 출력
console.log('현재 실행한 파일의 경로: %s',__dirname); //폴더의 전체 path가 출력

var Person = {name:'소녀시대' , age:20};
console.dir(Person); //자바스크립트 객체의 속성들을 출력