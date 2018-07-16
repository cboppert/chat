# Chat App

## Overview
This is a chat application written with Meteor and ReactJS. Features will include
* Accounts with a simple profile
* A chat window which displays messages in the chat room
* A list of users in the current chatroom
* Private messages/chats
* Editing/deleting messages by their composers

## Data structures

### User
{ id : <String | Mongo default>,
  name : <String>.
  website : <Optional[String]>,
  profile : <Optional[String]>
}

### Chatroom
{ id : <String | Mongo default>,
  title : <String>,
  users : <List[String] | where String exists is a userId>,
  messages : <List[Message]>
}

### Message
{ id : <String | Mongo default>,
  owner : <String | where String is a userId>,
  dateCreated : <Date>,
  message : <String>
}

## Major Components
This app will have a few major components
### Header
The header bar which will display the current chat room and the current user

#### Subscribes to
* user-profile { all-fields for current user }
* chat-info { title for current chat }

### Main Chat Window
The main chat window which will display messages from the current chat

#### Subscribes to
* messages { message, user where chat-room is current chat }

### Chats Available Window
A list of chats the user is currently entered into which will feature a way to create new chats

#### Subscribes to
* chats { title where chat-room is public or user is member of }

### Users in chat list
A list of the users in the current chat

#### Subscribes to
* chat { users, user for each user in users}

## Forms
These are the forms which will be submitted to the server for the application to function properly

### Create Chatroom
{ name: <String | Chat Room Title>,
  private: <Boolean | private?>,
  users: <List[String] | UserNames>
}

Will fail if name already exists in the list of chatrooms.

### Add User(s) to chatroom
{ name: <String | Chat Room Title>,
  users: <List[String] | UserNames>
}

### Create User
{ name: <String | Username>,
  password: <String | Password>
}

Fails on name exists in usernames table, will be handled with accounts-ui accounts-password packages

### Update User
{ id: <String | UserId>,
  website: <URL | Website Url>,
  profile: <String | Personal Profile>
}

Fails if id is not the id of the currently logged in user.

### Join chat
{ userId: <String | UserId>,
  chatId: <String | ChatId>
}

Fails if either userId or chatId do not exist or if chat is private

### Add to chat
{ userIdAdding: <String | UserId>,
  userIdsAdded: <List[String] | where string exists in UserIds>,
  chatId: <String | ChatId>
}

Fails if userId does not have access to chatId, or if any Ids do not exist

### Message Chat
{ userId: <String | UserId>,
  chatId: <String | ChatId>,
  message: <String>
}

Fails if userId is not in chat, or if userId or chatId do not exist
Adds date for createdAt field server side
