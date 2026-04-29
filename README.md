### Login and Register Page
Página front-end (estática) com **modal de Login e Registro**, focada em UI/UX e manipulação de DOM para alternância entre formulários.

### Resumo
- **Objetivo**: demonstrar construção de interface responsiva para autenticação (login/cadastro) com microinterações e validações nativas do navegador.
- **Entregas (features)**:
  - **Header fixo** com navegação e CTA de Login.
  - **Modal (popup)** para autenticação (abrir/fechar).
  - **Alternância Login ↔ Registro** no mesmo container (animação via CSS).
  - **Campos com validação HTML5** (`required`, `type="email"`, `type="password"`).
  - **Recursos de formulário**: “Lembre de mim”, “Esqueceu a senha?”, aceite de termos (UI).
- **Competências demonstradas**:
  - **HTML semântico e acessível** (estrutura de formulários, inputs e labels).
  - **CSS moderno** (glassmorphism com `backdrop-filter`, transições, layout responsivo).
  - **JavaScript Vanilla** para interação e estado de UI (classes CSS e eventos).
  - **Organização de assets** e dependências externas de UI (ícones e fontes).

### Stack e requisitos
- **Linguagens**: HTML5, CSS3, JavaScript (ES6+).
- **Bibliotecas/serviços usados no front-end**:
  - **Ionicons** (ícones via CDN).
  - **Google Fonts (Poppins)**.
- **Persistência/Banco**: não aplicável (projeto apenas de interface, sem armazenamento).
- **Build**: não aplicável (sem pipeline de build; arquivos estáticos).
- **Requisitos**: navegador moderno com suporte a CSS `backdrop-filter` (degradação aceitável quando indisponível).

### Arquitetura
- **`index.html`**: estrutura da página, header e marcação dos formulários (Login/Registro) dentro do modal (`.wrapper`).
- **`style.css`**: tema visual e layout (header, modal, formulários, transições); background em `images/forest.jpg`.
- **`script.js`**: comportamento do modal e alternância de formulários via classes:
  - `.active-popup` (exibe/oculta o modal)
  - `.active` (troca entre Login e Registro)
- **`images/`**: assets estáticos (background `forest.jpg`).

### Modelos
Como é um projeto de UI (sem backend), os “modelos” são os dados coletados nos formulários:
- **Login**
  - **E-mail** (campo `email`)
  - **Senha** (campo `password`)
  - **Lembre de mim** (checkbox)
- **Registro**
  - **Username** (texto)
  - **E-mail** (campo `email`)
  - **Senha** (campo `password`)
  - **Aceite de termos** (checkbox)
