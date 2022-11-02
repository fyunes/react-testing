import MainComponent from "./MainComponent";
import { render, screen } from '@testing-library/react';

test('0', () => {
    render(<MainComponent />);
    const testTitle = screen.getByText(/hello world/i);
    expect(testTitle).toBeInTheDocument();
  });
  
  test('1', () => {
    render(<MainComponent />);    
    const inputtestingId = screen.getByTestId(/testingid/i);
    expect(inputtestingId).toBeInTheDocument();
  });
  
  test('2', () => {
    render(<MainComponent />);    
    const inputPlaceholder = screen.getAllByPlaceholderText(/testing/ig);
    expect(inputPlaceholder).toBeInTheDocument();    
  }); 
  

  test('4', () => {
    render(<MainComponent />);    
    const testTitle = screen.getByTitle(/delete/i);
    expect(testTitle).toBeInTheDocument();   
  });
  