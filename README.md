# KEL - API e Frontend

## Visão Geral

Este projeto é composto por duas partes:

- **kel-back**: Backend desenvolvido em **Java com Quarkus**.  
- **kel-front**: Frontend desenvolvido em **React/Next.js**.

O sistema realiza consultas a APIs externas (Keltech e Receita Federal) e exibe informações detalhadas sobre os sócios de uma empresa, filtrando pela participação mínima.

---

## Pré-requisitos

Antes de iniciar, é necessário ter instalado:

- **Java 17** ou superior  
- **Maven 3.8+**  
- **Node.js 18+** e **npm** ou **yarn**  
- **Git**  

---

## Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/kel.git
cd kel
```

---

## Executar o Backend (kel-back)

### 1. Acesse a pasta do backend

```bash
cd kel-back
```

### 2. Executar a aplicação

```bash
mvn quarkus:dev
```

A API iniciará em:

```
http://localhost:8080
```

---

## Endpoints Principais

### 1. Listar Sócios

**GET** `/v1/socios?participacaoMin={valor}`

Retorna a lista de sócios com participação igual ou superior ao valor informado.

**Exemplo de requisição:**
```
GET http://localhost:8080/v1/socios?participacaoMin=20
```

**Exemplo de resposta:**
```json
[
  {
    "nome": "ROBERT BOSCH LIMITADA",
    "cnpj": "45.990.181/0001-89",
    "participacao": "28",
    "receita": null
  },
  {
    "nome": "IBM BRASIL - INDUSTRIA MAQUINA E SERVIÇO LTDA",
    "cnpj": "333.722.51/0062-78",
    "participacao": "20",
    "receita": null
  }
]
```

---

### 2. Buscar Sócio por CNPJ

**GET** `/v1/socios/{cnpj}`

Retorna informações detalhadas de um sócio específico, integrando com os dados da Receita Federal.

**Exemplo de requisição:**
```
GET http://localhost:8080/v1/socios/45990181000189
```

**Exemplo de resposta:**
```json
{
  "nome": "ROBERT BOSCH LIMITADA",
  "cnpj": "45.990.181/0001-89",
  "participacao": "28",
  "receita": {
    "razao_social": "ROBERT BOSCH LIMITADA",
    "capital_social": "1814844543.00",
    "porte": {
      "id": "05",
      "descricao": "Demais"
    },
    "natureza_juridica": {
      "id": "2062",
      "descricao": "Sociedade Empresária Limitada"
    },
    "qualificacao_do_responsavel": {
      "id": 5,
      "descricao": "Administrador"
    }
  }
}
```

---

## Executar o Frontend (kel-front)

### 1. Acesse a pasta do frontend

```bash
cd ../kel-front
```

### 2. Instalar dependências

```bash
npm install
```

ou

```bash
yarn
```

### 3. Rodar o projeto localmente

```bash
npm run dev
```

ou

```bash
yarn dev
```

O frontend estará disponível em:

```
http://localhost:8081
```

---

## Comunicação entre Front e Back

Certifique-se de que o arquivo `src/services/api.ts` no frontend está configurado corretamente:

```ts
const API_BASE_URL = 'http://localhost:8080/v1/socios';
```

E que o backend permite requisições CORS para o domínio do frontend (`http://localhost:8081`).

---

## Estrutura do Projeto

```
kel/
├── kel-back/      # Backend (Quarkus)
│   ├── src/main/java/com/macf/kel/
│   ├── src/main/resources/
│   └── pom.xml
│
└── kel-front/     # Frontend (React/Next.js)
    ├── src/
    ├── package.json
    └── tsconfig.json
```

---

## Acesso

- Frontend: [http://localhost:8081](http://localhost:8081)  
- API: [http://localhost:8080/v1/socios](http://localhost:8080/v1/socios)
