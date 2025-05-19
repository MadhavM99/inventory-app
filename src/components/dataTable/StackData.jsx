import React from "react";

const StackData = ({ stack }) => {
  const allQuarters = [
    ...stack.aiforecast.quartersDash,
    ...stack.finalforecast.quartersDash,
    ...stack.consumption.quartersDash,
  ];

  const uniqueSortedQuarters = Array.from(
    new Set(allQuarters.map((q) => q.quarter))
  ).sort((a, b) => {
    const [qa, ya] = a.split("-");
    const [qb, yb] = b.split("-");
    const qOrder = { Q1: 1, Q2: 2, Q3: 3, Q4: 4 };
    return Number(ya) - Number(yb) || qOrder[qa] - qOrder[qb];
  });

  const getValue = (data, quarter) => {
    const item = data.find((q) => q.quarter === quarter);
    return item ? item.value.toLocaleString() : "";
  };

  const rows = [
    {
      label: "DATA 1",
      data: stack.aiforecast.quartersDash,
    },
    {
      label: "DATA 2",
      data: stack.finalforecast.quartersDash,
    },
    {
      label: "DATA 3",
      data: stack.consumption.quartersDash,
    },
  ];

  return (
    <div style={{paddingLeft : "15px" }}>
      <table
        style={{
          width: "100%",
          tableLayout: "fixed",
          borderCollapse: "separate",
          borderSpacing: "0 16px",
          color: "#e5f8ff",
          fontSize: "11px",
        }}
      >
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={row.label}>
              <td
                style={{
                  fontWeight: 600,
                  background: "#193D4D",
                  minWidth: 90,
                  whiteSpace: "nowrap",
                }}
              >
                {row.label}
              </td>
              {uniqueSortedQuarters.map((quarter, colIdx) => (
                <td
                  key={colIdx}
                  style={{
                    textAlign: "center",
                    minWidth: 40,
                    maxWidth: 50,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {getValue(row.data, quarter)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StackData;
