import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import RootRouter from "./routes";
import Layout from './components/Layout';
import { AppThemeProvider } from './Provider';
import StoreProvider from './Context/StoreContext';

function App() {
  return (
    <StoreProvider>
      <AppThemeProvider>
        <Layout>
          <Router>
            <RootRouter />
          </Router>
        </Layout>
      </AppThemeProvider>
    </StoreProvider>
  );
}

export default App;
