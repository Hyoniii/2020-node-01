# 2020.04.19 node class
## 1.visual studio code 다운로드 및 설치
## 2.확장기능 설치(beautify,...)
## 3.node 설치 [노드 다운로드](https://nodejs.org)
## 4.git 설치 [깃 다운로드](https://git-scm.com) 다운로드하고 우측 중앙의 컴퓨터에서 다운로드 한다.
## 5.탐색기에서 프로젝트 폴더를 생성하고 vscode에서 폴더열기로 프로젝트 폴더를 연다.
## 6.github.com에서 생성한 제라지토리를 연동 시킨다.
```bash
git init
git remote add origin https://github.com/Hyoniii/2020-node-01
```
## 7.npm 프로젝트를 시작한다.
```bash

npm init -y #질문 사항에 모두 yes

#moment.js 모듈을 설치한다.
npm i moment

#express.js를 설치한다.
npm i express
```
## supervisor 설치
```bash
#super visor 모듈을 global 옵션을 통해서 설치한다.(한번만)
#like nodemon
npm i -g supervisor
```

## app.js 생성
```
```



# 2020.04.26

## post 진행하려ㅕ면 폼 필요 -> public폴더
## static구현
### 유즈는 미들웨어 , 서버구동과 라우터 중간에 들어가고 함수와 콜백이 들어감
### 미들웨어에서 res(리턴)을 만나면 라우터까지 가지 못하고 끝난다. 왜, 리턴을 했으니까