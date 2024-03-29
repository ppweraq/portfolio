import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
    <div className='m-5'>
      <div className='py-80'>
        <main className='flex flex-col justify-center items-center'>
          <h1>Stepanova Sakhaaya</h1>
          <p>frontend dev</p>
          <nav className='mt-10 flex gap-5'>
            <a href='#about'>about</a>
            <a href='#project'>project</a>
            <a href='#contact'>contact</a>
          </nav>
        </main>

      </div>
        <About/>
        <Project/>
        <Contact/>
    </div>
  );
}

export default App;
