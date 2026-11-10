export type GoalStatus = 'available' | 'practice' | 'learned';

export interface LearningGoal {
  id: string;
  title: string;
  description: string;
  status: GoalStatus;
  url?: string;
}