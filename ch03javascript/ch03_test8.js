/**
 * 프로토타입 객체 만들기
 * this는 함수를 호출한 객체이다. 자바스크립트 입문서 참고
 * 파이썬 class, c의 struct 같은 느낌
 */

function Person(name, age){
    this.name = name;
    this.age = age;
}
/* walk 함수를 속성으로 추가하려면 prototype이 필요함, Person이 실제 데이터를 담기 위해 만들어진게 아니라
  인스턴스 객체를 만들기 위한 원형 틀로 만들어졌기 때문 */
Person.prototype.walk = function(speed){
    console.log(speed + 'km 속도로 걸어간다~');
}
/*프로토타입 객체를 정의하고 나면 new 연산자를 사용하여 인스턴스 객체들을 만들 수 있다*/
var person1 = new Person('아이유', 30);
var person2 = new Person('윈터', 22);

console.log(person1.name + '객체의 walk(10) 호출');
person1.walk(10);