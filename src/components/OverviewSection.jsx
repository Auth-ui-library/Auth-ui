import ClassTable from './ClassTable'; // Adjust the path as needed

export default function OverviewSection() {
    return (
        <section>
            <h1 className="text-3xl font-bold mb-4">Overview</h1>
            <p>Utilities for controlling how an element handles content...</p>
            <ClassTable /> {/* Tableau des classes */}
        </section>
    );
}