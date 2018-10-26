# Simple Node JS Command Line Tool (contact management system)
This is a simple Command Line Tool that allows users to create, read and manage their contacts from the shell (command prompt).

## Instructions
1) download or clone this project
2) cd into the project directory
3) make a new file and call it .env
4) on your .env file put a valid mongo db url
```
DB_PATH=foo
```
5) run
```
yarn link
```
6) type
```
node_cli -h
```
or
```
node_cli --help
```
to see the features.

7) in the case you get 'permission denied: node_cli' from the command shell, go to '/usr/local/bin' and type
```
chmod +x node_cli
```
8) enjoy!
