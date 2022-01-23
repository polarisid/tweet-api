import express,{json} from "express";
import cors from 'cors';
let users =[
{
	"username": 'bobesponja', 
	"avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
}]
let tweets=[
    {
        "username": "bobesponja",
        "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" ,
        "tweet": "salveLek"
    }

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
    // console.log(userSend)
    tweets.push({"username":req.body.username,"avatar":userSend.avatar,"tweet":req.body.tweet})
    //console.log(tweets)
    res.send("0K")
})
server.get('/tweets',(req,res)=>{

    res.send(tweets)
    
})