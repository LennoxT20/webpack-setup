import generateJoke from "./generateJoke"
import './style/main.scss'
import logo from './assets/logo.svg'

const laughImg = document.getElementById('laughImg')
laughImg.src = logo;

const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();