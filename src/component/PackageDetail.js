import React from 'react'
import PropTypes from 'prop-types'

function PackageDetail(props) {
  const { data } = props
  if (!data) return null
  return (
    <div>
     <h4>Package Name: {data.Package}</h4>
     <h4>Package Depends: {data.Depends}</h4>
     <h4>Package Description: {data.Description}</h4>
    </div>
  )
}

PackageDetail.propTypes = {
  data: PropTypes.object
}

export default PackageDetail