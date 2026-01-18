# biblioteca
sistema de biblioteca 

estrutura do back-end:

src/
 ├── books/
 │    ├── book.controller == recebe os pedidos e retorna a resposta (ex: pedidos para listar livros)
 │    ├── book.service == define o que pode e nao pode ser feito com o livro
 │    ├── book.repository == são as ações relacionadas ao livro no bd (ex:criar,buscar,listar)
 │    └── book.model == define o modelo do livro e suas caracteristicas
 │
 ├── users/
 │    ├── user.controller == recebe os pedidos e retorna a resposta (ex: pedidos para listar usuarios)
 │    ├── user.service == define o que o usuario pode e nao pode fazer
 │    ├── user.repository == são as ações relacionadas ao usuario no bd (ex:criar,buscar,listar)
 │    └── user.model == define o modelo do usuario e suas caracteristicas
 │
 ├── loans/
 │    ├── loan.controller == recebe os pedidos e retorna a resposta (ex: pedidos para listar emprestimos)
 │    ├── loan.service == define o que pode e nao pode ser feito em um emprestimo
 │    ├── loan.repository == são as ações relacionadas ao emprestimo no bd (ex:criar,buscar,listar)
 │    └── loan.model == define o modelo do emprestimo e suas caracteristicas
 │
 ├── routes/ == é onde estao as rotas que serao consumidas pelo front, e ele redireciona para um dos .controller
 ├── middlewares/ == verifica e autentica as coisas antes do .controller (ex: verifica login,valida dados e etc)
 ├── config/ == onde fica as configurações do sistema (ex: configuração do banco, variaveis de ambiente, porta do servidor e etc)
 └── utils/ == guarda funções uteis para as funções do sistema e autenticação de dados(ex: validar email, criptografar senhas, gerar codigos de emprestimo, conversão de data e etc)