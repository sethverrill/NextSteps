import { Injectable } from '@angular/core';
import { LearningGoal } from './models/learning-goal';

@Injectable({ providedIn: 'root' })
export class LearningGoalService {
  private learningGoals: LearningGoal[] = [
    {
      id: '1',
      title: 'Count 15 Blocks',
      description:
        'Lay out fifteen lego blocks and count them each from one to fifteen without a mistake.',
      status: 'available',
    },
    {
      id: '2',
      title: 'Recognize the letter J',
      description:
        'Be able to recognize the letter J and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Letter-J-is-for-Jacket-Traceable-Worksheet-for-Kids.pdf',
    },
    {
      id: '3',
      title: 'Practice jumping jacks',
      description: 'Do five consecutive jumping jacks',
      status: 'available',
    },
  ];

  getLearningGoals(): LearningGoal[] {
    return this.learningGoals;
  }

  getNextGoal(): LearningGoal | undefined {
    return this.learningGoals.find(goal => goal.status === 'available')
  }

  completeGoal(id: string) {
    const goal = this.learningGoals.find(goal => goal.id === id);

    if (goal) {
      goal.status = 'learned';
    }
  }

  repeatGoal(id: string) {
    const goal = this.learningGoals.find(goal => goal.id === id);
    
    if (goal) {
      goal.status = 'practice';
    }
  }
}
