import PolytechLec from './polytechLec.js';
import util from './utiliy.js';

const root = document.querySelector("#root");
root.innerHTML = `<p>Hello World</p>`;

util.log("내가 만든 임포트 익스포트 데이터")

const pt = new PolytechLec();
util.log(`current hour is ${pt.getCurrentHour()}`);
util.log(`lectures of Polytech are ${pt.getLectures()}`);

// log(getTime());
// log(getCurrentHour());
// log(`getTime is ${getTime()}`);
// log(`getCurrentHour is ${getCurrentHour()}`);

// const logger = new MyLoggier2();
// log(`lecture of Poly are ${logger.getLectures()}`);
