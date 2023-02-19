import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PropsState = {
    refreshing: boolean;
    subreddits: PropsChildrenReddits;
    filters: PropsSelectFilter
}

const subredditsSlice = createSlice({
    name: "@subreddits",
    initialState: {
        refreshing: false,
        filters: "new",
        subreddits: []
    } as PropsState,
    reducers: {
        onRefreshing: (draft, action: PayloadAction<{ refreshing: boolean }>) => {
            draft.refreshing = action.payload.refreshing;
        },
        onFilter: (draft, action: PayloadAction<PropsSelectFilter>) => {
            draft.filters = action.payload;
        },
        onSubredditslist: (draft, action: PayloadAction<PropsSubReddits>) => {
            draft.subreddits = action.payload.data.children;
        }
    }
});

const { reducer, actions } = subredditsSlice;

export const { 
    onRefreshing,
    onFilter,
    onSubredditslist
} = actions;

export const subredditsReducer = reducer;