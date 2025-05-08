import React from "react";

const StackData = ({ stack }) => {
  console.log(stack);
  const rows = [
    {
      label: "Data 1",
      values: stack.aiforecast.quarters.map((q) => q.value),
    },
    {
      label: "Data 2",
      values: stack.consumption.quarters.map((q) => q.value),
    },
    {
      label: "Data 3",
      values: stack.finalforecast.quarters.map((q) => q.value),
    },
  ];

  return (
    <div style={{ overflowX: "auto", marginTop: 24 }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#193D4D",
          color: "#e5f8ff",
        }}
      >
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={row.label}>
              <td
                style={{
                  padding: "10px 16px",
                  fontWeight: 600,
                  borderRight: "1px solid #22313a",
                  background: "#193D4D",
                  minWidth: 140,
                  letterSpacing: 1,
                }}
              >
                {row.label}
              </td>
              {row.values.map((val, colIdx) => (
                <td
                  key={colIdx}
                  style={{
                    padding: "10px 16px",
                    textAlign: "right",
                    borderBottom:
                      rowIdx < rows.length - 1 ? "1px solid #22313a" : "none",
                    minWidth: 120,
                  }}
                >
                  {val.toLocaleString()}
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
