# Prerequisites
- Working Symfony higher than 4
- Working npm system

# Install
- Clone the repository
- Run `npm install`
- Run `npm run start`

# More Details
- You can also run the project by going into the subdirectories and running for the backend `symfony server:start` and for the frontend `npm run dev`

# Instructions for you
- You'll have to create an API endpoint that will get the following data : 
- - List of numbers
- - A specific number (we will name it target)
- The API will have to return the following data :
- - Can we add two numbers of the list to get the target number
- - If yes, which two index represents the solution
- - If no, which two index are the closest to the target number
- - You'll also return a boolean to say if they are more than one solution

# Example
- List of numbers : [1, 2, 3, 4, 5]
- Target number : 7
- Result : 
- - Yes
- - 1 and 4
- - Yes