# Documentação Backend do Seapass

> Documentação passo a passo para configurar, rodar e entender o backend do projeto SeaPass. Inclui todas as ferramentas utilizadas, comandos de terminal desde a criação de pastas até execução, exemplos de código e notas para produção.


## 📌 1. Resumo do Projeto


O backend do SeaPass é uma API REST construída em **Python** (ex.: Flask ou FastAPI).  
Ela expõe endpoints consumidos pelo frontend em formato **JSON** e se conecta a um banco de dados (ex.: **PostgreSQL**) para persistência.

> Esta documentação foca apenas no backend: criação do projeto, instalação, conexão com o banco e execução local.


## 📂 2. Estrutura Real do Projeto

seapass-backend-main/
│
├── app/
│ ├── config/
│ │ └── db_config.py
│ ├── models/
│ │ ├── init.py
│ │ └── models.py
│ ├── routes/
│ │ ├── init.py
│ │ └── main_routes.py
│ └── services/
│ └── init.py
│
├── .env
├── .gitignore
├── create_tables.py
├── cspell.json
├── database.py
├── main.py
├── requirements.txt
├── test_db.py
└── .gitattributes


## 🧩 3. Ferramentas e Dependências Utilizadas

### 🔹 Linguagem / Framework
- Python 3.10+ (recomendado)
- Flask (ou FastAPI — exemplos abaixo utilizam Flask)

### 🔹 Banco de Dados
- PostgreSQL  
- Driver: `psycopg2-binary`

---

## 🛠 4. Instalação e Configuração do Ambiente

### ✅ 4.1 Instalar Python 3.10+
Baixar no site oficial e marcar a opção:
Add Python to PATH

yaml
Copiar código

---

### ✅ 4.2 Criar e ativar ambiente virtual

#### Windows:
python -m venv venv
venv\Scripts\activate

shell
Copiar código

#### Linux/Mac:
python3 -m venv venv
source venv/bin/activate

yaml
Copiar código

---

### ✅ 4.3 Instalar dependências
pip install -r requirements.txt

yaml
Copiar código

---

### ✅ 4.4 Instalar PostgreSQL
Instalar:

✅ PostgreSQL Server  
✅ Command Line Tools  

Testar instalação:
psql --version

yaml
Copiar código

---

### ✅ 4.5 Criar banco e usuário

Entrar no console:
psql -U postgres

sql
Copiar código

Executar SQL:
CREATE DATABASE seapass_db;
CREATE USER seapass_user WITH ENCRYPTED PASSWORD 'senha123';
GRANT ALL PRIVILEGES ON DATABASE seapass_db TO seapass_user;

yaml
Copiar código

---

### ✅ 4.6 Criar arquivo `.env`

DATABASE_URL=postgresql://seapass_user:senha123@localhost:5432/seapass_db
PORT=4000

yaml
Copiar código

---

### ✅ 4.7 Testar banco

python test_db.py

yaml
Copiar código

---

### ✅ 4.8 Rodar backend

python main.py

css
Copiar código

Servidor disponível em:

http://localhost:4000