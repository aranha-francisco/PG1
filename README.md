# Princípios de Gestão: site de estudo

Site de estudo de Princípios de Gestão (LCDG, 1.º ano, Aulas 1–14): resumos, modelos, autores, flashcards e quiz. Funciona offline depois da primeira visita e pode ser instalado no ecrã principal. Publicado em **gestao.aranhastudio.pt** (Cloudflare Worker com static assets).

## Estrutura

```
src/content/aulas/aulaNN.ts   conteúdo de cada aula (resumo, conceitos, ideias, cuidados, caso, flashcards, quiz)
src/content/modelos.ts        cartões de modelos
src/content/autores.ts        autores
src/content/types.ts          formato do conteúdo
src/screens/                  ecrãs da app
scripts/check-content.ts      validação do conteúdo (corre antes de cada build)
source/                       slides das aulas (só local, fora do git)
```

## Editar conteúdo

Edita o ficheiro da aula e corre `npm run check`. Regras: 5 ideias por aula, pelo menos 15 perguntas, cada opção com explicação (a da certa começa por "Certo"), ids únicos que nunca mudam (o progresso guardado depende deles) e português europeu.

## Gerar e publicar

```
npm install
npm run dev        # desenvolvimento
npm run deploy     # build + wrangler deploy
```
