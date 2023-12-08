import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body/body";
import Footer from "./components/Footer/footer";
import NavBar from "./components/NavBar/navBar";
import Balance from "./components/Body/balance";
import Age from "./components/Body/age";
import State from "./components/Body/state";
import Concern from "./components/Body/concern";
import Processing from "./components/Body/processing";
import ProcessDone from "./components/Body/processDone";
import ProcessFailed from "./components/Body/processFailed";
import DataContextProvider from "./components/Context/dataContextProvider";
import Name from "./components/Body/Name";
import Email from "./components/Body/Email";

function App() {
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
          </Routes>
        </DataContextProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
