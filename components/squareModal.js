import { Modal, ModalBody, ModalContent, ModalHeader, ModalCloseButton, ModalOverlay, Box } from "@chakra-ui/react"
const SquareModal = ({isOpen, onOpen, onClose}) => {
    return <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} size="full" isCentered motionPreset="slideInBottom">
        <ModalOverlay bg="white" opacity="1" />
        <ModalContent>
          <ModalHeader borderBottom="1px solid #e9e9e9" paddingBottom={8}>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody display="flex" alignContent="stretch" padding="0">
            <Box as="iframe" src="https://squareup.com/appointments/buyer/widget/1p0i36qz6ofgzp/LGTSXKPQNNMNN" w="100%" />
          </ModalBody>
        </ModalContent>
      </Modal>
}
export default SquareModal