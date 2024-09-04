"use client"

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { FaChevronDown } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesChart: React.FC = () => {
  // Chart data and options
  const data = {
    labels: ["Export", "Domestic"],
    datasets: [
      {
        data: [30, 70],
        backgroundColor: ["#FF9EC1", "#63ABFD"],
        hoverBackgroundColor: ["#FF9EC1", "#63ABFD"],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="sales-chart-container">
      <div className="sales-chart-header">
        <h2 className="text-sm font-medium">Total Sales</h2>
        <button>
          This Month <FaChevronDown className="ml-1" />
        </button>
      </div>
      <div className="sales-info mb-4">
        <p className="amount">₹. 50,00,000</p>
        <p className="text-[#4C4C4C]">50 Orders</p>
      </div>
      <div className="chart-section">
        <Doughnut data={data} options={options} className="w-32 h-32" />
        <div className="legend">
          <div className="legend-item export-indicator">
            <span className="color-indicator"></span>
            <span className="label">Export</span>
          </div>
          <div className="legend-item domestic-indicator">
            <span className="color-indicator"></span>
            <span className="label">Domestic</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
