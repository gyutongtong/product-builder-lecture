document.addEventListener('DOMContentLoaded', () => {
    const getRecommendationButton = document.getElementById('get-recommendation-button');
    const recommendationDisplay = document.getElementById('recommendation-display');

    const seoulRecommendations = [
        "Explore the historical Gyeongbokgung Palace and Bukchon Hanok Village, then enjoy traditional tea.",
        "Visit Namsan Tower for panoramic city views, followed by shopping and street food in Myeongdong.",
        "Take a cruise on the Han River and have a picnic at Yeouido Hangang Park.",
        "Experience the magic of Lotte World theme park, then take a peaceful stroll around Seokchon Lake.",
        "Immerse yourself in youth culture and art in Hongdae, then relax at a rooftop bar.",
        "Enjoy brunch and shopping in Garosu-gil, followed by coffee and conversation at a cozy cafe.",
        "Wander through the charming alleys of Bukchon Hanok Village, then visit art galleries and restaurants in Samcheongdong.",
        "Discover the futuristic Dongdaemun Design Plaza (DDP) and explore the vibrant Dongdaemun Market at night.",
        "Sip coffee and browse unique shops in the trendy Seongsu-dong Cafe Street.",
        "Read a book at Starfield Library in COEX and enjoy an aquatic adventure at the COEX Aquarium."
    ];

    getRecommendationButton.addEventListener('click', recommendSeoulSpot);

    function recommendSeoulSpot() {
        const randomIndex = Math.floor(Math.random() * seoulRecommendations.length);
        const recommendedSpot = seoulRecommendations[randomIndex];
        recommendationDisplay.innerHTML = `<p class="recommendation-text">${recommendedSpot}</p>`;
    }

    // Display an initial recommendation
    recommendSeoulSpot();
});
