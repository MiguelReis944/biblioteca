# biblioteca
sistema de biblioteca 

## Estrutura do back-end

```text
src/
├── books/
│   ├── book.controller   → recebe os pedidos e retorna a resposta
│   ├── book.service      → define o que pode e não pode ser feito com o livro
│   ├── book.repository   → ações relacionadas ao livro no banco de dados
│   └── book.model        → modelo do livro e suas características
│
├── users/
│   ├── user.controller   → recebe os pedidos e retorna a resposta
│   ├── user.service      → define o que o usuário pode e não pode fazer
│   ├── user.repository   → ações relacionadas ao usuário no banco de dados
│   └── user.model        → modelo do usuário e suas características
│
├── loans/
│   ├── loan.controller   → recebe os pedidos e retorna a resposta
│   ├── loan.service      → regras de negócio do empréstimo
│   ├── loan.repository   → ações relacionadas ao empréstimo no banco
│   └── loan.model        → modelo do empréstimo e suas características
│
├── routes/               → define as rotas da API
├── middlewares/          → validações antes dos controllers
├── config/               → configurações do sistema
└── utils/                → funções utilitárias do sistema
```


Sistema de criptografia de senha via bcrypt
Banco de dados MySQL
Criptografia de id_publico com UUID()