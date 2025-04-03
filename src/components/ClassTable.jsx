export default function ClassTable() {
    const classes = [
        { class: "overflow-auto", properties: "overflow: auto;" },
        // ... autres données
    ];

    return (
        <table className="w-full mt-6 mb-8">
            <thead className="bg-gray-100">
                <tr>
                    <th className="p-2 text-left">Class</th>
                    <th className="p-2 text-left">Properties</th>
                </tr>
            </thead>
            <tbody>
                {classes.map((item) => (
                    <tr key={item.class} className="border-b">
                        <td className="p-2 font-mono text-blue-600">{item.class}</td>
                        <td className="p-2 font-mono">{item.properties}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}