# ID_ASG2
 Assignment 2 for Interactive Development

## OVERALL CONCEPT
A website like [Sporcle](https://www.sporcle.com/?refresh)

## FEATURES

### RestDB

### ACCOUNT
Account Details will be stored in RestDB

#### account
|Field|Data Type|Description|
|-----|---------|-----------|
|UserID|number|Required, Auto Increment|
|Username|text|Required & Unique|
|Password|text|Required|
|Points|number|Required, Auto Generated as 0 when creating an account|
|Preferences|text|Not Required|

#### unlocks
|Field|Data Type|Description|
|-----|---------|-----------|
|UserID|number|Foreign Key --> account(UserID)|
|UnlockStatus|bool|
||

#### quizes
|Field|Data Type|Description|
|-----|---------|-----------|
|QuizID|
|QuizName|
|QuizDesc|
|Image|

Preferences to sort quizes by category