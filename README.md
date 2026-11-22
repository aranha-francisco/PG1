# Princípios de Gestão: site de estudo

Site de estudo de Princípios de Gestão (LCDG, 1.º ano, Aulas 1–14): resumos, modelos, autores, flashcards e quiz. Funciona offline depois da primeira visita e pode ser instalado no ecrã principal. Publicado em **gestao.aranhastudio.pt** (Cloudflare Worker com static assets).

## Estrutura

Construído à volta do documento do professor «Resumo Temas por Aula» (temas, 70 perguntas de escolha múltipla com chave, 24 perguntas de resposta aberta).

```
src/content/temas.ts       um tema por cada tópico da lista do professor (essencial, pontos, diagrama, exemplo, armadilha, também sai)
src/content/professor.ts   as 70 perguntas do professor, texto e ordem A–D do documento, chave oficial
src/content/abertas.ts     as 24 perguntas abertas com resposta modelo
src/content/extra.ts       «Mais treino»: 5 perguntas nossas por aula, só sobre os temas da lista
src/content/cartoes.ts     flashcards dos temas
src/content/indice.ts      títulos das aulas · blocos.ts: agrupamento
src/screens/               Início, Temas, Escolha, Abertas, Cartões, Quiz, Simulado
scripts/check-content.ts   validação do conteúdo (corre antes de cada build)
source/                    slides das aulas (só local, fora do git)
```

## Editar conteúdo

Edita o ficheiro e corre `npm run check`. O check confirma as 70 perguntas contra a chave do professor, as 24 abertas, explicações em todas as opções (a da certa começa por "Certo"), ids únicos (o progresso guardado depende deles) e português europeu.

## Gerar e publicar

```
npm install
npm run dev        # desenvolvimento
npm run deploy     # build + wrangler deploy
```
