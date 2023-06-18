export interface Task {
  description: string;
  status: 'open' | 'in_progress' | 'completed';
}
