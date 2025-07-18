import { 
    Container,
    Badge,
    Link,
    List,
    ListItem 
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Photo Booth">
            <Container>
                <Title>
                    Photo Booth<Badge>2025</Badge>
                </Title>
                <P>
                Designed a multi-layout photo booth web app that captures webcam images, applies countdown timers, and generates downloadable photo strips.        
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                            <Link href="https://photo-booth-xi.vercel.app/">
                        https://photo-booth-xi.vercel.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, JavaScript, HTML2Canvas</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/photobooth1.png" alt="photobooth" />
    
            </Container>
        </Layout>
    )
}

export default Work
