/**
 * 노드의 파일 시스템은 파일을 다루는 기능과 디렉터리를 다루는 기능으로 구성되어 있으며, 동기식 IO와 비동기식 IO 기능을 함께 제공
 * 동기식 IO는 파일 작업이 끝날 때까지 대기하며, 비동기식 IO는 파일 작업을 요청만 하고 그다음 작업을 바로 수행
 * 동기식 IO 메소드는 Sync라는 단어를 붙인다.
 *  
 */

var fs = require('fs');

//파일을 동기식 IO로 읽어 들인다.
var data = fs.readFileSync('../package.json','utf-8');
//읽어 들인 데이터를 출력
console.log(data);