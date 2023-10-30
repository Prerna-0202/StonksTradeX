import { useEffect } from "react"
import { Chart } from "chart.js";

const LineChart = () => {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["9:30 AM", "10:47 AM", "11:50 AM", "12:30 PM", "4:30 PM", "5:00 PM", "6:00 PM"],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133],
          label: "Applied",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }, {
          data: [70, 90, 44, 60, 83, 90, 100],
          label: "Accepted",
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
          fill: false,
        }, {
          data: [10, 21, 60, 44, 17, 21, 17],
          label: "Pending",
          borderColor: "#ffa500",
          backgroundColor: "#ffc04d",
          fill: false,
        }, {
          data: [6, 3, 2, 2, 7, 0, 16],
          label: "Rejected",
          borderColor: "#c45850",
          backgroundColor: "#d78f89",
          fill: false,
        }
        ]
      },
    });
  }, [])
  return (
    <>
      {/* line chart */}
      <div className="h-1/4 lg:w-5/6 pb-4 flex mx-auto lg:items-center lg:justify-center my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  lg:w-5/6 w-full h-fit my-auto  shadow-xl'>
          <canvas className="lg:text-xl" id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}

export default LineChart;