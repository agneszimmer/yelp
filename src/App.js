import './App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          
          <Route exact path="/" render={ ()=> <Homepage /> } />
         {/*  <Route exact path="/details/:id" render={ (props)=> <Details {...props} /> } /> */}
          <Route exact path= "/>city" component={City}/>
          <Route path="*" component={PageNotFound} />

        </Switch>

      </React.Fragment>
    </div>
  );
}

export default App;
