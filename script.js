const questions = [
  {
    category: "01 · 경험",
    title: "프로그래밍 경험이 어느 정도인가요?",
    description: "현재 자신의 경험과 가장 가까운 항목을 골라 주세요.",
    options: [
      { text: "프로그래밍을 전혀 해본 적이 없어요", scores: { Python: 3, JavaScript: 1, Scratch: 3 } },
      { text: "기초 문법이나 간단한 코드를 배워봤어요", scores: { Python: 2, JavaScript: 2, Java: 1 } },
      { text: "직접 프로그램이나 프로젝트를 만들어봤어요", scores: { JavaScript: 1, Python: 1, Java: 1, CSharp: 1 } },
      { text: "여러 프로그래밍 언어를 사용해 봤어요", scores: { Cpp: 1, Java: 1, TypeScript: 1, Kotlin: 1 } }
    ]
  },
  {
    category: "02 · 목표",
    title: "무엇을 만들어 보고 싶나요?",
    description: "가장 흥미로운 목표 하나를 선택해 주세요.",
    options: [
      { text: "인공지능, 챗봇, 데이터 분석", scores: { Python: 5, R: 2 } },
      { text: "웹사이트", scores: { JavaScript: 5, TypeScript: 3, Python: 1 } },
      { text: "게임", scores: { CSharp: 4, Cpp: 3, JavaScript: 1 } },
      { text: "모바일 어플", scores: { Kotlin: 4, Swift: 4, Java: 2 } },
      { text: "컴퓨터 작업 자동화나 작은 프로그램", scores: { Python: 4, JavaScript: 1 } },
      { text: "운영체제나 고성능 프로그램", scores: { Cpp: 5, Rust: 4, C: 3 } }
    ]
  },
  {
    category: "03 · 관심분야",
    title: "어떤 분야가 가장 끌리나요?",
    description: "아직 잘 모르겠다면 가장 궁금한 분야를 선택해도 좋습니다.",
    options: [
      { text: "AI와 머신러닝", scores: { Python: 5, R: 1 } },
      { text: "웹 디자인과 웹 기능", scores: { JavaScript: 4, TypeScript: 3 } },
      { text: "게임과 3D 그래픽", scores: { CSharp: 3, Cpp: 4 } },
      { text: "앱과 서비스 개발", scores: { Kotlin: 3, Swift: 3, Java: 2 } },
      { text: "데이터와 통계", scores: { Python: 3, R: 4, SQL: 3 } },
      { text: "분야를 아직 정하지 못했어요", scores: { Python: 2, JavaScript: 2 } }
    ]
  },
  {
    category: "04 · 학습순서",
    title: "처음 배울 때 무엇을 가장 중요하게 생각하나요?",
    description: "학습할 때 중요하게 생각하는 기준을 골라 주세요.",
    options: [
      { text: "비교적 쉽고 시작하기 편한 것", scores: { Python: 4, JavaScript: 2 } },
      { text: "배운 내용을 바로 눈으로 확인하는 것", scores: { JavaScript: 3, Python: 2, Scratch: 3 } },
      { text: "기초부터 체계적으로 이해하는 것", scores: { Java: 3, C: 2, Python: 1 } },
      { text: "어렵더라도 세부 원리를 깊게 배우는 것", scores: { Cpp: 3, Rust: 3, C: 2 } }
    ]
  },
  {
    category: "05 · 결과",
    title: "어떤 결과물을 더 선호하나요?",
    description: "완성했을 때 가장 뿌듯할 것 같은 것을 골라 주세요.",
    options: [
      { text: "내가 직접 만든 웹사이트", scores: { JavaScript: 4, TypeScript: 2 } },
      { text: "내가 직접만든 예측, 계산 등 프로그램", scores: { Python: 4, R: 2 } },
      { text: "게임과 같은 컨텐츠", scores: { CSharp: 4, Cpp: 2, JavaScript: 1 } },
      { text: "나의 스마트폰에서 실행되는 어플", scores: { Kotlin: 3, Swift: 3, Java: 1 } },
      { text: "도우미 시스템 프로그램", scores: { Rust: 4, Cpp: 4, C: 3 } }
    ]
  },
  {
    category: "06 · 개발환경",
    title: "주로 어디에서 프로그램을 사용하고 싶나요?",
    description: "가장 자주 사용할 것 같은 환경을 선택해 주세요.",
    options: [
      { text: "웹 브라우저(구글, 마이크로소프트 엣지 등등)", scores: { JavaScript: 4, TypeScript: 2 } },
      { text: "컴퓨터나 노트북", scores: { Python: 2, CSharp: 3, Java: 2 } },
      { text: "스마트폰(안드로이드)", scores: { Kotlin: 4, Java: 2 } },
      { text: "아이폰이나 아이패드", scores: { Swift: 5 } },
      { text: "노상관", scores: { Python: 2, Java: 2, JavaScript: 1 } }
    ]
  },
  {
    category: "07 · 학습목표",
    title: "언어를 배워서 얻고 싶은 것은 무엇인가요?",
    description: "가장 중요한 목적 하나를 골라 주세요.",
    options: [
      { text: "학교 과제나 개인 프로젝트", scores: { Python: 3, JavaScript: 2, Java: 1 } },
      { text: "취업이나 실무에서 활용하기", scores: { JavaScript: 2, TypeScript: 2, Python: 2, Java: 2, SQL: 2 } },
      { text: "창업이나 서비스 만들기", scores: { JavaScript: 3, TypeScript: 2, Python: 2 } },
      { text: "컴퓨터 과학과 프로그래밍 이해", scores: { C: 3, Cpp: 3, Java: 2, Rust: 2 } },
      { text: "취미로 재미있는 것을 만들기", scores: { Python: 2, JavaScript: 2, CSharp: 2 } }
    ]
  },
  {
    category: "08 · 작업방식",
    title: "어떤 작업 방식이 더 마음에 드나요?",
    description: "평소 선호하는 방식에 가까운 것을 골라 주세요.",
    options: [
      { text: "짧고 빠르게 결과를 만들기", scores: { Python: 4, JavaScript: 2 } },
      { text: "화면속 인터페이스를 이용한 상호작용 오브젝트 만들기", scores: { JavaScript: 4, TypeScript: 2 } },
      { text: "큰 프로그램 만들기", scores: { Java: 3, CSharp: 2, TypeScript: 2 } },
      { text: "성능과 메모리 같은 세부 사항 다루기", scores: { Cpp: 4, Rust: 4, C: 3 } },
      { text: "데이터를 정리하고 의미를 찾기", scores: { Python: 3, R: 3, SQL: 3 } }
    ]
  },
  {
    category: "09 · 지금 끌리는 것",
    title: "지금 가장 배우고 싶은 것은 무엇인가요?",
    description: "마지막 질문이에요. 앞으로의 학습 방향을 골라 주세요.",
    options: [
      { text: "처음부터 차근차근 프로그래밍 기초", scores: { Python: 3, JavaScript: 2, Scratch: 2 } },
      { text: "웹사이트를 직접 만들어 인터넷에 공개하기", scores: { JavaScript: 4, TypeScript: 2 } },
      { text: "AI 모델이나 데이터 프로젝트 만들기", scores: { Python: 5 } },
      { text: "게임 또는 모바일 앱 출시하기", scores: { CSharp: 2, Kotlin: 2, Swift: 2 } },
      { text: "성능 좋은 프로그램과 시스템 개발", scores: { Rust: 3, Cpp: 3, C: 2 } }
    ]
  }
];

