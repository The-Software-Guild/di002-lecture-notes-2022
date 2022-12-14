import Card from './components/Card';


// component props are created by the devleoper
// at the location a componet is renderded

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
