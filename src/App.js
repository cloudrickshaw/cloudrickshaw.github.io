import "./App.css";
import Navbar from "./Components/Nav/Navbar";
import ContentBlock from "./Components/Contents/ContentBlock";
import Bootcamp from "./Components/Bootcamp";
import metaData from "./Constants/meta.json";

function App() {
  const showBootcamp = () => {
    if (window.location.pathname === "/bootcamp") {
      return <Bootcamp />
    }
  }
  const showContent = () => {
    if (window.location.pathname === "/") {
      return ( 
        Object.keys(metaData).map((title) =>
          <ContentBlock
            title={title}
            content={metaData[title]}
            key={title}
          />
        )
      )
    }
  }
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />
        {showContent()}
        {showBootcamp()}
      </div>
    </div>
  );
}

export default App;
