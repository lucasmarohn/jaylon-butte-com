import { Modal, ModalBody, ModalContent, ModalHeader, ModalCloseButton, ModalOverlay, Grid, Box, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from 'react'

const SquareModal = ({isOpen, onOpen, onClose}) => {
    const [squareLoaded, setSquareLoaded] = useState(false)
    useEffect(() => {
      if(!isOpen) {
        setSquareLoaded(false)
      }
    },[isOpen])
    return <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} size="6xl" isCentered motionPreset="slideInBottom">
        <ModalOverlay bg="white" opacity="1" />
        <ModalContent height="90vh">
          <ModalHeader borderBottom="1px solid #e9e9e9" paddingBottom={8}>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody display="flex" alignContent="stretch" padding="0">
            {!squareLoaded && <Grid w="100%" templateRows="auto" placeItems="center">
              <Box textAlign="center">
                <Spinner size="xl" />
                <Box mt="6">Loading Square App...</Box>
              </Box>
              </Grid>}
            <Box as="iframe" opacity={!squareLoaded ? 0 : 1} position={!squareLoaded ? 'absolute' : null}
              w="100%" onLoad={() => setSquareLoaded(true)}
              src="https://squareup.com/appointments/buyer/widget/1p0i36qz6ofgzp/LGTSXKPQNNMNN"  />
          </ModalBody>
        </ModalContent>
      </Modal>
}
export default SquareModal