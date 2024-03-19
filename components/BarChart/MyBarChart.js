import React, { useContext } from "react";
import { Text, View, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { AuthContext } from "../context/AuthContext";
import styles from "../../styles/styles";

const MyBarChart = () => {
  const { dark, info } = useContext(AuthContext);
  const labels = info.map((a) => a.username);
  const data = info.map((a) => a.expense);
  const dataSet = {
    labels: labels,
    datasets: [
      {
        data: data,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: dark ? "#292929" : "white",
    backgroundGradientFrom: dark ? "#292929" : "white",
    backgroundGradientTo: dark ? "#292929" : "white",
    decimalPlaces: 2,
    color: () => (dark ? "white" : "black"),
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View>
      <Text style={[styles.chartHeader, { color: dark ? "white" : "black" }]}>
        Bar Chart
      </Text>
      <BarChart
        data={dataSet}
        width={Dimensions.get("window").width - 16}
        height={400}
        yAxisLabel="$"
        chartConfig={chartConfig}
        style={styles.graphStyle}
        verticalLabelRotation={2 * info.length}
      />
    </View>
  );
};

export default MyBarChart;
