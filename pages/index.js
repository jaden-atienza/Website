import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    useColorModeValue, 
    Image,
    SimpleGrid, 
    Link,
    List,
    ListItem, 
    Button 
} from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoGithub, IoMail } from 'react-icons/io5'

const Page = ( ) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
    
    return (
    <Layout>
        <Container>
            <Box 
                borderRadius="lg" 
                bg={useColorModeValue('lightblue', 'whiteAlpha.200')} 
                mb={6} 
                p={3} 
                align="center"
                css={{ backdropFilter: 'blur(10px)' }}
            >
            Hello, I&apos;m a fourth-year life science student @ UofT!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                    Jaden Atienza
                    </Heading>
                <p>Student at the University of Toronto</p>
                </Box>
            <Box 
                flexShrink={0} 
                mt={{ base: 4, md: 0}} 
                ml={{ md:6 }} 
                align="center"
            >
            <Box 
                borderColor="whiteAlpha.800/" 
                borderWidth={2} 
                borderStyle="solid" 
                w="100px"
                h="100px"
                display="inline-block" 
                borderRadius="full" 
                overflow="hidden"
            >
            <Image
                src={`${basePath}/images/me.png`} 
                alt="Profile Image"
                width="100px"
                height="100px"
                objectFit="cover"
            />
            </Box>
            </Box>
            </Box>

    <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        About
        </Heading>
        <Paragraph>
        <p>Hi, I'm Jaden -- a fourth-year Human Biology student at the University of Toronto, minoring in Immunology and Physiology. I bring a multidisciplinary skill set that blends scientific knowledge with hands-on experience in manufacturing, quality control, and creative media production. Whether inspecting automotive parts at Toyota or creating content for the U of T Climbing Club, I always aim to bring precision, creativity, and collaboration. </p>
        </Paragraph>
        <br></br>
        <p>With a strong foundation in laboratory techniques, a passion for health sciences, and a knack for visual storytelling, I'm driven to connect science and communication in meaningful ways. My ultimate goal is to become an orthodontist -- combining my interest in human biology with a desire to help others through oral healthcare. I'm especially passionate about the blend of science, precision, and artistry that orthodontics offers.</p>
        <br></br>
        <p>As I continue my academic and professional journey, I'm eager to explore opportunities that support my growth in both clinical and creative spaces.</p>
    
    <Box align="center" my={4}>
        <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            My Portfolio
            </Button>
        </NextLink>
    </Box>
    </Section>

    <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
        Bio
        </Heading>
    <BioSection>
        <BioYear>2004</BioYear>
        Born in Ontario, Canada.
    </BioSection>
    <BioSection>
        <BioYear>2022</BioYear>
        Began undergraduate studies at the University of Toronto
    </BioSection>
    <BioSection>
        <BioYear>2026</BioYear>
        Expected                 undergraduate graduation of undergrad at the University of Toronto
    </BioSection>
    </Section>

    <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        I ♥        
        </Heading>
        <Paragraph>
            Sports, Music, Drawing,{' '}
            <Link href="https://vsco.co/jadenatienza/gallery">
                Photography
            </Link>
            , Language Learning, Food Tours    
        </Paragraph>
    </Section>

        <Section delay={0.3}>
            <Heading as='h3' variant='section-title'>
                On the web
            </Heading>
            <List>
<ListItem>
                    <Link href="https://github.com/jaden-atienza" target='_blank'>
                    <Button
                        variant='ghost'
                        colorScheme='teal'
                        leftIcon={<IoLogoGithub/>}
                    >
                        @jaden-atienza
                    </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.linkedin.com/in/jaden-atienza/" target='_blank'>
                    <Button
                        variant='ghost'
                        colorScheme='teal'
                        leftIcon={<IoLogoLinkedin/>}
                    >
                        Jaden Atienza
                    </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="mailto:jaden.atienza@mail.utoronto.ca" target='_blank'>
                    <Button
                        variant='ghost'
                        colorScheme='teal'
                        leftIcon={<IoMail/>}
                    >
                        jaden.atienza@mail.utoronto.ca
                    </Button>
                    </Link>
                </ListItem>
                

            </List>
        </Section>

        </Container>
    </Layout>
    )
}

export default Page
