import { render, screen } from '@testing-library/react';
import studentResourcesData from 'data/student-resources.json';
import StudentResources from '.';

describe('[component] Student Resources', () => {
  it('renders the component', () => {
    const { container } = render(
      <StudentResources
        mainCard={studentResourcesData.mainCard}
        subCards={studentResourcesData.subCards}
      />
    );
    const bg = screen.getByAltText('mongoDB brand icon');
    expect(bg).toBeInTheDocument();

    expect(container.querySelectorAll('h2').length).toEqual(1);
    expect(container.querySelectorAll('picture').length).toEqual(4); // background img + 3 Featured Cards
  });
});
