import CommentsSection from "./pages/CommentsSection";
import DescriptionSection from "./pages/DescriptionSection";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import MainSection from "./pages/MainSection";
import MainSection2 from "./pages/MainSection2";
import MainSection3 from "./pages/MainSection3";
import MainSection4 from "./pages/MainSection4";

function App() {
  return (
    <div>
    <Header />
    <MainSection />
    <MainSection2 />
    <MainSection3 />
    <MainSection4 />
    <DescriptionSection />
    <CommentsSection/>
       <Footer /> 
    </div>
  );
}

export default App;
