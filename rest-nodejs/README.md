# Atividade: Introdução à Arquitetura REST e Node.js

Este repositório reúne a resolução da atividade prática e teórica sobre arquitetura REST e Node.js. O objetivo é demonstrar, na prática, a construção de uma API REST simples que respeite princípios como statelessness e responda ao requisito da Parte C.

**Importante:** Este repositório foi criado como entrega da disciplina — use-o como referência para a atividade descrita abaixo.

## O que a aplicação faz
- **Endpoints principais:**
	- `GET /hello` — retorna uma mensagem JSON indicando que a API está funcionando.
	- `GET /health` — healthcheck simples com uptime.
- Existe suporte a duas implementações no diretório `src`:
	- `src/app.express.js` — implementação usando Express.
	- `src/server.fastify.js` — implementação usando Fastify (com schema de resposta).

## Como executar (passo a passo)
1. Instale dependências:

```bash
npm install
```

2. Executar com Express (padrão):

```bash
node src/app.express.js
```

3. Executar com Fastify:

```bash
node src/server.fastify.js
```

4. Teste o endpoint `GET /hello` (exemplo com `curl`):

```bash
curl http://localhost:3000/hello
```

Resposta esperada (Express):

```json
{ "message": "API REST com Node.Js funcionado!" }
```

Resposta esperada (Fastify):

```json
{ "message": "Hello from Fastify!" }
```

Observação: a porta padrão é `3000`, ou a que for definida em `process.env.PORT`.

## Tarefa: Introdução à Arquitetura REST e ao Node.js

### Links das resoluções:
- Teoria e Análise (Parte A e B): [Parte-Teorica.md](./Parte-Teorica.md)
- Implementação Prática (Parte C): [Parte-Pratica.md](./Parte-Pratica.md)