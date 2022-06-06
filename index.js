/* require()
- Node JS 에서 별도의 파일에 존재하는 외부 모듈을 포함하는 내장 함수
- 기본적으로 JS 파일을 읽어서 실행한 후 내보내기 객체를 반환하는 작업을 진행
- 내장된 핵심 Node JS 모듈 뿐만 아니라 커뮤니티 기반 및 로컬 모듈을 추가할 수 있음
*/

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server); // server 객체를 전달하면서 새로운 socket.io 인스턴스 초기화

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
});
// chat message 이벤트 출력

server.listen(3000, () => {
  console.log("listening on *:3000");
});
