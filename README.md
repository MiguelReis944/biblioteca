# biblioteca
sistema de biblioteca 

## Estrutura do back-end

```text
src/
├── livros/
│   ├── livro.controller   → recebe os pedidos e retorna a resposta
│   ├── livro.service      → define o que pode e não pode ser feito com o livro
│   ├── livro.repository   → ações relacionadas ao livro no banco de dados
│   └── livro.model        → modelo do livro e suas características
│
├── usuarios/
│   ├── usuario.controller   → recebe os pedidos e retorna a resposta
│   ├── usuario.service      → define o que o usuário pode e não pode fazer
│   ├── usuario.repository   → ações relacionadas ao usuário no banco de dados
│   └── usuario.model        → modelo do usuário e suas características
│
├── emprestimos/
│   ├── emprestimo.controller   → recebe os pedidos e retorna a resposta
│   ├── emprestimo.service      → regras de negócio do empréstimo
│   ├── emprestimo.repository   → ações relacionadas ao empréstimo no banco
│   └── emprestimo.model        → modelo do empréstimo e suas características
│
├── routes/               → define as rotas da API
├── middlewares/          → validações antes dos controllers
├── config/               → configurações do sistema
└── utils/                → funções utilitárias do sistema
```


Sistema de criptografia de senha via bcrypt


Banco de dados MySQL


Criptografia de id_publico com UUID()