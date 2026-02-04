import { Provider } from "react-redux"
import Notes from "./components/Notes"
import { store } from "./store/store"


function App() {

  return (
    <Provider store={store}>
    <Notes />
    </Provider>
  )
}

export default App
