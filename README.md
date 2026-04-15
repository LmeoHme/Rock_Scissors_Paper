# Rock_Scissors_Paper
This is my simple plain JS project.
In this project: 
 - Firstly ask the player to play the game, validate the input. I used 2 functions for this 2 features. I used loop here so the prompt will continue to show up until the player get the right input or escape.
 - Then take I let the player choose 1 of 3 choices (R - S - P) and validate it using another 2 functions with the same logic of 2 above. (I tried to merge them but my knowledge not allowed)
 - Create variables to store validated player's choice and generated computer's choice using Math.random() logic.
 - Then compare them in separated function, output the win/lose result of the round and increase the point. If the result is draw, I let the player re-fight until the winner shows up.
- Repeat until the player/comp's point reach 3 the output the final result. Then ask whether the player wants a re-match or not reuse the first 2 functions.