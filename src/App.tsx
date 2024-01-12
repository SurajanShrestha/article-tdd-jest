import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, CounterPage, FormPage, PostsPage } from "./pages";
import { Layout } from "./layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
