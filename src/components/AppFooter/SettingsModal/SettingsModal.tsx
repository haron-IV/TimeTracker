import { Modal } from 'shared/components'
import Collapse from 'shared/components/Collapse/Collapse'

interface SettingsModalProps {
  open: boolean
  toggleOpen: () => void
}

const SettingsModal = ({ open, toggleOpen }: SettingsModalProps) => (
  <Modal
    title="Settings"
    footer={<div>elo</div>}
    open={open}
    toggleModal={toggleOpen}
  >
    <Collapse title="Labels">elo</Collapse>
  </Modal>
)

export default SettingsModal
