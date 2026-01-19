class usuario{
    constructor(public_id,nome,email,senha_hash,tipo,ativo){
        this.public_id = public_id
        this.nome = nome
        this.email = email
        this.senha_hash = senha_hash
        this.tipo = tipo
        this.ativo = true
    }
}