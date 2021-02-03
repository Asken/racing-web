pubsub.subscribe('settings', async (serverName) => {
    const data = await getSettings(serverName)
    const cmb = $('#settings')
    cmb.removeClass('hidden')
    cmb.empty()
    data.settings.forEach(setting => {
        cmb.append(new Option(setting.serverName))
    });
})
