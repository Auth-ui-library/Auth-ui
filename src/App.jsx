import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<Router>
			<div className="">
				<div className="flex flex-col min-h-screen">
					{/* Définition des routes */}
					<Routes>
						<Route path="/" element={<Dashboard />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;