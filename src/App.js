import './App.css';
import { Grid } from '@material-ui/core';
import Counter from './Counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <Header emails={0} /> */}
      <header className="App-header">
        <Grid container justify="space-evenly">
          <Counter title="Card 1" />
          <Counter title="Card 2" />
        </Grid>
      </header>
    </div>
  );
}

export default App;
