import { PropsWithChildren, ReactElement } from 'react'
import {
  ModalContent,
  ModalFooter,
  ModalPaper,
  ModalTitle,
  ModalWrapper,
} from './Modal.style'

interface ModalProps {
  title?: string
  footer?: ReactElement
  show: boolean
  width?: number
  height?: number
}

const Modal = ({
  title,
  children,
  footer,
  show,
  width,
  height,
}: PropsWithChildren<ModalProps>) =>
  show ? (
    <ModalWrapper>
      <ModalPaper>
        {title && (
          <ModalTitle>
            <h3>{title}</h3>
          </ModalTitle>
        )}
        <ModalContent>{children}</ModalContent>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalPaper>
    </ModalWrapper>
  ) : null

export default Modal
