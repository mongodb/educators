import researchFAQ from './research.md';
import questionsFAQ from './questions.md';

const CONFIG = [
  {
    title:
      'Are MongoDB employees eligible to apply for the MongoDB PhD Fellowship?',
    body: 'No, MongoDB employees are not eligible for the Fellowship.',
  },
  {
    title: 'Are international students eligible?',
    body: 'Yes, we accept applications from all accredited institutions worldwide. Applications must be submitted in English.',
  },
  {
    title:
      'Are there any research areas that MongoDB is more interested in than others?',
    body: researchFAQ as unknown as string, // lets us typecast the markdown as string since it comes in as "(MDXProps) => Element"
  },
  {
    title: 'Who will review the applications?',
    body: 'Applications will be reviewed by a panel of 5 MongoDB Distinguished Engineers, most of whom have published research and taught computer science at the graduate level.',
  },
  {
    title: 'If selected, when does the Fellowship start?',
    body: 'Since we accept applications on a rolling basis, the Fellowship will begin within 90 days of applicants receiving their acceptance to the program.',
  },
  {
    title: 'Are there any tax implications if I receive the Fellowship?',
    body: 'Awards are taxable based on tax laws where you are a resident. Fellows will need to submit necessary tax information accepting their award. MongoDB does not advise Fellows on how to file their taxes.',
  },
  {
    title:
      'Are there any intellectual property implications if I receive the Fellowship?',
    body: 'All research conducted by Fellows belongs to Fellows in compliance with any university policies. Fellows are not subject to intellectual property restrictions unless they do an internship or consult seperately with MongoDB during the Fellowship.',
  },
  {
    title: 'Is childcare an approved use of my award?',
    body: 'Yes, and kudos to you for pursuing your academic education while also juggling parenthood.',
  },
  {
    title: 'If I have additional questions, who should I contact?',
    body: questionsFAQ as unknown as string,
  },
];

export default CONFIG;
