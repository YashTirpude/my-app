
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
   <BrowserRouter>
   
   
   <Navbar/>
   

   <Routes>
          <Route exact path='/news-app' element={<News text={text} key='general' setProgress={setProgress} pageSize={pageSize} category='general' apikey={apiKey} />} />
          <Route exact path='/business' element={<News text={text} key='business' setProgress={setProgress} pageSize={pageSize} category='business' apikey={apiKey} />} />
          <Route exact path='/science' element={<News text={text} key='science' setProgress={setProgress} pageSize={pageSize} category='science' apikey={apiKey} />} />
          <Route exact path='/sports' element={<News text={text} key='sports' setProgress={setProgress} pageSize={pageSize} category='sports' apikey={apiKey} />} />
          <Route exact path='/entertainment' element={<News text={text} key='entertainment' setProgress={setProgress} pageSize={pageSize} category='entertainment' apikey={apiKey} />} />
          <Route exact path='/technology' element={<News text={text} key='technology' setProgress={setProgress} pageSize={pageSize} category='technology' apikey={apiKey} />} />
          <Route exact path='/health' element={<News text={text} key='health' setProgress={setProgress} pageSize={pageSize} category='health' apikey={apiKey} />} />
        </Routes>
   </BrowserRouter>



  );
}

export default App;
