import { VStack, Heading, Text, Image } from "@chakra-ui/react";

export default function FormHeader ({ title, subtitle }) {
    return(
        <VStack
            spacing={2}
        >
            <Heading size={['md', 'md', 'lg', 'xl']} as='h3'>
                {title}
            </Heading>
            <Text textAlign='center'>
                {subtitle}
            </Text>
            <Image boxSize='80px' src='/images/huella.png'/>
        </VStack>
    )
}