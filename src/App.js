import { Provider } from "react-redux";
import Body from "./Componnents/Body";
import store from "./ReduxStore/Store";
import FetchDataFromFireStore from "./Componnents/FetchDataFromFireStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Body />
        <FetchDataFromFireStore />
      </div>
    </Provider>
  );
}

export default App;
