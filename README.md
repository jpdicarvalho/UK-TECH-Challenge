# GameHub - Frontend

Este repositório contém o **frontend de uma plataforma de hub de jogos**, desenvolvida com **React + Vite** e estilização feita inteiramente com **CSS puro**.

A proposta da aplicação é apresentar uma interface dinâmica, moderna e responsiva onde usuários possam visualizar jogos em destaque, jogos mais jogados, recomendações personalizadas e outros tipos de conteúdo visual relacionados ao universo gamer.

## Funcionalidades implementadas

- Seção de jogos em destaque com interação visual e seleção dinâmica
- Carrosséis de jogos com autoplay e interação manual
- Recomendações personalizadas com informações detalhadas
- Layout responsivo para diferentes tamanhos de tela
- Componente de recompensa com destaque para ações do usuário
- Rodapé institucional com informações e links úteis

## Tecnologias utilizadas

- **React** com Vite
- **CSS Puro** para estilização, sem frameworks de UI
- **SwiperJS** para implementação dos carrosséis
- **React Icons** para uso de ícones

## Boas práticas aplicadas

Durante o desenvolvimento, foram seguidas diversas boas práticas de engenharia de software, com foco em:

- **Organização em componentes reutilizáveis**
- **Separação de responsabilidades**
- **Aplicação dos princípios do SOLID sempre que possível**
- **Uso de código limpo (Clean Code)**
- **Estilização responsiva adaptada para diferentes resoluções**
- Estrutura de pastas modular para facilitar manutenção e escalabilidade
- Boas práticas de semântica HTML e acessibilidade

src/
├── assets/                 # Imagens estáticas e ícones
├── componentes/            # Componentes reutilizáveis
├── data/                   # Dados mockados para exibição
├── pages/                  # Página principal da aplicação
├── styles/                 # Arquivos CSS separados por componente
└── main.jsx                # Entrada da aplicação

## Como Rodar o Projeto Localmente?

Antes de começar, verifique se sua máquina possui o seguinte pré-requisito instalado:  

 - **[Node.js](https://nodejs.org/pt)**

Verifique com o comando:  
  ```sh
  node -v
  ````

Com a etapa anterior concluída, siga os seguintes passos: 

**1️. Clonar o Repositório**

Abra um terminal e execute:  
  ```sh
  git clone https://github.com/jpdicarvalho/UK-TECH-Challenge.git
  ````
Em seguida, acesse o diretório que contém o projeto  
  ````sh
  cd UK-TECH-Challenge
  ````
Depois, para acessar a aplicação, use:
  ````sh
   http://localhost:5173
  ````

## Considerações finais

A aplicação foi construída com atenção aos detalhes visuais, desempenho e organização do código, visando uma base sólida e escalável para futuras funcionalidades. Toda a interface foi pensada para entregar uma experiência agradável ao usuário, com carrosséis animados, seleção de jogos, informações claras e transições suaves.

Este projeto representa o frontend da plataforma, mas está preparado para integração com serviços externos ou APIs REST caso seja necessário no futuro.

---
