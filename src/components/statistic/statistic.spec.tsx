import { render, screen } from '@testing-library/react';
import Statistic from '.';

describe('[component] Statistic', () => {
	it('renders default props and provided props', () => {
		render(
      <Statistic
        count="15"
        description="Statistic Test Description"
      />
    );

		const count = screen.getByText('15');
		expect(count).toBeInTheDocument();
    expect(count).toContainHTML('span'); // test that customElement "span" should be passed to <TypographyScale />


		const desc = screen.getByText('Statistic Test Description');
		expect(desc).toBeInTheDocument();
	});
});