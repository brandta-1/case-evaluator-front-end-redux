import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getContainers, Cases } from './API';

interface ContainerState {
    value: Cases[];
    sorted: keyof Cases;
    status: 'idle' | 'loading' | 'error' | 'Server error. Please try again later';
}

const initialState: ContainerState = {
    sorted: 'name',
    value: [],
    status: 'idle',
}

export const loadContainers = createAsyncThunk(
  'container/getData',
  async () => {
    return await getContainers();
  }
);

const containerSlice = createSlice({
    name: 'container',
    initialState,
    reducers: {
      sortContainers: (state, action: PayloadAction<keyof Cases>) => {
        const sorted: Cases [] = state.value.slice(0).sort((a: Cases, b: Cases) => {
        //if the sorting parameter is a string then do localcompare, otherwise subtract for numeric sorting
        return typeof a[action.payload] === 'string' ?
          (a[action.payload] as string).localeCompare(b[action.payload] as string)  : 
          (a[action.payload] as number) - (b[action.payload] as number) 
        });
        state.sorted = action.payload;
        state.value = sorted;
      },
      reverseContainers: (state) => {
        const sorted: Cases [] = state.value.slice(0).reverse();
        state.value = sorted;
      },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadContainers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadContainers.fulfilled, (state, action) => {
                if(action.payload.err){
                  state.status = 'Server error. Please try again later';
                } else {
                  state.status = 'idle'
                }
                state.value = action.payload.cases;
            })
            .addCase(loadContainers.rejected, (state) => {
                state.status = 'error';
            })
    }
});

export default containerSlice; 

export const { sortContainers, reverseContainers } = containerSlice.actions;