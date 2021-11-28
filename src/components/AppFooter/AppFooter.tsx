import { BsGear } from 'react-icons/bs'
import { Modal } from 'shared/components'
import { SpaceInfo } from 'shared/types'
import { useModal } from 'shared/utils/hooks'
import { Footer } from './AppFooter.style'
import MemoryUse from './MemoryUse'

interface AppFooterProps {
  spaceInfo: SpaceInfo
}

const AppFooter = ({ spaceInfo: { used } }: AppFooterProps) => {
  const { open, toggleModal } = useModal()

  return (
    <Footer>
      <Modal
        title="Settings"
        footer={<div>elo</div>}
        open={open}
        toggleModal={toggleModal}
      >
        <div>Coś tam</div>
        <button>elo</button>
      </Modal>
      <button
        onClick={toggleModal}
        style={{
          width: 30,
          height: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <BsGear />
      </button>
      <MemoryUse {...used} />
    </Footer>
  )
}

export default AppFooter
