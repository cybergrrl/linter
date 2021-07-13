let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ")

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word);
})

/*
const overusedWordsInText = betterWords.filter(word => {
  return overusedWords.includes(word)
})
console.log(overusedWordsInText)
*/
const printOverusedWords = (overusedWords, myStory) => {
  counter = 0;
  for (i=0; i < overusedWords.length; i++) {
    for (j=0; j < myStory.length; j++) {
      if (overusedWords[i] === myStory[j]) {
        counter += 1
      }
    }
    console.log("The term " + overusedWords[i] + " has been used " + counter + " times.")
  }
}
//console.log(printOverusedWords(overusedWords, betterWords))

const sentenceCount = myString => {
  counter = 0;
  for (i=0; i < myString.length; i++) {
    if (myString[i][myString[i].length - 1] === "." || myString[i][myString[i].length - 1] == "!") {
      counter++
    }
  }
  console.log("Your story contains " + counter + " sentences.")
}


console.log("Your story contains " + storyWords.length + " words.")
console.log(sentenceCount(betterWords))
console.log(printOverusedWords(overusedWords, betterWords))
console.log(betterWords.join(" "))