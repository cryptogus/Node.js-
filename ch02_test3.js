/* process 객체의 env 속성을 이용해서 환경 변수의 값을 확인.
 *윈도우의 시스템 환경 변수로 OS 환경 변수가 있는데 이 환경 변수의 값으로는 'Windows_NT'와 같은 값이 들어 있을 수 있다.
 */

console.dir(process.env);

console.log('OS 환경 변수의 값: '+ process.env['OS']);

// 여러분의 PC의 환경 변수 값이 모두 출력되고 마지막에 OS 환경 변수의 값을 보여주는 한 줄이 더 출력됩니다.
// process.env 속성을 사용하면 시용자 정의 환경 변수 뿐만 아니라 OS와 같은 시스템 환경 변수도 접근할 수 있습니다.