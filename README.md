# Utc data lookup by local date

## package 설치

```cmd
npm i

npm i -g sequelize-cli
```

## DB config 설정

`sample_config.json`을 `config.json`으로 파일명 변경

`config.json`를 mysql 환경에 맞게 수정

다음의 명령으로 DB 생성

```cmd
sequelize db:create
```

샘플 데이터 입력

```cmd
sequelize db:seed:all
```

## 테스트 실행

```cmd
node createTable.js

sequelize db:seed:all

node index.js
```
