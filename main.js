document.addEventListener('DOMContentLoaded', () => {
    const recommendButton = document.getElementById('recommend-button');
    const dateCourseDisplay = document.getElementById('date-course-display');

    const seoulDateCourses = [
        "남산타워에서 서울 전경 감상 후 명동에서 쇼핑 및 길거리 음식 투어",
        "경복궁 한복 체험 후 서촌 한옥마을에서 전통차와 산책",
        "한강 유람선 탑승 후 여의도 공원에서 피크닉",
        "롯데월드에서 신나는 하루를 보내고 석촌호수 산책",
        "홍대 거리에서 예술과 젊음 만끽 후 분위기 좋은 루프탑 바 방문",
        "가로수길에서 브런치와 쇼핑, 그리고 아늑한 카페에서 대화",
        "북촌 한옥마을 골목길 탐방 후 삼청동에서 갤러리 구경 및 맛집 탐방",
        "DDP (동대문디자인플라자) 에서 전시 관람 후 동대문 시장 야시장 구경",
        "성수동 카페거리에서 커피 한 잔과 함께 예쁜 소품샵 구경",
        "코엑스 별마당 도서관에서 책 읽기 및 아쿠아리움 데이트"
    ];

    recommendButton.addEventListener('click', recommendDateCourse);

    function recommendDateCourse() {
        const randomIndex = Math.floor(Math.random() * seoulDateCourses.length);
        const recommendedCourse = seoulDateCourses[randomIndex];
        dateCourseDisplay.innerHTML = `<p class="course-text">${recommendedCourse}</p>`;
    }

    // Recommend a course on initial load
    recommendDateCourse();
});