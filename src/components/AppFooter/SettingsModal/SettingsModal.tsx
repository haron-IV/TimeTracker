import { Modal } from 'shared/components'
import Collapse from 'shared/components/Collapse/Collapse'
import LabelsSection from './LabelsSection'

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
    <Collapse title="Labels">
      <LabelsSection />
    </Collapse>
  </Modal>
)

export default SettingsModal
