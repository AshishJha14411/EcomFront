import { configureStore,ThunkAction, Action } from '@reduxjs/toolkit'
import  DataReducer from '../services/DataSlice'
import { fetchData } from '../services/ApiQueries';
import CartReducer from '../services/CartSlice'
import DataSlice from '../services/DataSlice';
export const store = configureStore({
  reducer: {
    CartStates: CartReducer,
    DataSlice: DataReducer,
    [fetchData.reducerPath]: fetchData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([fetchData.middleware]),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
/* setupListeners(store.dispatch) */
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
