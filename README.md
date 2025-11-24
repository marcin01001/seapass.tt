#  SeaPass — Documentação do Front-End

---

##  1. Tecnologias Utilizadas

O front-end do SeaPass foi desenvolvido utilizando:

###  Tecnologias Base
- **HTML**
- **CSS**
- **JavaScript**

###  Estrutura Modular
A aplicação possui organização por páginas, cada uma com seus próprios arquivos.

###  Arquivos Globais
- **CSS** — para tema escuro
- **JavaScript** — para ativação do modo noturno

---

##  2. Estrutura das Telas

###  2.1 Tela de Login e Cadastro
- Permite entrar ou criar conta
- Campos: e-mail e senha
- Link para registro

---

###  2.2 Tela Inicial (Home)
- Primeira tela após login
- Navegação para:
  - pesquisa
  - visualização de hotéis

---

###  2.3 Tela de Detalhes do Hotel
- Imagem principal
- Nome e endereço
- Comodidades exibidas
- Botão para avançar para reserva

---

###  2.4 Tela de Reserva
- Exibição de avaliações
- Três opções de quarto:
  - básico
  - intermediário
  - superior
- Seleção de:
  - datas
  - quantidade de hóspedes

---

###  2.5 Tela de Reserva Concluída
- Resumo da reserva
- Confirmação visual e objetiva

---

###  2.6 Tela de Configurações
- Alternância entre tema claro/escuro
- Ajuste de tamanho da fonte

---

##  3. Melhorias Implementadas na Nova Versão

###  3.1 Reestruturação da Interface
Interface reorganizada com navegação mais intuitiva.

---

###  3.2 Inclusão da Tela de Detalhes do Hotel
Nova página exibindo informações completas e imagens.

---

###  3.3 Novo Sistema de Reserva
Processo dividido em etapas claras e guiadas.

---

###  3.4 Tela de Confirmação Estruturada
Confirmação final mais organizada e compreensível.

---

###  3.5 Implementação do Modo Noturno
Tema escuro aplicado em todas as telas com consistência visual.


# SeaPass — Documentação do Back-End


> Documentação passo a passo para configurar, rodar e entender o backend do projeto SeaPass. Inclui todas as ferramentas utilizadas, comandos de terminal desde a criação de pastas até execução, exemplos de código e notas para produção.

---

## 1. Resumo do projeto

O backend do SeaPass é uma API REST construída em **Python** (ex.: Flask ou FastAPI). Ela expõe endpoints que o front-end consome (JSON). O backend também conecta a um banco de dados (ex.: PostgreSQL) para persistência.

> Esta documentação foca apenas no backend: criação do projeto, instalação, conexão com o banco e execução local.

---

## 2. Estrutura Real do Projeto

```
seapass-backend-main/
│
├── app/
│   ├── config/
│   │   └── db_config.py
│   ├── models/
│   │   ├── __init__.py
│   │   └── models.py
│   ├── routes/
│   │   ├── __init__.py
│   │   └── main_routes.py
│   └── services/
│       └── __init__.py
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
```

---

## 3. Ferramentas e dependências utilizadas

**Linguagem / Framework**

* Python 3.10+ (recomendado)
* Flask (ou FastAPI; abaixo uso exemplos com Flask)

****Banco de dados**

* PostgreSQL — driver: `psycopg2-binary`

## 4. Instalação e Configuração do Ambiente

### 4.1 Instalar Python 3.10+

Baixe em python.org e marque "Add Python to PATH".

### 4.2 Criar e ativar ambiente virtual

Windows:

```
python -m venv venv
venv\Scripts\activate
```

Linux/Mac:

```
python3 -m venv venv
source venv/bin/activate
```

### 4.3 Instalar dependências

```
pip install -r requirements.txt
```

### 4.4 Instalar PostgreSQL

Instalar PostgreSQL Server + Command Line Tools.
Testar:

```
psql --version
```

### 4.5 Criar banco e usuário

```
psql -U postgres
```

SQL:

```
CREATE DATABASE seapass_db;
CREATE USER seapass_user WITH ENCRYPTED PASSWORD 'senha123';
GRANT ALL PRIVILEGES ON DATABASE seapass_db TO seapass_user;
```

### 4.6 Criar .env

```
DATABASE_URL=postgresql://seapass_user:senha123@localhost:5432/seapass_db
PORT=4000
```

### 4.7 Testar banco

```
python test_db.py
```

### 4.8 Rodar backend

```
python main.py
```

Servidor em `http://localhost:4000`.
