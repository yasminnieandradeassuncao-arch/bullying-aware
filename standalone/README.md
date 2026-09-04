# Imersão Bullying – Versão Portátil

Versão 100% front-end, sem build, sem backend, sem instalação.
Abrir com duplo clique no navegador.

## Como usar

1. Duplo clique em `index.html` (ou arraste para o navegador).
2. Pronto. Funciona offline, sem internet.

> Alguns navegadores bloqueiam `file://` por segurança. Se algo não
> carregar, rode um servidor local rápido:
>
> ```bash
> # dentro da pasta standalone/
> python3 -m http.server 8080
> ```
>
> e abra `http://localhost:8080`.

## Estrutura

```
standalone/
├── index.html              # entrada HTML
├── styles.css              # tema escuro Apple/visionOS + glassmorphism
├── data.js                 # todo o conteúdo educativo (window.APP_DATA)
├── app.js                  # aplicação React (UMD, sem JSX/build)
├── README.md
└── vendor/
    ├── react.production.min.js
    └── react-dom.production.min.js
```

## Telas (rotas por hash)

- `#/` — Wizard de 4 etapas (boas-vindas → tópicos → questionário → login fake)
- `#/home` — Landing page (rola normalmente, menu fixo)
- `#/ia` — Chat da IA Educacional (interface demonstrativa)
- `#/minigames` — Quiz, Verdadeiro/Falso, Melhor Atitude, Complete a Situação

## Stack

- React 18 (UMD, cópia local)
- HTML + CSS + JavaScript puro (sem JSX, sem bundler)
- Sem autenticação real, sem banco de dados, sem APIs externas
