/**
 * 파일을 직접 열고 닫으면서 읽거나 쓰기 즉 조금씩 읽거나 쓰는 방식을 사용
 * open(path, flags, [mode], [callback]) - 파일을 연다, [mode]-r,w,w+,a+
 * read(fd, buffer, offset, length, position, [callback]) - 지정한 부분의 파일 내용을 읽어 들인다
 * write(fd, buffer, offset, length, position, [callback]) - 파일의 지정한 부분에 데이터를 쓴다
 * close(fd, [callback]) - 파일을 닫아준다
 */

var fs = require('fs');

//파일에 데이터를 씁니다
fs.open('./output.txt','w',function(err, fd){
    if(err) throw err;
//Buffer 객체는 바이너리 데이터를 읽고 쓰는데 사용하며 새로운 버퍼 객체를 만들기 위해서는 new연산자를 사용하여 그 안에 들어갈 바이트
//데이터의 크기만 지정하면 된다
    var buf = new Buffer('안녕\n');
    fs.write(fd, buf, 0, buf.Length, null, function(err, written, buffer){
        if(err) throw err;

            console.log(err, written, buffer);
            
            fs.close(fd, function(){
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료');
            });
    });
});