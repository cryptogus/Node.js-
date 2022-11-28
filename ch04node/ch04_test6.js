var fs = require('fs');

//파일을 비동기식 IO로 읽어 들인다
fs.readFile('../package.json','utf-8', function(err, data){
    //읽어 들인 데이터를 출력한다.
    console.log(data);
});

console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다');
/**
 * readFile() 메소드를 실행하면서 세 번째 파라미터로 전달된 함수는 파일을 읽어들이는 작업이 끝났을 때 호출됨
 * 이때 두 개의 파라미터 err와 data를 전달받아서 오류가 발생했는지 아니먄 제대로 실행되었는지를 알 수 있다.
 * 오류가 발생하면 err에 오류 데이터가 들어가고 아니면 err변수의 값이 null이 됨
 */