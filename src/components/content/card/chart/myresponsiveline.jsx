import { ResponsiveLine } from "@nivo/line";

const MyResponsiveLine = ({ data, rotate }) => {
  return (
    <>
      {data && (
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 20, bottom: 30, left: 30 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: Number(rotate),
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          enableGridX={false}
          enableGridY={false}
          pointSize={6}
          pointColor="#dc232d"
          pointLabelYOffset={-12}
          useMesh={true}
          enableCrosshair={false}
        />
      )}
    </>
  );
};

export default MyResponsiveLine;
