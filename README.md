# Projeto Técnico Alpha

## ✔️ Funcionalidades
- Login com autenticação JWT
- CRUD completo de Produtos
- CRUD completo de Clientes
- Frontend em React
- Backend em ASP.NET Core Web API
- Banco de dados SQL Server

---

## 🧱 Tecnologias utilizadas

### Backend:
- C#
- ASP.NET Core Web API
- Entity Framework Core
- JWT (autenticação)
- SQL Server

### Frontend:
- React
- Axios
- React Router DOM

---

## 📁 Estrutura do Projeto

```
backend/
├── Controllers/
├── Data/
├── DTOs/
├── Models/
├── Program.cs

frontend/
├── src/
|   ├── assets/
|   ├── components/
│   ├── pages/
│   ├── services/api.js
│   ├── styles/
│   └── App.js
```

---

## 🗃️ Banco de Dados

### Script de Criação
Arquivo: `AlphaDB.sql`

Contém as tabelas:
- `Usuarios`
- `Produtos`
- `Clientes`

Com os campos e tipos conforme solicitado no enunciado.

Inclui também dados de exemplo para testes.

---

## 🧪 Como rodar o projeto localmente

### 🔧 Pré-requisitos:
- Node.js
- .NET 6 ou superior
- SQL Server Express ou compatível

### 1. Banco de dados
- Abra o SQL Server Management Studio
- Execute o `AlphaDB.sql`
- Confirme que o banco `AlphaDB` foi criado com as tabelas e dados

### 2. Backend
```bash
cd backend

# Instalar dependências (caso use dotnet restore)
dotnet restore

# Rodar a API
dotnet run
```

### 3. Frontend
```bash
cd frontend

# Instalar dependências
npm install

# Rodar o frontend (react)
npm start
```

### 4. Testar a aplicação
- Acesse: `http://localhost:5000`
- Use login: `admin / admin`
- Após login, acesse as telas de produtos e clientes

---

## 🔐 Credenciais de Teste
- **Usuário:** admin
- **Senha:** admin

---

## 📂 Organização dos Códigos
- Controllers seguem padrão REST
- Models espelham as tabelas do banco
- DTOs usados para login
- JWT utilizado para proteger rotas via `[Authorize]`
