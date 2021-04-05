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

    it("test",()=>{
        const wrapper = shallow(<AddGame />);
        console.log(wrapper);
        const gameName = wrapper.find("#gameName");
        gameName.simulate('change',{target:{value:""}});
        //expect(wrapper.prop("gameName")).toBe("");
        //fireEvent.click(wrapper.find("Save Game"));
        //expect(wrapper.state("errorName")).toBe("name cannot be empty");
    })
})

