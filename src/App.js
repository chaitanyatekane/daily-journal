import './App.css';

function App() {
  const title = "Welcome To New Blog";
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>liked { likes } times!</p>
        <p>{ 5+5 }</p>
        <p>{ "hello, chaitanya" }</p>
        <p>{ [1,2,3,4,5,6] }</p>
        <p>{ Math.random()*10 }</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;