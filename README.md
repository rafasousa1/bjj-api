# API de cadastro de lutadores 🥋
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Descrição
Uma simples API de cadastro de lutadores para uma academia de Jiu-Jitsu.
Em seu desenvolvimento foi usado apenas o módulo HTTP nativo do próprio Node e armazenando cada lutador com seus dados em um JSON

## Instrução de instalação

### Pré-Requisitos
- Node.js v18+

```
node server.js
```

Também foi usado o módulo nativo http do Node.js:
```
import http from 'node:http';
```
## Instrução de uso

1. Ferramenta de teste de API (Insomnia, Postman etc)
2. Executar localhost:3000/fighters

## Endpoints

### GET Fighters
```
GET /fighters - Listando os lutadores que foram criados
```
```

	{
		"id": "0b89a092-ed0a-4397-a822-91713ac94519",
		"name": "Leandro",
		"age": 18,
		"belt_graduation": "white",
		"weight": 70,
		"phone": 1191000
	},
	{
		"id": "2fe97e75-7f79-463f-8d77-47731824ed72",
		"name": "Cleyton",
		"age": 23,
		"belt_graduation": "white",
		"weight": 80,
		"phone": 1192000
	},
	{
		"id": "05435b92-a63c-4e07-890d-c100a80d732a",
		"name": "Rafael",
		"age": 18,
		"belt_graduation": "white",
		"weight": 68,
		"phone": 1193000
	},
```

### POST Fighter
```
POST /fighters - Criando um novo lutador
```

```
{
	"name": "Roberto",
	"age": 50,
	"belt_graduation": "black",
	"weight": 78,
	"phone": 1196000
}
```

### PUT Fighter
```
PUT /fighters/:id - Atualizando um lutador específico pelo seu id
```

```
{
		"name": "Leandro",
		"age": 19,
		"belt_graduation": "white",
		"weight": 72,
		"phone": 1199000
}
```

### DELETE Fighter
```
DELETE /fighters/:id - Removendo um lutador específico pelo seu id
```

```
localhost:3000/fighters/id
```