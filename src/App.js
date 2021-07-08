import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 今何の写真が表示されているかを管理
  const [images, setImages] = useState([]);
  // 検索バーに入れる文字列を管理
  const [text, setText] = useState('');
  // 今何の文字列を検索しているかを管理
  const [query, setQuery] = useState('apple');

  useEffect(() => {
    console.log('useEffect Success');
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImages(data.results);
      });
  }, [query]);

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(text);
    setText('');
    console.log('onSubmitが呼ばれました');
  };
  return (
    <div className="App">
      <div className="main">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default App;