import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stacks: [
    {
      id: "099837465721",
      name: "Sample Stack",
      aiForecasts: { percentage: 88, confidence: 89 },
      finalForecasts: { percentage: 80, confidence: 80 },
      historicalData: [
        { period: "Q2 2022", consumption: 500 },
        { period: "Q3 2022", consumption: 450 },
        { period: "Q4 2022", consumption: 600 },
        { period: "Q1 2023", consumption: 500 },
        { period: "Q2 2023", consumption: 450 },
        { period: "Q3 2023", consumption: 700 },
        { period: "Q4 2023", consumption: 650 },
      ],
      forecastData: [
        {
          period: "Q2 2024",
          aiForecasts: 744038,
          finalForecasts: 410623,
          data3: 744038,
        },
        {
          period: "Q3 2024",
          aiForecasts: 670100,
          finalForecasts: 455754,
          data3: 670100,
        },
        {
          period: "Q4 2024",
          aiForecasts: 640250,
          finalForecasts: 536564,
          data3: 638250,
        },
        {
          period: "Q1 2025",
          aiForecasts: 670000,
          finalForecasts: 474411,
          data3: 668895,
        },
        {
          period: "Q2 2025",
          aiForecasts: 671100,
          finalForecasts: 501124,
          data3: 671100,
        },
        {
          period: "Q3 2025",
          aiForecasts: 712033,
          finalForecasts: 513751,
          data3: 712033,
        },
        {
          period: "Q4 2025",
          aiForecasts: 705500,
          finalForecasts: 550004,
          data3: 705500,
        },
        {
          period: "Q1 2026",
          aiForecasts: 719123,
          finalForecasts: 545455,
          data3: 719123,
        },
      ],
    },
    // Additional sample stacks with different data
    {
      id: "099837465722",
      name: "Sample Stack",
      aiForecasts: { percentage: 85, confidence: 87 },
      finalForecasts: { percentage: 78, confidence: 79 },
      historicalData: [
        { period: "Q2 2022", consumption: 550 },
        { period: "Q3 2022", consumption: 500 },
        { period: "Q4 2022", consumption: 650 },
        { period: "Q1 2023", consumption: 550 },
        { period: "Q2 2023", consumption: 500 },
        { period: "Q3 2023", consumption: 750 },
        { period: "Q4 2023", consumption: 700 },
      ],
      forecastData: [
        {
          period: "Q2 2024",
          aiForecasts: 734038,
          finalForecasts: 400623,
          data3: 734038,
        },
        {
          period: "Q3 2024",
          aiForecasts: 660100,
          finalForecasts: 445754,
          data3: 660100,
        },
        {
          period: "Q4 2024",
          aiForecasts: 630250,
          finalForecasts: 526564,
          data3: 628250,
        },
        {
          period: "Q1 2025",
          aiForecasts: 660000,
          finalForecasts: 464411,
          data3: 658895,
        },
        {
          period: "Q2 2025",
          aiForecasts: 661100,
          finalForecasts: 491124,
          data3: 661100,
        },
        {
          period: "Q3 2025",
          aiForecasts: 702033,
          finalForecasts: 503751,
          data3: 702033,
        },
        {
          period: "Q4 2025",
          aiForecasts: 695500,
          finalForecasts: 540004,
          data3: 695500,
        },
        {
          period: "Q1 2026",
          aiForecasts: 709123,
          finalForecasts: 535455,
          data3: 709123,
        },
      ],
    },
  ],
  selectedStackId: "099837465721",
};

const stackSlice = createSlice({
  name: "stack",
  initialState,
  reducers: {
    selectStack: (state, action) => {
      state.selectedStackId = action.payload;
    },
  },
});

export const { selectStack } = stackSlice.actions;
export default stackSlice.reducer;
