//process 객체는 프로그램을 실행했을 때 만들어지는 프로세스 정보를 다루는 객체이고 아래 process 객체의 3가지 주요 속성과 메소드

//argv: 프로세스를 실행할 때 전달되는 파라미터 정보
//env: 환경 변수 정보
//exit(): 프로세스를 끝내는 메소드

console.log('argv 속성의 파라미터 수: '+ process.argv.length);
console.dir(process.argv);

//실행 명령어: node ch02_test2.js __port 7001
if (process.argv.length > 2){
    console.log('세 번째 파라미터 값: %s', process.argv[2]);
}

//만약 argv 속성에 들어 있는 모든 값을 하나씩 출력하고 싶다면 forEach() 매소드 사용
//forEach()메소드는 배열 안에 들어 있는 각 아이템 값과 인덱스를 함께 전달하므로 배열 객체에 들어 있는 값들을 하나씩 확인하기 좋다
process.argv.forEach(function(item, index) {
    console.log(index + ' : ', item);
    
});