export interface ITask {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  status: string;
  candidateId: string;
}
