import { ReduxStore } from "../../../types";

export const selectFilter = (state: ReduxStore) => state.subreddits.filters;

export const selectRefreshing = (state: ReduxStore) => state.subreddits.refreshing;

export const selectListSubreddits = (state: ReduxStore) => state.subreddits.subreddits.data.children;
