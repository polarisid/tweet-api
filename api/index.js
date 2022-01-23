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

    if(req.body.username===""|| req.body===null||req.body===""){
        res.status(404).send('Sorry cant find that!');
    }
    else{
        users.push(req.body)
        console.log(users)
        res.send("0K")
    }

})
server.post('/tweets',(req,res)=>{
    let userSend = users.find(element => element.username ===req.body.username);
    tweets.push({"username":req.body.username,"avatar":userSend.avatar,"tweet":req.body.tweet})
    res.send("0K")
})
server.get('/tweets',(req,res)=>{
    if(tweets.length<=10){
        res.send(tweets.slice(0).reverse())
    }
    else{
    res.send(tweets.slice(tweets.length-10).slice(0).reverse())
    }
})