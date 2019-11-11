import React from 'react'
import PropTypes from 'prop-types'

function PackageTable(props) {
  const { data, setSelected, setModalState } = props
 // console.log(data)

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Package Name</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row,i) => {
          const { Package , Status, Priority } = row
          return (
            <tr key={i}>
              <td>{Package}</td>
              <td>{Status}</td>
              <td>{Priority}</td>
              <td>
                <button
                  onClick={() => {
                    setSelected(row)
                    setModalState(true)
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

PackageTable.propTypes = {
  data: PropTypes.array,
  setSelected: PropTypes.func.isRequired,
  setModalState: PropTypes.func.isRequired
}

export default PackageTable