
## TypeORM
- 참고 : https://docs.nestjs.com/recipes/sql-typeorm


## Env/Config 환경 변수 관리
  1. NODE_ENV 환경 변수를 설정하기
    - package.json 의 scripts 부분을 수정한다
    <pre>
    "start": "NODE_ENV=prd&nest start",
    "start:dev": "NODE_ENV=dev&nest start --watch",
    "wstart": "set NODE_ENV=prd&&set HOST_PORT=3000&&nest start",
    "wstart:dev": "set NODE_ENV=dev&&set HOST_PORT=3000&&nest start --watch",
    "start:debug": "NODE_ENV=dev nest start --debug --watch",
    "start:prod": "NODE_ENV=prd node dist/main",
    </pre>
    와 같이 OS 별 환경설정하는 방법이 다르므로 윈도우용 스크립트를 추가해준다

  <pre>
    "wstart": "set NODE_ENV=prd&&set HOST_PORT=3000&&nest start",
    "wstart:dev": "set NODE_ENV=dev&&set HOST_PORT=3000&&nest start --watch",
  </pre>

  2. NODE_ENV가
     - prd : 운영환경
     - dev : 개발환경
     - test : 테스트 환경
    을 의미하도록 한다
  3. app.module.ts 파일에서
 <pre>
     @Module({
   imports: [
	  ConfigModule.forRoot({
		  isGlobal: true,
		  envFilePath: [`${process.cwd()}/config/${process.env.NODE_ENV}.config.env`, `${process.env.NODE_ENV}.dbconfig.env`,],
	  }),
	  PimModule, TestModule, CsModule, RestModule, GrahpqlModule, ModelModule, ConfigModule],
    controllers: [AppController],
    providers: [AppService],
    })
</pre>
     와 같이 CongigModule을 import한다
     - 'isGlobal: true' 로 하여서 전역으로 사용할 수 있도록 하고<br/>
     - envFilePath: [`${process.cwd()}/config/${process.env.NODE_ENV}.config.env`, `${process.env.NODE_ENV}.dbconfig.env`,], <br/>
     와 같이 환경 설정 파일을 지정한다.<br/>
     process.env.NODE_ENV 가 dev 면 'dev.config.env'와 'dev.dbconfig.env' 파일을 환견설정 파일로 로드한다

## module / controller / service / dto / entity를 한방에 만들기
nest g res <이름>


## Data Model 작성시  => nest g res로 모듈 생성후 dto를 이용하는 것으로 처리
-  ~.model.ts에 interface, data model(field)관련 enum등등을 선언한다.(inteface 정의하는 파일을 별도로 두지 않기 위함. 데이터 모델관련은 모두 ~.model.ts에 둠)
   => 추후 좋은 관리 방법이 생기면 변경토록 함

## prefix 추가-2022.08.02
<pre>
[main.ts 에 
// const __VERSION__ = 'v1';
const __VERSION__ = '';

app.setGlobalPrefix(__VERSION__);

추가
</pre>

# NestJS Middleware

## 준비
1. $ npx degit dinohand/middleware <프로젝트이름>
- https://github.com/dinohand/middleware 에서 소스를 가져온다.
- degit package가 설치되지 않았으면 npm i --save degit 명령어로 pacakge를 설치한다

2. <프로젝트이름> 폴더로 이동한 다음,  $ npm i
- pacakge.json에 등록된 package들을 설치한다

3. $ npm run start:dev
- app을 개발환경으로 실행한다.
- 개발환경이란 소스를 고쳐서 저장하면 자동으로 rebuild 하게 된다

<b>주의 사항 : node.js version 은 최근것으로, "node -v" 명령어로 확인가능하며, v16.16.0 버전을 기준으로 작업중</b>
<hr/>

## 1. 개요
### NestJS 란 ?
- server-side applications
- Typescript 지원
- Express 서버 framework 또는 Fastify를 선택적으로 사용할 수 있음

### 기본 컨셉
- NestJS는 module, controller, service등 구조적/강제적으로 역할을 구분하여 개발토록 함
- module : 컨트롤러와 서비스를 연결
- controller : uri 라우팅에 따라 서비스를 연결
- service : 실제 비즈니스로직을 개발하는 영역

### 개발시 유의사항
- node.js는 80포트를 사용할 수 없다. 그러므로 nginx로 connect 하거나, os에서 port forward 하여준다.
- static assets 접근은 https://docs.nestjs.com/techniques/mvc#model-view-controller 참조,엔진을 hbs로 함 -> 여러가지 테스트할 필요가 있음

### nest 명령
<pre>
Usage: nest <command> [options]

Options:
  -v, --version                                   Output the current version.
  -h, --help                                      Output usage information.

Commands:
  new|n [options] [name]                          Generate Nest application.
  build [options] [app]                           Build Nest application.
  start [options] [app]                           Run Nest application.
  info|i                                          Display Nest project details.
  add [options] <library>                         Adds support for an external library to your project.
  generate|g [options] <schematic> [name] [path]  Generate a Nest element.
    Schematics available on @nestjs/schematics collection:
      ┌---------------┬-------------┬----------------------------------------------┐
      │ name          │ alias       │ description                                  │
      │ application   │ application │ Generate a new application workspace         │
      │ class         │ cl          │ Generate a new class                         │
      │ configuration │ config      │ Generate a CLI configuration file            │
      │ controller    │ co          │ Generate a controller declaration            │
      │ decorator     │ d           │ Generate a custom decorator                  │
      │ filter        │ f           │ Generate a filter declaration                │
      │ gateway       │ ga          │ Generate a gateway declaration               │
      │ guard         │ gu          │ Generate a guard declaration                 │
      │ interceptor   │ itc         │ Generate an interceptor declaration          │
      │ interface     │ itf         │ Generate an interface                        │
      │ middleware    │ mi          │ Generate a middleware declaration            │
      │ module        │ mo          │ Generate a module declaration                │
      │ pipe          │ pi          │ Generate a pipe declaration                  │
      │ provider      │ pr          │ Generate a provider declaration              │
      │ resolver      │ r           │ Generate a GraphQL resolver declaration      │
      │ service       │ s           │ Generate a service declaration               │
      │ library       │ lib         │ Generate a new library within a monorepo     │
      │ sub-app       │ app         │ Generate a new application within a monorepo │
      │ resource      │ res         │ Generate a new CRUD resource                 │
      └---------------┴-------------┴----------------------------------------------┘

	</pre> 

- 주요 참조 사이트
https://github.com/nestjs/nest/tree/master/sample

# RabbitMQ => 프로젝트에 적용되지 않음 => Amazon Managed Streaming for Apache Kafka(Amazon MSK) 사용
## Rabbit MQ 설치
apt list --installed rabbitmq-server   // 설치되엇는지 확인
sudo apt install rabbitmq-server       // 설치
sudo apt remove rabbitmq-server       // 설치

## 관리기능 활성화  -- goorm에서는 안됨...
sudo rabbitmq-plugins enable rabbitmq_management
netstat -an | grep 15672

<div align=center><h2>📚 Tech Stack 📚</h2></div>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<div align=center> 
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/mariaDB-003545?style=flate&logo=mariaDB&logoColor=white"/>
  <img src="https://img.shields.io/badge/mysql-4479A1?style=flat&logo=mysql&logoColor=white"/>
</div>

- JWT
- Config
- Logger
- Handler 처리
@Get
@Post
@Delete
@Put
@Patch

NestJS의 데코레이션 선언
@Module
@Controller
