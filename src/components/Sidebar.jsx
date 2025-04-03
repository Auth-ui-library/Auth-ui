import QuickSearch from './QuickSearch'; // Assurez-vous que ce composant existe
import NavSection from './NavSection'; // Assurez-vous que ce composant existe

export default function Sidebar() {
    return (
        <aside className="w-64 p-4 mt-25 border-r bg-gray-50">
            {/* Quick Search */}
            <QuickSearch />

            {/* Sections de navigation */}
            <NavSection title="Documentation" items={['Components', 'Templates']} />
            <NavSection title="Documentation" items={['Components', 'Templates']} />
            <NavSection title="Documentation" items={['Components', 'Templates']} />
            <NavSection title="Documentation" items={['Components', 'Templates']} />
            <NavSection title="Documentation" items={['Components', 'Templates']} />
            <NavSection title="Documentation" items={['Components', 'Templates']} />
            <NavSection title="Documentation" items={['Components', 'Templates']} />
            <NavSection title="Getting Started" items={['Installation', 'Editor Setup']} />
        </aside>
    );
}