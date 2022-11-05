//자바스크립트 함수

//정의하는 방법 2가지
//1
function add(a,b){
    return a + b;
}

//2
/***
 * 함수를 변수에 할당하는 과정에서 함수의 이름이 삭제되어 function 키워드 뒤에 곧바로 소괄호가 붙는 형태로
 * 만들어 지는것을 익명 함수 라고한다.
 * 2가지 방법 모두 add(1,3); 으로 사용가능한 함수이다.
 */
var add = function(a,b){
    return a + b;
}

var result = add(10, 10);

console.log("1.%d  2.%d", add(1,2), result);