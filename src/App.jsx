import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Form from "./components/Form";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Form />
        <Content />
      </Layout>
    </>
  );
}

export default App;
