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
                iconUrl: 'https://helloworldme.netlify.app/favicon.ico',
                setupIcon: 'src/favicon.ico',
                loadingGif: 'src/assets/images/installing.gif'
            },
        },

        {
            name: '@electron-forge/maker-deb',
            config: {
                options: {
                    icon: 'src/assets/icons/manifest/512.png',
                    maintainer: 'Satyam Verma',
                    homepage: 'https://github.com/MTSOSS/electron.hello-world.app'
                },
            },
        },
        {
            name: '@electron-forge/maker-dmg',
            config: {
                background: 'src/assets/images/background.png',
                format: 'ULFO',
                icon: 'src/assets/icons/manifest/1024.icns',
                iconSize: 1024,
                name: 'Hello World!'
            },
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {
                options: {
                    homepage: 'https://github.com/MTSOSS/electron.hello-world.app'
                }
            }
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin'],
        },
        /*{
    name: '@electron-forge/maker-appx',
    config: {
        publisher: 'SatyamV7',
        devCert: '',
        certPass: ''
    }
},*/
    ],
};
