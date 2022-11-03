var calc = {};

calc.add = function(a, b){
    return a + b;
};
/* 모듈 파일에서 exports가 아닌 module.exports를 사용했을 때
 * 이렇게 코드를 만들면 calc 객체는 모듈을 불러들이는 쪽에서 그대로 사용할 수 있다.
 */
module.exports = calc;