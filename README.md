# CodeCompass

질문 9개에 답하면 관심 분야와 목표에 맞는 프로그래밍 언어 TOP 3를 추천하는 정적 웹사이트입니다.

## 구성 파일
- `index.html` — 페이지 구조
- `style.css` — 심플하고 반응형인 디자인
- `script.js` — 질문, 점수 계산, 추천 결과 처리

## 로컬에서 실행
`index.html` 파일을 브라우저로 열면 됩니다. 별도 설치나 API 키가 필요하지 않습니다.

## GitHub에 올리기
1. GitHub에서 새 저장소(repository)를 만듭니다.
2. `index.html`, `style.css`, `script.js`, `README.md` 파일을 저장소에 업로드합니다.

## Render로 배포하기
1. Render 계정에 로그인하고 **New → Static Site**를 선택합니다.
2. GitHub 저장소를 연결합니다.
3. Build Command는 비워 두고, Publish Directory에는 `.` 을 입력합니다.
4. **Create Static Site**를 누르면 배포가 시작됩니다.
5. 배포가 끝나면 Render가 제공하는 주소로 접속할 수 있습니다.

## 참고
추천 결과는 질문별 점수를 합산하는 규칙 기반 방식이며, AI API나 데이터베이스를 사용하지 않습니다. 점수와 질문은 `script.js`에서 수정할 수 있습니다.
