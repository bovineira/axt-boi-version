# 📁 Pasta de Imagens e Assets

Esta pasta é para armazenar imagens e outros arquivos estáticos do site.

## 📝 Como usar

### Com Next.js Image Component (Recomendado)

```tsx
import Image from 'next/image'

<Image 
  src="/nome-da-imagem.jpg" 
  alt="Descrição da imagem"
  width={800}
  height={600}
/>
```

### Com tag HTML img

```tsx
<img src="/nome-da-imagem.jpg" alt="Descrição da imagem" />
```

## 📂 Estrutura sugerida

Você pode organizar suas imagens em subpastas:

```
public/
  ├── images/
  │   ├── hero/
  │   ├── products/
  │   ├── logos/
  │   └── icons/
  ├── favicon.ico
  └── ...
```

## ⚠️ Importante

- Todos os arquivos nesta pasta são públicos e acessíveis via URL
- Use nomes de arquivo descritivos e sem espaços
- Otimize as imagens antes de adicionar (reduza o tamanho do arquivo)
- Formatos recomendados: JPG, PNG, WebP, SVG


