// Server Creation

const http=require("http");

const port=8081;

http
   .createServer((req,res) => {
      res.writeHead(200,{"Content-Type":"text/html"});
      res.write("<h2>The server creation is done :-)</h2>");
      res.end();
   })
   .listen(port,() => {
      console.log(`NodeJs server started running on ${port}`);
   })