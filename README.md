# Calculator
This repo contains the code for a basic calculator. My goal here was to get my feet wet with AWS amplify and its capabilities. This is by no means production level code and is intended for prototyping and testing purposes only.

# The Stack
1. The frontend consists of typescript code using the react framework. The goal is to emulate a simple calculator. Since I wanted to add a backend including server as well as a database I will be sending requests to the backend to perform all calculations.

2. The backend is written entirely in GO. With this project I am to learn a new language, and so using the gin framework I will create a REST API to service my calculator's requests.

3. Just to add a database to the mix, I will add a simple PostgreSQL db with a single table. The function of this table will be to track all arithmetic calculations so that upon request, the user can retrieve a list of all performed calculations.
