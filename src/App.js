import jsonStore from "./components/common/jsonsStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/sections/navigation";
import SmoothScroll from "smooth-scroll";
// import { Form01 } from "./components/sections/form01";
import Form1 from "./components/form1/index";
// import { Form02 } from "./components/sections/form02";
import Form2 from "./components/form2/index";
// import { Form03 } from "./components/sections/form03";
import Form3 from "./components/form2/index";
// import { Form04 } from "./components/sections/form04";
import Form4 from "./components/form2/index";
// import { Form05 } from "./components/sections/form05";
import Form5 from "./components/form2/index";
import { Form06 } from "./components/sections/form06";
import Form6 from "./components/form2/index";
import { Form07 } from "./components/sections/form07";
import Form7 from "./components/form2/index";
import { Form08 } from "./components/sections/form08";
import Form8 from "./components/form2/index";
import { Form09 } from "./components/sections/form09";
import Form9 from "./components/form2/index";
import { Form010 } from "./components/sections/form10";
import Form10 from "./components/form2/index";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
console.log(jsonStore);

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/form01" exact>
            <Form1 />
          </Route>
          <Route path="/form02" exact>
            <Form2 />
          </Route>
          <Route path="/form03" exact>
            <Form3 />
          </Route>
          <Route path="/form04" exact>
            <Form4 />
          </Route>
          <Route path="/form05" exact>
            <Form5 />
          </Route>
          <Route path="/form06" exact>
            <Form6 />
          </Route>
          <Route path="/form07" exact>
            <Form7 />
          </Route>
          <Route path="/form08" exact>
            <Form8 />
          </Route>
          <Route path="/form09" exact>
            <Form9 />
          </Route>
          <Route path="/form010" exact>
            <Form10 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
