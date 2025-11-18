# 📦 Como Instalar o Node.js e Rodar o Projeto

## ⚠️ PROBLEMA IDENTIFICADO
O Node.js não está instalado no seu computador. É necessário instalá-lo primeiro.

---

## 🎯 PASSO A PASSO COMPLETO

### **PASSO 1: Baixar o Node.js**

1. Abra seu navegador e acesse:
   ```
   https://nodejs.org/
   ```

2. Você verá dois botões grandes:
   - **LTS** (recomendado) - Versão estável
   - **Current** - Versão mais recente
   
   **👉 Clique no botão LTS (versão recomendada)**

3. O download começará automaticamente (arquivo `.msi`)

---

### **PASSO 2: Instalar o Node.js**

1. **Localize o arquivo baixado** (geralmente na pasta Downloads)

2. **Clique duas vezes** no arquivo para iniciar a instalação

3. **Siga o assistente de instalação:**
   - Clique em **"Next"** na tela de boas-vindas
   - Aceite os termos (marque "I accept...") e clique **"Next"**
   - **MANTENHA o caminho padrão** (`C:\Program Files\nodejs\`) e clique **"Next"**
   - **IMPORTANTE:** Na tela "Custom Setup", certifique-se de que está marcado:
     - ✅ **"Add to PATH"** (adicionar ao PATH)
   - Clique **"Next"** até chegar em **"Install"**
   - Clique em **"Install"** e aguarde a instalação
   - Quando terminar, clique em **"Finish"**

---

### **PASSO 3: Verificar se foi instalado corretamente**

1. **FECHE TODOS os terminais/PowerShell abertos** (importante!)

2. **Abra um NOVO PowerShell** (ou CMD):
   - Pressione `Windows + R`
   - Digite `powershell` e pressione Enter
   - OU clique com botão direito no menu Iniciar → "Windows PowerShell"

3. **Digite os comandos abaixo** (um de cada vez, pressionando Enter):

   ```powershell
   node --version
   ```
   
   Deve aparecer algo como: `v20.x.x` ou `v18.x.x`
   
   ```powershell
   npm --version
   ```
   
   Deve aparecer algo como: `10.x.x` ou `9.x.x`

   ✅ **Se aparecerem números de versão, está tudo certo!**

   ❌ **Se ainda der erro, reinicie o computador e tente novamente**

---

### **PASSO 4: Instalar as dependências do projeto**

No PowerShell, navegue até a pasta do projeto:

```powershell
cd "c:\Users\Carlos Alencar\Desktop\PROJETO SIMAS\AXTRON NOSSA\site-google-ads"
```

Depois execute:

```powershell
npm install
```

⏳ **Aguarde alguns minutos** enquanto as dependências são instaladas.
Você verá muitas linhas aparecendo. Isso é normal!

Quando terminar, você verá algo como:
```
added 500 packages in 2m
```

---

### **PASSO 5: Rodar o servidor**

Ainda no PowerShell, execute:

```powershell
npm run dev
```

Você verá uma mensagem como:

```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

✅ **Quando aparecer "Ready", o servidor está rodando!**

---

### **PASSO 6: Abrir no navegador**

1. Abra seu navegador (Chrome, Edge, Firefox, etc.)

2. Na barra de endereços, digite:
   ```
   http://localhost:3000
   ```

3. Pressione Enter

🎉 **O site deve aparecer!**

---

## 🔧 SOLUÇÃO DE PROBLEMAS

### ❌ Erro: "node não é reconhecido" após instalar
- **Solução:** Feche TODOS os terminais e abra um novo
- Se não funcionar, **reinicie o computador**

### ❌ Erro: "npm não é reconhecido"
- O npm vem junto com o Node.js
- Se aparecer esse erro, reinstale o Node.js e certifique-se de marcar "Add to PATH"

### ❌ Erro: "Porta 3000 já está em uso"
- Alguém já está usando a porta 3000
- Feche outros programas ou use outra porta:
  ```powershell
  npm run dev -- -p 3001
  ```
- Depois acesse: `http://localhost:3001`

### ❌ Erro ao instalar dependências
- Tente limpar o cache:
  ```powershell
  npm cache clean --force
  npm install
  ```

### ❌ O site não carrega no navegador
- Verifique se o servidor está rodando (deve aparecer "Ready" no terminal)
- Certifique-se de acessar `http://localhost:3000` (não `https://`)
- Tente usar `127.0.0.1:3000` no lugar de `localhost:3000`

---

## 📝 RESUMO RÁPIDO

1. ✅ Baixar Node.js de https://nodejs.org/ (versão LTS)
2. ✅ Instalar (marcar "Add to PATH")
3. ✅ Fechar e abrir novo terminal
4. ✅ `cd` até a pasta do projeto
5. ✅ `npm install`
6. ✅ `npm run dev`
7. ✅ Abrir `http://localhost:3000` no navegador

---

## 💡 DICA

**Mantenha o terminal aberto enquanto estiver vendo o site!**
Se fechar o terminal, o servidor para e o site não funciona mais.

Para parar o servidor, pressione `Ctrl + C` no terminal.

