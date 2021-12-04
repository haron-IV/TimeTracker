import { Modal, Collapse } from 'shared/components'
import LabelsSection from './LabelsSection'

interface SettingsModalProps {
  open: boolean
  toggleOpen: () => void
}

const SettingsModal = ({ open, toggleOpen }: SettingsModalProps) => (
  <Modal title="Settings" open={open} toggleModal={toggleOpen}>
    <Collapse title="Labels">
      <LabelsSection />
    </Collapse>
  </Modal>
)

export default SettingsModal
