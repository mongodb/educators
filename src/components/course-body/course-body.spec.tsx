import { render, screen } from '@testing-library/react';
import CourseBody from '.';

const testMarkup = `
## Course Outline\n\nThis course is designed to cover a broad spectrum of topics on [MongoDB](https://www.mongodb.com) and non-relational databases geared towards learners from beginner to advanced levels. The course includes lessons on comparing and contrasting relational and non-relational databases, outlining the architecture of MongoDB, and detailing how to model data in a document-oriented database. \n\nThis material can support a wide variety of instructional objectives, including learning best practices for querying data and structuring data models in MongoDB, and using features like transactions and aggregations.\n\n\n## Course Format\n\nThe course is organized into 22 lessons beginning with basic concepts and building on complexity as you go. Educators can teach the lessons in order as a full curriculum or pick and choose individual lessons based on the needs of the class.\n
`;

describe('[component] Course Body', () => {
  it('renders the component', () => {
    render(<CourseBody text={testMarkup} />);

    const outlineTitle = screen.getByText('Course Outline');
    expect(outlineTitle).toBeInTheDocument();
    expect(outlineTitle).toContainHTML('</h2>');

    const formatTitle = screen.getByText('Course Format');
    expect(formatTitle).toBeInTheDocument();
    expect(formatTitle).toContainHTML('</h2>');
  });
});
