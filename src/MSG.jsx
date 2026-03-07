import './App.css';

export default function MSG({userName, textColor}){
    return (
       <h1 style={{color: textColor}}>Hello, {userName} how are you</h1>
    );

}