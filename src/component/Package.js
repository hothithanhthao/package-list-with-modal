import React from 'react'
import PropTypes from 'prop-types'
import PackageTable from './PackageTable'

const Package = props => {
  const {data} = props

  return (
    <div className="limiter">
      <div className="container-table100">
        <div className="wrap-table100">
          <div className="table100">
            <PackageTable
              data={data}
            />
          </div>
        </div>
      </div>
  </div>
  )
}

Package.propTypes = {
  data: PropTypes.array.isRequired,
}
export default Package