import { Student } from '../students/student';
import { Result } from './result';
export class Evaluation {
    id: number;
    name: string;
    results: Result[];
    max: number;
    category: string;
    subCategory: string;
}
