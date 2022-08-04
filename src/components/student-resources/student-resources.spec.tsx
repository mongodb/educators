import { render, screen } from '@testing-library/react';
import studentResourcesData from 'data/student-resources.json';
import StudentResources from '.';

describe('[component] Student Resources', () => {
  it('renders the component', () => {
    render(
      <StudentResources
        mainCard={studentResourcesData.mainCard}
        subCards={studentResourcesData.subCards}
      />
    );
    const bg = screen.getByAltText('mongoDB brand icon');
    expect(bg).toBeInTheDocument();
  });
});
