import { render, screen } from '@testing-library/react';
import CourseHeader from '.';

describe('[component] Course Header', () => {
  it('renders', () => {
    const linkProp = 'https://www.mysite.com';
    const fileDownloadProp = 'myFileDownload.pdf';
    const { container } = render(
      <CourseHeader
        link={linkProp}
        fileDownload={fileDownloadProp}
        title="Course Header Test Title"
      />
    );

    expect(container.firstChild).toContainHTML('</header>');

    const title = screen.getByText('Course Header Test Title');
    expect(title).toBeInTheDocument();
    expect(title).toContainHTML('</h1>');

    const links = container.querySelectorAll('a');
    expect(links.length).toEqual(3); // back button and two CTA's

    expect(links[1].href).toContain(linkProp); // external link to Google Drive CTA
    expect(links[2].href).toContain(fileDownloadProp); // download CTA
  });
});
