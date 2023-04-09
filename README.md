# chat-app-mern

chat app using
MongoDB, Express, React, Node , Redux with WebRTC and SocketIO for realtime communication possibility.

    Part 1 :
        create express.js server + connect to mongodb
        create routes for login and register + user model + controllers
        create authentification system with JWT

    Part 2 :
        initial react project with redux
        create login and register pages with their components
        connect api created in part 1
        store JWT token at clientSide ( localStorage ) and add it to requests

    Part 3 :
        create dashboard page structure
        create invitations dialog
        prepare friendList and PendingList (fakeData until create the  functionalities )
        logout functionality ( remove token from localStorage & check user state)
    Part 4 :
        add socket.io to server.js
        connect with socket.io
        friend invitations List system
        online friend list
    Part 5 :
        check branche Realtime Chat communication

# **chat-app**

## Tech Stack

**Tech:** Node, Express, MongoDB, Mongoose, JWT,Cloudinary,Socket.io , webRTC

# API FEATURES

- login & register
- friend Invitation system :
  - invite,
    -accept,
    -reject

# FEATURES

- login & register
- friend Invitation system :invite, accept, reject
- Realtime Chat communication:
  - create realtime communication system with socketIO
  - save messages in database
- Video Group Call Rooms
