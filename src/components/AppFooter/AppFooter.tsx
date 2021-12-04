import { BsGear } from 'react-icons/bs'
import { SpaceInfo } from 'shared/types'
import { useToggle } from 'shared/utils'
import { Footer, SettingsButton } from './AppFooter.style'
import MemoryUse from './MemoryUse'
import SettingsModal from './SettingsModal'

interface AppFooterProps {
  spaceInfo: SpaceInfo
}

const AppFooter = ({ spaceInfo: { used } }: AppFooterProps) => {
  const [open, toggleOpen] = useToggle()

  return (
    <Footer>
      <SettingsModal {...{ open, toggleOpen }} />
      <SettingsButton onClick={toggleOpen}>
        <BsGear />
      </SettingsButton>
      <MemoryUse {...used} />
    </Footer>
  )
}

export default AppFooter
