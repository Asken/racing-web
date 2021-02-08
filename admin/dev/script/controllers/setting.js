pubsub.subscribe('settings', async (server_name) => {
    const data = await getSettings(server_name)
    const cmb = $('#settings')
    cmb.removeClass('hidden')
    cmb.empty()
    data.settings.forEach(setting => {
        cmb.append(new Option(setting.server_name))
    });
})
