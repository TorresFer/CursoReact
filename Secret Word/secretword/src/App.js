// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Data
import {wordsList} from './data/words'

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState([3])
  const [score, setScore] = useState([0])

  const pickWordAndCategory = () => {
    // Pick a random category
    const categories = Object.keys(words)
    const category = 
      categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    // Pick a random word
    const word = 
      words[category][Math.floor(Math.random() * words[category].length)]

    console.log(category)

    return{word, category}
  }

  // Starts the game
  const startGame = () => {
    // pick word and category
    const {word, category} = pickWordAndCategory()

    // Create an array of letters
    let wordLetters = word.toLowerCase().split("")

    console.log(word, category)
    console.log(wordLetters)

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }

  // Process
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    // Check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) || 
      wrongLetters.includes(normalizedLetter)
    ) {
      return
    }

    // Push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ])
    }
  }

  console.log(guessedLetters)
  console.log(wrongLetters)

  // Restart the game
  const retry = () => {
    setGameStage(stages[0].name)
  }
 
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && (
        <Game 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  )
}

export default App;
