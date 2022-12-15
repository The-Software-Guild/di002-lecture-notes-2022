import Card from './components/Card';

// 

function App() {
  return (
    <div>
      <Card
        textColor='white'
        bckgColor='lightblue'
        text='first card' />
      <Card
        bckgColor='lightcoral'
        text='second card' />
      <Card
        bckgColor='lightgreen'
        text='third card' />
      <Card
        bckgColor='lightgrey'
        text='fourth card' />
    </div>
  );
}

export default App;


// PascalCase