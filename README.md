# Readme for racing site
A site with as little cruft as possible to not make things complex client-side.

## Parts of client-side
### Pub/Sub
There is no direct contact between UI and events. These are managed throught the Pub/Sub

### Controllers
All controllers subscribe to Pub/Sub events where all UI manipulation is handled

