import { FOOTER_PADDING, palette } from 'config'
import { SpaceInfo } from 'shared/types'
import styled from 'styled-components'

const Footer = styled('footer')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  backgroundColor: palette.background.paper,
  width: '100vw',
  padding: FOOTER_PADDING,
  borderTop: `1px solid ${palette.divider}`,
  display: 'flex',
  justifyContent: 'flex-end',
})

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
