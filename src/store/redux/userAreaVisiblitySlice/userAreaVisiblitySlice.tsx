import type { userAreaVisibilitySliceState } from "./types"
import { createAppSlice } from "../../createAppSlice"


const userAreaVisibilityState: userAreaVisibilitySliceState = {
  isVisible: undefined,
}

export const userAreaVisibilityAppSlice = createAppSlice({
  name: "LOGIN_VISIBILITY",
  initialState: userAreaVisibilityState,
  reducers: create => ({
    makeFormsInvisible: create.reducer(() => userAreaVisibilityState),
    makeFormsVisible: create.reducer(
      (state: userAreaVisibilitySliceState) => {
        state.isVisible = true
      },
    ),
    }),
    selectors: {
        loginVisibilityState: (state: userAreaVisibilitySliceState) => state,
        
  }
})

export const userAreaVisibilitySliceActions = userAreaVisibilityAppSlice.actions
export const userAreaVisibilitySliceSelectors = userAreaVisibilityAppSlice.selectors