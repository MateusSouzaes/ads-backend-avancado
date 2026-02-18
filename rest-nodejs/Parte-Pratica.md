# Parte C — Implementação Prática

## 💻 O Servidor
Foi desenvolvido um servidor utilizando **Node.js** e **Express**, configurado com middlewares de segurança (Helmet e CORS) e suporte a variáveis de ambiente.

### Endpoint Principal
* **Rota:** `GET /hello`
* **Resposta:** `{ "message": "API REST com Node.js funcionando!" }`

## 🧪 Evidências de Teste (Princípio Stateless)

Foram realizadas chamadas consecutivas para validar a independência das requisições. Como o servidor não armazena estado, cada resposta é processada como uma nova transação.

### Execução
![Print Terminal](/assets/Log-Terminal.png)