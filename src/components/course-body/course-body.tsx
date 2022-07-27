import Markdown from 'components/markdown';
import CourseBodyProps from './types';
import styles from './styles';

const markdownText = `## Course Outline

This course is designed to cover a broad spectrum of topics on MongoDB and non-relational databases geared towards learners from beginner to advanced levels. The course includes lessons on comparing and contrasting relational and non-relational databases, outlining the architecture of MongoDB, and detailing how to model data in a document-oriented database. 

This material can support a wide variety of instructional objectives, including learning best practices for querying data and structuring data models in MongoDB, and using features like transactions and aggregations.

::youtube[Test]{#testeoiwejoewfij}

## Course Format

The course is organized into 22 lessons beginning with basic concepts and building on complexity as you go. Educators can teach the lessons in order as a full curriculum or pick and choose individual lessons based on the needs of the class. The lessons are formatted on slide decks with detailed instructor notes. There are also corresponding PDF versions available to download. Each lesson can be used as lectures during the semester, for ascrynous learning, and or/ as complementary material to a MongoDB University course. 

Many of the lessons include hands-on exercises utilizing the [MongoDB Web Shell](https://mws.mongodb.com/) or mongosh to increase student engagement and give real world practice. The slides contain instructions on how to launch and connect to the shell. 

Quiz questions and answers on key concepts are embedded throughout the lessons to enhance knowledge retention. 
`;

export default function CourseBody({
  wrapperStyles,
}: CourseBodyProps): JSX.Element {
  return (
    <section
      sx={{
        ...styles.CourseBodyWrapper,
        ...wrapperStyles,
      }}
    >
      <Markdown text={markdownText} />
    </section>
  );
}
