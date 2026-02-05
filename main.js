document.addEventListener('DOMContentLoaded', () => {
    const getRecommendationButton = document.getElementById('get-recommendation-button');
    const recommendationDisplay = document.getElementById('recommendation-display');
    const languageSwitcher = document.getElementById('language-switcher');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // --- Translations and Recommendations ---
    const translations = {
        en: {
            pageTitle: "Seoul Travel Recommendations",
            mainTitle: "Discover Seoul!",
            description: "Your personalized travel recommendation for exploring the vibrant city of Seoul.",
            initialRecommendationText: "Click the button below to get your recommendation!",
            recommendationButton: "Get My Seoul Recommendation",
            recommendations: [
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
            ]
        },
        ko: {
            pageTitle: "서울 여행지 추천",
            mainTitle: "서울을 발견하세요!",
            description: "서울의 활기찬 매력을 탐험할 당신만을 위한 여행지를 추천해 드립니다.",
            initialRecommendationText: "아래 버튼을 눌러 추천 여행지를 받아보세요!",
            recommendationButton: "서울 여행지 추천받기",
            recommendations: [
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
            ]
        }
    };

    // --- Language Switching ---
    let currentLang = localStorage.getItem('lang') || 'ko'; // Default to Korean

    function setLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                if (element.tagName === 'TITLE') {
                    document.title = translations[currentLang][key];
                } else {
                    element.textContent = translations[currentLang][key];
                }
            }
        });
        localStorage.setItem('lang', currentLang);
        // Update recommendation with new language
        recommendSeoulSpot(false); // Pass false to avoid generating a new random one immediately
    }

    languageSwitcher.value = currentLang; // Set initial value of switcher
    languageSwitcher.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    // --- Dark Mode Toggle ---
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    function applyDarkMode(mode) {
        if (mode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️'; // Sun icon for light mode
        } else {
            document.body.classList.remove('dark-mode');
            darkModeToggle.textContent = '🌙'; // Moon icon for dark mode
        }
        localStorage.setItem('darkMode', mode);
    }

    darkModeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        applyDarkMode(isDarkMode);
    });

    // --- Recommendation Logic ---
    function recommendSeoulSpot(generateNew = true) {
        const recommendations = translations[currentLang].recommendations;
        if (recommendations && recommendations.length > 0) {
            let recommendedSpot;
            if (generateNew) {
                const randomIndex = Math.floor(Math.random() * recommendations.length);
                recommendedSpot = recommendations[randomIndex];
            } else {
                // If not generating new, just display the initial text for the current language
                recommendedSpot = translations[currentLang].initialRecommendationText;
            }
            recommendationDisplay.innerHTML = `<p class="recommendation-text">${recommendedSpot}</p>`;
        }
    }

    // --- Initialize ---
    setLanguage(currentLang);
    applyDarkMode(isDarkMode);
    getRecommendationButton.addEventListener('click', () => recommendSeoulSpot(true)); // Ensure new recommendation on click
});
