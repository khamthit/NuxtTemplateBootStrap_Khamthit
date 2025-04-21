<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Props from parent
const props = defineProps({
  labels: Array,
  data: Array,
});

// Chart data using props
const chartData = {
  labels: props.labels,
  datasets: [
    {
      label: "QUOTARS",
      backgroundColor: "#28a745",
      data: props.data,
    },
  ],
};

const chartOptions = {
  responsive: true, // Keep this
  maintainAspectRatio: false, // Add this line
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "ຮ້ອງຂໍລົງທະບຽນ ໂຄຕ້າ",
      font: {
        family: "'Noto Sans Lao', 'Noto Sans', sans-serif",
      },
    },
  },
}

</script>

<style scoped>
/* Ensure the chart container can resize. Usually handled by parent (like col-lg-6) */
/* You might need this if the parent doesn't provide height implicitly */
/* div { 
  position: relative; 
  height: 40vh; 
  width: 80vw; 
} */
/* Adjust height/width as needed, or rely on the Bootstrap column */
</style>
