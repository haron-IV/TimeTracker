import { BsGear } from 'react-icons/bs'
import { Button } from 'shared/components'
import { SpaceInfo } from 'shared/types'
import { useToggle } from 'shared/utils'
import { Footer } from './AppFooter.style'
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
      <Button onClick={toggleOpen} color="primary">
        <BsGear />
      </Button>
      <MemoryUse {...used} />
    </Footer>
  )
}

export default AppFooter
