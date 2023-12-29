import { Box, Image, Text } from "@chakra-ui/react";

interface ArticleCardProps {
    title: string;
    description: string;
    imgUrl: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, imgUrl }) => {
    return (
        <Box w="100%" p={4}>
            <Box className="proj-imgbx">
                <Image src={imgUrl} alt={title} />
                <Box className="proj-txtx">
                    <Text as="h4">{title}</Text>
                    <Text>{description}</Text>
                </Box>
            </Box>
        </Box>
    );
};
