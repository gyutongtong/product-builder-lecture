const lottoNumbersContainer = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');

const getNumberColor = (number) => {
    if (number <= 10) return '#fbc400';
    if (number <= 20) return '#69c8f2';
    if (number <= 30) return '#ff7272';
    if (number <= 40) return '#aaa';
    return '#b0d840';
};

// 인자로 받은 숫자 배열을 화면에 표시하는 함수
const displayNumbers = (numbers) => {
    lottoNumbersContainer.innerHTML = ''; // 기존 숫자들을 초기화
    numbers.forEach((number, index) => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('lotto-number');
        numberElement.style.backgroundColor = getNumberColor(number);
        numberElement.style.animationDelay = `${index * 0.1}s`;
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    });
};

// 새로운 로또 번호를 생성하는 함수
const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    // 생성된 번호를 localStorage에 문자열 형태로 저장
    localStorage.setItem('lottoNumbers', JSON.stringify(sortedNumbers));
    
    // 화면에 번호 표시
    displayNumbers(sortedNumbers);
};

// '번호 생성' 버튼 클릭 이벤트 리스너
generateBtn.addEventListener('click', generateLottoNumbers);

// --- 페이지 최초 로드 시 실행되는 로직 ---
document.addEventListener('DOMContentLoaded', () => {
    // localStorage에서 저장된 번호를 불러옴
    const savedNumbersJSON = localStorage.getItem('lottoNumbers');

    if (savedNumbersJSON) {
        // 저장된 번호가 있으면, JSON 문자열을 배열로 변환하여 화면에 표시
        const savedNumbers = JSON.parse(savedNumbersJSON);
        displayNumbers(savedNumbers);
    } else {
        // 저장된 번호가 없으면, 새로운 번호를 생성
        generateLottoNumbers();
    }
});