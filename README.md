<img src="./src/styles/plentific.logo.png">

<br />

## **Installation**

Clone or download the repo then do the following in Terminal:

* Install Dependencies - `npm i`
* Launch the app locally - `npm start`

<br />

## **Launch The App**
https://plentific-api.herokuapp.com/

## **Approach**

First step I used Insomnia to create and test my API Get and Post requests.

With this done, my plan was to create a dropdown where users can choose a category and then save that to staet, as well as a text area (controlled input), to capture the postcode.

Both these needed saving to state to then be part of the POST request.

## **Wins & Challenges**

A major win was getting the category and postcode saved to state and inserted into the POST request, and getting the data back. This was a good challenge but a great win as well.

Another challenge was the actual pagination. It was a little bit challenging creating the previous and next buttons functionality. Once I worked out how to to use the setCurrentPage function, it was a lot easier to work out a solution for this.

The postcode formatting was a good challenge. Even after finding an NPM package to help, it was tricky to make sure the postcode was in lowercase. It was a huge win for me to get this to work. 

## **Further Improvements**

Definitely can refactor the code and also remove the console logs, I kept a lot of notes in there so that you can see my thinking etc.

Also, the postcode feature can be further improved to give a little help to users, in case they mis spell any part of the postocde. 

Can also look at improving the speed overall. 




