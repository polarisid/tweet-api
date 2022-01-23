# Tweet-api

Uma API simples onde é possivel fazer um bate papo simples.
#Como rodar?
- ```npm init```

- ```npm start```


# Rota ``` /sign-up ```  - POST
Nesta rota podemos cadastrar o usuário fazendo um post, a API espera dados no seguinte formato:
``` 
  {
    "username": "bobesponja",
    "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
  }
```

Caso de ```Username``` ou corpo da requisição vazio irá retornar irá retornar erro 404.

