import AuthPage from "./pages/AuthPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-full">
      <Toaster />
      <AuthPage />
    </div>
  );
}

export default App;
