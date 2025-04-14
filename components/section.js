import { motion } from 'framer-motion'
import { chakra, shouldForewardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForewardProp: prop => {
        return shouldForewardProp(prop) || prop === 'transition'
    }
})

const Section = ({ children, delay = 0}) => (
    <StyledDiv
    initial={{y: 10, opacity: 0}}
    animate={{y:0, opacity:1}}
    transition={{duration:0.8, delay}}
    mb={6}
    >
        {children}    
    </StyledDiv>
)

export default Section