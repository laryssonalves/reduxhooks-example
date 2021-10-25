import { Provider } from 'react-redux'

import store from './store'

import CourseList from './components/CourseList';
import CourseAdd from './components/CourseAdd';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <CourseAdd />
        <CourseList />
      </div>
    </Provider>
  );
}

export default App;
