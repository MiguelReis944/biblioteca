import {db} from "backend\src\config\config_bd.js"

export class Usuarios_repository{

    buscarTodosClientes(){
        return db.query(`select public_id, nome, email, tipo, ativo from clientes;`)
    }

    buscarClientePorId(public_id){
        return db.query(`select public_id, nome, email, tipo, ativo from clientes where public_id = ?;`,[public_id])
    }

    buscarClientePorNome(nome){
        return db.query(`select public_id, nome, email, tipo, ativo from clientes where nome = ?;`,[nome])
    }

    buscarClientePorEmail(email){
        return db.query(`select public_id, nome, email, tipo, ativo from clientes where email = ?;`,[email])
    }

    buscarSenhaCliente(public_id){
        return db.query(`select senha from clientes where public_id = ?;`,[public_id])
    }
    
    buscarClientesAtivos(){
        return db.query(`select public_id, nome, email, tipo, ativo from clientes where ativo = ?;`,[1])
    }

    buscarClientesDesativos(){
        return db.query(`select public_id, nome, email, tipo, ativo from clientes where ativo = ?;`,[0])
    }

    desativarCliente(public_id){
        return db.query(`update usuarios set ativo = 0 where public_id = ?;`,[public_id])
    }

    ativarCliente(public_id){
        return db.query(`update usuarios set ativo = 1 where public_id = ?;`,[public_id])
    }

    deletarCliente(public_id){
        return db.query(`delete from clientes where public_id = ?;`,[public_id])
    }

    adicionarCliente(nome, email, senha_hash, tipo, ativo){
        return db.query(`insert into clientes (public_id, nome, email, senha, tipo, ativo) values (UUID(), ?, ?, ?, ?, ?);`, [nome, email, senha_hash, tipo, ativo])
    }

    editarCliente(public_id, nome, email, senha, tipo, ativo){
        return db.query(`update clientes set nome = ?, email = ?, senha = ?, tipo = ?, ativo = ? where public_id = ?;`,[nome, email, senha, tipo, ativo, public_id])
    }
}