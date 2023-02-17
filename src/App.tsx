import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function hello() {
    debugger
    alert('Hello IT-KAMASUTRA')
}

//hello();

function App() {
    console.log("App rendering")
    return (
        //JSX
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            Test
            <MyFamily />
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

//-------------------------------------------------------
function MyFamily() {
    return (
        <div>
            <h5>My family</h5>
            <ul>
                <li>Alex</li>
                <li>Natali</li>
                <li>Bonya</li>
            </ul>
        </div>
    )
}

export default App;
