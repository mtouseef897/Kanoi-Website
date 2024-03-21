import React from 'react'
import TextStoryCard from './TextStoryCard'
import CharacterstoryCard from './CharacterStoryCard'

const ShowStories = ({Story}) => {
  return (
   <>
     {Story.type === "text" &&<TextStoryCard storyText={Story.text} /> }
      {Story.type === "popup" && <TextStoryCard />}
      {Story.type === "card" && (<CharacterstoryCard storyCharacter={Story.character} /> )}
   </>
  )
}

export default ShowStories