export interface ICandidateEducation {
  id: string;
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate: Date;
  grade?: string;
  description?: string;
  candidateId: string;
}
