// import axios from 'axios';
// import { act, render, screen, fireEvent } from '@testing-library/react';
// import Form, { isRequired, emailPattern } from '.';

import Form from '.';
import { render, screen } from '@testing-library/react';

jest.mock('axios');

// TODO: Tests will be cleaned up once testing and integration is complete

// Because of validators on form fields, we need to populate all of the "required" fields in order to test submitting the form
// function populateRequiredFormFields(
//   inputs: HTMLCollectionOf<HTMLInputElement>,
//   selects: HTMLElement[]
// ) {
//   for (let i = 0; i < inputs.length; i++) {
//     if (inputs[i].type === 'email') {
//       fireEvent.change(inputs[i], { target: { value: 'firstlast@mail.com' } });
//     } else if (inputs[i].type === 'checkbox') {
//       fireEvent.click(inputs[i]);
//     } else {
//       fireEvent.change(inputs[i], { target: { value: 'lorem' } });
//     }
//   }

//   for (let j = 0; j < selects.length; j++) {
//     const el = selects[j].nextElementSibling?.firstChild?.firstChild;
//     if (el) {
//       fireEvent.click(el, { target: { innerText: 'ipsum' } });
//     }
//   }
// }

// function populateCourseSyllabusField() {
//   const enterWebUrlBtn = screen.getByText('Enter a Web URL');
//   expect(enterWebUrlBtn).toBeInTheDocument();

//   fireEvent.click(enterWebUrlBtn);

//   const webUrlInput = screen.getByTestId('url-upload');

//   // populate the input and then call blur event since that is when value is set on the element
//   fireEvent.change(webUrlInput, { target: { value: 'http://www.test.com' } });
//   fireEvent.blur(webUrlInput);
// }

describe('[component] Form', () => {
  it('renders the component', () => {
    render(
      <Form
        isOpen
        closeForm={() => {}}
        texts={{
          title: 'Test',
          postSubmissionTitle: 'Test',
          postSubmissionDescription: 'Test',
          button: 'Submit',
        }}
        fields={[{ name: 'test', label: 'test' }]}
        submitForm={() => {}}
      />
    );

    const form = screen.getByTestId('form-modal');
    expect(form).toBeInTheDocument();
  });

  // it('does not render the component if isOpen prop is false', () => {
  //   const { container } = render(<Form isOpen={false} closeForm={() => {}} />);
  //   expect(container.firstChild).toBeNull();
  // });

  // it('validates input if field is required', () => {
  //   expect(isRequired()('hello world')).toEqual(''); // No warning is returned if text is entered
  //   expect(isRequired()('')).toEqual('This field is required');
  // });

  // it('validates if email input matches an email address pattern', () => {
  //   expect(emailPattern()('')).toEqual(''); // passes if no value provided
  //   expect(emailPattern()('firstlast@gmail')).toEqual(
  //     'Please enter a valid email address'
  //   );
  //   expect(emailPattern()('firstlast')).toEqual(
  //     'Please enter a valid email address'
  //   );
  //   expect(emailPattern()('firstlast@gmail.')).toEqual(
  //     'Please enter a valid email address'
  //   );
  //   expect(emailPattern()('firstlast@gmail.com')).toEqual(
  //     'School or Institution email is required'
  //   ); // email domain is in "excluded" (free) list

  //   expect(emailPattern()('firstlast@myfakeschool.edu')).toEqual(''); // is valid email domain and not found in blacklisted free email domains
  // });

  // it('renders the expected components', () => {
  //   const { container } = render(<Form isOpen closeForm={() => {}} />);

  //   // Text inputs
  //   const inputs = container.getElementsByTagName('input');
  //   expect(inputs.length).toEqual(7); // 6 text inputs and 1 checkbox input

  //   // Selects
  //   const selects = screen.getAllByRole('select'); // Flora Dropdowns are buttons with role="select", not native <select /> elements
  //   expect(selects.length).toEqual(3);

  //   // Submit Button
  //   const submitBtn = container.querySelectorAll('[type="submit"]');
  //   expect(submitBtn.length).toEqual(1);
  // });

  // it('calls the onClose prop when the close modal button is clicked', () => {
  //   const onClose = jest.fn();
  //   const { container } = render(<Form isOpen closeForm={onClose} />);

  //   const closeBtn = container.getElementsByTagName('button')[0]; // first button found in component is the close button

  //   fireEvent.click(closeBtn);

  //   expect(onClose).toHaveBeenCalledTimes(1);
  // });

  // it('should display post submission message if submit POST is successful', async () => {
  //   const { container } = render(<Form isOpen closeForm={() => {}} />);

  //   const inputs = container.getElementsByTagName('input');
  //   const selects = screen.getAllByRole('select');

  //   populateRequiredFormFields(inputs, selects);
  //   populateCourseSyllabusField();

  //   await act(async () => {
  //     fireEvent.click(screen.getByText('Submit my Application'));
  //   });

  //   expect(
  //     screen.getByText('Thanks for applying to MongoDB for Educators!')
  //   ).toBeInTheDocument();
  //   expect(
  //     screen.getByText(
  //       'We will review your application and email you within 5-7 business days.'
  //     )
  //   ).toBeInTheDocument();
  // });

  // it('should display error message if submit POST fails', async () => {
  //   jest.spyOn(axios, 'post').mockRejectedValue(Promise.resolve(new Error()));

  //   const { container } = render(<Form isOpen closeForm={() => {}} />);

  //   const inputs = container.getElementsByTagName('input');
  //   const selects = screen.getAllByRole('select');

  //   populateRequiredFormFields(inputs, selects);
  //   populateCourseSyllabusField();

  //   await act(async () => {
  //     fireEvent.click(screen.getByText('Submit my Application'));
  //   });

  //   expect(
  //     screen.getByText(
  //       'There was an error submitting your request. Please try again.'
  //     )
  //   ).toBeInTheDocument();
  // });

  // it('displays course syllabus field options', () => {
  //   render(<Form isOpen closeForm={() => {}} />);

  //   const uploadDocumentBtn = screen.getByText('Upload a document');
  //   const enterWebUrlBtn = screen.getByText('Enter a Web URL');

  //   expect(uploadDocumentBtn).toBeInTheDocument();
  //   expect(enterWebUrlBtn).toBeInTheDocument();

  //   fireEvent.click(enterWebUrlBtn);

  //   expect(screen.getByPlaceholderText('Enter Web URL')).toBeInTheDocument();

  //   fireEvent.click(uploadDocumentBtn);

  //   expect(screen.getByTestId('document-upload')).toBeInTheDocument();
  // });
});
