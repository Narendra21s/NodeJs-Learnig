// Server Creation

const http=require("http");

 const port=8081; // local port number

http
   .createServer((req,res) => { // call back fun
    res.writeHead(200,{"Content-Type":"text/html"});
      res.write("<h2>The server creation is done :-) 7647 </h2>");
      res.end();
   })
   .listen(port,() => {  // call back fun
      console.log(`NodeJs server started running on ${port}`);
   })

   // https://localhost:8081

   

