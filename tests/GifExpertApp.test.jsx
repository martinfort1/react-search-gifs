import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas en <GifExpertApp />', () => { 

    const newCategory = 'Pruebas'

    test('no debe añadir categorías duplicadas ', () => { 

        render( <GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);
        
        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);
        
        screen.debug();
        
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);


     })
    

})