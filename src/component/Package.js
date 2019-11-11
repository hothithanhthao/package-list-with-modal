import React from 'react'
import PropTypes from 'prop-types'
import PackageDetail from './PackageDetail'
import PackageTable from './PackageTable'
import { useModalWithData } from '../hook'
import CustomModal from '../modal'


const Package = props => {
  const {
    modalOpen,
    selected,
    setSelected,
    setModalState
  } = useModalWithData()
  const {data} = props

  return (
    <div>
      <div style={{ padding: '1rem' }}>
      <CustomModal
        title="Package Detail"
        isActive={modalOpen}
        handleClose={() => setModalState(false)}
      >
        <PackageDetail data={selected} />
      </CustomModal>

      <PackageTable
        data={data}
        setSelected={setSelected}
        setModalState={setModalState}
      />
      </div>
    </div>
  )
}

Package.propTypes = {
  data: PropTypes.array.isRequired,
}
export default Package