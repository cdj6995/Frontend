// FormView를 가져와서 setup메소드로 셋팅을 한다.
import FormView from "../views/FormView.js";


const tag= "[MainController]";

// 외부에서 접근할 수 있도록 export
// 그안에 가장 기본적인 셋팅을 위한 init()함수 적용
export default{
    init(){
        console.log(tag, "init()");
        FormView.setup(document.querySelector('form'));
    }
}