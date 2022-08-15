import { PartialRootState } from './configureStore';

import { initialUIState, WEB3State } from './reducers/WEB3';

const getPreloadedUIState = (): WEB3State => {
    return {
        ...initialUIState,
    };
};

const getPreloadedState = (): PartialRootState => {
    return {
        WEB3: getPreloadedUIState(),
    };
};

export default getPreloadedState;
