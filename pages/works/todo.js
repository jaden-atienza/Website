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
        <Layout title="Todo List">
            <Container>
                <Title>
                    Todo <Badge>2025</Badge>
                </Title>
                <P>
                A simple and interactive to-do list application that lets users add new tasks, mark them as complete, delete them, and filter tasks by status (all, active, or completed). It keeps track of tasks and updates in real-time, providing a clean and minimal interface for managing daily to-dos.        
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                            <Link href="https://github.com/jaden-atienza/Todo">
                        https://github.com/jaden-atienza/Todo <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Express, LowDB, NodeJS, React(Vite)</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work
