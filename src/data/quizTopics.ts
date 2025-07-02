import TagOutFundamentals from '../quizzes/TagOutFundamentals';
import FirePreventionResponse from './FirePreventionResponse';
import ShipboardSafetyFundamentals from './ShipboardSafetyFundamentals';

//const quizTopics = [
//  {
//    title: TagOutFundamentals.title,
//   description: 'Key procedures and safety rules for equipment tag-out on Navy vessels.',
//    questions: TagOutFundamentals.questions
//  }
//];

const quizTopics = [
  {
    id: 'fire-prevention',
    title: FirePreventionResponse.title,
    description: 'Learn essential practices for preventing and responding to shipboard fires.',
    questions: FirePreventionResponse.questions,
  },
  {
    id: 'shipboard-safety',
    title: ShipboardSafetyFundamentals.title,
    description: 'Understand the core concepts of safety protocols aboard Navy ships.',
    questions: ShipboardSafetyFundamentals.questions,
  },
  {
	id: 'TagOut-Fundamentals',
    title: TagOutFundamentals.title,
    description: 'Key procedures and safety rules for equipment tag-out on Navy vessels.',
    questions: TagOutFundamentals.questions,
  } 
  ];
export default quizTopics;
