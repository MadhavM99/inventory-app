import React from "react";
import { getQuarterValue } from "../../utils/dataHelpers";

function StackData({ stack }) {
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

  const rows = [
    { label: "DATA 1", data: stack.aiforecast.quartersDash },
    { label: "DATA 2", data: stack.finalforecast.quartersDash },
    { label: "DATA 3", data: stack.consumption.quartersDash },
  ];

  return (
    <div style={{ paddingLeft: "15px" }}>
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
          {rows.map((row) => (
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
              {quarters.map((quarter) => (
                <td
                  key={quarter}
                  style={{
                    textAlign: "center",
                    minWidth: 40,
                    maxWidth: 50,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {getQuarterValue(row.data, quarter)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StackData;
