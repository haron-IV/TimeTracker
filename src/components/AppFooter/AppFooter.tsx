import { BsGear } from 'react-icons/bs'
import { Modal } from 'shared/components'
import { SpaceInfo } from 'shared/types'
import { Footer } from './AppFooter.style'
import MemoryUse from './MemoryUse'

interface AppFooterProps {
  spaceInfo: SpaceInfo
}

const AppFooter = ({ spaceInfo: { used } }: AppFooterProps) => {
  return (
    <Footer>
      <Modal title="Settings" footer={<div>elo</div>} show>
        <div>Coś tam</div>
        <button>elo</button>
      </Modal>
      <button
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
