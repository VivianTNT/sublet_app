import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { HeaderMegaMenu } from "./components/HeaderMegaMenu";
import { FooterCentered } from "./components/FooterCentered";

import {
    Box,
    Divider,
    SegmentedControl,
    Text,
    NumberInput,
    Button,
    Flex,
} from "@mantine/core";

const mb_element_spacing = "12px";

export default function App() {
    return (
        <MantineProvider>
            <HeaderMegaMenu />
            <Box px={"180px"} my={"-64px"}>
                <h2>Lease Your Space</h2>
                <Divider my={"md"} />
                <h3>Property Type</h3>
                <SegmentedControl
                    data={["House", "Apartment", "..."]}
                    mb={mb_element_spacing}
                />
                <h3>Room Type</h3>
                <SegmentedControl
                    data={["Whole Property", "Single Room", "Shared Room"]}
                    mb={mb_element_spacing}
                />
                <h3>Accomodates</h3>
                {/* <Text size="sm" mt={"-18px"} c={"gray"}>
                The number of guests the (sub leased) property can accomodate
              </Text> */}
                <NumberInput
                    label=""
                    description="The number of guests the (sub leased) property can accomodate"
                    w={"240px"}
                />

                <Flex align={"center"} justify={"flex-end"}>
                    <Button ml={"0px"} size="md" mt={"48px"}>
                        Continue
                    </Button>
                </Flex>
            </Box>
        <FooterCentered />
        </MantineProvider>
    );
}
