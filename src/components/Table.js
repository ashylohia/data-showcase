const Table = ({ row, column }) => {
    return (
        <div className="table">
            <table cellPadding="6">
                <thead>
                    <tr>
                        {
                            column.map((data, index) => (
                                <th>
                                    {data.label}
                                </th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        row.map((data) => (
                            <tr>
                                {
                                    column.map((col) => (
                                        <td>
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