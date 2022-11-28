/**
 * 웹사이트의 주소 문자열은 단순 문자열이므로 서버에서 처리할 때는 어디까지가
 * 사이트 주소인지, 그리고 어떤 내용이 요청 파라미터인지 구별해야한다.
 * 이 구별을 위해서 ? 기호를 기준으로 앞에 있는 문자열과 뒤에 있는 문자열을 분리하는 경우가 많다
 * 이 작업을 쉽게 할 수 있도록 노드에 미리 만들어 둔 모듈이 url모듈
 * 
 * parse() - 주소 문자열을 파싱하여 URL 객체를 만들어준다
 * format() - URL 객체를 주소 문자열로 반환
 */

var url = require('url');

//주소 문자열을 URL 객체로 만들기
var curURL = url.parse("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=IU");

//URL 객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

console.log('주소 문자열: %s\n',curStr);
console.dir(curURL);

/**
 * 요청 파라미터는 & 기호로 구분되는데 querystring 모듈로 쉽게 분리 가능
 * parse() - 요청 파라미터 문자열을 파싱하여 요청 파라미터 객체로 만들어준다
 * stringify() - 요청 파라미터 객체를 문자열로 반환 
 */

var querystring = require('querystring');
var param = querystring.parse(curURL.query);

//console.dir(param);
console.log("요청 파라미터 중 query값: %s",param.query);
console.log("원본 요청 파라미터: %s",querystring.stringify(param));