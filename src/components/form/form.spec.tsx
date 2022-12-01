import axios from 'axios';
import { act, render, screen, fireEvent } from '@testing-library/react';
import Form, { isRequired, emailPattern } from '.';

jest.mock('axios');

// Because of validators on form fields, we need to populate all of the "required" fields in order to test submitting the form
function populateRequiredFormFields(
  inputs: HTMLCollectionOf<HTMLInputElement>,
  selects: HTMLElement[]
) {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === 'email') {
      fireEvent.change(inputs[i], { target: { value: 'firstlast@mail.com' } });
    } else if (inputs[i].type === 'checkbox') {
      fireEvent.click(inputs[i]);
    } else {
      fireEvent.change(inputs[i], { target: { value: 'lorem' } });
    }
  }

  for (let j = 0; j < selects.length; j++) {
    const el = selects[j].nextElementSibling?.firstChild?.firstChild;
    if (el) {
      fireEvent.click(el, { target: { innerText: 'ipsum' } });
    }
  }
}

describe('[component] Form', () => {
  it('renders the component', () => {
    render(<Form isOpen closeForm={() => {}} />);

    const form = screen.getByTestId('form-modal');
    expect(form).toBeInTheDocument();
  });

  it('does not render the component if isOpen prop is false', () => {
    const { container } = render(<Form isOpen={false} closeForm={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  it('validates input if field is required', () => {
    expect(isRequired()('hello world')).toEqual(''); // No warning is returned if text is entered
    expect(isRequired()('')).toEqual('This field is required');
  });

  it('validates if email input matches an email address pattern', () => {
    expect(emailPattern()('')).toEqual(''); // passes if no value provided
    expect(emailPattern()('firstlast@gmail')).toEqual(
      'Please enter a valid email address'
    );
    expect(emailPattern()('firstlast')).toEqual(
      'Please enter a valid email address'
    );
    expect(emailPattern()('firstlast@gmail.')).toEqual(
      'Please enter a valid email address'
    );
    expect(emailPattern()('firstlast@gmail.com')).toEqual(''); // email matches intended pattern
  });

  it('renders the expected components', () => {
    const { container } = render(<Form isOpen closeForm={() => {}} />);

    // Text inputs
    const inputs = container.getElementsByTagName('input');
    expect(inputs.length).toEqual(6); // 5 text inputs and 1 checkbox input

    // Selects
    const selects = screen.getAllByRole('select'); // Flora Dropdowns are buttons with role="select", not native <select /> elements
    expect(selects.length).toEqual(4);

    // Text Area
    const textarea = container.getElementsByTagName('textarea');
    expect(textarea.length).toEqual(1);

    // Submit Button
    const submitBtn = container.querySelectorAll('[type="submit"]');
    expect(submitBtn.length).toEqual(1);
  });

  it('calls the onClose prop when the close modal button is clicked', () => {
    const onClose = jest.fn();
    const { container } = render(<Form isOpen closeForm={onClose} />);

    const closeBtn = container.getElementsByTagName('button')[0]; // first button found in component is the close button

    fireEvent.click(closeBtn);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should display post submission message if submit POST is successful', async () => {
    const { container } = render(<Form isOpen closeForm={() => {}} />);

    const inputs = container.getElementsByTagName('input');
    const selects = screen.getAllByRole('select');

    populateRequiredFormFields(inputs, selects);

    await act(async () => {
      fireEvent.click(screen.getByText('Submit'));
    });

    expect(
      screen.getByText('Thanks for joining the MongoDB Educator Community!')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'You have been added to our mailing list and will receive updates regarding new curriculum and relevant opportunities moving forward.'
      )
    ).toBeInTheDocument();
  });

  it('should display error message if submit POST fails', async () => {
    jest.spyOn(axios, 'post').mockRejectedValue(Promise.resolve(new Error()));

    const { container } = render(<Form isOpen closeForm={() => {}} />);

    const inputs = container.getElementsByTagName('input');
    const selects = screen.getAllByRole('select');

    populateRequiredFormFields(inputs, selects);

    await act(async () => {
      fireEvent.click(screen.getByText('Submit'));
    });

    expect(
      screen.getByText(
        'There was an error submitting your request. Please try again.'
      )
    ).toBeInTheDocument();
  });
});
