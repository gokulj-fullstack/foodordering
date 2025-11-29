import Router from "./routes";
import "./App.css";
import Header from "./common/header/header";
import Login from "./common/login/login";
import { getUserRole } from "./utils/userdata";
import Sidebar from "./common/sidebar/sidebar";
import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  const isUserLogged = getUserRole();
  const sideBarTargetRef: any = useRef(null);
  const [targetWidth, setTargetWidth] = useState(0);

  useEffect(() => {
    if (sideBarTargetRef.current) {
      setTargetWidth(sideBarTargetRef.current.offsetWidth);
    }
  }, []);

  if (!isUserLogged) {
    return (
      <div>
        <Login />
      </div>
    );
  }

  return (
    <main>
      <Header />
      <section style={{ marginTop: 100 }} className="screen-container">
        <Sidebar ref={sideBarTargetRef}></Sidebar>
        <div style={{ marginLeft: targetWidth, padding: 20, width: "100%" }}>
          <Router />
        </div>
      </section>
    </main>
  );
}
