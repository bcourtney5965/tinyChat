Dear Backend Dev, I need two routes, one that READs all messages (/messages), and one that CREATEs messages individually.  Regarding the "/messages" route please return an object with a key of "messages" and value of an array of message objects, (same as the stub data).  Please make sure each message object has an id(auto indexed), author, and content key/value pairs (again like the stub data).

Next, go into Main.js and uncomment line 41, and comment line 42, this will allow for real messages instead of the fake data.

A table/collection schema that I've thought up is written below, but do what you think is best.  

          MESSAGES
_id, author, timestamp, content 