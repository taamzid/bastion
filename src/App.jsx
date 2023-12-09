import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Body from "./components/Body/body";
import Footer from "./components/Footer/footer";
import NavBar from "./components/NavBar/navBar";
import Balance from "./components/Body/balance";
import Age from "./components/Body/age";
import State from "./components/Body/state";
import Concern from "./components/Body/concern";
import Name from "./components/Body/name";
import Email from "./components/Body/email";
import Processing from "./components/Body/processing";
import ProcessDone from "./components/Body/processDone";
import ProcessFailed from "./components/Body/processFailed";
import DataContextProvider from "./components/Context/dataContextProvider";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <div>
      <Router>
        <DataContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/age" element={<Age />} />
            <Route path="/state" element={<State />} />
            <Route path="/concern" element={<Concern />} />
            <Route path="/processing" element={<Processing />} />
            <Route path="/name" element={<Name />} />
            <Route path="/email" element={<Email />} />
            <Route path="/process-done" element={<ProcessDone />} />
            <Route path="/process-failed" element={<ProcessFailed />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </DataContextProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
