import { Component, inject, Input, signal } from '@angular/core';
import { LearningGoalComponent } from './learning-goal/learning-goal.component';
import { LearningGoalService } from './learning-goal.service';
import { LearningGoal } from './models/learning-goal';

@Component({
  selector: 'app-root',
  imports: [LearningGoalComponent],
  templateUrl: './app.html',
  // styleUrl: './app.css'
})
export class App {
  private learningGoalService = inject(LearningGoalService);

  currentGoal: LearningGoal | undefined = this.learningGoalService.getLearningGoals()[0];

  onGoalLearned(id: string) {
    this.learningGoalService.completeGoal(id);
    this.currentGoal = this.learningGoalService.getNextGoal();
  }

  onNeedsPractice(id: string) {
    this.learningGoalService.repeatGoal(id);
    this.currentGoal = this.learningGoalService.getNextGoal();
  }
}
