import FetchDataComponent from './components/FetchDataComponent';
import FetchErrorComponent from './components/FetchErrorComponent';
import FetchLoadingComponent from './components/FetchLoadingComponent';

const App = () => {
  return (
    <div>
      <h1>Custom Hook UseJsonFetch Example</h1>
      <FetchDataComponent />
      <FetchErrorComponent />
      <FetchLoadingComponent />
    </div>
  );
};

export default App;
