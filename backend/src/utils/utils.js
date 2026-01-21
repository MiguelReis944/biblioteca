import bcrypt from "bcrypt";

export async function gerarSenhaHash(senha) {
  try {
    if (!senha) {
      throw new Error("Senha não informada");
    }

    const saltRounds = 10;
    return await bcrypt.hash(senha, saltRounds);

  } catch (error) {
    console.error("Erro ao gerar hash da senha:", error.message);
    throw new Error("Erro ao processar senha");
  }
}

export async function verificarSenhaHash(senhaDigitada, senhaBd) {
  try {
    if (!senhaDigitada || !senhaBd) {
      return false;
    }

    return await bcrypt.compare(senhaDigitada, senhaBd);

  } catch (error) {
    console.error("Erro ao verificar senha:", error.message);
    throw new Error("Erro ao verificar senha");
  }
}
