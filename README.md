# ID_ASG2
 Assignment 2 for Interactive Development

## Overall concept
Our aim is to encourage users to gain more knowledge by taking quizzes in a fun and exciting manner. A website where users are able to sign up for an account and earn points to purchase cosemetic items from a shop. Quizzes are sorted into categories and give different points according to the difficulty as well as the time taken to complete the quiz. A leaderboard is assigned to each quiz and showcases the fastest user to complete it.

## Features

### Leaderboard
Score will be calculated by the number of correct answers and the time taken to complete the quiz.

### Account
Users are able to register and log in on an account on the website.
The account stores points and the user's preferences to quiz categories.
Users are also able to set profile pictures.

### Points
Points can be used to purchase cosemetics for the user which will change the aesthitics of that user in different ways. 

### Quiz
Quizes are sorted into categories and have different difficulties which will award different amount of points accordingly.

### Unlocks
Users are able to unlock cosmetics using their points earned from playing quizes.
Some of the unlocks are
- Name text color
- Title

## Technology Used
### Lottie
Used for animated images for multi purpose.

### Bootstrap
Used for front-end development.

### RestDB
Account, Quiz, Leaderboards, Unlock details will all be stored in RestDB and retrieved from there using an API

The following data structure is used
#### account
|Field|Data Type|Constraint|Description|
|-----|---------|----------|-----------|
|profilepic|text||Contains link for user's profile pic|
|UserID|number|Required & Auto Increment|
|Username|text|Required & Unique|
|Password|text|Required|
|Points|number|Required, Auto Generated as 0 when creating an account|
|Preferences|text|Not Required|
|item-list|Select many item-list||Used to select items from item list / serves as inventory|

#### item-list
|Field|Data Type|Constraint|Description|
|-----|---------|----------|-----------|
|item-name|text||
|item-desc|text||
|cost|number||Cost of item|
|item-cat|text|||
|change|text|||

#### quizes
|Field|Data Type|Constraint|Description|
|-----|---------|----------|-----------|
|QuizID|number|Required & Auto Increment|
|QuizName|text|Required & Unique|
|QuizDesc|text|Not Required|
|Image|text|Not Required|
|Event|bool|Required|Used to say if there's an event going on|

#### leaderboard
|Field|Data Type|Constraint|Description|
|-----|---------|----------|-----------|
|account|Select many account||Used to get account details for leaderboard|
|quiz|Select 1 quiz||Used to get assign that one quiz a leaderboard with all the account details

## Testing

## Credits

### Content

### Media

### Acknowledgements
- We received inspiration for this project from [Sporcle](https://www.sporcle.com/).