document.addEventListener('DOMContentLoaded', () => {
    const getRecommendationButton = document.getElementById('get-recommendation-button');
    const recommendationDisplay = document.getElementById('recommendation-display');

    const seoulRecommendations = [
        "역사적인 경복궁과 북촌 한옥 마을을 탐방하고 전통차를 즐겨보세요.",
        "남산타워에서 서울 전경을 감상한 후 명동에서 쇼핑과 길거리 음식을 즐겨보세요.",
        "한강 유람선을 타고 여의도 한강 공원에서 피크닉을 즐겨보세요.",
        "롯데월드 테마파크에서 신나는 하루를 보내고 석촌호수 산책을 즐겨보세요.",
        "홍대에서 젊음의 문화와 예술을 만끽하고 분위기 좋은 루프탑 바에서 휴식을 취해보세요.",
        "가로수길에서 브런치와 쇼핑을 즐기고 아늑한 카페에서 대화를 나눠보세요.",
        "북촌 한옥 마을의 매력적인 골목길을 거닐고 삼청동에서 갤러리 구경 및 맛집 탐방을 해보세요.",
        "동대문디자인플라자(DDP)의 미래적인 디자인을 감상하고 활기찬 동대문 시장 야시장을 구경해보세요.",
        "트렌디한 성수동 카페 거리에서 커피를 마시며 독특한 소품샵을 구경해보세요.",
        "코엑스 별마당 도서관에서 책을 읽고 코엑스 아쿠아리움에서 수중 세계를 탐험해보세요."
    ];

    getRecommendationButton.addEventListener('click', recommendSeoulSpot);

    function recommendSeoulSpot() {
        const randomIndex = Math.floor(Math.random() * seoulRecommendations.length);
        const recommendedSpot = seoulRecommendations[randomIndex];
        recommendationDisplay.innerHTML = `<p class="recommendation-text">${recommendedSpot}</p>`;
    }

    // 초기 추천 표시
    recommendSeoulSpot();
});