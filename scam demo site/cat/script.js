// 카운트다운 타이머 기능
function startCountdown() {
    let hours = 5;
    let minutes = 59;
    let seconds = 59;
    
    const countdownInterval = setInterval(() => {
        seconds--;
        
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            
            if (minutes < 0) {
                minutes = 59;
                hours--;
                
                if (hours < 0) {
                    // 타이머가 0에 도달하면 다시 시작
                    hours = 5;
                    minutes = 59;
                    seconds = 59;
                }
            }
        }
        
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// 사기 사이트 교육 콘텐츠
const scamIndicators = [
    {
        title: "비현실적인 효과 약속",
        description: "이 사이트는 '단 7일 만에 눈에 띄는 변화'와 '모발이 최대 300% 더 빠르게 자란다'는 비현실적인 효과를 약속합니다. 의학적으로 입증된 탈모 치료제도 이런 빠른 효과를 보장하지 않습니다.",
        examples: ["단 <span class='highlight'>7일</span> 만에 눈에 띄는 변화!", "모발이 <span class='highlight'>최대 300% 더 빠르게</span> 자라납니다!"]
    },
    {
        title: "가짜 희소성과 긴급성 조장",
        description: "사기 사이트는 '한정 수량', '특별 할인 종료까지 남은 시간' 등으로 소비자가 충동적으로 구매하도록 유도합니다. 이런 카운트다운 타이머는 실제로 끝나지 않고 계속 재설정되는 경우가 많습니다.",
        examples: ["한정 수량 판매 중!", "특별 할인 종료까지 남은 시간: 05:59:59"]
    },
    {
        title: "과장된 할인율",
        description: "원래 가격을 부풀려서 할인율을 과장하는 것은 흔한 사기 수법입니다. 이 사이트에서는 3개월 패키지를 '₩450,000'에서 '₩225,000'으로 50% 할인한다고 주장합니다.",
        examples: ["<span class='original'>₩450,000</span> <span class='discounted'>₩225,000</span>", "<span class='highlight'>50% 할인</span>"]
    },
    {
        title: "검증 불가능한 과학적 주장",
        description: "이 사이트는 '특허받은 나노 기술', 'NASA에서 개발한 특수 미네랄 복합체' 등 검증하기 어려운 과학적 용어를 사용합니다. 실제 의학 제품은 구체적인 작용 원리와 임상 연구 결과를 제공합니다.",
        examples: ["특허받은 나노 기술로 개발된 혁신적인 탈모 치료제", "NASA에서 개발한 특수 미네랄 복합체"]
    },
    {
        title: "비현실적인 전후 사진",
        description: "극적인 변화를 보여주는 전후 사진은 조작되었거나 다른 치료법의 결과일 가능성이 높습니다. 실제 의학 제품은 임상 시험 결과와 함께 현실적인 기대치를 제시합니다.",
        examples: ["단 3주 만에 대머리가 사라졌어요!", "20년간 탈모로 고생했는데, 헤어그로 덕분에 20대 시절의 머리카락을 되찾았어요!"]
    },
    {
        title: "과장된 보증과 환불 정책",
        description: "사기 사이트는 '100% 만족 보장', '아무 질문 없이, 아무 조건 없이 환불'과 같은 과장된 보증을 제공합니다. 실제로 이런 환불을 받기는 매우 어렵거나 불가능한 경우가 많습니다.",
        examples: ["100% 만족 보장", "60일 이내에 효과가 없으면 전액 환불해 드립니다. 아무 질문 없이, 아무 조건 없이!"]
    }
];

// 교육 콘텐츠 생성 함수
function generateEducationContent() {
    const educationContent = document.getElementById('education-content');
    
    scamIndicators.forEach(indicator => {
        const indicatorElement = document.createElement('div');
        indicatorElement.className = 'scam-indicator';
        
        indicatorElement.innerHTML = `
            <h3>${indicator.title}</h3>
            <p>${indicator.description}</p>
            <div class="examples">
                <h4>이 사이트의 예시:</h4>
                ${indicator.examples.map(example => `<div class="highlight-scam">${example}</div>`).join('')}
            </div>
        `;
        
        educationContent.appendChild(indicatorElement);
    });
    
    // 퀴즈 섹션 추가
    const quizSection = document.createElement('div');
    quizSection.className = 'quiz-section';
    quizSection.innerHTML = `
        <h3>사기 사이트 식별 퀴즈</h3>
        <p>이 사이트에서 발견한 사기 징후를 모두 선택하세요:</p>
        <div class="quiz-options">
            ${scamIndicators.map((indicator, index) => `
                <div class="quiz-option">
                    <input type="checkbox" id="option-${index}" name="scam-indicator">
                    <label for="option-${index}">${indicator.title}</label>
                </div>
            `).join('')}
        </div>
        <button id="check-answers">정답 확인하기</button>
        <div id="quiz-result" class="hidden"></div>
    `;
    
    educationContent.appendChild(quizSection);
    
    // 퀴즈 정답 확인 기능
    document.getElementById('check-answers').addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('input[name="scam-indicator"]');
        let allChecked = true;
        
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                allChecked = false;
            }
        });
        
        const quizResult = document.getElementById('quiz-result');
        quizResult.classList.remove('hidden');
        
        if (allChecked) {
            quizResult.innerHTML = `
                <div class="success-message">
                    <h4>정답입니다! 👏</h4>
                    <p>모든 사기 징후를 올바르게 식별했습니다. 이제 비슷한 사기 사이트를 만났을 때 더 잘 인식할 수 있을 것입니다.</p>
                </div>
            `;
        } else {
            quizResult.innerHTML = `
                <div class="error-message">
                    <h4>다시 시도해보세요!</h4>
                    <p>이 사이트에는 위에 나열된 모든 사기 징후가 포함되어 있습니다. 놓친 항목이 있는지 다시 확인해보세요.</p>
                </div>
            `;
        }
    });
}

