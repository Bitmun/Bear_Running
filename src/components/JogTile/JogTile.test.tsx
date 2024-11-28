import React from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';

import { JogTile } from './JogTile';

import '@testing-library/jest-dom';

jest.mock('@assets/images/delete-icon.svg', () => 'delete-icon-mock');
jest.mock('@assets/images/edit-icon.svg', () => 'edit-icon-mock');
jest.mock('@assets/images/jog-icon.svg', () => 'jog-icon-mock');

const mockHandleChange = jest.fn();
const mockHandleDelete = jest.fn();

const mockJog = {
  id: '1',
  distance: 5,
  time: 30,
  date: '2024-11-28T00:00:00Z',
  speed: 10,
};

describe('<JogTile />', () => {
  it('renders jog details correctly', () => {
    render(
      <JogTile
        jog={mockJog}
        handleChange={mockHandleChange}
        handleDelete={mockHandleDelete}
      />,
    );

    expect(screen.getByText(/10/)).toBeInTheDocument();
    expect(screen.getByText(/5/)).toBeInTheDocument();
    expect(screen.getByText(/30/)).toBeInTheDocument();
    expect(screen.getByAltText('jog-logo')).toBeInTheDocument();
  });

  it('calls handleChange on edit button click', async () => {
    render(
      <JogTile
        jog={mockJog}
        handleChange={mockHandleChange}
        handleDelete={mockHandleDelete}
      />,
    );

    const editButton = screen.getByRole('button', { name: /edit-icon/ });
    await act(async () => {
      fireEvent.click(editButton);
    });

    expect(mockHandleChange).toHaveBeenCalledWith('1');
  });

  it('calls handleDelete on delete button click', async () => {
    render(
      <JogTile
        jog={mockJog}
        handleChange={mockHandleChange}
        handleDelete={mockHandleDelete}
      />,
    );

    const deleteButton = screen.getByRole('button', { name: /delete-icon/ });
    await act(async () => {
      fireEvent.click(deleteButton);
    });
    expect(mockHandleDelete).toHaveBeenCalledWith('1');
  });
});
