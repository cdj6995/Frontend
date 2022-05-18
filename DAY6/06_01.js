// 로또 만들어 보기
const SETTING = {
    name : "lotto",
    count : 6,
    maxNum : 45
}

function playLotto(){
    const lottoset = new Set();             // 중복을 자동으로 제거하기 위해 set으로 설정
    const {count, maxNum} = SETTING;        // 디스트럭처링
    while (lottoset.size < count) {
        const randomNumber = parseInt(Math.random() * maxNum, 10);
        lottoset.add(randomNumber)
    }
    return Array.from(lottoset);
}

console.log(playLotto());

console.log(playLotto().sort((a,b) => a - b));      // 오름차순
console.log(playLotto().sort((a,b) => b - a));      // 내림차순

