export function UserStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <StatCard
        title="งานที่สนใจ"
        value="0"
        icon="❤️"
      />
      <StatCard
        title="งานที่สมัครแล้ว"
        value="0"
        icon="📝"
      />
      <StatCard
        title="ตอบรับแล้ว"
        value="0"
        icon="✅"
      />
    </div>
  )
}

function StatCard({ title, value, icon }: { title: string; value: string; icon: string }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="text-2xl">{icon}</div>
      </div>
    </div>
  )
} 