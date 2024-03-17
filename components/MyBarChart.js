import React from "react";
import { Text, View, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import styles from "../styles/styles";

const MyBarChart = ({info,dark}) => {
  const data = {
    labels: [
      info[0].name,
      info[1].name,
      info[2].name,
      info[3].name,
      info[4].name,
    ],
    datasets: [
      {
        data: [
          info[0].data,
          info[1].data,
          info[2].data,
          info[3].data,
          info[4].data,
        ],
      },
    ],
  };
  const chartConfig = {
    backgroundColor: dark ? '#292929' : 'white',
    backgroundGradientFrom: dark ? '#292929' : 'white',
    backgroundGradientTo: dark ? '#292929' : 'white',
    decimalPlaces: 2,
    color: () => dark ? 'white' : 'black',
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View>
      <Text
        style={[styles.chartHeader, { color: dark ? "white" : "black" }]}
      >
        Bar Chart
      </Text>
      <BarChart
        data={data}
        width={Dimensions.get("window").width}
        height={400}
        yAxisLabel="$"
        chartConfig={chartConfig}
        style={[styles.graphStyle]}
      />
    </View>
  );
};

export default MyBarChart;
