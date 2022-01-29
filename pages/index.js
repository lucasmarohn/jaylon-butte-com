import Head from 'next/head'
import Image from 'next/image'
import Script from "next/script"
import dynamic from "next/dynamic"
import { Box, Heading, Text, Container, Grid, Stack, Button, useDisclosure } from '@chakra-ui/react'

const SquareModal = dynamic(()=> import('../components/squareModal'));

export default function Home() {

  const sectionSpacer = [12, 24, 36, 48]
  const sectionSpacerLarge = sectionSpacer.map(num => num + 12)
  const sectionSpacerSmall = sectionSpacer.map(num => num / 2)

  const Headline = ({text, color, children, ...props}) => <Text textTransform="uppercase" fontSize="md" my={0} letterSpacing={.5} color={color || "gray.700"} {...props}>{children}</Text>
  
  const Testimonial = ({image, quote, name, ...props}) => <Box {...props}>
    <Stack direction="column" align="center" textAlign="center" spacing={6}>
      <Box borderRadius="50%" overflow="hidden" w="125px" h="125px">
        <Image alt="" src={image} width={300} height={300} objectFit="cover" />
      </Box>
      <Text fontSize="md" maxW="300px">{quote}</Text>
      <Headline color="gray.600">— {name}</Headline>
    </Stack>
  </Box>

  const { isOpen, onOpen, onClose } = useDisclosure()

  const BookButton = ({isDark, ...props}) => <Button className="book-button" 
  colorScheme={isDark ? "gray" : "whiteAlpha"} 
  id="book_button"
  size="lg"
  bg={isDark ? "gray.800" : null} 
  color={isDark ? "white" : null} 
  _hover={isDark ? {
    bg: 'gray.900',
    color: 'white'
  } : null}
  _active={isDark ? {
    bg: 'black',
    color: 'white'
  } : null}
  onClick={() => onOpen()} 
  {...props}>Book an Appointment Online</Button>
  
  return (
    <Box as="main">
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDVXC2W"
      height="0" width="0" style={{display:"none", visibility: "hidden"}}></iframe></noscript>
      <Head>
        <title>Portland Mens Barber — Jaylon Butte — Style Consultant</title>
        <meta name="description" content="You will go through a consultation to examine head shape, hair texture, and growth patterns to determine the best hairstyle for you. I specialize in all textures and hair types." />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      
      <Script id="gtm" dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TDVXC2W');`}} /> 
      

      <SquareModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

      <Box textAlign="center" my={sectionSpacer}>
        <Container maxW="container.sm">
          <Stack direction="column">
            <Box mb={sectionSpacerSmall} maxW="300px" alignSelf="center" w="100%">
              <Image alt="Jaylon Butte" src="/images/logo.jpg" width={900} height={100} layout="responsive" objectFit="contain" />
            </Box>
            <Stack direction="column" spacing={6}>
              <Stack spacing={2}>
                <Headline as="h1">Understand What Hairstyle Best Suits You</Headline>
                <Heading as="h2" size="2xl">A Haircut Tailored For You</Heading>
              </Stack>
              <Text fontSize="xl">Together we&apos;ll examine your head shape, hair texture, and growth patterns to determine the best hairstyles for you. I specialize in all textures and hair types.</Text>
              <BookButton isDark alignSelf="center" />
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box mt={sectionSpacer}>

        <Grid 
          className="client-photos"
          templateColumns={['repeat(2, 1fr)', null, 'repeat(4, 1fr)']} bg="black">
          
          <Image alt="" src="/images/3.png" width={900} height={900 * 4 / 3} objectFit="cover" />
          <Box opacity=".95"><Image alt="" src="/images/1.png" width={900} height={900 * 4 / 3} objectFit="cover" layout="responsive" /></Box>
          <Image alt="" src="/images/4.png" width={900} height={900 * 4 / 3} objectFit="cover" />
          <Box opacity=".95"><Image alt="" src="/images/2.png" width={900} height={900 * 4 / 3} objectFit="cover" layout="responsive" /></Box>
        </Grid>
      </Box>

      <Box bg="black" color="white" w="100%">
        <Container py={sectionSpacerLarge} textAlign="center">
          <Stack direction="column" align="center" spacing={6}>
            <Stack direction="column" spacing={0}>
              <Headline size="sm" color="white">Schedule an Appointment</Headline>
              <Heading size="xl">Book Online Now</Heading>
            </Stack>
            <BookButton />
          </Stack>
        </Container> 
      </Box>

      <Box my={sectionSpacer}>
        <Container>
          <Stack direction="column" spacing={12}>
            <Stack direction="column" spacing={0} textAlign="center" align="center">
              <Headline>Your Experience</Headline>
              <Heading size="xl" my={0}>What To Expect</Heading>

              <Text maxW="container.sm" pt="20px" fontSize="xl">My goal is to make you feel confident and look your best, and that takes time and attention to detail.</Text>
            </Stack>
            
            <Grid templateColumns={["100%", null, "repeat(2, 1fr)"]} gridGap={8} textAlign={["center", null, "left"]}>
              <Stack spacing={6}>
                <Heading size="sm">QUALITY OVER QUANTITY</Heading>
                <Text>1 Hour is set aside for each appointment to ensure the proper detail and quality go into every haircut.</Text>
                <Text maxW="500px" fontSize="sm">If you are looking for a quick in and out barber then this experience might not be for you. </Text>
              </Stack>
              <Stack spacing={6}>
                <Heading size="sm">STYLING &amp; MAINTENANCE</Heading>
          
                <Text>We will go over what styling techniques and products you need in order to recreate and maintain a consistent look from home.</Text>
              </Stack>
            </Grid>
            
            <BookButton />
          </Stack>
        </Container>
      </Box>


      <Box my={sectionSpacer}>
        <Container maxW="container.lg">

          <Grid 
          w="100%"
          templateColumns={['100%', null, null, 'repeat(2, 1fr)']}
          alignItems="center"
          textAlign={["center", null, null, 'left']} gap={12}>
          <Image alt="" src="/images/jaylon.jpg" width={900} height={900 * 4 / 3} />
            <Stack direction="column" spacing={6}>
            
              <Stack direction="column" spacing={0} >
                <Headline>Portland Barber</Headline>
                <Heading size="xl">About Jaylon</Heading>
              </Stack>

              <Text>Born and raised in Oregon, I&apos;ve worked as a celebrity hairstylist in L.A. — and hair has taken me all over the world — but Portland is where I call home. </Text>
              <Text>Barbering is a vessel that has allowed me to be creative in multiple mediums. The experience, knowledge, and people are what keep me passionate to do more.</Text>
              <BookButton isDark alignSelf={["center", null, null, 'start']} />
            </Stack>
          </Grid>
          
        </Container>
      </Box>

      <Box className="testimonials" my={sectionSpacer}>
        <Container>
          <Grid templateColumns={['100%', null, "repeat(2, 1fr)"]} 
          gridTemplateRows={[null, null, 'repeat(5, auto)']} alignItems="center" gap={8} rowGap={12}>
            <Box 
              gridColumn={[1]}
              gridRowStart={[null, null, 1]} 
              gridRowEnd={[null, null, 3]}> 
            <Testimonial 
              
              name="QUENTIN" image="/images/quentin.jpg" quote="Precise attention to detail on every haircut. Always consistent." />
            </Box>
            <Testimonial 
              gridColumn={[1, null, 2]}
              gridRowStart={[null, null, 2]}
              gridRowEnd={[null, null, 5]}
              name="SEAN" image="/images/sean.jpg" quote="Jaylon is always on point with his communication and haircuts. Being able to count on your barber is crucial." />
            
            <Testimonial 
              gridColumn={[1]}
              gridRowStart={[null, null, 4]}
              gridRowEnd={[null, null, 6]}
              name="NIKO" image="/images/niko.jpg" quote="Most consistent and punctual barber in the city." />
          </Grid>
        </Container>
      </Box>

      <Box className="studio" my={sectionSpacer}>
        <Grid templateColumns={['1fr 1fr']}>
          <Image alt="" src="/images/studio.jpeg" width={400} height={400 * 4 / 3} objectFit="cover" />
          <Image alt="" src="/images/studio-2.jpeg" width={400} height={400 * 4 / 3} objectFit="cover" />
        </Grid>
      </Box>

      <Box mt={sectionSpacer}>
        <Container>
          <Stack direction="column" textAlign="center">
            <Stack direction="column" spacing={0}>
              <Headline>Find Me At</Headline>
              <Heading size="xl">People on Mars Studio</Heading>
            </Stack>
            <Text pb="50px">
              <address>210 SE Madison St, Suite 20, <br/> Portland, OR 97214</address>
            </Text>
            <BookButton isDark alignSelf="center" />
          </Stack>
          
        </Container>
        <Box mt={sectionSpacer}>
          <Image alt="" src="/images/map.png" width={1922} height={933} objectFit="cover" layout="responsive" />
        </Box>
      </Box>
        

    </Box>
  )
}
