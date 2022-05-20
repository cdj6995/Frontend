import {new1, getTime, getCurrentHour,MyLoggier2} from './myLoggier.js';

const root = document.querySelector("#root");
root.innerHTML = `<p>Hello World</p>`;

new1("내가 만든 임포트 익스포트 데이터")

new1(getTime());
new1(getCurrentHour());
new1(`getTime is ${getTime()}`);
new1(`getCurrentHour is ${getCurrentHour()}`);

const logger = new MyLoggier2();
new1(`lecture of Poly are ${logger.getLectures()}`)