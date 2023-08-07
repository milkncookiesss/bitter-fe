import '../componentCss/App.css';
import PostCreateComponent from './PostCreate.jsx';
import { useState } from 'react';

function App() {
  //gobal state(?)
  //pass state down to components
  const [posts, setPosts] = useState([{username: "lalala", post: "aaaaaaaaaaaaaa"},{username: "nanana", post:"bbbbbbbbbb"}]);

  return (
    <div className="App">
      <PostCreateComponent posts={posts}/>
      <p>hi fam</p>
    </div>
  );
}

export default App;
