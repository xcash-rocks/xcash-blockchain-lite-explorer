import { Box, Grid, Spinner } from "@chakra-ui/react";
import React, { FC, useState } from "react";

export const CirculationBox: FC = () => {

    const [state, setState] = useState({
        maximum_supply: '',
        generated_supply: '',
        circulating_supply: ''
    });

    const getBlockHeight = async (url: string) => {
        const res = await fetch(url);
        return await res.json();
    }

    getBlockHeight("https://explorer.getxcash.org/getblockchaindata")
        .then((res) => setState(res))
        .catch(error => console.log("Error", error));

    return (

        <Grid templateColumns="repeat(3, 1fr)" gap={6} margin="5" textAlign='center' fontSize="2xl" fontWeight='semibold'>

            <Box w="100%" h="40px" bg="#1189a5" color="gray.900">
                {state.maximum_supply ? `Maximum supply: ${state.maximum_supply}` : <Spinner size="sm" color='red' />}
            </Box>

            <Box w="100%" h="40px" bg="#1189a5" color="gray.900" >
                {state.generated_supply ? `Generated supply: ${state.generated_supply}` : <Spinner size="sm" color='red' />}
            </Box>

            <Box w="100%" h="40px" bg="#1189a5" color="gray.900" >
                {state.circulating_supply ? `Circulation supply: ${state.circulating_supply}` : <Spinner size="sm" color='red' />}
            </Box>

        </Grid >

    );
};