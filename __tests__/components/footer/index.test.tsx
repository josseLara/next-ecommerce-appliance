import React from 'react';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('see if all components are displayed correctly', () => {
    render(<Footer/>);
    const textCard = screen.getByText(/card/i);
    expect(textCard).toBeInTheDocument();
    expect(screen.getByText('-Tech')).toBeInTheDocument();
    expect(screen.getByText('SECURE ONLINE SHOPPING')).toBeInTheDocument();
    expect(screen.getByText('Shopping online')).toBeInTheDocument();
    expect(screen.getByText('Information')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('DESIGN BY JOSE LARA - © 2023. ALL RIGHTS RESERVED.')).toBeInTheDocument();
  });
  
});

