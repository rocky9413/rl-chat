import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';

import Join from './components/Join';
import Chat from './components/Chat';

// import Header from './components/Header';
// import SkillSearch from './components/SkillSearch';
// import SkillMenu from './components/SkillMenu';
// import Experience from './components/Experience';
// import Footer from './components/Footer';

import styled from 'styled-components';

// display: flex;
// flex-direction: column;
// align-items: center;
const StyledApp = styled.div`
  // height: calc(100% - 59px);
`;

const StyledBody = styled.div`
  width: 860px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <BrowserRouter>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
      </BrowserRouter>
      {/* <StyledApp className="App">
          <Header />
          <StyledBody className="Body">
            <SkillSearch />
            <SkillMenu />
            <Experience />
          </StyledBody>
          <Footer />
        </StyledApp> */}
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;

// const App = () => {
//   return (
//     <PokeProvider>
//       <HashRouter>
//         <Switch>
//           <Route exact={true} path="/">
//             <Home />
//           </Route>
//           <Route exact={true} path="/pokemons">
//             <Pokemons />
//           </Route>
//           <Route path="/pokemons/:pokemonId">
//             <PokemonDetail />
//           </Route>
//         </Switch>
//       </HashRouter>
//     </PokeProvider>
//   );
// };
