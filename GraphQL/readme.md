## GraphQL 준비

- node js 설치 필요/설치 확인

---
~~~
C:\Program Files\nodejs>node -v
v16.14.2

C:\Program Files\nodejs>npm -v
8.6.0
~~~
---

## 필요 패키지 설치

# 폴더를 만들고 필요한 패키지를 설치한다

---
~~~
C:\Program Files\nodejs>mkdir gql_test
C:\Program Files\nodejs>cd gql_test
C:\Program Files\nodejs\gql_test>npm init
~~~
---

# 필요 패키지 설치 방안 1)

패키지에 선언된 라이브러리를 선언하고 패키지를 일괄 설치한다
~~~
- package.json에 선언된 패키지
  "apollo-server-express": "^1.4.0", // GraphQL gateway 서버
  "body-parser": "^1.18.3", // parser
  "cors": "^2.8.4", // 교차 자원 지원을 위한 패키지
  "express": "^4.16.3",
  "graphql": "^0.13.2",
  "graphql-tools": "^3.1.1", // graphiql 툴 패키지
  "notarealdb": "^0.2.2" // json 파일을 db처럼 활용하기 위한 패키지

- npm install <-- package.json에 정의된 dependencies를 설치한다
~~~
# 필요 패키지 설치 방안 2)

- 필요한 패키지를 하나씩 설치하는 방법
- npm install 패키지명 <-- 패키지를 설치하며, package.json파일 dependencies에 패키지를 기록한다

notarealdb 가 설치되지 않았다면 npm install notarealdb --save로 모듈을 설치한다
패키지를 설치하면 node_modules 폴더가 생성이 되고 그 폴더안에 설치된 패키지들이 위치한다

## db 지원 모듈

- 접속하고자 하는 패키지를 설치한다
- sqlite3이면
  npm install i sqlite3
- json 형태의 데이터를 db로 사용하려면
  npm install notarealdb <-- json 형태로 정의된 파일을 db로 인식하게 하여준다. 간단한 정보 관리 시 편리함

## 폴더 구조
~~~
app /
package.json
db.js
data/
students.json
colleges.json
resolvers.js
schema.graphql
server.js
~~~

## 실행방법

# 서버 실행

npm start <-- package.json에 "start": "nodemon --ignore data/ server.js"으로 정의하였음
start라고 하면 nodemon으로 server.js를 실행하라는 의미이며
nodemon은 소스 수정이 일어날 경우 자동으로 서버가 변경을 반영(리스타트)하라는 의미

---

C:\Program Files\nodejs\gql_test>npm start

> gql_test@1.0.0 start
> nodemon --ignore data/ server.js

[nodemon] 1.17.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: _._
[nodemon] starting `node server.js`
Server started on port 9000

---

# Client 실행

1. GraphiQL 사용시
   http://localhost:9000/graphiql
2. URL Get
   http://localhost:9000/graphql/?query={students{id}}
   와 같이 query=GraphQL쿼리문 형태로 한다
3. 결과는 json 형태로 리턴한다

## 주요 구성요소
~~~
server.js - 메인 모듈, gateway 서버, resolver와 db schema 연결
resolver.js - 요청된 query를 수행하는 모듈
db -- db 정의 모듈
Schema.graphql -- 데이터 구조를 정의
./db/xxx.json -- json 형태 데이터 파일
~~~