const languageInfo = {
  Python: { name: "Python", tagline: "AI · 데이터 분석 · 자동화", reason: "읽기 쉬운 문법과 다양한 라이브러리가 장점이에요. AI, 데이터 분석, 자동화 프로젝트를 시작할 때 특히 유용해요.", next: "기초 문법 → 작은 자동화 프로그램 → pandas 또는 scikit-learn" },
  JavaScript: { name: "JavaScript", tagline: "웹사이트 · 웹 애플리케이션", reason: "브라우저에서 바로 실행할 수 있고, 버튼이나 화면의 상호작용을 만들기 좋아요. 웹 개발 입문에 잘 어울려요.", next: "HTML/CSS 기초 → JavaScript 문법 → 작은 웹 프로젝트" },
  TypeScript: { name: "TypeScript", tagline: "규모 있는 웹 애플리케이션", reason: "JavaScript에 타입 시스템을 더해 코드의 실수를 줄이고 프로젝트를 관리하기 쉽게 도와줘요. JavaScript 기초를 익힌 뒤 배우기 좋아요.", next: "JavaScript 기초 → 타입과 인터페이스 → 웹 프로젝트" },
  Java: { name: "Java", tagline: "백엔드 · 기업용 소프트웨어 · Android 기초", reason: "객체지향 프로그래밍을 체계적으로 익히기 좋고 다양한 업무 시스템에서 활용돼요.", next: "문법과 객체지향 → 컬렉션 → 작은 애플리케이션" },
  CSharp: { name: "C#", tagline: "Unity 게임 · Windows 앱", reason: "Unity 게임 개발과 .NET 기반 프로그램 제작에 활용할 수 있어요. 게임을 직접 만들어 보고 싶다면 좋은 선택이에요.", next: "기초 문법 → 객체지향 → Unity로 작은 게임 제작" },
  Cpp: { name: "C++", tagline: "고성능 프로그램 · 게임 엔진", reason: "성능을 세밀하게 다룰 수 있어 게임 엔진이나 시스템 소프트웨어 등에서 사용돼요. 기초 개념을 꼼꼼히 익히는 것이 중요해요.", next: "C++ 기초 → 자료구조 → 작은 성능 중심 프로젝트" },
  Kotlin: { name: "Kotlin", tagline: "Android 앱 개발", reason: "Android 앱 개발에 널리 사용되며 간결한 문법과 안전성 기능을 제공해요.", next: "Kotlin 기초 → Android Studio → 간단한 앱 제작" },
  Swift: { name: "Swift", tagline: "iPhone · iPad · Apple 앱", reason: "Apple 플랫폼 앱을 만드는 데 적합하고, 현대적인 문법과 안전성 기능을 갖추고 있어요.", next: "Swift 기초 → SwiftUI → 간단한 iOS 앱 제작" },
  Rust: { name: "Rust", tagline: "시스템 개발 · 안전성과 성능", reason: "메모리 안전성과 성능을 중요하게 생각하는 시스템 개발에 잘 맞아요. 입문자는 기초 개념을 먼저 익히면 좋아요.", next: "기초 문법 → 소유권 개념 → 작은 CLI 도구" },
  C: { name: "C", tagline: "컴퓨터 구조 · 임베디드 · 시스템 기초", reason: "메모리와 컴퓨터가 작동하는 방식을 이해하는 데 도움이 돼요. 세부 원리를 배우고 싶은 학습자에게 적합해요.", next: "기초 문법 → 포인터와 메모리 → 작은 시스템 프로그램" },
  R: { name: "R", tagline: "통계 · 데이터 시각화", reason: "통계 분석과 데이터 시각화에 특화된 도구와 패키지가 풍부해요.", next: "R 기초 → 데이터 처리 → 통계 분석과 시각화" },
  SQL: { name: "SQL", tagline: "데이터베이스 · 데이터 조회", reason: "데이터베이스에서 필요한 정보를 조회하고 관리하는 데 필수적인 언어예요. 다른 언어와 함께 배우면 특히 유용해요.", next: "SELECT와 WHERE → JOIN → 작은 데이터베이스 실습" },
  Scratch: { name: "Scratch", tagline: "블록 코딩 · 프로그래밍 사고력", reason: "코드를 직접 입력하는 대신 블록을 조합해 순서, 조건, 반복 같은 기초 개념을 익힐 수 있어요.", next: "순서와 반복 → 조건문 → 간단한 게임 만들기" }
};

