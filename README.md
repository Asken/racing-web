# Readme for racing site
A site with as little cruft as possible to not make things complex client-side.

## Client-side

- Bootstrap 4
- jQuery (for free and not by choice)
- Pub/Sub
- Controllers
- Client
- Util

### Pub/Sub
There is no direct contact between UI and events. These are managed throught the Pub/Sub

### Controllers
All controllers subscribe to Pub/Sub events where all UI manipulation is handled

### Client
Functions for talking to the back-end. Client must be kept clear of UI interaction

### Util
Straight forward helper functions

#### util/data.js
Example response:
```
{
    "success": [true|false],
    "data": <result object>
}
```