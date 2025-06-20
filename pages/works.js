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
import thumbphotobooth from '../public/images/works/thumbphotobooth.png'
import todo from '../public/images/works/todo.png'
import mystery from '../public/images/works/mystery.png'

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem 
                        id="photobooth" 
                        title="Photo Booth" 
                        thumbnail={thumbphotobooth}>
                        Designed a multi-layout photo booth web app that captures webcam images, applies countdown timers, and generates downloadable photo strips.
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem 
                        id="todo" 
                        title="ToDo List" 
                        thumbnail={todo}>
                        A simple and interactive to-do list application that lets users add new tasks, mark them as complete, delete them, and filter tasks by status (all, active, or completed). It keeps track of tasks and updates in real-time, providing a clean and minimal interface for managing daily to-dos.
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem 
                        id="Mystery" 
                        title="Mystery" 
                        thumbnail={mystery}>
                        Mystery Game Project ** Work In Progress **
                    </WorkGridItem>
                </Section>

                <Section delay={0.2}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Design
                    </Heading>
                </Section>

                <Section>
                    <WorkGridItem 
                        id="UTCC Brand" 
                        title="UTCC Branding Lead" 
                        thumbnail={thumbUtcc}>
                        Developed and executed the visual branding strategy for the University of Toronto Climbing Club, including logo design, social media aesthetics, and promotional content.
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem 
                        id="T-shirt Design" 
                        title="UTCC T-shirt Design" 
                        thumbnail={thumbShirt}>
                        Created custom shirt designs that reflect the identity and values of UTCC, focusing on clean visuals, colour coordination, and wearability.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works
