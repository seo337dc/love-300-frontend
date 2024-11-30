# AITRICS Frontend assignment

## 과제 안내

https://aitrics.notion.site/Frontend-latest-74bac2856f5e459da0ac1fce942d38a3?pvs=4

## 실행 방법

- 서버 실행

1. `node server.js` 명령어 실행
   - 만약 서버 실행이 되지 않는다면, 2번부터 확인하세요.
   - 컴퓨터를 다시 실행 했을 때 자주 발생합니다.
2. `node server.js` 실행 되지 않는다면, `npm run json-server` 실행 (watch db)
3. 터미널에서 실행한 `npm run json-server` 종료하기
4. 다시 터미널에서 `node server.js` 명령어 실행
   - 명확한 이유를 파악하지 못하고 있으나, `json-server`랑 `server.js` 겹쳐서 api가 정상동작 안됨. 꼭 터미널에서 실행한 `npm run json-server`를 종료해야합니다.

- 프론트 실행

1. `npm install`
2. `npm run build` (안해도 무방)
3. `npm run dev` or `npm run start`

## 과제 설명

0. patient-db.json이 데이터베이스 역할을 함으로서 json-server로 서버 구성

   - status 다중 필터링을 걸기 위해 server.js를 생성하여 다중 쿼리 실행되도록 적용
   - 서버 실행 방법
     - 1. npm run json-server [db 실행 - 한번만 실행]
     - 2. json-server 종료 [node server.js이랑 겹쳐서 잘 못 호출하는 것으로 보임]
     - 3. node sever.js [서버 실행]

1. 아이콘 이미지 svg 파일을 적용하기 위해서 @svgr/webpack 설치하였습니다.
2. 무한 스크롤 라이브러리 없이 IntersectionObserver으로 무한스크롤 구현하였습니다.
3. 제공하신 데이터 구조에서 "alert"와 "screening_data"는 객체 타입으로 되어 있어, json-server로 단순 필드만 정렬이 가능하므로 클라이언트단에서 정렬 기능을 적용하게 되었습니다.

## 이슈 사항

1. default 정렬이 screened Date 내림차순으로 정렬이 되어야하는데 초기 api 실행할대 데이터가 명확하게 노출되지 않고 있습니다.
   - 제공해주신 데이터 구조를 통해서 Alter가 객체 형태로 되어 있으며, 현재 구성한 목데이터 DB도 이를 바탕으로 하였습니다.
   - json-server에서는 단순 필드만 조회가 가능하므로 서버단에서 정렬을 못하여 프론트단에서만 정렬 처리를 하고 있습니다.
   - 데이터가 현재 id순으로 추가를 한 상태여서 1001번 ~ 10010번까지 데이터가 먼저 나오고 그다음에 필터링이 되고 있어. 초기 노출 때 옳바르게 노출되지 못하고 있습니다.
