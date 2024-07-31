import Sidebar from '../componentes/Sidebar';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';

function Home() {
  return (
    <div id="wrapper">
      <Sidebar menuAtivo='home'/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Nav />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Home</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
