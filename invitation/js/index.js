//디데이 종료 일자 설정
const countDownDate = new Date("August 28, 2021").getTime();

//1초마다 갱신되도록 함수 생성,실행
const x = setInterval(function() {
    // 오늘 날짜 등록
    const now = new Date().getTime();

    // 종료일자에서 현재일자를 뺀 시간
    const distance = countDownDate - now;

    // 각 변수에 일, 시, 분, 초를 등록
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    //id가 d-day인 HTML코드에 내용 삽입
    document.getElementById("d-day").innerHTML = "결혼식까지 " + d +"일 남았습니다.";
});