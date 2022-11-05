/***
 * 배열에 값 추가 및 삭제하기
 * push() - 배열 끝에 요소 추가
 * pop() - 배열 끝에 있는 요소를 삭체
 * ubshift() - 배열의 앞에 요소를 추가
 * shift() -  배열 앞에 있는 요소 삭제
 * splice(index, removeCount,[Object]) - 여러 개의 객체를 요소로 추가하거나 삭제
 * slice(index, copyCount) - 여러 개의 요소를 잘라내어 새로운 배열 객체로 만든다
 */
var Users = [{name:'아이유', age:30}, {name:'윤아', age:33}];

Users.push({name:'카리나', age:23});//배열안에 배열 집어넣기 Users.push([{name:'카리나', age:23}]);
Users.pop();

/***
 * 배열 중간에 있는 요소를 삭제하고 싶다면?
 * delete 키워드 사용
 * 단 내용이 삭제되는 것이지 배열의 갯수가 변하지는 않는다
 * 요소를 담아 둘 수 있는 공간이 그대로 남겨진 채 객체만 삭제되었기 때문
 * 따라서 배열 요소를 담는 공간까지 없애주는 splice() 메소드를 새용하는 것도 좋다
 */
 Users.push({name:'카리나', age:23});
delete Users[1];
console.dir(Users);

/**
 * splice() 메소드로 배열 요소 여러 개 한꺼번에 추가하거나 삭제하기
 * 첫 번째 파라미터는 인덱스 값으로 배열의 몇 번째 요소부터 처리 할 것인지 지정하고
 * 두 번째 파라미터는 삭제할 요소의 갯수를 지정
 * 만약 다섯 개의 객체가 들어있는 Users 배열에서 세번째와 네번째 요소를 삭제하고 싶다면
 * Users.splice(2,2);를 호출
 * 
 * 만약 값을 추가하고싶다면 두 번째 파라미터 값을 0으로 입력한 후 입력하려는 객체 전달
 */

Users.splice(1,0,{name:'윈터', age:22});
console.dir(Users);

Users.splice(2, 1);
console.dir(Users);

/**
 * slice() - 두개의 파라미터 전달
 */
var Users2 = Users.slice(1,3);

console.log("\n slice로 잘라낸 Users2");
console.dir(Users2);

var Users3 = Users2.slice(1);

console.log("\n slice로 잘라낸 Users3");
console.dir(Users3);