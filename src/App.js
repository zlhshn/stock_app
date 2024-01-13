import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
