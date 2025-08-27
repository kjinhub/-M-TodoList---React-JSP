# -M-TodoList---React-JSP
미니프로젝트: 리엑트랑 자바로 프론트와 백엔드의 상호작용 확인하기 

# ✅ Todo List Project

## 📌 프로젝트 소개
이 프로젝트는 **React 프론트엔드**와 **Spring Boot 백엔드**를 연결하여 구현한 간단한 **Todo List 웹 애플리케이션**입니다.  
데이터베이스를 사용하지 않고, **서버 메모리(List 자료구조)**에 데이터를 저장하여 CRUD 기능을 제공합니다.  
학습 및 연습용으로 적합하며, **React ↔ Spring Boot 간 REST API 연동**을 익히는 데 목적이 있습니다.

---

## 🛠 기술 스택
### Backend
- Spring Boot 3.x
- Java 17+
- Gradle/Maven
- Spring Web
- Lombok (선택)

### Frontend
- React 18
- JavaScript (ES6+)
- Fetch API / Axios
- React Hooks (useState, useEffect)

---

## 📂 프로젝트 구조
```plaintext
todo-list-project
 ┣ backend/                # Spring Boot 백엔드
 ┃ ┣ src/main/java/com/example/todo
 ┃ ┃ ┣ controller/         # REST API 컨트롤러 (TodoController)
 ┃ ┃ ┣ model/              # Todo 엔티티
 ┃ ┃ ┣ storage/            # In-memory Storage (TodoStorage)
 ┣ frontend/               # React 프론트엔드
 ┃ ┣ src/                  # React 컴포넌트
 ┃ ┣ public/
 ┣ README.md

⚙️ 실행 방법
1. 백엔드 실행

프로젝트 디렉토리 이동

cd backend
./gradlew bootRun


서버 실행 후 기본 엔드포인트:

http://localhost:8080/api/todos

2. 프론트엔드 실행

프로젝트 디렉토리 이동

cd frontend
npm install
npm start


React 개발 서버 주소:
http://localhost:3000

📡 API 엔드포인트
메서드	경로	설명	요청 Body 예시
GET	/api/todos	모든 할 일 조회	-
POST	/api/todos	새 할 일 추가	{ "text": "공부하기" }
DELETE	/api/todos/{id}	할 일 삭제	-
PUT	/api/todos/{id}	완료 상태 토글	-


🧪 Postman 테스트 예시
1. 전체 조회 (GET)
GET http://localhost:8080/api/todos

2. 새 할 일 추가 (POST)
POST http://localhost:8080/api/todos
Content-Type: application/json

{
  "text": "운동하기"
}

3. 할 일 삭제 (DELETE)
DELETE http://localhost:8080/api/todos/1

4. 완료 상태 토글 (PUT)
PUT http://localhost:8080/api/todos/1

