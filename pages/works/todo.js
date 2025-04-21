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
                A simple full-stack to-do list application built with React (Vite) on the frontend and 
                Node.js + Express + LowDB on the backend. Users can add, complete, delete, and 
                filter tasks (All / Active / Completed). Tasks are stored persistently using a lightweight JSON database, 
                making it perfect for small projects or quick demos.        
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                            <Link href="https://github.com/jaden-atienza/Todo">
                        https://github.com/jaden-atienza/Todo <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work
