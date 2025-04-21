import {
    Container,
    Heading,
    SimpleGrid,
    Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbUtcc from '../public/images/works/thumbUtcc.png'
import thumbShirt from '../public/images/works/thumbShirt.png'
import todo from '../public/images/works/todo.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                Works
                </Heading>

            <SimpleGrid colum={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem 
                    id="Todo List" 
                    title='ToDo List' 
                    thumbnail={todo} 
                    >
                    A simple full-stack to-do list application built with React (Vite) on the front end and Node.js + Express + LowDB on the backend. Users can add, complete, delete, and filter tasks (All / Active / Completed). Tasks are stored persistently using a lightweight JSON database, making it perfect for small projects or quick demos.
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem 
                    id="UTCC Brand" 
                    title='UTCC Branding Lead' 
                    thumbnail={thumbUtcc} 
                    >
                    Developed and executed the visual branding strategy for the Univeristy of Toronto Climbing Club, including logo design, social media aesthetics, and promotional content.
                    </WorkGridItem>
                </Section>
                
                <Section>
                    <WorkGridItem 
                    id="T-shirt Design" 
                    title="UTCC T-shirt Design" 
                    thumbnail={thumbShirt}
                    >
                    Created custom shirt designs that reflect the idenity and values of UTCC, focusing on clean visuals, colour coordination, and wearability.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works
