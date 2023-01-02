module.exports = {
    packagerConfig: {
        icon: 'src/favicon', // no file extension required
        asar: true, // or an object containing your asar options
    },
    rebuildConfig: {},
    plugins: [
        {
            name: '@electron-forge/plugin-auto-unpack-natives',
            config: {}
        }
    ],
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
                iconUrl: 'https://helloworldme.netlify.app/favicon.ico',
                // The ICO file to use as the icon for the generated Setup.exe
                setupIcon: 'src/favicon.ico',
                loadingGif: 'src/assets/images/installing.gif'
            },
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin'],
        },
        {
            name: '@electron-forge/maker-deb',
            config: {},
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {},
        },
    ],
};
