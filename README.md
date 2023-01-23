# ID_ASG2
 Assignment 2 for Interactive Development

## Overall concept
A website like [Sporcle](https://www.sporcle.com/?refresh) where users are able to sign up for an account
and earn points to purchase cosemetic items from a shop. Quizes are sorted into categories and give different points according to the difficulty as well as the time taken to complete the quiz. A leaderboard is assigned to each quiz and showcases the fastest user to complete it.

## Features

### Account
Users are able to register and log in on an account on the website.
The account stores points and the user's preferences to quiz categories.

### Points
Points can be used to purchase cosemetics for the user which will change the aesthitics of that user in different ways. 

### Quiz
Quizes are sorted into categories and have different difficulties which will award different amount of points accordingly.

### Unlocks
Users are able to unlock cosmetics using their points earned from playing quizes.
Some of the unlocks are
- Name text color

## Technology Used
### RestDB
Account, Quiz, Leaderboards, Unlock details will all be stored in RestDB and retrieved from there using an API

The following data structure is used
#### account
|Field|Data Type|Constraint|Description|
|-----|---------|----------|-----------|
|UserID|number|Required & Auto Increment|
|Username|text|Required & Unique|
|Password|text|Required|
|Points|number|Required, Auto Generated as 0 when creating an account|
|Preferences|text|Not Required|

#### item-list
|Field|Data Type|Constraint|Description|
|-----|---------|----------|-----------|
|item-name|text||
|item-desc|text||
|cost|number||

#### quizes
|Field|Data Type|Constraint|Description|
|-----|---------|----------|-----------|
|QuizID|number|Required & Auto Increment|
|QuizName|text|Required & Unique|
|QuizDesc|text|Not Required|
|Image|text|Not Required|
|Event|bool|Required|

#### leaderboard
|Field|Data Type|Constraint|Description|
|-----|---------|----------|-----------|


### Lottie
Used for animated images for multi purpose