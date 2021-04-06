import AddGame from './../components/AddGame';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import {fireEvent,render,wait,cleanup } from '@testing-library/react';


configure({adapter: new Adapter()});

describe("testing",()=>{
    it("renders correctly",()=>{
        shallow(<AddGame />);
    })

})

