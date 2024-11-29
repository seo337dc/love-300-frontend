# AITRICS Frontend assignment

## 과제 안내

https://aitrics.notion.site/Frontend-latest-74bac2856f5e459da0ac1fce942d38a3?pvs=4

## 과제 설명

0. patient-db.json이 데이터베이스 역할을 함으로서 json-server로 서버 구성

   - status 다중 필터링을 걸기 위해 server.js를 생성하여 다중 쿼리 실행되도록 적용
   - 서버 실행 방법
     - 1. npm run json-server [db 실행 - 한번만 실행]
     - 2. json-server 종료 [node server.js이랑 겹쳐서 잘 못 호출하는 것으로 보임]
     - 2. node sever.js [서버 실행]

1. 아이콘 이미지 svg 파일을 적용하기 위해서 @svgr/webpack 설치하였습니다.
2. 무한 스크롤 라이브러리 없이 IntersectionObserver으로 무한스크롤 구현하였습니다.

## 구현 해야할 목록

- 스타일컴포넌트로 로딩 컴포넌트 돌리기
- zustand로 loading 상태 관리하기

## 목록

0. 병원에 입원한 환자의 최신 관측 데이터를 모니터링 하기 위한 대시보드가 필요합니다.
1. json-server 라이브러리를 사용하여 REST API
2. [테이블] : 테이블 헤더는 고정하고 리스트만 스크롤 할 수 있도록 구현합니다.
3. [테이블] : 무한 스크롤로 구현합니다.
4. [테이블] : 환자 id를 복사할 수 있습니다.
5. [테이블] : 환자 row 호버 시 백그라운드 컬러를 파란색으로 변경합니다.
6. [테이블] : 소수점이 있는 value는 첫째 자리까지 반올림해서 노출합니다.
7. [필터] : 환자의 status 별로 테이블 리스트를 필터링할 수 있습니다.
8. [필터] : 체크박스로 구성합니다.
9. [정렬] : 테이블 default 정렬은 screened date(관측 일자) 내림차순입니다.
10. [정렬] : 테이블 헤더가 정렬 버튼으로 동작합니다.
11. [정렬] : 정렬하고 싶은 컬럼은 다음과 같습니다.
12. [정렬] : 정렬 버튼은 내림차순-오름차순으로 동작해야 합니다.
