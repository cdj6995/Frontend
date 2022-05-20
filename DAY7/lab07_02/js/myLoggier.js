// log 함수를 다른 곳에서도 사용하기 위해 export를 사용한다.
export function new1(data){
    console.log(data);
}

// 오늘 날짜
export const getTime = () => {
    return Date.now();
};

// 현재시간
export const getCurrentHour = () => {
    return (new Date).getHours();
}

// class
export class MyLoggier2{
    constructor(props){
        this.lectures = ['JavaScript', 'HTML5','CSS3'];
    }
    getLectures(){
        return this.lectures;
    }
    getTime(){
        return Date.now();
    }
}