const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const result = document.querySelector("#result");
const optionsEl = document.querySelector("#options");
const titleEl = document.querySelector("#question-title");
const descriptionEl = document.querySelector("#question-description");
const categoryEl = document.querySelector("#question-category");
const countEl = document.querySelector("#question-count");
const percentEl = document.querySelector("#progress-percent");
const progressBar = document.querySelector("#progress-bar");
const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const answerHint = document.querySelector("#answer-hint");
let current = 0;
let answers = Array(questions.length).fill(null);
let finalResults = [];

document.querySelector("#start-btn").addEventListener("click", () => {
  intro.classList.add("hidden");
  result.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderQuestion();
});
nextBtn.addEventListener("click", () => {
  if (answers[current] === null) return;
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResults();
  }
});
backBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
});
document.querySelector("#restart-btn").addEventListener("click", restart);
document.querySelector("#copy-btn").addEventListener("click", async () => {
  const text = "CodeCompass 추천 결과\n" + finalResults.map((r, i) => `${i + 1}. ${r.info.name} — ${r.info.tagline}`).join("\n");
  const btn = document.querySelector("#copy-btn");
  try {
    await navigator.clipboard.writeText(text);
    btn.textContent = "복사 완료!";
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    btn.textContent = "복사 완료!";
  }
  setTimeout(() => { btn.textContent = "결과 복사하기"; }, 1800);
});

