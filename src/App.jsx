import Router from '../routes/Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Router />
      </div>
    </>
  );
}

export default App;
