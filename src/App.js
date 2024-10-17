import './App.css';
import CodeEntry from "./pages/codeEntry/codeEntry";
import PersonalInfoForm from "./pages/personalInfoForm/personalInfoForm";
import PDFExport from "./pages/pdfExport/pdfExport";
import { AppProvider } from "./AppContext";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <>
      
        <Router>
          <Routes>
            <Route exact path="/" element= {<CodeEntry />} />
            <Route exact path="/personalinfo" element= {<PersonalInfoForm />} />
            <Route exact path="/downloadpdf" element= {<PDFExport />} />
          </Routes>
        </Router>
      
    </>
  );
}

export default App;
