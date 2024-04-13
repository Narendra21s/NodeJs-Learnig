const express=require("express");

const app=express();

app.use(express.json());

const port=8001;

const todoList=['suman','radhika','air','water'];

// http://localhost:8001/todos
app.get("/todos",(req,res)=>{
    // res.writeHead(200);
    // res.write(todolist);
   res.status(200).send(todoList);
});
app.post("/todos",(req,res)=>{
    let newTodoItem=req.body.name;
    todoList.push(newTodoItem);
    res.status(201).send({message:"task Added successfully"});
});
app.delete("/todos",(res,req)=>{
    const deletItem=req.body.name;
    todoList.find((ele,index)=>{
        if(ele === deletItem){
            todoList.slice(index,1);

        }
        res.status(202).send({message:`deleted successfully item ${req.body.name}`});
    });
    });

app.all("*",(req,res)=>{
       res.status(501).send();  
});
   
app.listen(port,()=>{
    console.log(`Node Server running on port ${port}`);
});




