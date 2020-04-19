const express = require('express');  //불러온 express가 함수
const app =express()

app.listen(3000, function() { //app이 지원하는 method인 listen을 실행하겠다.method안에 함수가 있으면 콜백이구나를 알아야 함
    console.log("http://127.0.0.1:3000");
});

app.get("/",function(req,res,next) {
    res.send("<h1>hello,world</h1>")
});

app.get("/hello",function(req,res,next) {
    var name = req.query.name;
    var feel = req.query.feel;
    res.send("<h1>"+name+ " is "+feel+"</h1>");
});

app.get("/front/:id", function(req,res,next) { //:(콜론)으로 들어가는 요청은 params라고 한다.
    var id =Number(req.params.id);
    var books = [
        {id : 1, name : "별주부전", desc:"용왕이 토끼를 ..."},
        {id : 2, name : "홍길동전", desc:"아버지를 아버지라 ..."},
        {id : 3, name : "구운몽전", desc:"꿈을 꿨구나 ..."},
        {id : 4, name : "심청전", desc:"아버지 ..."}
    ];
    switch(id) {
        case 1:
        case 2:
        case 3:
        case 4: 
        res.send(`<p>
        <h1>${books[id-1].name}</h1>
        <div>${books[id-1].desc}</div></p>`)
        break;
    default:
        res.send(`
        <p>
        <h1>도서를 찾을 수 없습니다. 다시 검색 해주세요.</h1>
        </p>`)
    }
    res.send(`<h1>ID : ${id}</h1>`)
})