import express,{json} from "express";
import cors from 'cors';
let users =[

]
let tweets=[


]
const server = express();
server.use(cors());
server.use(json());

server.listen(5000,()=>{console.log("RODANDO API")});

server.get('/',(req,res)=>{
    res.send("Salveee")
})

server.post('/sign-up',(req,res)=>{

    if(req.body.username===""|| req.body===null||req.body===""||req.body.avatar===""){
        res.status(400).send('BAD REQUEST');
    }
    else{
        users.push(req.body)
        console.log(users)
        res.status(201).send('OK');
    }

})
server.post('/tweets',(req,res)=>{
    if(req.body.username===""|| req.body===null||req.body===""||req.body.tweet===""){
        res.status(400).send('BAD REQUEST');
    }
    else{
    let userSend = users.find(element => element.username ===req.body.username);
    tweets.push({"username":req.body.username,"avatar":userSend.avatar,"tweet":req.body.tweet})
    res.status(201).send('OK');
}
})
server.get('/tweets',(req,res)=>{
    if(tweets.length<=10){
        res.send(tweets.slice(0).reverse())
    }
    else{
    res.send(tweets.slice(tweets.length-10).slice(0).reverse())
    }
})