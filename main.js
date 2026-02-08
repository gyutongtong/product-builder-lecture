document.addEventListener('DOMContentLoaded', () => {
    const getRecommendationButton = document.getElementById('get-recommendation-button');
    const recommendationDisplay = document.getElementById('recommendation-display');
    const recommendationDetailsContainer = document.getElementById('recommendation-details');
    const languageSwitcher = document.getElementById('language-switcher');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

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
            recommendations: [
                {
                    title: "Gyeongbokgung Palace & Bukchon Hanok Village",
                    image: { src: "https://via.placeholder.com/600x300.png?text=Gyeongbokgung+Palace", alt: "Gyeongbokgung Palace" },
                    description: `
                        <p>Step back in time to the Joseon Dynasty. Start your day at Gyeongbokgung Palace, the largest of the Five Grand Palaces built during this era. Witness the Royal Guard Changing Ceremony, a fascinating reenactment. The architecture and vast grounds offer a glimpse into Korea's royal history.</p>
                        <p>Afterward, wander through the nearby Bukchon Hanok Village. This charming residential area is home to hundreds of traditional Korean houses, called 'hanok'. The winding alleys and beautifully preserved architecture make it a perfect spot for photography. You can even rent a 'hanbok' (traditional Korean clothing) to fully immerse yourself in the experience. Finish your day with a cup of traditional tea at a local teahouse overlooking the village.</p>
                    `
                },
                {
                    title: "Namsan Tower & Myeongdong",
                    image: { src: "https://via.placeholder.com/600x300.png?text=Namsan+Tower+View", alt: "View from Namsan Tower" },
                    description: `
                        <p>For the best panoramic views of Seoul, head to Namsan Tower (N Seoul Tower). A cable car ride up the mountain offers stunning scenery. At the top, you'll find an observation deck, restaurants, and the famous 'love locks' fence, where couples leave padlocks symbolizing their eternal love.</p>
                        <p>Once you've descended, dive into the bustling energy of Myeongdong. This is Seoul's primary shopping district, packed with international fashion brands, luxury department stores, and countless Korean cosmetics shops. But it's not just about shopping; as evening approaches, the streets fill with food carts offering a dizzying array of delicious Korean street food, from spicy 'tteokbokki' to sweet 'hotteok'.</p>
                    `
                },
                {
                    title: "Hongdae & Ewha Womans University Area",
                    image: { src: "https://via.placeholder.com/600x300.png?text=Hongdae+Street", alt: "Hongdae Street" },
                    description: `
                        <p>Experience Seoul's vibrant youth culture in Hongdae, known for its urban arts and indie music scene. The streets are alive with buskers, street artists, and trendy boutiques. Explore unique cafes, art galleries, and enjoy live performances in the evenings. It's a fantastic spot for people-watching and soaking in the dynamic atmosphere.</p>
                        <p>Just a short distance away is the Ewha Womans University area, another popular spot for fashion and beauty shopping, especially among students. Discover charming cafes, affordable eateries, and a wide selection of cosmetic stores. The university's beautiful architecture, particularly its ECC (Ewha Campus Complex), is also worth a visit.</p>
                    `
                },
                {
                    title: "Gangnam & COEX",
                    image: { src: "https://via.placeholder.com/600x300.png?text=Gangnam+COEX", alt: "Gangnam COEX" },
                    description: `
                        <p>Step into the modern, affluent side of Seoul in Gangnam. Famous for its upscale shopping, entertainment, and vibrant nightlife, Gangnam is a symbol of South Korea's contemporary culture. Walk along Garosu-gil for boutique shopping and chic cafes, or visit the COEX complex, a massive underground mall.</p>
                        <p>Inside COEX, don't miss the Starfield Library, an iconic public library with towering bookshelves that's a popular photo spot. You can also explore the COEX Aquarium, home to a diverse range of marine life. The area is also well-known for its K-Pop attractions and a vibrant culinary scene with countless restaurants and bars.</p>
                    `
                },
                {
                    title: "Insadong & Samcheongdong",
                    image: { src: "https://via.placeholder.com/600x300.png?text=Insadong+Culture", alt: "Insadong Cultural Street" },
                    description: `
                        <p>Immerse yourself in traditional Korean culture in Insadong. This charming neighborhood is famous for its antique shops, traditional tea houses, art galleries, and craft stores. You can find unique souvenirs, try traditional Korean snacks, and experience a peaceful atmosphere away from the city's hustle and bustle.</p>
                        <p>Adjacent to Insadong is Samcheongdong, a picturesque area blending traditional hanok houses with modern cafes and small boutiques. The tree-lined streets and artistic vibe make it a delightful place for a leisurely stroll. You can explore various art museums, enjoy a cup of coffee with a view, and discover hidden gems around every corner.</p>
                    `
                }
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
                {
                    title: "경복궁 & 북촌 한옥마을",
                    image: { src: "https://via.placeholder.com/600x300.png?text=Gyeongbokgung+Palace", alt: "경복궁" },
                    description: `
                        <p>조선 시대로 시간 여행을 떠나보세요. 이 시대에 지어진 5대 궁궐 중 가장 큰 경복궁에서 하루를 시작하세요. 흥미로운 재현 행사인 왕궁 수문장 교대 의식을 관람할 수 있습니다. 웅장한 건축물과 넓은 경내는 한국의 왕실 역사를 엿볼 수 있게 해줍니다.</p>
                        <p>그 후에는 인근의 북촌 한옥마을을 거닐어 보세요. 이 매력적인 주거 지역에는 수백 채의 전통 한옥이 자리 잡고 있습니다. 구불구불한 골목길과 아름답게 보존된 건축물은 사진 촬영에 완벽한 장소입니다. 한복을 대여하여 그 경험에 완전히 몰입할 수도 있습니다. 마을이 내려다보이는 전통 찻집에서 하루를 마무리하세요.</p>
                    `
                },
                {
                    title: "남산타워 & 명동",
                    image: { src: "https://via.placeholder.com/600x300.png?text=Namsan+Tower+View", alt: "남산타워에서 본 전경" },
                    description: `
                        <p>서울의 가장 멋진 파노라마 뷰를 보려면 남산타워(N서울타워)로 향하세요. 케이블카를 타고 산을 오르면 멋진 풍경이 펼쳐집니다. 정상에는 전망대, 레스토랑, 그리고 연인들이 영원한 사랑을 상징하는 자물쇠를 남기는 유명한 '사랑의 자물쇠' 난간이 있습니다.</p>
                        <p>내려온 후에는 명동의 활기찬 에너지에 빠져보세요. 이곳은 서울의 주요 쇼핑 지역으로, 글로벌 패션 브랜드, 고급 백화점, 수많은 한국 화장품 가게들로 가득합니다. 하지만 쇼핑만이 전부는 아닙니다. 저녁이 다가오면 거리에는 매콤한 떡볶이부터 달콤한 호떡까지, 어지러울 정도로 다양한 한국 길거리 음식을 파는 포장마차들로 가득 찹니다.</p>
                    `
                },
                {
                    title: "홍대 & 이대 앞",
                    image: { src: "https://via.placeholder.com/600x300.png?text=Hongdae+Street", alt: "홍대 거리" },
                    description: `
                        <p>홍대에서 서울의 활기찬 젊음의 문화를 경험해보세요. 홍대는 도시 예술과 인디 음악으로 유명합니다. 길거리 공연가, 거리 예술가, 트렌디한 부티크들로 거리가 활기 넘칩니다. 독특한 카페, 미술관을 탐험하고 저녁에는 라이브 공연을 즐겨보세요. 사람들을 구경하고 역동적인 분위기에 흠뻑 빠져들기에 환상적인 장소입니다.</p>
                        <p>이대 앞은 홍대에서 가까운 곳으로, 특히 학생들 사이에서 패션 및 미용 쇼핑으로 인기 있는 또 다른 장소입니다. 매력적인 카페, 저렴한 식당, 다양한 화장품 가게를 발견할 수 있습니다. 특히 ECC(이화캠퍼스복합단지)를 포함한 이화여자대학교의 아름다운 건축물도 방문할 가치가 있습니다.</p>
                    `
                },
                {
                    title: "강남 & 코엑스",
                    image: { src: "https://via.placeholder.com/600x300.png?text=Gangnam+COEX", alt: "강남 코엑스" },
                    description: `
                        <p>강남에서 서울의 현대적이고 부유한 면모를 경험해보세요. 고급 쇼핑, 엔터테인먼트, 활기찬 밤문화로 유명한 강남은 한국 현대 문화의 상징입니다. 가로수길을 따라 부티크 쇼핑과 세련된 카페를 즐기거나, 거대한 지하 쇼핑몰인 코엑스 단지를 방문해보세요.</p>
                        <p>코엑스 내에서는 높이 솟은 책장으로 유명한 스타필드 도서관을 놓치지 마세요. 다양한 해양 생물이 서식하는 코엑스 아쿠아리움도 탐험할 수 있습니다. 이 지역은 또한 K-Pop 명소와 수많은 레스토랑과 바가 있는 활기찬 요리 환경으로도 잘 알려져 있습니다.</p>
                    `
                },
                {
                    title: "인사동 & 삼청동",
                    image: { src: "https://via.placeholder.com/600x300.png?text=Insadong+Culture", alt: "인사동 문화 거리" },
                    description: `
                        <p>인사동에서 전통 한국 문화에 흠뻑 빠져보세요. 이 매력적인 동네는 골동품 상점, 전통 찻집, 미술관, 공예품점으로 유명합니다. 독특한 기념품을 찾고, 전통 한국 간식을 맛보고, 도시의 번잡함에서 벗어나 평화로운 분위기를 경험할 수 있습니다.</p>
                        <p>인사동에 인접한 삼청동은 전통 한옥과 현대적인 카페, 작은 부티크가 조화를 이루는 그림 같은 지역입니다. 가로수가 늘어선 거리와 예술적인 분위기는 한가롭게 산책하기에 좋은 장소입니다. 다양한 미술관을 둘러보고, 경치를 감상하며 커피 한 잔을 즐기고, 곳곳에 숨겨진 보석 같은 곳을 발견할 수 있습니다.</p>
                    `
                }
            ]
        }
    };

    let currentLang = localStorage.getItem('lang') || 'ko';
    let isInitialClick = true;
    const loadingIndicator = document.getElementById('loading-indicator'); // Get loading indicator

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
        if (!isInitialClick) {
            recommendationDetailsContainer.style.display = 'none';
            recommendationDisplay.style.display = 'flex';
        }
    }

    languageSwitcher.value = currentLang;
    languageSwitcher.addEventListener('change', (event) => setLanguage(event.target.value));

    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    function applyDarkMode(mode) {
        if (mode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            darkModeToggle.textContent = '🌙';
        }
        localStorage.setItem('darkMode', mode);
    }

    darkModeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        applyDarkMode(isDarkMode);
    });

    function recommendSeoulSpot() {
        if (isInitialClick) {
            recommendationDisplay.style.display = 'none';
            isInitialClick = false;
        }

        loadingIndicator.style.display = 'block'; // Show loading indicator
        recommendationDetailsContainer.style.display = 'none'; // Hide details while loading

        setTimeout(() => { // Simulate loading time
            const recommendations = translations[currentLang].recommendations;
            if (!recommendations || recommendations.length === 0) {
                loadingIndicator.style.display = 'none';
                return;
            }

            const randomIndex = Math.floor(Math.random() * recommendations.length);
            const spot = recommendations[randomIndex];

            recommendationDetailsContainer.innerHTML = `
                <h3>${spot.title}</h3>
                <img src="${spot.image.src}" alt="${spot.image.alt}" class="placeholder-image">
                <div class="description">
                    ${spot.description}
                </div>
            `;
            loadingIndicator.style.display = 'none'; // Hide loading indicator
            recommendationDetailsContainer.style.display = 'block'; // Show details
        }, 500); // 500ms delay
    }

    setLanguage(currentLang);
    applyDarkMode(isDarkMode);
    getRecommendationButton.addEventListener('click', recommendSeoulSpot);

    // --- Back to Top Button Logic ---
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to the top
        });
    });
});