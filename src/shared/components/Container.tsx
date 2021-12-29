import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { CONTAINER_PADDING } from '../../config'

const ContentContainer = styled('div')({
  padding: `${CONTAINER_PADDING}px 20px 0 20px`,
  height: `calc(100vh - ${CONTAINER_PADDING}px)`,
})

type ContainerProps = PropsWithChildren<unknown>

const Container = ({ children }: ContainerProps) => (
  <ContentContainer>{children}</ContentContainer>
)

export default Container
