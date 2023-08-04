import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_swe23_list = createAsyncThunk(
  "swe23s/api_v1_swe23_list",
  async payload => {
    const response = await apiService.api_v1_swe23_list(payload)
    return response.data
  }
)
export const api_v1_swe23_create = createAsyncThunk(
  "swe23s/api_v1_swe23_create",
  async payload => {
    const response = await apiService.api_v1_swe23_create(payload)
    return response.data
  }
)
export const api_v1_swe23_retrieve = createAsyncThunk(
  "swe23s/api_v1_swe23_retrieve",
  async payload => {
    const response = await apiService.api_v1_swe23_retrieve(payload)
    return response.data
  }
)
export const api_v1_swe23_update = createAsyncThunk(
  "swe23s/api_v1_swe23_update",
  async payload => {
    const response = await apiService.api_v1_swe23_update(payload)
    return response.data
  }
)
export const api_v1_swe23_partial_update = createAsyncThunk(
  "swe23s/api_v1_swe23_partial_update",
  async payload => {
    const response = await apiService.api_v1_swe23_partial_update(payload)
    return response.data
  }
)
export const api_v1_swe23_destroy = createAsyncThunk(
  "swe23s/api_v1_swe23_destroy",
  async payload => {
    const response = await apiService.api_v1_swe23_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const swe23sSlice = createSlice({
  name: "swe23s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_swe23_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_swe23_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swe23_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swe23_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_swe23_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swe23_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swe23_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_swe23_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swe23_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swe23_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_swe23_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swe23_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swe23_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_swe23_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swe23_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swe23_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_swe23_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_swe23_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_swe23_list,
  api_v1_swe23_create,
  api_v1_swe23_retrieve,
  api_v1_swe23_update,
  api_v1_swe23_partial_update,
  api_v1_swe23_destroy,
  slice: swe23sSlice
}
