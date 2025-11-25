import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import GameProvider from "./context/GameContext";

export default function App() {
  return (
    <GameProvider>
        <AppRoutes />
    </GameProvider>
  );
}
