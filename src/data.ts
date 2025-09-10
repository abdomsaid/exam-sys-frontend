import type { ExamType, QuestionsType, userType } from './shared/types'

export const exams: Array<ExamType> = [
  {
    id: 1,
    numOfQs: 10,
    duration: 30,
    startDate: '2025-09-03T09:00:00',
    dueDate: '2025-09-03T09:30:00',
  },
  {
    id: 2,
    numOfQs: 20,
    duration: 45,
    startDate: '2025-09-04T10:00:00',
    dueDate: '2025-09-04T10:45:00',
  },
  {
    id: 3,
    numOfQs: 15,
    duration: 60,
    startDate: '2025-09-05T11:30:00',
    dueDate: '2025-09-05T12:30:00',
  },
  {
    id: 4,
    numOfQs: 25,
    duration: 90,
    startDate: '2025-09-06T08:00:00',
    dueDate: '2025-09-06T09:30:00',
  },
  {
    id: 5,
    numOfQs: 12,
    duration: 40,
    startDate: '2025-09-07T13:00:00',
    dueDate: '2025-09-07T13:40:00',
  },
  {
    id: 6,
    numOfQs: 18,
    duration: 50,
    startDate: '2025-09-08T15:00:00',
    dueDate: '2025-09-08T15:50:00',
  },
  {
    id: 7,
    numOfQs: 30,
    duration: 120,
    startDate: '2025-09-09T09:00:00',
    dueDate: '2025-09-09T11:00:00',
  },
  {
    id: 8,
    numOfQs: 8,
    duration: 20,
    startDate: '2025-09-10T16:00:00',
    dueDate: '2025-09-10T16:20:00',
  },
  {
    id: 9,
    numOfQs: 22,
    duration: 75,
    startDate: '2025-09-11T14:30:00',
    dueDate: '2025-09-11T15:45:00',
  },
  {
    id: 10,
    numOfQs: 14,
    duration: 35,
    startDate: '2025-09-12T10:15:00',
    dueDate: '2025-09-12T10:50:00',
  },
]

export const questions: Array<QuestionsType> = [
  {
    id: 1,
    question: 'What is the capital of France?',
    choices: ['Paris', 'Rome', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    choices: ['Earth', 'Venus', 'Mars', 'Jupiter'],
    correctAnswer: 'Mars',
  },
  {
    id: 3,
    question: 'Who developed the theory of relativity?',
    choices: [
      'Isaac Newton',
      'Albert Einstein',
      'Nikola Tesla',
      'Galileo Galilei',
    ],
    correctAnswer: 'Albert Einstein',
  },
  {
    id: 4,
    question: 'Which is the largest ocean on Earth?',
    choices: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Pacific Ocean',
      'Arctic Ocean',
    ],
    correctAnswer: 'Pacific Ocean',
  },
  {
    id: 5,
    question: 'What is the smallest prime number?',
    choices: ['0', '1', '2', '3'],
    correctAnswer: '2',
  },
  {
    id: 6,
    question: 'Which language is primarily used for Android app development?',
    choices: ['Java', 'Python', 'C#', 'Ruby'],
    correctAnswer: 'Java',
  },
  {
    id: 7,
    question: 'What is the chemical symbol for gold?',
    choices: ['Gd', 'Au', 'Ag', 'Go'],
    correctAnswer: 'Au',
  },
  {
    id: 8,
    question: 'Which continent is the Sahara Desert located in?',
    choices: ['Asia', 'Africa', 'Australia', 'South America'],
    correctAnswer: 'Africa',
  },
  {
    id: 9,
    question: 'Who painted the Mona Lisa?',
    choices: [
      'Vincent van Gogh',
      'Pablo Picasso',
      'Leonardo da Vinci',
      'Claude Monet',
    ],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    id: 10,
    question: 'Which gas do humans need to breathe in to survive?',
    choices: ['Carbon Dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'],
    correctAnswer: 'Oxygen',
  },
]

export const users: Array<userType> = [
  {
    username: 'student1',
    password: '123',
    role: 'student',
    fullName: 'student1',
  },
  {
    username: 'student2',
    password: '123',
    role: 'student',
    fullName: 'student2',
  },
  {
    username: 'student3',
    password: '123',
    role: 'student',
    fullName: 'student3',
  },
  {
    username: 'student4',
    password: '123',
    role: 'student',
    fullName: 'student4',
  },
  {
    username: 'student5',
    password: '123',
    role: 'student',
    fullName: 'student5',
  },
  { username: 'admin', password: '123', role: 'admin', fullName: 'admin' },
]
