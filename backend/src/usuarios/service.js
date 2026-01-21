import { gerarSenhaHash, verificarSenhaHash } from "../utils/utils.js";

async function testar() {
  const senhaHash = await gerarSenhaHash("miguel"); // ✅ string
  const senhaOk = await verificarSenhaHash("reis", senhaHash); // ✅ boolean

  console.log(senhaHash);
  console.log(senhaOk); // true
}

testar();