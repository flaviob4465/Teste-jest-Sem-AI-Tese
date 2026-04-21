import PlayerProfile from "./components/PlayerProfile";

function App() {
  return (
    <main>
      <h1>Perfil do Jogador</h1>
      <PlayerProfile username="Aluno" level={10} rank="1º lugar" />
    </main>
  );
}

export default App;
