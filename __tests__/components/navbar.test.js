import { render, screen } from '@testing-library/react';
import Navbar from 'components/Navbar';

test('Navbar renders properly with all links displayed and working', () => {
    render(<Navbar />);

    // Check if the Navbar component is rendered
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();

    // Check if all the links are displayed
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const productsLink = screen.getByText('Products');
    expect(productsLink).toBeInTheDocument();

    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();

    // Check if all the links work properly
    // You can add more specific tests here, like checking if the links navigate to the correct pages

});
