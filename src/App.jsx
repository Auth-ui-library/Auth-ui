import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import InProgress from "./pages/InProgress";
import Footer from "./components/footer";

function App() {
	return (
		<Router>
			<div className="">
				<div className="flex flex-col min-h-screen">
					{/* Définition des routes */}
					<Routes>
						<Route path="/" element={<InProgress />} />
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</div>
				{/* Footer */}
				<Footer/>
			</div>
		</Router>
	);
}

export default App;