# Gerador de Senhas - Frontend

Este repositório contém o frontend do projeto de gerador de senhas, uma **aplicação web** interativa construída com **Angular**.

Ele oferece uma interface de usuário para o nosso [Backend API](https://password-generator-backend-xiaa.onrender.com) (substitua pelo seu URL do Render), permitindo que os usuários configurem e gerem senhas seguras.

---

### Configuração da API

A aplicação se comunica com a nossa API de backend. Para que funcione localmente, você precisa ter o backend rodando ou configurar a URL da API no arquivo `src/app/password-api.service.ts`.

A URL da API no seu código deve apontar para o seu backend, seja ele local (`http://localhost:8080`) ou em produção (no Render).

---

### Servidor de Desenvolvimento

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve