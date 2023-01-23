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

#### Accounts
Account Details will be stored in RestDB

##### account
|Field|Data Type|Description|
|-----|---------|-----------|
|UserID|number|Required, Auto Increment|
|Username|text|Required & Unique|
|Password|text|Required|
|Points|number|Required, Auto Generated as 0 when creating an account|
|Preferences|text|Not Required|

##### unlocks
|Field|Data Type|Description|
|-----|---------|-----------|
|UnlockStatus|bool|
||

##### quizes
|Field|Data Type|Description|
|-----|---------|-----------|
|QuizID|
|QuizName|
|QuizDesc|
|Image|

##### 

Preferences to sort quizes by category