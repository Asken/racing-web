const carGroups = [ 'FreeForAll', 'GT3', 'GT4', 'Cup', 'ST' ]
const trackMedalsRequirements = [...Array(4).keys()]
const safetyRatingRequirements = [...Array(100).keys()]
const racecraftRatingRequirements = [...Array(100).keys()]
const trueFalse = [0, 1]
const formationLapTypes = [0, 1, 3, 4, 5]

class Setting {
    constructor({
        server_name = '',
        adminPassword = '',
        carGroup = 'FreeForAll',
        trackMedalsRequirement = 0,
        safetyRatingRequirement = 60,
        racecraftRatingRequirement = -1,
        password = '',
        spectatorPassword = '',
        maxCarSlots = 24,
        dumpLeaderboards = 0,
        dumpEntryList = 0,
        isRaceLocked = 0,
        shortFormationLap = 1,
        formationLapType = 3,
        doDriverSwapBroadcast = null,
        randomizeTrackWhenEmpty = 0,
        centralEntryListPath = 'cfg/entrylist.json',
        allowAutoDQ = 0,
        configVersion = 1
    } = {
        // server_name: '',
        // adminPassword: '',
        // carGroup: '',
        // trackMedalsRequirement: 0,
        // safetyRatingRequirement: 60,
        // racecraftRatingRequirement: -1,
        // password: '',
        // spectatorPassword: '',
        // maxCarSlots: 24,
        // dumpLeaderboards: 0,
        // dumpEntryList: 0,
        // isRaceLocked: 0,
        // shortFormationLap: 1,
        // formationLapType: 3,
        // doDriverSwapBroadcast: null,
        // randomizeTrackWhenEmpty: 0,
        // centralEntryListPath: 'cfg/entrylist.json',
        // allowAutoDQ: 0,
        // configVersion: 1,
    }) {
        this.server_name = server_name
        this.adminPassword = adminPassword
        this.carGroup = carGroup
        this.trackMedalsRequirement = trackMedalsRequirement
        this.safetyRatingRequirement = safetyRatingRequirement
        this.racecraftRatingRequirement = racecraftRatingRequirement
        this.password = password
        this.spectatorPassword = spectatorPassword
        this.maxCarSlots = maxCarSlots
        this.dumpLeaderboards = dumpLeaderboards
        this.dumpEntryList = dumpEntryList
        this.isRaceLocked = isRaceLocked
        this.shortFormationLap = shortFormationLap
        this.formationLapType = formationLapType
        this.doDriverSwapBroadcast = doDriverSwapBroadcast
        this.randomizeTrackWhenEmpty = randomizeTrackWhenEmpty
        this.centralEntryListPath = centralEntryListPath
        this.allowAutoDQ = allowAutoDQ
        this.configVersion = configVersion
    }

    isValid() {
        return this.server_name !== ''
            && carGroups.includes(this.carGroup)
            && trackMedalsRequirements.includes(this.trackMedalsRequirement)
            && safetyRatingRequirements.includes(this.safetyRatingRequirement)
            && racecraftRatingRequirements.includes(this.racecraftRatingRequirement)
            && typeof this.maxCarSlots === 'number'
            && trueFalse.includes(this.dumpLeaderboards)
            && trueFalse.includes(this.dumpEntryList)
            && trueFalse.includes(this.isRaceLocked)
            && trueFalse.includes(this.shortFormationLap)
            && formationLapTypes.includes(this.formationLapType)
            && trueFalse.includes(this.randomizeTrackWhenEmpty)
            // TODO: Should validate the path on the server for entry file
            // && this.centralEntryListPath
            && trueFalse.includes(this.allowAutoDQ)
            && this.configVersion === 1
    }

    static options() {
        return {
            carGroups,
            trackMedalsRequirements,
            safetyRatingRequirements,
            racecraftRatingRequirements,
            formationLapTypes,
            trueFalse
        }
    }
}

module.exports = Setting
