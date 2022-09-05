# chat-app-mern
discord clone (chat / video app ) using
    MongoDB,  Express, React, Node with WebRTC and SocketIO for realtime communication possibility. 
    
    
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
        prepare list of friends and invitations ( fake data until I do the functionality of invitation & listFriend )
        logout functionality ( remove token from localStorage & check if user is logged out in the dashboard page )
