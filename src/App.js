
import { BrowserRouter,Routes,Route, HashRouter } from 'react-router-dom';
import React,{useState} from 'react';
import './App.css';
import Navbar from './Navbar';
// import News from './News';


function App() {
  const pageSize = 6
  const apiKey = "string"


  
  const [progress, setProgress] = useState(0)

  const [mode, setMode] = useState('light')
  const [text, setText] = useState('dark')
  return (
    <>
     <Navbar/>
    {/* // <BrowserRouter basename='/'> */}
   
   
   
{/* 
   <Routes>
          <Route exact path='/' element={<News text={text} key='general' setProgress={setProgress} pageSize={pageSize} category='general' apikey={apiKey} />} />
          <Route exact path='/science' element={<News text={text} key='science' setProgress={setProgress} pageSize={pageSize} category='science' apikey={apiKey} />} />
          <Route exact path='/sports' element={<News text={text} key='sports' setProgress={setProgress} pageSize={pageSize} category='sports' apikey={apiKey} />} />
          <Route exact path='/entertainment' element={<News text={text} key='entertainment' setProgress={setProgress} pageSize={pageSize} category='entertainment' apikey={apiKey} />} />
          <Route exact path='/technology' element={<News text={text} key='technology' setProgress={setProgress} pageSize={pageSize} category='technology' apikey={apiKey} />} />
          <Route exact path='/health' element={<News text={text} key='health' setProgress={setProgress} pageSize={pageSize} category='health' apikey={apiKey} />} />
          <Route exact path='/business' element={<News text={text} key='business' setProgress={setProgress} pageSize={pageSize} category='business' apikey={apiKey} />} />
        </Routes> */}
  {/* //  </BrowserRouter> */}

</>

  );
}

export default App;
