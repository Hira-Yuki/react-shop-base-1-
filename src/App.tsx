import "./assets/css/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import Drawer from "./components/common/Drawer";
import Router from "./router/router";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

const App = (): JSX.Element => {

  return (
    <BrowserRouter>
      <input type="checkbox" id="side-menu" className="drawer-toggle" />
      <section className="drawer-content">
        {/* Nav를 렌더링 하세요 */}
        <Header />
        <section className="main pt-16">
          <Router />
        </section>
        {/* Footer를 렌더링 하세요 */}
        <Footer />
      </section>
      <Drawer />
    </BrowserRouter>
  );
};

export default App;
