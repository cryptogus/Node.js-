//객체만드는 법
var Person = {};

//객체 안에 들어있는 속성의 이름은 하나의 변수
//객체에 넣을 수 있는 속성은 점(.) 연산자와 속성의 이름을 이용해 접근할 수도 있고 대괄화([])와 속성의 이름을 이용해서 접근하기도 가능
//단, 대괄호 안에는 속성 이름을 문자열로 넣어야함 "" or '' 사용

Person['age'] = 20;
Person['name'] = "소녀시대";
Person.mobile = '010-1000-1000';

console.log("1. %d",Person['age']);
console.log("2. %d",Person.age);
