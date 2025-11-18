# 🚀 Como rodar o projeto

## ⚠️ IMPORTANTE: Node.js não está instalado!

**Você precisa instalar o Node.js primeiro!** 

👉 **Veja o arquivo `INSTALAR-NODEJS.md` para instruções detalhadas passo a passo.**

---

## Passo 1: Instalar Node.js (OBRIGATÓRIO)

1. Acesse: https://nodejs.org/
2. Baixe a versão **LTS** (Long Term Support) - botão verde
3. Instale o arquivo `.msi` baixado
4. **IMPORTANTE:** Durante a instalação, certifique-se de que "Add to PATH" está marcado
5. **FECHE TODOS os terminais** e abra um novo após a instalação
6. **Reinicie o computador** se necessário

## Passo 2: Verificar se o Node.js foi instalado

Abra o PowerShell ou CMD e digite:
```bash
node --version
npm --version
```

Se aparecerem números de versão, está tudo certo! ✅

## Passo 3: Instalar as dependências do projeto

No terminal, navegue até a pasta do projeto e execute:

```bash
cd "c:\Users\Carlos Alencar\Desktop\PROJETO SIMAS\AXTRON NOSSA\site-google-ads"
npm install
```

Isso vai instalar todas as dependências necessárias (Next.js, React, Tailwind, etc.)

## Passo 4: Rodar o servidor de desenvolvimento

Depois que o `npm install` terminar, execute:

```bash
npm run dev
```

Você verá uma mensagem como:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Ready in Xs
```

## Passo 5: Abrir no navegador

Abra seu navegador e acesse:
```
http://localhost:3000
```

## ⚠️ Problemas comuns

### Erro: "node não é reconhecido"
- O Node.js não está instalado ou não está no PATH
- Reinstale o Node.js e reinicie o terminal

### Erro: "npm não é reconhecido"
- O npm vem junto com o Node.js
- Se aparecer esse erro, reinstale o Node.js

### Porta 3000 já está em uso
- Altere a porta no comando: `npm run dev -- -p 3001`
- Ou feche o programa que está usando a porta 3000

### Erro ao instalar dependências
- Tente limpar o cache: `npm cache clean --force`
- Depois execute `npm install` novamente

## 📝 Comandos úteis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm start` - Roda a versão de produção (após build)
- `npm run lint` - Verifica erros no código

