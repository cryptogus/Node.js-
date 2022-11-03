/* 내장 모듈
 * 노드를 설치하고 나면 그 안에 제공되는 다양한 모듈이 미리 포함되어 있는 것들을 말함
 * 내장 모듈에 관한 정보 - nodejs.org/api 
 */

var os = require('os');

console.log('시스템의 hostname: %s', os.hostname());
console.log('시스템의 메모리: %d / %d', os.freemem(), os.totalmem());
console.log('시스템의 CPU 정보\n');
console.dir(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보\n');
console.dir(os.networkInterfaces());