import { SpaceInfo } from 'shared/types'
import { Footer } from './AppFooter.style'

interface SpaceInfoItemProps {
  kb: string
  percentage: string
}

const SpaceInfoItem = ({ kb, percentage }: SpaceInfoItemProps) => (
  <span>
    {kb} / {percentage}
  </span>
)

interface AppFooterProps {
  spaceInfo: SpaceInfo
}

const AppFooter = ({ spaceInfo: { used } }: AppFooterProps) => {
  return (
    <Footer>
      <div>
        Memory used: <SpaceInfoItem kb={used.kb} percentage={used.percentage} />
      </div>
    </Footer>
  )
}

export default AppFooter
