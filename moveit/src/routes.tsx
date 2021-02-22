import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ExperienceBar } from './components/ExperienceBar';

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ExperienceBar} />
            </Switch>
        </BrowserRouter>
    )
}
