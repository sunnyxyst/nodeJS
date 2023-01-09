const {JSDOM} = require('jsdom'); 
const {window} = new JSDOM(''); // js에서 jsdom 모듈 가져오기
const $ = require('jquery')(window);