# 🚀 Como Fazer Deploy na Vercel

## ✅ Sim! Você pode ver o site na Vercel!

A Vercel é a plataforma oficial do Next.js e o deploy é **muito simples e gratuito**.

---

## 📋 PRÉ-REQUISITOS

1. ✅ Conta no GitHub (gratuita)
2. ✅ Conta na Vercel (gratuita)
3. ✅ Projeto funcionando localmente (opcional, mas recomendado)

---

## 🎯 PASSO A PASSO COMPLETO

### **PASSO 1: Criar repositório no GitHub**

1. Acesse: https://github.com/
2. Faça login (ou crie uma conta se não tiver)
3. Clique no botão **"+"** no canto superior direito → **"New repository"**
4. Preencha:
   - **Repository name:** `site-google-ads` (ou o nome que preferir)
   - **Description:** (opcional) "Site Nebula Contingency Ads"
   - **Visibility:** Escolha **Public** ou **Private**
   - **NÃO marque** "Add a README file" (já temos um)
   - **NÃO marque** "Add .gitignore" (já temos um)
5. Clique em **"Create repository"**

---

### **PASSO 2: Conectar o projeto ao GitHub**

No PowerShell, na pasta do projeto, execute:

```powershell
# Inicializar git (se ainda não tiver)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - Site Nebula Contingency Ads"

# Adicionar o repositório remoto (substitua SEU-USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU-USUARIO/site-google-ads.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

**Nota:** Se for a primeira vez usando git, você pode precisar configurar:
```powershell
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

---

### **PASSO 3: Criar conta na Vercel**

1. Acesse: https://vercel.com/
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"** (mais fácil)
4. Autorize a Vercel a acessar seu GitHub
5. Complete o cadastro

---

### **PASSO 4: Fazer Deploy na Vercel**

#### **Opção A: Deploy Automático (Recomendado)**

1. No dashboard da Vercel, clique em **"Add New..."** → **"Project"**
2. Você verá seus repositórios do GitHub
3. **Clique em "Import"** no repositório `site-google-ads`
4. A Vercel detectará automaticamente que é um projeto Next.js
5. **NÃO precisa alterar nada** nas configurações (deixe tudo padrão)
6. Clique em **"Deploy"**
7. ⏳ Aguarde 2-3 minutos enquanto o build acontece
8. ✅ Quando terminar, você verá: **"Congratulations! Your project has been deployed."**
9. Clique no link fornecido (algo como: `site-google-ads.vercel.app`)

🎉 **Seu site está no ar!**

#### **Opção B: Via Vercel CLI (Linha de Comando)**

Se preferir usar o terminal:

```powershell
# Instalar Vercel CLI globalmente
npm install -g vercel

# Fazer login
vercel login

# Deploy (na pasta do projeto)
vercel

# Siga as instruções na tela
# Quando perguntar, pressione Enter para aceitar os padrões
```

---

## 🔄 Deploy Automático (Atualizações Futuras)

**A melhor parte:** Toda vez que você fizer `git push` para o GitHub, a Vercel **automaticamente** fará um novo deploy!

1. Faça alterações no código
2. Commit e push:
   ```powershell
   git add .
   git commit -m "Descrição da alteração"
   git push
   ```
3. A Vercel detecta automaticamente e faz o deploy
4. Em 2-3 minutos, seu site estará atualizado!

---

## 🌐 Domínio Personalizado (Opcional)

Você pode usar seu próprio domínio:

1. No dashboard da Vercel, vá em **Settings** → **Domains**
2. Adicione seu domínio (ex: `meusite.com.br`)
3. Siga as instruções para configurar o DNS
4. A Vercel fornece certificado SSL gratuito (HTTPS)

---

## ⚙️ Configurações Importantes

### **Variáveis de Ambiente**

Se precisar adicionar variáveis de ambiente (como API keys):

1. No dashboard da Vercel, vá em **Settings** → **Environment Variables**
2. Adicione as variáveis necessárias
3. Faça um novo deploy para aplicar

### **Build Settings**

A Vercel detecta automaticamente Next.js, mas se precisar ajustar:

- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (padrão)
- **Output Directory:** `.next` (padrão)
- **Install Command:** `npm install` (padrão)

---

## 📊 Monitoramento e Analytics

A Vercel oferece gratuitamente:
- ✅ Analytics de visitas
- ✅ Logs de erro
- ✅ Performance metrics
- ✅ Preview deployments (para cada branch/pull request)

---

## 🔧 Solução de Problemas

### ❌ Erro no Build
- Verifique os logs na Vercel
- Certifique-se de que `npm install` funciona localmente
- Verifique se todas as dependências estão no `package.json`

### ❌ Site não carrega
- Verifique se o build foi bem-sucedido
- Veja os logs de erro no dashboard da Vercel
- Certifique-se de que não há erros no código

### ❌ Imagens não aparecem
- Se usar `next/image`, certifique-se de configurar os domínios permitidos
- Ou use imagens de URLs externas

---

## 💰 Planos da Vercel

- **Hobby (Gratuito):**
  - ✅ Deploy ilimitado
  - ✅ Domínios personalizados
  - ✅ SSL gratuito
  - ✅ 100GB de bandwidth/mês
  - ✅ Perfeito para projetos pessoais

- **Pro ($20/mês):**
  - Tudo do Hobby +
  - Analytics avançado
  - Mais bandwidth
  - Suporte prioritário

**Para este projeto, o plano gratuito é mais que suficiente!**

---

## 📝 RESUMO RÁPIDO

1. ✅ Criar repositório no GitHub
2. ✅ Fazer `git push` do projeto
3. ✅ Criar conta na Vercel
4. ✅ Conectar GitHub → Vercel
5. ✅ Clicar em "Deploy"
6. ✅ Aguardar 2-3 minutos
7. 🎉 Site no ar!

---

## 🎯 Vantagens do Deploy na Vercel

✅ **Gratuito** para projetos pessoais
✅ **Deploy automático** a cada push
✅ **SSL/HTTPS** automático
✅ **CDN global** (site rápido no mundo todo)
✅ **Preview deployments** para testar antes de publicar
✅ **Otimizado para Next.js** (feito pela mesma equipe)
✅ **Fácil de usar** (interface simples)

---

## 🔗 Links Úteis

- Vercel: https://vercel.com/
- GitHub: https://github.com/
- Documentação Vercel: https://vercel.com/docs
- Documentação Next.js: https://nextjs.org/docs

---

**Pronto! Seu site estará acessível para qualquer pessoa na internet! 🌐**

