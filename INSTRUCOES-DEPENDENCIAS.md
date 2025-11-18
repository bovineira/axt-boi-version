# Instruções para Instalar Dependências

## ⚠️ PROBLEMA: Node.js não está instalado!

O erro `npm não é reconhecido` significa que o **Node.js não está instalado** no seu computador.

O `npm` vem junto com o Node.js, então você precisa instalar o Node.js primeiro!

---

## 🎯 SOLUÇÃO: Instalar o Node.js

### **PASSO 1: Baixar o Node.js**

1. Abra seu navegador e acesse:
   ```
   https://nodejs.org/
   ```

2. Clique no botão **LTS** (versão recomendada - botão verde)

3. O download começará automaticamente (arquivo `.msi`)

---

### **PASSO 2: Instalar o Node.js**

1. **Localize o arquivo baixado** (geralmente na pasta Downloads)

2. **Clique duas vezes** no arquivo para iniciar a instalação

3. **Siga o assistente de instalação:**
   - Clique em **"Next"** na tela de boas-vindas
   - Aceite os termos e clique **"Next"**
   - **MANTENHA o caminho padrão** e clique **"Next"**
   - **IMPORTANTE:** Na tela "Custom Setup", certifique-se de que está marcado:
     - ✅ **"Add to PATH"** (adicionar ao PATH)
   - Clique **"Next"** até chegar em **"Install"**
   - Clique em **"Install"** e aguarde
   - Quando terminar, clique em **"Finish"**

---

### **PASSO 3: Verificar se foi instalado**

1. **FECHE TODOS os terminais/PowerShell abertos** (muito importante!)

2. **Abra um NOVO PowerShell:**
   - Pressione `Windows + R`
   - Digite `powershell` e pressione Enter

3. **Digite os comandos abaixo** (um de cada vez):

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

Isso vai instalar todas as dependências do projeto, incluindo:
- Next.js, React, Tailwind CSS, Framer Motion
- **clsx** e **tailwind-merge** (necessários para a nebulosa)

⏳ **Aguarde alguns minutos** enquanto as dependências são instaladas.

---

## 📦 Dependências Específicas da Nebulosa

As dependências necessárias para o componente de Nebulosa são:
- **clsx**: Utilitário para combinar classes CSS condicionalmente
- **tailwind-merge**: Mescla classes do Tailwind CSS de forma inteligente

Elas serão instaladas automaticamente quando você executar `npm install`.

---

## ✅ Após instalar

Após executar `npm install`, o componente `Nebula` estará totalmente funcional e você poderá ver a nebulosa interativa com efeito de buraco negro na hero section do site!

---

## 🔧 Se ainda tiver problemas

### ❌ Erro: "node não é reconhecido" após instalar
- **Solução:** Feche TODOS os terminais e abra um novo
- Se não funcionar, **reinicie o computador**

### ❌ Erro: "npm não é reconhecido"
- O npm vem junto com o Node.js
- Se aparecer esse erro, reinstale o Node.js e certifique-se de marcar "Add to PATH"

---

## 📝 RESUMO RÁPIDO

1. ✅ Baixar Node.js de https://nodejs.org/ (versão LTS)
2. ✅ Instalar (marcar "Add to PATH")
3. ✅ Fechar e abrir novo terminal
4. ✅ `cd` até a pasta do projeto
5. ✅ `npm install`
6. ✅ Pronto! A nebulosa funcionará automaticamente

