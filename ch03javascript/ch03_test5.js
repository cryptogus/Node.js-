/***
 * 배열
 * 안에 요소를 추가할 때는 push() 메소드를 사용
 * 배열의 요소를 확인하기 위해 for 반복문을 사용해도 되지만
 * forEach() 메소드를 호출해도 된다. 이때 함수를 파라미터로 전달하고 이 함수는 배열에 들어있는 각 요소를 확인할 때마다 반복해서 호출됨 
 */

var Users = [{name:'아이유', age:30}, {name:'윤아', age:33}];

Users.push({name:'티아라', age:29});
console.log("사용자 수: %d",Users.length);
console.log('첫 번째 사용자 이름: %s', Users[0].name);

var add = function(a ,b){
    return a + b;
}

Users.push(add);

console.log("배열 요소 갯수: %d",Users.length);
console.log('덧셈: %d', Users[3](20 , 30));

console.log('\nforEach 사용해보기');
Users.forEach(function(item, index){
    console.log('배열 요소 #' + index + ': %s',item.name);
})