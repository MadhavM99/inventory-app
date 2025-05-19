import { getQuarterValue } from "./dataHelpers";
export function prepareChartData(stack) {
  const quarters = [
    "Q2-2022",
    "Q3-2022",
    "Q1-2023",
    "Q2-2023",
    "Q3-2023",
    "Q4-2023",
    "Q1-2024",
    "Q2-2024",
    "Q3-2024",
    "Q4-2024",
    "Q1-2025",
    "Q2-2025",
    "Q3-2025",
    "Q4-2025",
    "Q1-2026",
    "Q2-2026",
  ];

  return quarters.map((quarter) => ({
    quarter,
    aiforecast: getQuarterValue(stack.aiforecast.quarters, quarter),
    Data1: getQuarterValue(stack.aiforecast.quartersDash, quarter),
    finalforecast: getQuarterValue(stack.finalforecast.quarters, quarter),
    Data2: getQuarterValue(stack.finalforecast.quartersDash, quarter),
    consumption: getQuarterValue(stack.consumption.quarters, quarter),
    Data3: getQuarterValue(stack.consumption.quartersDash, quarter),
  }));
}
