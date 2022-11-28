/***
 * 이벤트 이해하기
 * 
 * 비동기 방식으로 처리하기 위해 서로 이벤트를 전달한다.
 * 예를 들어, 어떤 함수를 실행한 결과물도 이벤트로 전달한다.
 * EvenEmitter를 사용해 이벤트를 주고받는 방법
 * 
 * on(event, listener) - 지정한 이벤트의 리스너를 추가
 * once(event, listener) - 지정한 이벤트의 리스너를 추가하지만 한 번 실행한 후에는 자동으로 리스너가 제거됨
 * removeListener(event, listener) - 지정한 이벤트에 대한 리스너를 제거한다.
 * 
 * process 객체는 노드에서 언제든지 사용할 수 있는 객체인데 이미 내부적으로 EventEmitter를 상속하도록 만들어져있어서
 * on(), emit() 메소드를 바로 사용할 수 있다.
 */

process.on('exit', function(){
    console.log('exit 이벤트 발생.');
});

setTimeout(function(){
    console.log('2초 후 시스템 종료 시도함');

    process.exit();
}, 2000);

