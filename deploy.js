/* eslint-disable no-console,@typescript-eslint/no-var-requires */
const { Client } = require('basic-ftp');

// TODO rename later
const hostDirectory = '~/tmp/';

(async () => {
    console.log('Starting deploying process...');
    const client = new Client();
    try {
        console.log('Connecting to the host...');
        await client.access({
            host: 'vh302.timeweb.ru',
            user: process.env.USERNAME,
            password: process.env.PASSWORD,
        });
        console.log('Removing last version...');
        await client.removeDir(hostDirectory);
        console.log('Uploading new one...');
        await client.uploadFromDir('./app', hostDirectory);
        console.log('Closing...');
        client.close();
    } catch (err) {
        console.error(err);
    }
})();
