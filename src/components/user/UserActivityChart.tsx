'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function UserActivityChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'ประวัติการเข้าใช้งานล่าสุด'
      }
    }
  }

  const labels = ['21/12', '22/12', '23/12', '24/12', '25/12', '26/12', '27/12', '28/12']
  
  const data = {
    labels,
    datasets: [
      {
        label: 'กิจกรรม',
        data: labels.map(() => 0),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      }
    ]
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <Line options={options} data={data} />
    </div>
  )
} 