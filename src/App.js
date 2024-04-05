import { Provider } from "react-redux";
import Body from "./Componnents/Body";
import store from "./ReduxStore/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
