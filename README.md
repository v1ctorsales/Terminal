# Terminal

Interface web simulando um terminal — com várias APIs integradas, deploy pronto para Vercel.

<img width="1361" height="605" alt="image" src="https://github.com/user-attachments/assets/693a66a3-c42a-4b53-b34c-a3ae0ef89a69" />


## 🔎 Visão geral

O **Terminal** oferece uma experiência minimalista no navegador: parecida com um terminal real, mas com comandos que ativam APIs e scripts.  
Está pronto para deploy usando funções serverless na **Vercel**.

---

## ⚡ Como funciona

1. O usuário digita comandos (ex.: `help`, `about`, `open`, etc.) no terminal virtual.  
2. O sistema processa o comando e chama os endpoints em `api/`.  
3. A resposta é exibida estilizada, como se fosse a saída de um terminal real.  

---

## 📁 Estrutura do projeto + Tech Stack

```text
├── api/              # Funções serverless (Vercel Functions)
├── public/           # Arquivos estáticos (ícones, assets etc.)
├── src/              # Código da interface (JS/React e estilos)
├── package.json
└── vercel.json       # Configurações de rota/deploy da Vercel

🛠️ Tech Stack

Camada      Tecnologia
Frontend    React + JavaScript/TypeScript + CSS
Backend     Node.js com funções serverless (Vercel)
Deploy      Vercel (com vercel.json)
