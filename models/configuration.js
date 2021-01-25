class Configuration {
    constructor({
        tcpPort = 9000,
        udpPort = 9001,
        registerToLobby = 1,
        maxConnetions = 30,
    } = {
        // tcpPort: 9000,
        // udpPort: 9001,
        // registerToLobby: 1,
        // maxConnetions: 30,
    }) {
        this.tcpPort = tcpPort
        this.udpPort = udpPort
        this.registerToLobby = registerToLobby
        this.maxConnetions = maxConnetions
    }
}

module.exports = Configuration
