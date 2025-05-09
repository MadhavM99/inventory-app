export function prepareChartData(stack) {
    const allQuarters = [
      ...stack.aiforecast.quarters,
      ...stack.aiforecast.quartersDash,
      ...stack.finalforecast.quarters,
      ...stack.finalforecast.quartersDash,
      ...stack.consumption.quarters,
      ...stack.consumption.quartersDash,
    ];
  
    // Get unique quarters and sort them chronologically
    const uniqueQuarters = Array.from(new Set(allQuarters.map(q => q.quarter))).sort((a, b) => {
      const [qa, ya] = a.split("-");
      const [qb, yb] = b.split("-");
      const qOrder = { Q1: 1, Q2: 2, Q3: 3, Q4: 4 };
      return Number(ya) - Number(yb) || qOrder[qa] - qOrder[qb];
    });
  
    // Helper to find value for a given quarter and array
    const getVal = (arr, quarter) => {
      const match = arr.find(q => q.quarter === quarter);
      return match ? match.value / 1000 : undefined;
    };
  
    return uniqueQuarters.map(quarter => ({
      quarter,
      aiforecast: getVal(stack.aiforecast.quarters, quarter),
      aiforecastdash: getVal(stack.aiforecast.quartersDash, quarter),
      finalforecast: getVal(stack.finalforecast.quarters, quarter),
      finalforecastdash: getVal(stack.finalforecast.quartersDash, quarter),
      consumption: getVal(stack.consumption.quarters, quarter),
      consumptiondash: getVal(stack.consumption.quartersDash, quarter),
    }));
  }
  