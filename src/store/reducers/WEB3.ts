import {
    createSlice,
    createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

import { RootState, StoreDispatch, StoreGetState } from '../configureStore';

export type WEB3State = {
    id?: string | number;
};

export const initialUIState: WEB3State = {
    id: '',
};

const slice = createSlice({
    name: 'WEB3',
    initialState: initialUIState,
    reducers: {
        setIdFunction: (state, action: PayloadAction<string | number>) => {
            state.id = action.payload;
        },
    },
});

const { reducer } = slice;

export const { setIdFunction } = slice.actions;

export const fullscreenMapSelector = createSelector(
    (state: RootState) => state.WEB3.id,
    (fullscreenMap) => fullscreenMap
);

export default reducer;