// 사기 요소 하이라이트 기능
function setupScamHighlighter() {
    const highlightButton = document.createElement('button');
    highlightButton.id = 'highlight-scams';
    highlightButton.textContent = '사기 요소 하이라이트';
    highlightButton.style.marginTop = '20px';
    highlightButton.style.padding = '10px 20px';
    highlightButton.style.backgroundColor = '#4a90e2';
    highlightButton.style.color = 'white';
    highlightButton.style.border = 'none';
    highlightButton.style.borderRadius = '5px';
    highlightButton.style.cursor = 'pointer';
    
    document.getElementById('education-content').appendChild(highlightButton);
    
    let highlighted = false;
    
    highlightButton.addEventListener('click', () => {
        if (!highlighted) {
            // 비현실적인 효과 약속 하이라이트
            document.querySelectorAll('.highlight').forEach(el => {
                el.style.backgroundColor = 'rgba(231, 76, 60, 0.3)';
                el.style.padding = '2px 5px';
                el.style.borderRadius = '3px';
            });
            
            // 가짜 희소성 하이라이트
            document.querySelector('.limited').style.backgroundColor = 'rgba(231, 76, 60, 0.3)';
            document.querySelector('.countdown').style.border = '3px solid #e74c3c';
            
            // 과장된 할인율 하이라이트
            document.querySelectorAll('.original, .discounted, .savings').forEach(el => {
                el.style.backgroundColor = 'rgba(231, 76, 60, 0.3)';
            });
            
            // 과장된 보증 하이라이트
            document.querySelector('.guarantee').style.border = '3px solid #e74c3c';
            
            highlightButton.textContent = '하이라이트 제거';
            highlighted = true;
        } else {
            // 하이라이트 제거
            document.querySelectorAll('.highlight').forEach(el => {
                el.style.backgroundColor = '';
                el.style.padding = '';
                el.style.borderRadius = '';
            });
            
            document.querySelector('.limited').style.backgroundColor = '';
            document.querySelector('.countdown').style.border = '';
            
            document.querySelectorAll('.original, .discounted, .savings').forEach(el => {
                el.style.backgroundColor = '';
            });
            
            document.querySelector('.guarantee').style.border = '';
            
            highlightButton.textContent = '사기 요소 하이라이트';
            highlighted = false;
        }
    });
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    // 카운트다운 타이머 시작
    startCountdown();
    
    // 교육 섹션 토글 버튼
    const showEducationButton = document.getElementById('show-education');
    const educationSection = document.getElementById('education');
    
    showEducationButton.addEventListener('click', () => {
        educationSection.classList.toggle('hidden');
        
        if (!educationSection.classList.contains('hidden')) {
            educationSection.scrollIntoView({ behavior: 'smooth' });
            showEducationButton.textContent = '교육 섹션 숨기기';
        } else {
            showEducationButton.textContent = '이것은 사기 사이트 예시입니다. 클릭하여 교육 내용 보기';
        }
    });
    
    // 교육 콘텐츠 생성
    generateEducationContent();
    
    // 사기 요소 하이라이트 기능 설정
    setupScamHighlighter();
    
    // 주문 버튼 클릭 시 경고
    document.querySelectorAll('.order-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('이것은 교육용 데모 사이트입니다. 실제 제품이나 서비스를 판매하지 않습니다.');
        });
    });
});