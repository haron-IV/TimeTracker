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
  open: boolean
  toggleModal: () => void
  width?: number
  height?: number
}

const Modal = ({
  title,
  children,
  footer,
  open,
  toggleModal,
  width,
  height,
}: PropsWithChildren<ModalProps>) =>
  open ? (
    <ModalWrapper onClick={toggleModal}>
      <ModalPaper
        {...{ width, height }}
        onClick={e => {
          e.stopPropagation()
        }}
      >
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
