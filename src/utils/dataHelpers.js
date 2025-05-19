export function getQuarterValue(data, quarter) {
  if (!Array.isArray(data)) return null;
  const item = data.find((q) => q.quarter === quarter);
  return item ? Number(item.value) / 1000 : null;
}
