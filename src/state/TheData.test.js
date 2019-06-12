import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import TheDate from './TheDate'

describe ('TheDate component', () => {
    it('render without crashing', () => {

        const div = document.createElement('div');

        ReactDOM.render(<TheDate />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it.skip('renders the UI as expected', () => {
        expect (
            renderer.create(<TheDate />).toJSON()
        ).toMatchSnapshot()
    })
})