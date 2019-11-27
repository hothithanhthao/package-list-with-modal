import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

function PackageTable(props) {
  const { data } = props

  return (
    <table className="table">
      <thead>
        <tr className="table100-head">
          <th>Package Name</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Section</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row,i) => {
          const { Package , Status, Priority, Section } = row
          return (
            <tr key={i}>
              <td className="link-text"><Link to={`/${Package}`}>{Package}</Link></td>
              <td>{Status}</td>
              <td>{Priority}</td>
              <td>{Section}</td> 
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

PackageTable.propTypes = {
  data: PropTypes.array,
}

export default PackageTable