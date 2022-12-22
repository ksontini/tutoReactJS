import { render as rtlRender } from '@testing-library/react'
import '@testing-library/jest-dom';
import * as React from 'react'

import App from '../App';


beforeEach(() => {
    // setup a DOM element as a render target
    let container = document.createElement("div");
    document.body.appendChild(container);
});
const render = (ui, { } = {}) => {
    window.history.pushState({}, 'Test page')

    return rtlRender(ui, {})
}

const makeSut = (props) => {
    return render(<App />);
};

describe('App description', () => {
    test('shows div#App', () => {
        const { getByTestId } = makeSut({});
        const parent = getByTestId('App');
        expect(parent).toBeDefined();
    });
});