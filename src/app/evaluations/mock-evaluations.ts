import { Evaluation } from './evaluation';

export const EVALUATIONS: Evaluation[] = [
  {
    id: 1, name: 'Test1', results: [
      { student: { id: 1, name: 'Petit', firstName: 'Frank', orderNumber: 2, classRoom: 'MUTANT' }, result: 10 },
      { student: { id: 2, name: 'Xavier', firstName: 'Charles', orderNumber: 3, classRoom: 'MUTANT' }, result: 9 },
      { student: { id: 3, name: 'Grey', firstName: 'Jen', orderNumber: 1, classRoom: 'MUTANT' }, result: 10 },
      { student: { id: 4, name: 'Vilain Petit', firstName: 'Canard', orderNumber: 1, classRoom: 'REBUT' }, result: 6 }
    ], max: 10, category: 'Math', subCategory: 'Calcul mental'
  },
  {
    id: 2, name: 'Test2', results: [
      { student: { id: 1, name: 'Petit', firstName: 'Frank', orderNumber: 2, classRoom: 'MUTANT' }, result: 10 },
      { student: { id: 2, name: 'Xavier', firstName: 'Charles', orderNumber: 3, classRoom: 'MUTANT' }, result: 9 },
      { student: { id: 3, name: 'Grey', firstName: 'Jen', orderNumber: 1, classRoom: 'MUTANT' }, result: 10 },
      { student: { id: 4, name: 'Vilain Petit', firstName: 'Canard', orderNumber: 1, classRoom: 'REBUT' }, result: 6 }
    ], max: 10, category: 'Math', subCategory: 'Calcul mental'
  }
]