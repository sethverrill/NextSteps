import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LearningGoal } from '../models/learning-goal';

@Component({
  selector: 'app-learning-goal',
  imports: [],
  templateUrl: './learning-goal.component.html',
  // styleUrl: './learning-goal.css',
})
export class LearningGoalComponent {
  @Input ({ required: true }) goal!: LearningGoal;
  @Output() learned = new EventEmitter<string>();
  @Output() needsPractice = new EventEmitter<string>();

  onLearned() {
    this.learned.emit(this.goal.id)
  }

onNeedsPractice() {
  this.needsPractice.emit(this.goal.id);
}

}
