import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getRss, Articles } from './API';

interface ArticleState {
    value: Articles[];
    current: number;
    status: 'idle' | 'loading' | 'error' | 'Server error. Please try again later';
};

const initialState: ArticleState = {
    value: [],
    current: 0,
    status: 'idle'
};

export const loadArticles = createAsyncThunk(
    'article/getData',
    async () => {
        return await getRss();
    }
);

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        slideForward: (state) => {
            state.current += 1;
        },
        slideBackward: (state) => {
            state.current -= 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadArticles.fulfilled, (state, action) => {
                if(action.payload.err){
                    state.status = 'Server error. Please try again later';
                  } else {
                    state.status = 'idle'
                  }
                  state.value = action.payload.articles;
            })
            .addCase(loadArticles.rejected, (state) => {
                state.status = 'error';
            })
    }
});

export default articleSlice;

export const { slideForward, slideBackward } = articleSlice.actions;
