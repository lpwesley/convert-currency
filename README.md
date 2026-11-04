# Convert · Conversor de Moedas

![Guiado com melhorias](https://img.shields.io/badge/🎓_Projeto-Guiado_+_Melhorias_próprias-8257e5?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> **🎓 Projeto guiado com melhorias próprias:** a base foi desenvolvida acompanhando as aulas da **formação Full Stack da [Rocketseat](https://www.rocketseat.com.br/)**. Depois, por conta própria, melhorei organização, responsividade, acessibilidade e validação dos dados (detalhes abaixo).

Aplicação web que converte valores em dólar (USD), euro (EUR) e libra (GBP) para real (BRL), com formatação monetária no padrão brasileiro. Construída com HTML, CSS e JavaScript puro.

🔗 **[Ver projeto online](https://lpwesley.github.io/convert-currency/)**

## 📸 Prévia

![Prévia do conversor de moedas Convert](./img/preview-convert.png)

## 🛠️ Tecnologias

- **HTML5:** estrutura e formulário
- **CSS3:** Flexbox, variáveis CSS e Media Queries
- **JavaScript:** manipulação do DOM, eventos e validação
- **Git e GitHub Pages:** versionamento e publicação

## ⚙️ Funcionalidades

- Conversão de USD, EUR e GBP para BRL
- Exibição da cotação usada e do resultado formatado em reais
- Validação do valor digitado pelo usuário
- Tratamento de erros durante a conversão
- Layout responsivo e navegação por teclado com foco visível

## 🚀 O que fiz além da aula

| Melhoria | O que mudou |
|---|---|
| **Organização** | Estilos divididos em arquivos por responsabilidade (`button`, `forms`, `footer`, `main`, `global`) |
| **Responsividade** | Layout refeito com abordagem mobile-first e Media Queries |
| **Acessibilidade** | Indicadores de foco visíveis e navegação completa por teclado |
| **Validação** | Expressão regular para aceitar apenas valores válidos e `try...catch` para tratar erros |

## 📚 O que pratiquei

**JavaScript**
- Seleção de elementos com `querySelector()` e `getElementById()`
- Eventos com `addEventListener()` e manipulação com `textContent` e `classList`
- Funções reutilizáveis, `switch` e conversão de tipos com `Number()`
- Formatação de moeda com `toLocaleString()`
- Validação com expressões regulares e tratamento de erros com `try...catch`

**HTML e CSS**
- Formulário semântico com `label` associado aos campos
- Flexbox, variáveis CSS e estados de foco e interação
- Separação entre estrutura, estilo e comportamento

## 📂 Estrutura

```text
convert-currency/
├── css/
│   ├── button.css
│   ├── footer.css
│   ├── forms.css
│   ├── global.css
│   ├── main.css
│   └── style.css
├── img/
├── index.html
├── scripts.js
└── README.md
```

## 💻 Como executar

Não há dependências. Basta clonar e abrir no navegador:

```bash
git clone https://github.com/lpwesley/convert-currency.git
cd convert-currency
```

Abra o `index.html` no navegador ou use a extensão **Live Server** no VS Code.

> ⚠️ As cotações são fixas no código, para fins de estudo. Não use os valores para operações reais.

## 🎓 Créditos

Projeto base proposto pela **[Rocketseat](https://www.rocketseat.com.br/)** como parte da formação Full Stack. As melhorias listadas em "O que fiz além da aula" foram feitas por mim.

---

Desenvolvido por **Wesley Lauwer** · [GitHub](https://github.com/lpwesley)
