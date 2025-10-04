import { useState } from 'react'
import type { userType } from '@/shared/types'
import { users } from '@/data'
import StudentsListElement from '@/features/students/components/StudentsListElement'

type StudentType = Omit<userType, 'password'>

// const students = users.filter((user) => user.role === 'student')

export default function StudentsPage() {
  function updatedStudents(): any {
    const students = [] as Array<StudentType>
    users.forEach((user) => {
      if (user.role === 'student') {
        delete (user as { password?: string }).password
        students.push(user)
      }
    })
    return students
  }

  const [studentList, setStudentList] =
    useState<Array<StudentType>>(updatedStudents())

  function handleExpel(username: string) {
    setStudentList(
      studentList.filter((student) => student.username !== username),
    )
  }
  return (
    <div className=" w-[75%] px-5 ">
      <h1 className="font-bold text-[2rem] pl-3 text-[#333] mb-6">Students</h1>

      {studentList.length === 0 ? (
        <h1 className="font-bold text-xl text-[#333] mx-7">No students</h1>
      ) : (
        <div className="w-[50%] p-6 border-2 border-gray-200 rounded-xl">
          {studentList.map((student) => {
            if (student.role === 'student') {
              return (
                <StudentsListElement
                  student={student}
                  key={student.username}
                  onExpel={handleExpel}
                />
              )
            }
          })}
        </div>
      )}
    </div>
  )
}
