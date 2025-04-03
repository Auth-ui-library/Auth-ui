import PropTypes from 'prop-types';

export default function NavSection({ title, items }) {
    return (
        <div className="mb-6">
            <h3 className="font-bold mb-2">{title}</h3>
            <ul className="space-y-1">
                {items.map((item) => (
                    <li key={item}>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

NavSection.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};