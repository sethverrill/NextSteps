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
    {
      id: '4',
      title: 'Recognize the letter A',
      description:
        'Be able to recognize the letter A and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Starry-Letter-A-is-for-Apple-Coloring-Sheet.pdf',
    },
    {
      id: '5',
      title: 'Recognize the letter B',
      description:
        'Be able to recognize the letter B and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Easy-Letter-B-With-Alphabet-Book-Coloring-Page-For-Kids.pdf',
    },
    {
      id: '6',
      title: 'Recognize the letter E',
      description:
        'Be able to recognize the letter E and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Letter-E-is-for-Elephant-Traceable-Worksheet-for-Kids.pdf',
    },
    {
      id: '7',
      title: 'Recognize the letter V',
      description:
        'Be able to recognize the letter V and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://www.supercoloring.com/media/coloring/429236/v-is-for-vegetables',
    },
    {
      id: '8',
      title: 'Recognize the letter M',
      description:
        'Be able to recognize the letter M and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Letter-M-For-Mushroom-With-Bees-Coloring-Page-For-Kidds.pdf',
    },
    {
      id: '9',
      title: 'Recognize the letter U',
      description:
        'Be able to recognize the letter U and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://superstarworksheets.com/wp-content/uploads/2024/07/LetterUColoringPage2.pdf',
    },
    {
      id: '10',
      title: 'Recognize the letter F',
      description:
        'Be able to recognize the letter F and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Simple-Letter-F-for-Fish-Coloring-Page.pdf',
    },
    {
      id: '11',
      title: 'Recognize the letter N',
      description:
        'Be able to recognize the letter N and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://superstarworksheets.com/wp-content/uploads/2024/08/LetterNColoringPage.pdf',
    },
    {
      id: '12',
      title: 'Recognize the letter P',
      description:
        'Be able to recognize the letter P and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Polka-Dot-Letter-P-is-for-Penguin-Pencil-and-Pizza-Coloring-Page-for-Kids.pdf',
    },
    {
      id: '13',
      title: 'Recognize the letter W',
      description:
        'Be able to recognize the letter W and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://www.supercoloring.com/media/coloring/429240/w-is-for-whale',
    },
    {
      id: '14',
      title: 'Recognize the letter C',
      description:
        'Be able to recognize the letter C and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Smiling-Cow-with-Letter-C-Traceable-Worksheet.pdf',
    },
    {
      id: '15',
      title: 'Recognize the letter L',
      description:
        'Be able to recognize the letter L and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Letter-L-is-for-Lamp-Traceable-Worksheet.pdf',
    },
    {
      id: '16',
      title: 'Recognize the letter X',
      description:
        'Be able to recognize the letter X and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://www.supercoloring.com/media/coloring/436726/letter-x-is-for-xylophone',
    },
    {
      id: '17',
      title: 'Recognize the letter D',
      description:
        'Be able to recognize the letter D and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Letter-D-is-for-Drum-Donut-Dog-and-Dromedary.pdf',
    },
    {
      id: '18',
      title: 'Recognize the letter G',
      description:
        'Be able to recognize the letter G and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Polka-Dot-Letter-G-is-for-Giraffe-Grapes-Gift-and-Goat.pdf',
    },
    {
      id: '19',
      title: 'Recognize the letter Y',
      description:
        'Be able to recognize the letter Y and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://superstarworksheets.com/wp-content/uploads/2024/07/LetterYColoringPage2.pdf',
    },
    {
      id: '20',
      title: 'Recognize the letter I',
      description:
        'Be able to recognize the letter I and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://superstarworksheets.com/wp-content/uploads/2024/07/LetterIColoringPage2.pdf',
    },
    {
      id: '21',
      title: 'Recognize the letter O',
      description:
        'Be able to recognize the letter O and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://superstarworksheets.com/wp-content/uploads/2024/07/LetterOColoringPage2.pdf',
    },
    {
      id: '22',
      title: 'Recognize the letter H',
      description:
        'Be able to recognize the letter H and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Polka-Dot-Letter-H-is-for-House-Horse-and-Hat-Coloring-Sheet.pdf',
    },
    {
      id: '23',
      title: 'Recognize the letter Z',
      description:
        'Be able to recognize the letter Z and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://superstarworksheets.com/wp-content/uploads/2024/07/LetterZColoringPage1.pdf',
    },
    {
      id: '24',
      title: 'Recognize the letter Q',
      description:
        'Be able to recognize the letter Q and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://www.supercoloring.com/media/coloring/427503/letter-q-is-for-quail',
    },
    {
      id: '25',
      title: 'Recognize the letter R',
      description:
        'Be able to recognize the letter R and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Polka-Dot-Letter-R-for-Rabbit-Rocket-and-Rainbow-Coloring-Page-for-Kids.pdf',
    },
    {
      id: '26',
      title: 'Recognize the letter T',
      description:
        'Be able to recognize the letter T and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://www.supercoloring.com/media/coloring/429226/t-is-for-tiger',
    },
    {
      id: '27',
      title: 'Recognize the letter S',
      description:
        'Be able to recognize the letter S and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://www.supercoloring.com/media/coloring/427509/letter-s-is-for-star',
    },
    {
      id: '28',
      title: 'Recognize the letter K',
      description:
        'Be able to recognize the letter K and name at least three things that start with that letter. Color in coloring page.',
      status: 'available',
      url: 'https://mondaymandala.com/wp-content/uploads/Polka-Dot-Letter-K-for-Kangaroo-Kite-and-Key-Coloring-Sheet.pdf',
    },
    {
      id: '29',
      title: 'Twenty Minutes of Yoga',
      description: 'Practice stretching and mobility exercises for twenty minutes',
      status: 'available',
    },
  ];

  getLearningGoals(): LearningGoal[] {
    return this.learningGoals;
  }

  getNextGoal(): LearningGoal | undefined {
    return this.learningGoals[0];
  }

  completeGoal(id: string) {
    const index = this.learningGoals.findIndex((goal) => goal.id === id);
    if (index !== -1) {
      const [justLearned] = this.learningGoals.splice(index, 1);
      justLearned.status = 'learned';
      this.learningGoals.push(justLearned);
    }
    console.log(this.learningGoals);
  }

  repeatGoal(id: string) {
    const index = this.learningGoals.findIndex((goal) => goal.id === id);

    if (index !== -1) {
      const [refreshNeeded] = this.learningGoals.splice(index, 1);
      refreshNeeded.status = 'practice';
      this.learningGoals.splice(5, 0, refreshNeeded);
    }
    console.log(this.learningGoals);
  }
}
