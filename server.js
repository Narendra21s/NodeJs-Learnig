const http=require("http");

const port=8001;



// http Methods
   // >> GET    : Getting the data from database
   // >> POST   : post the  data to database
   // >> DELETE : delete data from database 
   // >> PATCH  : Updating certain fields
   // >> PUT    : Full update


   const todoList=['Sri',"josh",'suman'];

http
.createServer((req,res)=>{ // call back fun
   // res.writeHead(200,{"COntent-Type":"text/html"});
   // res.write("<h1>The server is running :-) </h1>");
   // res.end();

   const {method,url} = req;
   if(url === '/todos'){
      if(method === "GET"){
         res.writeHead(200,{"Content-Type":"text/html"});
         res.write(todoList.toString());
         
      }

      else if(method === "POST"){
          let body="";
          req
            .on('error',(err)=>{
             console.log(err);
          }).on('data',(chunk)=>{
            body += chunk;
            // console.log(chunk);
          }).on('end',()=>{
            body = JSON.parse(body);

            // adding data here
            let newTodo=todoList;
            newTodo.push(body.item);
            // console.log("data",body);
          })
      }
      else if(method === "DELETE"){
         let body="";
         req
         .on('error',(err)=>{
            console.error(err);
         })
         .on('data',(chunk)=>{
            body += chunk;
            
            
         })
         .on('end',()=>{
            body = JSON.parse(body);
            let deleteThisItem = body.item;
            // for(let i=0;i<todoList.length;i++){
            //    if(todoList[i] === deleteThisItem){
            //       todoList.splice(i,1);
            //       break;
            //    }
            // }
            todoList.find((ele,index)=>{
            if(ele === deleteThisItem){
               todoList.slice(index,1);
            }

            })
         })
      }
      else{
         res.writeHead(501);     
      }
   }
   else{
      res.write(404);  
   }
   res.end();
  
   
})
.listen(port,()=>{  //call back fun
   console.log(`The port creating is successful ${port}`);
})


// http://localhost:8081

// Routes
// http://localhost:8081/home
// http://localhost:8081/about
// http://localhost:8081/contactUs