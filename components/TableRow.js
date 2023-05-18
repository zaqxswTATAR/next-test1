import React from 'react'

const TableRow = ({ obj }) => {

    return (
        <>
            <tr>
                <td>
                    <img src={obj.icon} alt="Icon" />
                </td>
                <td>{obj.name}</td>
            </tr>
        </>
    )

}
export default TableRow;