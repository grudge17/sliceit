# sliceit
How to up the server locally using docker
1)Clone the repository locally.
2)Make sure docker daemon is running.
3)From command line goto the repository's directory.
4)Type command docker-compose up
5)Server will start at port 8080

Apis:-
PUT http://localhost:8080/sliceit/word/<word>   This will increment the word frequency by 1.
GET http://localhost:8080/sliceit/word/<word>   This will display the frequency of the word.

