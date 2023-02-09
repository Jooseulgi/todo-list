# Todo-List

## 프로젝트 개요

제공된 API를 활용해 로그인, 회원가입, CRUD 구현

<br/>

## 배포 링크

[배포 바로가기](https://frolicking-figolla-f99c0d.netlify.app/)

<br/>

## 구현 화면

### 1) 회원가입

<img width="70%" src="https://user-images.githubusercontent.com/54945205/217743589-04df0b2c-3bd1-4b5c-ad27-f344f8dc4721.gif">

-   이메일 조건 `@` 포함, 비밀번호 조건 8자 이상 [유효성 검사를 구현](https://github.com/Jooseulgi/todo-list/blob/master/src/hooks/useSignInput.js)
-   input의 유효성 검사 사항 [input 하단에 text로 노출](https://github.com/Jooseulgi/todo-list/blob/master/src/components/Sign/Sign.jsx)
-   유효성 검사 만족시 회원가입 버튼 영역 활성화
-   api에서 받은 [에러 문구 alert로 노출](https://github.com/Jooseulgi/todo-list/blob/master/src/hooks/useSign.js)

### 2) 로그인 & 리다이렉트

<img width="70%" src="https://user-images.githubusercontent.com/54945205/217744233-4c1e641a-2bf3-43ea-94aa-72ce99404ca9.gif">

-   회원가입과 같게 유효성 검사 후 로그인 api를 호출 -> todolist 화면으로 이동
-   [응답받은 JWT는 로컬 스토리지에 저장](https://github.com/Jooseulgi/todo-list/blob/master/src/hooks/useSign.js)
-   토큰값 유무에 맞게 [리다이렉트](https://github.com/Jooseulgi/todo-list/blob/master/src/routes/index.jsx)
    -   토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트
    -   토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트

### 3) Todolist CRUD

<img width="70%" src="https://user-images.githubusercontent.com/54945205/217747881-e9e160ac-9a16-411e-9385-141d5ac9080b.gif">

-   todolist api를 호출하는 custom hook을 만들어 [CRUD 구현](https://github.com/Jooseulgi/todo-list/blob/master/src/hooks/useTodo.js)
-   리스트 로컬스토리지에 저장
-   할 일 입력 input과 업데이트 입력 input을 하나로 제어
-   custom hook인 `UpdateTextProvider`를 사용하여 수정 버튼 클릭시 [업데이트 할 리스트의 id값을 변경](https://github.com/Jooseulgi/todo-list/blob/master/src/context/UpdateTextProvider.jsx)
    -   id값에 맞게 해당 리스트 [수정모드로 변경](https://github.com/Jooseulgi/todo-list/blob/master/src/components/TodoList/TodoItem.jsx)
    -   input placeholder, 버튼 text [수정모드로 변경](https://github.com/Jooseulgi/todo-list/blob/master/src/components/TodoList/TodoForm.jsx)

<br/>

## 과제 요구사항

### 1) 범위

-   로그인/ 회원가입 기능 개발
-   Todo List API를 호출하여 Todo List CRUD 기능을 구현

### 2) 요구사항

-   기능구현에 직접적으로 연관된 라이브러리 사용은 허용되지 않습니다.(React-Query 등)

Assignment1

-   이메일과 비밀번호의 유효성 검사기능

    -   이메일 조건: `@` 포함
    -   비밀번호 조건: 8자 이상
    -   입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화

Assignment2

-   로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동
    -   로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답
    -   응답받은 JWT는 로컬 스토리지에 저장

Assignment3

-   로그인 여부에 따른 리다이렉트 처리를 구현
    -   로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트
    -   로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트

Assignment4

-   `/todo`경로에 접속하면 투두 리스트의 목록 조회
    -   리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시
    -   리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가

Assignment5

-   투두 리스트의 수정, 삭제 기능을 구현
    -   투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정
    -   수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소
    -   투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제

<br/>

## 실행 방법

```bash
$ git clone https://github.com/Jooseulgi/todo-list.git
$ cd todo-list
$ npm install
$ npm start
```

<br>

## 사용 기술

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white) ![context API](https://img.shields.io/badge/context%20API-333333?style=for-the-badge&logo=&logoColor=white) ![Scss](https://img.shields.io/badge/Styled%20components-CC6699?style=for-the-badge&logo=Sass&logoColor=white) <br/>

-   <b>Axios</b>
    -   fetch와 비교해 서버로부터 데이터를 받은 후, json으로 변환할 필요가 없는 장점이 있다.
    -   instance를 제작하여 fetch보다 가독성 높은 코드를 작성할 수 있어 선택했다.
-   <b>context API</b>
    -   요구 조건에 기능 구현 관련 라이브러리 설치를 할 수 없었고 전역 상태 관리 학습 겸 사용해 보았다.

<br/>

## 폴더 구조

```bash
todo-list
├─ 📁 public
├─ 📁 src
│  ├─ 📁 components  # Todolist 관련 components가 모여있는 폴더입니다.
│  │  ├─📁 Common # 공통 components가 있는 폴더입니다.
│  │  │ ├─ 📁 Button
│  │  │ └─ 📁 Title
│  │  ├─📁 Sign
│  │  └─📁 Todolist
│  ├─ 📁 context  # uesContext 전역 상태 관리 폴더입니다.
│  ├─ 📁 hook  # api 연동과, input valid custom hook이 있는 폴더입니다.
│  ├─ 📁 pages  # 페이지 단위의 component로 구성한 폴더입니다.
│  │  ├─📁 SignPage
│  │  └─📁 TodoListPage
│  ├─ 📁 routes  # 회원가입, todolist 경로 설정 폴더입니다.
│  ├─ 📁 styles  # 기본 style 설정이 모여있는 폴더입니다.
│  │  ├─📁 base
│  │  └─📁 constants
│  └─ index.jsx
├─ ⚙️ .gitignore
├─ ⚙️ package-lock.json
├─ ⚙️ package.json
└─  README.md
```
