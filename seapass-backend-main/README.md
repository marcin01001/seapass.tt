Documentação do SeaPass — Backend
1. Tecnologias Utilizadas

O backend do SeaPass foi desenvolvido utilizando:

Linguagem e Framework

Python 3.10+

Flask (API REST com respostas em JSON)

Banco de Dados

PostgreSQL

Driver de conexão: psycopg2-binary

Ferramentas Complementares

Ambiente virtual (venv)

Arquivo .env para variáveis de ambiente

requirements.txt para dependências

2. Estrutura do Projeto

Padrão organizado por módulos:

app/
├ config (configuração do banco)
├ models (modelos e ORM)
├ routes (rotas da API)
└ services (lógica de serviço)


Arquivos adicionais:

main.py — inicialização do servidor

database.py — conexão com PostgreSQL

create_tables.py — criação das tabelas

test_db.py — teste da conexão

.env — credenciais e porta

.gitignore — controle de versão

3. Funcionalidade Geral da API

3.1 Estrutura REST
Endpoints retornam e recebem JSON.

3.2 Comunicação com Front-End
Requisitado pelo SeaPass Web.

3.3 Persistência de Dados
Conexão direta com PostgreSQL para armazenamento.

4. Passos de Instalação

4.1 Instalar Python 3.10+
Com opção "Add to PATH".

4.2 Criar ambiente virtual

python -m venv venv


4.3 Ativar ambiente virtual
Windows:

venv\Scripts\activate


Linux/Mac:

source venv/bin/activate


4.4 Instalar dependências

pip install -r requirements.txt

5. Configuração do Banco de Dados

5.1 Instalar PostgreSQL
Incluindo Console Tools

5.2 Criar banco e usuário

CREATE DATABASE seapass_db;
CREATE USER seapass_user WITH ENCRYPTED PASSWORD 'senha123';
GRANT ALL PRIVILEGES ON DATABASE seapass_db TO seapass_user;


5.3 Configurar .env

DATABASE_URL=postgresql://seapass_user:senha123@localhost:5432/seapass_db
PORT=4000

6. Execução do Backend

6.1 Testar conexão com banco

python test_db.py


6.2 Rodar servidor

python main.py


6.3 Endereço padrão
http://localhost:4000