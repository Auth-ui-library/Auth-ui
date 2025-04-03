import PropTypes from 'prop-types';
import Sidebar from './sidebar';

export default function Layout({ children }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-8">{children}</main>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};