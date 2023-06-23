import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/footer";

const App = () => {
  return (
    <main>
      <div className="header">
        <Header title={"The job Board"} />
      </div>
      <div className="main">
        <Jobs />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
};

export default App;
