function App() {
  return (
    <div className="App">
      <Item
        image=""
        title="Reactjs"
      >

      </Item>
    </div>
  );
}

function Item({ title, image }) {
  return (
    <div className="item">
      <div className="name">{title}</div>
      <img src={image} alt="" />
    </div>
  )
}

export default App;
