/***
 * 함수가 변수에 할당될 수 있다면 객체 안에 속성으로도 들어갈 수 있다.
 * 즉, 객체의 속성에는 변수를 만들어 할당할 수 있으므로 객체 안의 속성에 함수를 할당할 수 있다.
 */

var Person = {};

Person['age'] = 20;
Person['name'] = '소녀시대';

Person.add = function(a,b){
    return a+b;
}

console.log("더하기: %d",Person.add(10, 20));

var oper = function(a,b){
    return a-b;
}
Person['sub'] = oper;
console.log("빼기: %d", Person.sub(3, 5));

//속성 초기화
var Person = {
    name: '현호우',
    age: '26',
    mul: function(a, b){
        return a*b;
    }
};

console.log('곱셈: %d 이름: %s',Person.mul(10,30), Person.name);