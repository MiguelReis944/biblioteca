import {db} from "backend\src\config\config_bd.js"

export class Livros_repository{
    
    buscarTodosLivros(){
        return db.query(`SELECT public_id, titulo, autor, descricao FROM livros;`)
    }
    
    buscarLivroPorTitulo(pesquisa){
        return db.query(`select public_id, titulo, autor from livros where titulo like ?;`, [`%${pesquisa}%`])
    }

    buscarLivroPorGenero(pesquisa){
        return db.query(`select public_id, titulo, autor from livros where genero like ?;`, [`%${pesquisa}%`])
    }

    buscarLivroPorAutor(pesquisa){
        return db.query(`select public_id, titulo, autor from livros where autor like ?;`, [`%${pesquisa}%`])
    }
    
    livroDisponivel(public_id){
        return db.query(`select exists(select 1 from livros where public_id = ? and quantidade_disponivel>0) as disponivel;`, [public_id])
    }
    
    buscarLivroPorId(public_id){
        return db.query(`select titulo, autor, genero, descricao, ano, quantidade_total, quantidade_disponivel from livros where public_id = ?;`, [public_id])
    }
    
    verificarQuantidadeTotal(public_id){
        return db.query(`select quantidade_total from livros where public_id = ?;`, [public_id])
    }
    
    verificarQuantidadeDisponivel(public_id){
        return db.query(`select quantidade_disponivel from livros where public_id = ?;`, [public_id])
    }
    
    adicinarLivrosEstoque(public_id,numero_de_livros){
        return db.query(`update livros set quantidade_disponivel = quantidade_disponivel + ?, quantidade_total = quantidade_total + ? where public_id = ?;`, [numero_de_livros,numero_de_livros,public_id])
    }
    
    emprestarLivro(public_id){
        return db.query(`update livros set quantidade_disponivel = quantidade_disponivel - 1 where public_id = ? and quantidade_disponivel >0;`, [public_id])
    }
    
    devolverLivro(public_id){
        return db.query(`update livros set quantidade_disponivel = quantidade_disponivel + 1 where public_id = ? and quantidade_disponivel < quantidade_total;`, [public_id])
    }
    
    deletarLivro(public_id){
        return db.query(`delete from livros where public_id = ?;`, [public_id])
    }
    
    adicinarLivro(titulo,autor,genero,descricao,ano,quantidade_total,quantidade_disponivel){
        return db.query(`INSERT INTO livros (public_id, titulo, autor, genero, descricao, ano, quantidade_total, quantidade_disponivel) VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?);`,[titulo, autor, genero, descricao, ano, quantidade_total, quantidade_disponivel])
    }
    
    editarLivro(public_id,titulo,autor,genero,descricao,ano,quantidade_total,quantidade_disponivel){
        return db.query(`UPDATE livros SET titulo = ?, autor = ?, genero = ?, descricao = ?, ano = ?, quantidade_total = ?, quantidade_disponivel = ? WHERE public_id = ?;`, [titulo, autor, genero, descricao, ano, quantidade_total, quantidade_disponivel, public_id])
    }
}