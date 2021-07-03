const Table = ({ row, column }) => {
    return (
        <div className="table">
            <table cellPadding="6">
                <thead>
                    <tr>
                        {
                            column.map((data, index) => (
                                <th key={`${index}a`}>
                                    {data.label}
                                </th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        row.map((data, indx) => (
                            <tr key={indx}>
                                {
                                    column.map((col, index1) => (
                                        <td key={`a${index1}`}>
                                            { 
                                                col.name == 'completed' ? (
                                                    data[col.name] ? 'true' : 'false'
                                                ): data[col.name] 
                                            }
                                        </td>
                                    ))

                                }
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Table;