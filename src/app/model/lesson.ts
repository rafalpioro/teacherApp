import {Section} from "./section";
import {Subject} from "./subject";
import {Student} from "./student";

export interface Lesson {

  id: number;
  date: number;
  dayOfWeek: string;
  section: Section;
  subject: Subject;
  content: string;
  assignment: string;
  materials: string;
  student: Student;
  nextLesson: string;
}
