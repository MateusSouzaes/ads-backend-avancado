# Resoluções Teóricas e de Análise

## Parte A — Teoria

### 1. API Stateless e Escalabilidade
Ser **Stateless** (sem estado) significa que cada requisição é independente e contém todas as informações necessárias para seu processamento, sem que o servidor precise armazenar o estado da sessão do cliente. Isso favorece a **escalabilidade** pois elimina a dependência de um servidor específico, permitindo o crescimento horizontal através da adição de novas instâncias que podem atender qualquer requisição.

### 2. Benefícios do uso de Cache
* **Redução de Carga:** Evita o reprocessamento de dados frequentes no servidor e consultas repetitivas ao banco de dados.
* **Aumento de Desempenho:** Entrega respostas armazenadas de forma quase instantânea, reduzindo a latência percebida pelo usuário.

### 3. Event Loop vs. Múltiplas Threads
Diferente das abordagens tradicionais que criam uma thread por requisição (consumindo muita memória), o **Node.js** utiliza uma única thread principal gerenciada pelo **Event Loop**. Ele delega operações pesadas de I/O (entrada e saída) para o sistema operacional, permitindo que a aplicação processe milhares de conexões simultâneas sem bloquear a execução.

---

## Parte B — Análise

### 1. Cenário de E-commerce
O **Node.js** lida com milhares de requisições em um e-commerce através do I/O não bloqueante, processando pedidos sem travar enquanto aguarda retornos de banco de dados ou gateways de pagamento. O princípio **Stateless** do REST permite que a carga seja distribuída entre vários servidores em paralelo (escalabilidade horizontal) sem perda de contexto do usuário.

### 2. Interface Uniforme e Times Distribuídos
A **Interface Uniforme** padroniza a comunicação via métodos HTTP e URIs, funcionando como um contrato entre as partes. Em times distribuídos, isso garante a **separação de responsabilidades**, permitindo que o time de Front-end e o time de Back-end trabalhem de forma independente e paralela, garantindo a interoperabilidade do sistema.