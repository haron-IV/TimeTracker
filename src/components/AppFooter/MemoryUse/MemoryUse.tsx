interface SpaceInfoItemProps {
  kb: string
  percentage: string
}

const SpaceInfoItem = ({ kb, percentage }: SpaceInfoItemProps) => (
  <span>
    {kb} / {percentage}
  </span>
)

const MemoryUse = (props: SpaceInfoItemProps) => (
  <div>
    Memory used: <SpaceInfoItem {...props} />
  </div>
)

export default MemoryUse
