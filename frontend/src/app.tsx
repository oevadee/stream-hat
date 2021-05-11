import { Router, Route } from "preact-router";
import {LoginRoute, HomeRoute} from "./routes";

const App = () => {
  return (
    <Router>
      <Route path="/" component={HomeRoute} />
      <Route path="/login" component={LoginRoute} />
    </Router>
  );
};

export default App;