function renderQuestion() {
  const q = questions[current];
  const number = current + 1;
  const percent = Math.round((number / questions.length) * 100);
  countEl.textContent = `질문 ${number} / ${questions.length}`;
  percentEl.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  categoryEl.textContent = q.category;
  titleEl.textContent = q.title;
  descriptionEl.textContent = q.description;
  backBtn.disabled = current === 0;
  nextBtn.textContent = current === questions.length - 1 ? "결과 보기 →" : "다음 →";
  nextBtn.disabled = answers[current] === null;
  answerHint.textContent = answers[current] === null ? "답변을 선택해 주세요." : "답변이 선택되었어요.";

  optionsEl.innerHTML = "";
  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option" + (answers[current] === index ? " selected" : "");
    button.setAttribute("aria-pressed", answers[current] === index ? "true" : "false");
    const mark = document.createElement("span");
    mark.className = "option-mark";
    mark.textContent = "✓";
    const label = document.createElement("span");
    label.textContent = option.text;
    button.append(mark, label);
    button.addEventListener("click", () => {
      answers[current] = index;
      renderQuestion();
    });
    optionsEl.appendChild(button);
  });
}

function showResults() {
  const totals = {};
  questions.forEach((q, questionIndex) => {
    const selected = q.options[answers[questionIndex]];
    Object.entries(selected.scores).forEach(([language, points]) => {
      totals[language] = (totals[language] || 0) + points;
    });
  });
  finalResults = Object.entries(totals)
    .map(([key, score]) => ({ key, score, info: languageInfo[key] }))
    .filter(item => item.info)
    .sort((a, b) => b.score - a.score || a.info.name.localeCompare(b.info.name))
    .slice(0, 3);

  const maxScore = finalResults[0]?.score || 1;
  const list = document.querySelector("#result-list");
  list.innerHTML = "";
  finalResults.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "result-card" + (index === 0 ? " top" : "");
    const head = document.createElement("div");
    head.className = "result-card-head";
    const left = document.createElement("div");
    const rank = document.createElement("div");
    rank.className = "rank";
    rank.textContent = index === 0 ? "BEST MATCH · 1위" : `${index + 1}위 추천`;
    const name = document.createElement("div");
    name.className = "language-name";
    name.textContent = item.info.name;
    const tagline = document.createElement("div");
    tagline.className = "language-tagline";
    tagline.textContent = item.info.tagline;
    left.append(rank, name, tagline);
    const score = document.createElement("span");
    score.className = "score";
    score.textContent = `적합도 ${Math.round((item.score / maxScore) * 100)}점`;
    head.append(left, score);
    const reason = document.createElement("p");
    reason.className = "result-reason";
    reason.textContent = item.info.reason;
    const meta = document.createElement("div");
    meta.className = "result-meta";
    meta.textContent = `학습 추천 순서: ${item.info.next}`;
    card.append(head, reason, meta);
    list.appendChild(card);
  });

  quiz.classList.add("hidden");
  intro.classList.add("hidden");
  result.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function restart() {
  current = 0;
  answers = Array(questions.length).fill(null);
  finalResults = [];
  result.classList.add("hidden");
  quiz.classList.add("hidden");
  intro.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
