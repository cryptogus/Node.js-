//더하기 함수는 exports 객체에 add 속성에 추가되고 메인 파일에서 이 파일을 모듈로 불러들이면 add 함수를 호출하여 사용가능

exports.add = function(a, b) {
    return a + b;
}