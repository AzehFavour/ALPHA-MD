const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === https://alpha-md-3q1p.onrender.com
    ? databasePath 
    : process.env.DATABASE_URL;https://alpha-md-3q1p.onrender.com


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61VaY+jOBD9Kyt/7fSE2yFSS2tIIPd9slqNHDDE4QwYAhnlv69IutUtzUxvr7R8soz96lXVq+cfIIppRoakAu0fIElpgRmpl6xKCGgDLXddkoIGcDDDoA2mg87Z3pyynrNPL/m1wywHQnEl7+jCtJuLlj9RvWmzPIjR+AXcGiDJDwG1PwFsnugs3OqjfNFxZxW/iNRhyyvQMe5vyNhRNbjzV2E15P2j/wJuNSKmKY28bnIkIUlxMCTVDNP0a/S7fb+7DONchf3Iqy4wtZrS09jlp9LpBFW0lHhtvBgw1za/SH+rOrbDqZOFvNdCYq7P16MXl5QPPcma6sXJPSrXnFr9tPNKP6NeRJy+QyJGWfXluiuaPuueC94o43lLrDpk7/D2wvPdPgvOu0ANZb9kMPZKnvsacXWUjPTDskh6Rkmi9UBeD61ygrYcZw+qJys2xFIbrYzT2fc+Ep+lb1rx/0vdEXL7oZfMNsXSrvKckN1F1KcnJ1LgdNmLnqxsZAsIzY3N5Wv0DbTrDvmzNTtNUcllS9jyA+jEvXl1RXJzJZgDY433ea4K3Dt9zPL0M5Zra+NPihi5+95Skpp7KzB65y3vnLkEacL8IPcFFy+mvV63KjeR7NDdNB2st5rZHPJPBHtFOAk8u6kkGcr5Vs/km2eoo5d7Rj6p+g5o87cGSIlHM5ZiRuPovidyDYCdYknslLB7eYFBA6Plbca2PVuhiTYT0vEqWQmHIjXMMBHpeS2RxWVbTgb+C2iAJI1tkmXE6dGMxWk1JlmGPZKB9l/3TtVJpySMGRlQB7SBIEIFKqIAW5D/M/t2OWKW4ST5FhEGGsBN43BMQJulOWmA+wURdbUugrDbEZGscaoockadVvgItKIhyRgOE9DmoSRDKMst5db4v2Jrgs5JHYEToNHq6HwHtT6PrUq3vxsgIiV76LWussg3gEvTjK2jPAli7LyJ+e0ntu04j9iyimy9XpAUtD9sE8Zo5GV1NnmEU/tIC6LX3EHbxUFGbg3gkILapMYDfBkO9t/zaq5tSe8qtYz9973u1Z06xtHjiMqL2FUl+HxQbe5ZUl38jAVXeobYIQce8gI5iKAuwcMq6ju/VS6llh44Ri+MV7wfrjlX1tR1Lu3z9OFjD8mRlDhvlT1g28+TVeyT6BPc0/ESq93TU1GSQ5KGWtmMrT4stsPt/gPuQ8qg/ePdnvXYqfGE7UzfWXAL6m7VcX5SQFuQfxZBhOvTYBSnzh8TTFNcx3ptRI3iEIZpkIE20MfKJp5mg+4I7nIbmSaKPaR7CLw37m3wH4PVysvJ8Vp4/l5znQvnx3wil/PijGUYbSbD5hrPetRWO+fV+uUXIKANDsnc3Wa0qyK9O9pL8sFG11ApcUUDZ9RVFaTGzBLE1iJPSM94uphVNl/ul9aqVSgC88ZU4dTRdbhceLDURSzMs5OKapd4E9DHYIvdwi1Hm50pPamVn0/Q9TrtqCurol6nU1aHdV6Y02HVEs1og4TctCkZBTP1UnIY5iSWGCZTd76t8vXu0iU0VuJJiS4PS7pbYvD6FNFXs3jIzaXk7uyvjfjXhr0rn7s1PmC8vhW/UZfmjrLV3obSwEQ70Z4MhhNM7PVICXMi86tlwZunUopmc8Xnwa0e6STAzI3TsJb8fZJAAwQ4Y+h9dn9hB4rUAGGFkmTJMHsbeYDqb6qdwe0fvK/U+AUJAAA=',
    PREFIXE: process.env.PREFIX || "",
    OWNER_NAME: process.env.OWNER_NAME || "Lord Naira",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "237676327871",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by lord naira',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Douala", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'no',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === https://alpha-md-3q1p.onrender.com
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
