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
5) the default name of the cli is 'node_cli', if you want to change it, just change the name in package.json
6) run
```
yarn link
```
7) type
```
node_cli -h 
```
or
```
node_cli --help
```
to see the features.

### PD: if you change the name of the cli, use your custom name instead of node_cli

8) in the case you get 'permission denied: node_cli' from the command shell, go to '/usr/local/bin' and type
```
chmod +x node_cli
```
9) enjoy!
