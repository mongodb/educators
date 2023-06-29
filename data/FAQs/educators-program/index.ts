import eligibilityFAQ from './eligibility.md';
import applicationProcessFAQ from './application-process.md';
import promotionalCodeFAQ from './promotional-code.md';
import creditsFAQ from './credits.md';
import studentBenefitsFAQ from './student-benefits.md';
import certficationFAQ from './certfication.md';
import contactFAQ from './contact.md';
import fellowshipFAQ from './fellowship.md';

const CONFIG = [
  {
    title: 'Who is eligible for the MongoDB for Educators Program?',
    body: eligibilityFAQ as unknown as string, // lets us typecast the markdown as string since it comes in as "(MDXProps) => Element"
  },
  {
    title:
      'Can educators outside of the United States apply for the MongoDB for Educators Program?',
    body: 'Yes!',
  },
  {
    title: 'How does the application process work?',
    body: applicationProcessFAQ as unknown as string,
  },
  {
    title:
      'What is the expected turnaround time to be verified as an educator?',
    body: 'Applications that are not instantly approved will be reviewed and addressed within 5-7 days.',
  },
  {
    title: 'How will I receive my Atlas Promotional Code?',
    body: promotionalCodeFAQ as unknown as string,
  },
  {
    title: 'How do MongoDB Atlas credits work?',
    body: creditsFAQ as unknown as string,
  },
  {
    title: 'Do MongoDB Atlas Promotional Codes expire?',
    body: "Atlas Promotional Codes will expire if they're not applied to your Atlas account within 90 days. Once applied, you will have 12 months to use all of the credits.",
  },
  {
    title: 'What benefits are available for my students?',
    body: studentBenefitsFAQ as unknown as string,
  },
  {
    title: 'Does MongoDB provide fellowships for university students?',
    body: fellowshipFAQ as unknown as string,
  },
  {
    title: 'How do I access free certification for educators?',
    body: certficationFAQ as unknown as string,
  },
  {
    title: 'I have more questions, who can I contact?',
    body: contactFAQ as unknown as string,
  },
];

export default CONFIG;
