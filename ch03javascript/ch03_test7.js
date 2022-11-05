/**
 * 콜백 함수 이해하기
 * 콜백 함수는 함수가 실행되는 중간에 호출되어 상태 정보를 전달하거나 결과 값을 처리하는 데 사용됨
 */
function add(a, b, callback){
    var result = a + b;
    callback(result);
}

add(10, 10, function(result){
    console.log('더하기 결과: %d',result);
});

/**
 * 함수 안에서 값을 반환할 때 새로운 함수를 만들어 반환하는 방법
 * 단, 함수안에서 새로운 함수를 만들어 반환하는 경우에만 예외적으로 변수가 초기화되지 않음,
 * 변수 접근가능!!! c에서 static의 느낌으로 이해
 */
function sub(a,b, callback){
    var result = a + b;
    callback(result);

    var history = function(){
        return a + '+' +b+'='+result;
    };
    return history;
}

var sub_history = sub(10, 10, function(result){
    console.log("출력~~~");
})

console.log('실행 결과: ' +sub_history());


