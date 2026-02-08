document.addEventListener('DOMContentLoaded', () => {
    // --- Element References ---
    const getRecommendationButton = document.getElementById('get-recommendation-button');
    const recommendationDisplay = document.getElementById('recommendation-display'); // Used only on index.html
    const languageSwitcher = document.getElementById('language-switcher');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const loadingIndicator = document.getElementById('loading-indicator'); // Used only on index.html

    // --- Translations and Recommendations Data ---
    // Note: The 'description' is primarily for the static pages now,
    // but kept here as the source of truth.
    const translations = {
        en: {
            pageTitle: "Seoul Travel Recommendations",
            mainTitle: "Discover Seoul!",
            description: "Your personalized travel recommendation for exploring the vibrant city of Seoul.",
            initialRecommendationText: "Click the button below to get your recommendation!",
            recommendationButton: "Get My Seoul Recommendation",
            contactTitle: "Contact Us",
            contactDescription: "If you have any partnership inquiries or other questions, please fill out the form below.",
            formNameLabel: "Name:",
            formEmailLabel: "Email:",
            formCompanyLabel: "Company (Optional):",
            formMessageLabel: "Message:",
            formSubmitButton: "Submit Inquiry",
            // For static page redirection, only url is strictly needed here
            // but keeping full objects for consistency or future dynamic use
            recommendations: [
                { title: "Gyeongbokgung Palace & Bukchon Hanok Village", url: "gyeongbokgung.html", image: { src: "https://via.placeholder.com/600x300.png?text=Gyeongbokgung+Palace", alt: "Gyeongbokgung Palace" }, description: `<p>Step back in time...</p>` },
                { title: "Namsan Tower & Myeongdong", url: "namsantower.html", image: { src: "https://via.placeholder.com/600x300.png?text=Namsan+Tower+View", alt: "View from Namsan Tower" }, description: `<p>For the best panoramic views...</p>` },
                { title: "Hongdae & Ewha Womans University Area", url: "hongdae.html", image: { src: "https://via.placeholder.com/600x300.png?text=Hongdae+Street", alt: "Hongdae Street" }, description: `<p>Experience Seoul's vibrant youth culture...</p>` },
                { title: "Gangnam & COEX", url: "gangnam.html", image: { src: "https://via.placeholder.com/600x300.png?text=Gangnam+COEX", alt: "Gangnam COEX" }, description: `<p>Step into the modern, affluent side...</p>` },
                { title: "Insadong & Samcheongdong", url: "insadong.html", image: { src: "https://via.placeholder.com/600x300.png?text=Insadong+Culture", alt: "Insadong Cultural Street" }, description: `<p>Immerse yourself in traditional Korean culture...</p>` },
                { title: "Lotte World & Seokchon Lake", url: "lotteworld.html", image: { src: "https://via.placeholder.com/600x300.png?text=Lotte+World", alt: "Lotte World" }, description: `<p>For a day of thrilling entertainment...</p>` },
                { title: "Yeouido Hangang Park & Han River Cruise", url: "hangangpark.html", image: { src: "https://via.placeholder.com/600x300.png?text=Hangang+Park", alt: "Yeouido Hangang Park" }, description: `<p>Experience the iconic Han River...</p>` },
                { title: "Garosu-gil & Sinsa-dong", url: "garosugil.html", image: { src: "https://via.placeholder.com/600x300.png?text=Garosu-gil", alt: "Garosu-gil street" }, description: `<p>Discover the trendy and upscale streets...</p>` },
                { title: "Dongdaemun Design Plaza (DDP) & Dongdaemun Market", url: "ddp.html", image: { src: "https://via.placeholder.com/600x300.png?text=DDP", alt: "Dongdaemun Design Plaza" }, description: `<p>Explore the futuristic architecture...</p>` },
                { title: "Seongsu-dong Cafe Street & Ttukseom Hangang Park", url: "seongsudong.html", image: { src: "https://via.placeholder.com/600x300.png?text=Seongsu-dong", alt: "Seongsu-dong Cafe Street" }, description: `<p>Step into the industrial-chic neighborhood...</p>` }
            ]
        },
        ko: {
            pageTitle: "서울 여행지 추천",
            mainTitle: "서울을 발견하세요!",
            description: "서울의 활기찬 매력을 탐험할 당신만을 위한 여행지를 추천해 드립니다.",
            initialRecommendationText: "아래 버튼을 눌러 추천 여행지를 받아보세요!",
            recommendationButton: "서울 여행지 추천받기",
            contactTitle: "문의하기",
            contactDescription: "제휴 문의나 다른 질문이 있으시면 아래 양식을 작성해주세요.",
            formNameLabel: "이름:",
            formEmailLabel: "이메일:",
            formCompanyLabel: "회사명 (선택 사항):",
            formMessageLabel: "문의 내용:",
            formSubmitButton: "문의 제출",
            recommendations: [
                { title: "경복궁 & 북촌 한옥마을", url: "gyeongbokgung.html", image: { src: "https://via.placeholder.com/600x300.png?text=Gyeongbokgung+Palace", alt: "경복궁" }, description: `<p>조선 시대로 시간 여행을 떠나보세요...</p>` },
                { title: "남산타워 & 명동", url: "namsantower.html", image: { src: "https://via.placeholder.com/600x300.png?text=Namsan+Tower+View", alt: "남산타워에서 본 전경" }, description: `<p>서울의 가장 멋진 파노라마 뷰를 보려면...</p>` },
                { title: "홍대 & 이대 앞", url: "hongdae.html", image: { src: "https://via.placeholder.com/600x300.png?text=Hongdae+Street", alt: "홍대 거리" }, description: `<p>홍대에서 서울의 활기찬 젊음의 문화를...</p>` },
                { title: "강남 & 코엑스", url: "gangnam.html", image: { src: "https://via.placeholder.com/600x300.png?text=Gangnam+COEX", alt: "강남 코엑스" }, description: `<p>강남에서 서울의 현대적이고 부유한 면모를...</p>` },
                { title: "인사동 & 삼청동", url: "insadong.html", image: { src: "https://via.placeholder.com/600x300.png?text=Insadong+Culture", alt: "인사동 문화 거리" }, description: `<p>인사동에서 전통 한국 문화에 흠뻑...</p>` },
                { title: "롯데월드 & 석촌호수", url: "lotteworld.html", image: { src: "https://via.placeholder.com/600x300.png?text=Lotte+World", alt: "롯데월드" }, description: `<p>스릴 넘치는 하루를 위해...</p>` },
                { title: "여의도 한강 공원 & 한강 유람선", url: "hangangpark.html", image: { src: "https://via.placeholder.com/600x300.png?text=Hangang+Park", alt: "여의도 한강 공원" }, description: `<p>여의도 한강 공원을 방문하여...</p>` },
                { title: "가로수길 & 신사동", url: "garosugil.html", image: { src: "https://via.placeholder.com/600x300.png?text=Garosu-gil", alt: "가로수길" }, description: `<p>신사동 가로수길의 트렌디하고...</p>` },
                { title: "동대문디자인플라자(DDP) & 동대문 시장", url: "ddp.html", image: { src: "https://via.placeholder.com/600x300.png?text=DDP", alt: "동대문디자인플라자" }, description: `<p>자하 하디드가 설계한 서울의...</p>` },
                { title: "성수동 카페 거리 & 뚝섬 한강 공원", url: "seongsudong.html", image: { src: "https://via.placeholder.com/600x300.png?text=Seongsu-dong", alt: "성수동 카페 거리" }, description: `<p>서울의 "브루클린"이라고 불리는...</p>` }
            ]
        }
    };

    let currentLang = localStorage.getItem('lang') || 'ko';
    let isInitialClick = true; // Only for index.html context, to hide initial text

    // --- Language Switching ---
    function setLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang] && translations[currentLang][key]) { // Added null check for translations[currentLang]
                if (element.tagName === 'TITLE') {
                    document.title = translations[currentLang][key];
                } else if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email')) {
                    element.placeholder = translations[currentLang][key];
                } else if (element.tagName === 'LABEL') {
                    element.textContent = translations[currentLang][key];
                } else if (element.tagName === 'BUTTON' && element.type === 'submit') {
                    element.textContent = translations[currentLang][key];
                }
                else {
                    element.textContent = translations[currentLang][key];
                }
            }
        });
        localStorage.setItem('lang', currentLang);
        // On index.html, if initial text is showing, update it
        if (getRecommendationButton && recommendationDisplay && isInitialClick) {
             recommendationDisplay.querySelector('.recommendation-text').textContent = translations[currentLang].initialRecommendationText;
        }
    }

    if (languageSwitcher) { // Only add listener if element exists
        languageSwitcher.value = currentLang;
        languageSwitcher.addEventListener('change', (event) => setLanguage(event.target.value));
    }

    // --- Dark Mode Toggle ---
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    function applyDarkMode(mode) {
        if (mode) {
            document.body.classList.add('dark-mode');
            if (darkModeToggle) darkModeToggle.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            if (darkModeToggle) darkModeToggle.textContent = '🌙';
        }
        localStorage.setItem('darkMode', mode);
    }

    if (darkModeToggle) { // Only add listener if element exists
        darkModeToggle.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            applyDarkMode(isDarkMode);
        });
    }

    // --- Recommendation Logic (Only for index.html) ---
    if (getRecommendationButton) { // Only execute this block if on index.html
        // Hide recommendationDisplay immediately if not initial visit for index.html
        if (recommendationDisplay && !isInitialClick) {
            recommendationDisplay.style.display = 'none';
        }

        getRecommendationButton.addEventListener('click', () => {
            if (recommendationDisplay) { // Hide initial text if present
                recommendationDisplay.style.display = 'none';
            }

            if (loadingIndicator) loadingIndicator.style.display = 'block';

            setTimeout(() => {
                const recommendations = translations[currentLang].recommendations;
                if (!recommendations || recommendations.length === 0) {
                    if (loadingIndicator) loadingIndicator.style.display = 'none';
                    return;
                }

                const randomIndex = Math.floor(Math.random() * recommendations.length);
                const spot = recommendations[randomIndex];

                window.location.href = spot.url;
                
            }, 500); // Simulate loading time before redirect
        });
    }


    // --- Initialize ---
    setLanguage(currentLang);
    applyDarkMode(isDarkMode);

    // --- Back to Top Button Logic ---
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) { // Only add listener if element exists
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});