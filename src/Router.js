import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Shop from './pages/shop';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Shop} />
        </Switch>
    </BrowserRouter>
);

export default Router;
