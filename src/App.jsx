import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
	return (
		<Router>
			<div className="">
				<div className="flex flex-col min-h-screen">
					{/* Définition des routes */}
					<Routes>
						<Route path="/" element={<Navbar />} />
						<Route path="/Components" element={<HeroSection />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;