import {db} from "backend\src\config\config_bd.js"

export class Emprestimos_repository{

    buscarTodosEmprestimos(){
        return db.query(`select public_id, id_cliente, id_livro, data_retirada, data_prevista, data_entrega, ativo, multa from emprestimo;`)
    }

    buscarEmprestimosCliente(public_id_cliente){
        return db.query(`select public_id, id_cliente, id_livro, data_retirada, data_prevista, data_entrega, ativo, multa from emprestimo where id_cliente = ?;`, [public_id_cliente])
    }

    buscarEmprestimosLivro(public_id_livro){
        return db.query(`select public_id, id_cliente, id_livro, data_retirada, data_prevista, data_entrega, ativo, multa from emprestimo where id_livro = ?;`, [public_id_livro])
    }

    buscarEmprestimosAtivos(){
        return db.query(`select public_id, nome, email, tipo, ativo from clientes where ativo = ?;`,[1])
    }

    buscarEmprestimosDesativos(){
        return db.query(`select public_id, nome, email, tipo, ativo from clientes where ativo = ?;`,[0])
    }

    buscarEmprestimosComMulta(){
        return db.query(`select public_id, id_cliente, id_livro, data_retirada, data_prevista, data_entrega, ativo, multa from emprestimo where multa > 0;`)
    }

    desativarEmprestimo(public_id){
        return db.query(`update emprestimo set ativo = 0 where public_id = ?;`,[public_id])
    }

    ativarEmprestimo(public_id){
        return db.query(`update emprestimo set ativo = 1 where public_id = ?;`,[public_id])
    }

    excluirEmprestimo(public_id){
        return db.query(`delete from emprestimo where public_id = ?;`[public_id])
    }

    adicionarEmprestimo(id_cliente, id_livro, data_retirada, data_prevista, data_entrega, ativo, multa){
        return db.query(`insert into emprestimo (public_id, id_cliente, id_livro, data_retirada, data_prevista, data_entrega, ativo, multa) values (UUID(), ?, ?, ?, ?, ?, ?, ?);`, [id_cliente, id_livro, data_retirada, data_prevista, data_entrega, ativo, multa])
    }

    editarEmprestimo(public_id, id_cliente, id_livro, data_retirada, data_prevista, data_entrega, ativo, multa){
        return db.query(`update emprestimo set id_cliente = ?, id_livro = ?, data_retirada = ?, data_prevista = ?, data_entraga = ?, ativo = ?, multa = ? where public_id = ?;`, [id_cliente, id_livro, data_retirada, data_prevista, data_entrega, ativo, multa, public_id])
    }
}