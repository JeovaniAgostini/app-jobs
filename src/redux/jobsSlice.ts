import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const callGetAllJobs = createAsyncThunk('jobs/fetch', async () => {
    try {
        const response = await axios.get('https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json');
        return response.data;
    } catch (error) {
        return error;
    }
});

interface JobPost {
    id: number;
    benefits: any[];
    categories: any[];
    company: {
      id: number;
      slug: string;
      name: string;
      name_internal: string;
      website: string;
      industry: string;
      descr: string;
      logo: string;
      cover: string;
    };
    contact: {
      name: string;
      email: string;
      phone: string;
      photo: string;
    };
    departments: any[];
    descr: string;
    employment_type: string;
    experience: string;
    from_date: string;
    function: string;
    language: string;
    linkedInCompanyId: number;
    locations: {
      location: {
        text: string;
      };
    }[];
    slug: string;
    title: string;
    to_date: string | null;
    urls: {
      ad: string;
      apply: string;
    };
    video: {
      content: string | null;
      url: string;
    };
    internal_reference: string | null;
    owner: {
      id: number;
      name: string;
      email: string;
    };
    skills: string;
    application_date_is_hidden: boolean;
}

export interface JobsState {
    jobsList: JobPost[];
    selectedJob: JobPost | null;
    loading: boolean;
    error: boolean;
}

const initialState: JobsState = {
    jobsList: [],
    selectedJob: null,
    loading: true,
    error: false
}

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        searchById: (state, action: PayloadAction<Number>) => {
            const jobIdToFind = action.payload;
            const selectedJob = state.jobsList.find(job => job.id === jobIdToFind);
            if (selectedJob) {
                state.selectedJob = selectedJob;
              } else {
                state.selectedJob = null;
              }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(callGetAllJobs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(callGetAllJobs.fulfilled, (state, action) => {
            const { payload } = action
            if (payload.code) {
                state.error = true
                state.loading = false
            } else {
                state.jobsList = payload
                state.loading = false
            }
        })
        builder.addCase(callGetAllJobs.rejected, (state) => {
            state.error = true
            state.loading = false
        })
    }
});

export const { searchById } = jobsSlice.actions

export default jobsSlice.reducer;