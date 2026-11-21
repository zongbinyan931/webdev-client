export interface Course {
  _id: string;
  name: string;
  number: string;
  description: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  image: string;
  term: string;
}
export interface Lesson { _id: string; name: string; description: string; module: string }
export interface Module { _id: string; name: string; description: string; course: string; lessons: Lesson[] }
export interface Assignment {
  _id: string; course: string; title: string; description: string; points: number;
  due: string; available: string; until?: string; notes?: string; group?: string;
  gradeAs?: string; submissionType?: string; assignTo?: string; options?: string[];
}
export interface User {
  _id: string; username: string; firstName: string; lastName: string; email: string;
  dob: string; role: string; loginId: string; section: string; lastActivity: string;
  totalActivity: string; password: string;
}
export interface Enrollment { _id: string; user: string; course: string }
