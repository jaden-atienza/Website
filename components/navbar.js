import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '202023')}
            style={{ backdropFilter: 'blur(10px' }}
            zIndex={1}
            {...props}
        >
        <Container display="flex" 
            p={2} 
            maxW="container.md" 
            wrap="wrap" 
            align="center" 
            justify="space-between"
        >
        <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                <Logo />
            </Heading>
        </Flex>

        <Stack
            direction={{base: 'column', md: 'row'}}
            display={{base: 'none', md: 'flex'}}
            width={{base: 'full', md: 'auto'}}
            alignItems='center'
            flexGrow={1}
            mt={{base: 4, nmd: 0}}
        >
        <LinkItem href="/works" path={path}>
        Works
        </LinkItem>
        <LinkItem href="/posts" path={path}>
        Posts
        </LinkItem>
        <LinkItem 
            target="_blank"
            href="https://github.com/jaden-atienza"
            path={path}
            display='inline-flex'
            pl={2}
        >
            <Flex alignItems='center' gap={1}>
                <IoLogoGithub />
                <span>Source</span>
            </Flex>
        </LinkItem>
        </Stack>

    <Box flex={1} align="right">
    <ThemeToggleButton />

        <Box ml={2} display={{base: "inline-block", md: "none"}}>
            <Menu>
                <MenuButton 
                    as={IconButton} 
                    icon={<HamburgerIcon />} 
                    variant="outline" 
                    aria-label="Options"
                />
    <MenuList>
        <NextLink href="/about" passHref>
            <MenuItem as={Link}>About</MenuItem>
        </NextLink>
        <NextLink href="/works" passHref>
            <MenuItem as={Link}>Works</MenuItem>
        </NextLink>
        <NextLink href="/posts" passHref>
            <MenuItem as={Link}>Posts</MenuItem>
        </NextLink>
            <MenuItem 
            as={Link} 
            href="https://github.com/jaden-atienza/Website"
            >
                View Source
            </MenuItem>
    </MenuList>
            </Menu>
            </Box>
        </Box>
        </Container>
    </Box>
    )
}

export default Navbar
