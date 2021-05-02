import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from '@emotion/styled';
import { Dashboard, Login, ProtectedRoute } from './components';

const AppWrapper = styled.main`
	text-align: center;
`;

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<AppWrapper>
			<Router>
				<Switch>
					<ProtectedRoute
						exact
						path="/dashboard"
						component={Dashboard}
						isAuthenticated={isAuthenticated}
					/>

					<Route exact path="/login">
						<Login
							setIsAuth={setIsAuthenticated}
							isAuthenticated={isAuthenticated}
						/>
					</Route>
					<Route>
						<Redirect to="/login" />
					</Route>
				</Switch>
			</Router>
		</AppWrapper>
	);
}

export default App;
