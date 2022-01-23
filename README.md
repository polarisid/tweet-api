# Tweet-api :bird:

Uma API simples onde é possivel fazer um bate papo simples.
#Como rodar?
- ```npm init```

- ```npm start```

Abra ``` http://localhost:5000/ ``` e veja se é possível ver meu recado! <3



 # Rota ``` /sign-up ```  - POST  :outbox_tray:
Nesta rota podemos cadastrar o usuário fazendo um post, a API espera dados no seguinte formato:
``` 
  {
    "username": "bobesponja",
    "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
  }
```

Caso de ```Username``` ou corpo da requisição vazio irá retornar irá retornar erro 404.

# Rota ``` /tweets ```  - GET :inbox_tray:
Nesta rota obtemos todos os Tweets armazenados localmente na variável.
Utilizando o metodo GET o servidor devolverá os ultimos 10 tweets da seguinte forma.

``` 
[
	{
		"username": "bobesponja",
		"avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    "tweet": "eu amo o hub"
	},
 	{
		"username": "bobesponja",
		"avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    "tweet": "Salve"
	}
]
```

# Rota ``` /tweets ```  - POST :outbox_tray:
Para enviar um Tweet para o servidor faça um POST na rota. O servidor espera os seguintes dados:
``` 
{
	username: "bobesponja",
  tweet: "eu amo o hub"
}
``` 
Obs: Envie somente o username e o tweet o servidor automaticamente buscara a foto do usuário que fez o tweet se o mesmo estiver cadastrado.
