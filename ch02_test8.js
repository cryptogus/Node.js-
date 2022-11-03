/*
 * 파일 경로를 다루는 path 모듈
 * join() - 여러 개의 이름들을 모두 합쳐 하나의 파일 path로 만들어 준다. 구분자 등을 알아서 조정
 * dirname() - 파일 path에서 디렉터리 이름을 반환
 * basename() - 파일 path에서 파일의 확장자를 제외한 이름을 반환
 * extname() - 파일 path에서 파일의 확장자를 반환
 *  
 */

var path = require('path');

//디렉터리 이름 합치기
var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉터리: %s', docsDirectory);

//디렉터리 이름과 파일 이름 합치기
var curPath = path.join('/Users/mike', 'notepade.exe');
console.log('파일 경로: %s', curPath);

//path에서 디렉터리, 파일 이름, 확장자 구별하기
var filename = "C:\\Users\\mike\\notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('디렉터리: %s, 파일이름: %s, 확장자: %s',dirname, basename, extname);