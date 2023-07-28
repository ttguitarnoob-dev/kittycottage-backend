#Quizzer Plan

##Database Model Items
1. Quiz Name - String
2. Quiz Date - Date
3. Subject - String
4. Score - Integer
5. Questions - Array of objects
    * Question - String
    * Correct Choice A-D - String (choices[index]) ??? , correct, true or false ???
    * Chosen Answer - String (A-D) (choices[index]) ???
    * Choices - array of A-D choices{A: "choice 1", B: "Choice 2"}
    * Answered correctly - Boolean

##Functionality
* Kiara's quiz creator page will post all items to the db
* Hazel's quiz taker will "put" her answers to the db entry
    - Selected answer will be compared with correct answer, then put "answeredCorrectly = true or false"
    - data object will be created in front end as quiz is taken.  At submit, all answers will be compared to correct answers, converted into a percentage, then percentage put in the score field. Then object will be "put" and a state will be created and displayed on the final render of the page
* They will both have an index route and and a show route
    - Index - list of quizzes with name, date and score
    - Show - list of questions with selected answer and correct answer

##Build Plan
1. Build db schema
2. Stub routes
3. Test routes in postman
4. Make routes functional
5. Test create and put actions with postman
6. Make kiara's quiz creator pages
    - choose how many questions (stretch goal, short answer questions)
    - based on how many questions, form created with fields for each question 1-chosenAmount (or one form at a time for each question if I can manage to figure out how to do state based page renders)
7. 


##Layout

###Kiara's Side
Index page, showing table of all quizzes with score/completed...new quiz button
New quiz page
Quiz show page showing all answers
Maybe quiz edit page

###Hazel's side
Index page showing all quizes with score/completed
Show page, with "put" functionality, allowing her to take the quiz and save the answers.
Maybe another show page that just allows viewing of answers (if quiz has been completed)