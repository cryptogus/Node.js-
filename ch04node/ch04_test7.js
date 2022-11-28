/**
 * readFile(filename,[encoding],[callback]) - 비동기식 IO로 파일을 읽어 들인다
 * readFileSync(filename,[encoding]) - 동기식 IO로 파일을 읽어 들인다
 * writeFile(filename, data, encoding = 'utf-8', [callback]) - 비동기식 IO로 파일을 쓴다
 * writeFileSync(filename, data, encoding = 'utf-8') - 동기식 IO로 파일을 쓴다
 */

var fs = require('fs');

//파일에 데이터를 쓴다
fs.writeFile('./output.txt', 'Hello World!', function(err){
    if(err){
        console.log('Error: '+ err);
    }

    console.log('output.txt 파일에 데이터 쓰기 완료.');
})