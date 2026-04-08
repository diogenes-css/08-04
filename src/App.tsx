import { useState } from "react";
import axios from "axios";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const cadastrarAluno = async () => {
    try {
      const resposta = await axios.post("http://localhost:3001/alunos", {
        nome,
        email
      });

      setMensagem(resposta.data.mensagem);
      setNome("");
      setEmail("");
    } catch (erro) {
      console.error("Erro ao cadastrar aluno:", erro);
      setMensagem("Erro ao cadastrar aluno.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cadastro de Aluno</h1>

      <input
        type="text"
        placeholder="Digite o nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Digite o email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <button onClick={cadastrarAluno}>Cadastrar</button>

      <p>{mensagem}</p>
    </div>
  );
}

export default App;