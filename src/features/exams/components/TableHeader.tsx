export default function TableHeader() {
  const thStyle = 'px-4 py-2 border-b font-medium text-gray-700'
  return (
    <thead>
      <tr>
        <th className={thStyle}>Start Date</th>
        <th className={thStyle}>Due Date</th>
        <th className={thStyle}>Number of Questions</th>
        <th className={thStyle}>Duration</th>
        <th className={thStyle}></th>
      </tr>
    </thead>
  )
}
