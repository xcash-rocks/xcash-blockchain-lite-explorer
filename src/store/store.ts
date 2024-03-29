import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import { blockchainDataApi } from "./blockchainData/blockchainData.api";
import { lastBlocksApi } from './lastblocks/lastBlocks.api';

export const store = configureStore({
    reducer: {
        [lastBlocksApi.reducerPath]: lastBlocksApi.reducer,
        [blockchainDataApi.reducerPath]: blockchainDataApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(lastBlocksApi.middleware, blockchainDataApi.middleware),
});
setupListeners(store.dispatch);

export type TypeRootState = ReturnType<typeof store.getState>;