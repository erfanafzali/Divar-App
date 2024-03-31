import { Toaster } from "react-hot-toast";
import Router from "./routers/Router";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Toaster />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
