import { Provider } from "react-redux";
import { store } from "../state";
import PckgList from "./PckgList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1 className="text-center mt-5 mb-3">Search For Any NPM Package</h1>
        <PckgList />
      </div>
    </Provider>
  );
}

export default App;
