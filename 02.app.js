const express = require("express");
const app = express();
const path = require("path"); // 노드가 지원하는 모듈, 경로와 params에 대한 


var sample = "";

/* server 구동 */
app.listen(3000, function () { //서버 포트여는 이벤트
    console.log("http://127.0.0.1:3000");
   // console.log(__dirname); //노드가 제공하는 전역변수, 현재의 절대경로가 담겨있다.
});

/* 정적 라우터  */
app.use(function(req,res,next) {
    sample = "SAMPLE"
    next(); //res.send(); 를 하면 여기서 끝나버림.
})

app.use(express.json());  //포스트 방식의 요청을 처리하기 위한 두 줄 / 모든  req를 순회하면서 json으로 변경해준다.
app.use(express.urlencoded({extended:false})); //form 요소에 접근하게 해준다.

app.use("/",express.static(path.join(__dirname, "./public"))); //public폴더의 절대 좌표가 나온다. 서버 구동후 퍼블릭에서 파일 reaponse한다. 없으면 아래에서 res, 있으면 res하고 끝. 
//루트를 누르면 퍼블릭 폴더 안에 들어간것이다. http://127.0.0.1:3000/html/write.html


/* router 구현 */
app.get("/root",function(req,res,next) {
    res.send(`<h1>hello,world ${sample} </h1>`)
})
app.get("/query",function(req,res,next) { //http://127.0.0.1:3000/query?name=hyoniii
    var name = req.query.name;
    res.send("<h1>hello,world " + name +"</h1>")
})
app.get("/param/:name",function(req,res,next) { //http://127.0.0.1:3000/param/hyoniii
    var name = req.params.name;
    res.send("<h1>hello,world "+ name +"</h1>")
})
//post 진행하려면 폼 필요 -> public폴더 ->여기엔 정적 파일 모아둔다.

app.post("/board/save", function(req,res,next) {
    /*const title = req.body.title;
    const content = req.body.content;*/
    const {title,content} = req.body;
    res.send(title + '<br>' + content);
})

/*app.post("/board/save",function(req,res,next) {
    res.send("post요청")
}) //http://127.0.0.1:3000/board/save 주소로 직접 들어가는건 겟방식이라서 에러가 뜬다. 
 //form을 통해 액션,포스트로 통한거니까.*/