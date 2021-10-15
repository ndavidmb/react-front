import "animate.css";
import { createContext, useMemo, useState } from "react";
import { Toast } from "./components/ui/Toast";
import { AppRouter } from "./router/Router";
import "./styles/main.scss";

export const AppContext = createContext();

function App() {
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
    duration: 3000,
  });
  const value = useMemo(() => ({ toast, setToast }), [toast]);

  return (
    <AppContext.Provider value={value}>
      <AppRouter />
      {toast.visible && (
        <Toast message={toast.message} type={toast.type} />
      )}
    </AppContext.Provider>
  );
}

export default App;
