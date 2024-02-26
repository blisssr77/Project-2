const sniper = [
    {
        name: 'Sniper L96A1',
        manufacturer: 'Accuracy International',
        price: 19000,
        catridge: '7.62x51mm NATO .308 Winchester',
        action: 'Bolt-action',
        origin: 'United Kingdom',
        year: 1982,
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Accuracy_International_Arctic_Warfare_-_Psg_90.jpg'
    },
    {
        name: 'Sniper AWM',
        manufacturer: 'Accuracy International',
        price: 10500,
        catridge: '.300 Winchester Magnum .338 Lapua Magnum',
        action: 'Bolt-action',
        origin: 'United Kingdom',
        year: 1996,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/AWM-338-white.jpg/1024px-AWM-338-white.jpg'
    },
    {
        name: 'Barrettt M95',
        manufacturer: 'Barret Firearms Company',
        price: 13000,
        catridge: '.50 BMG',
        action: 'Bolt-action',
        origin: 'United States',
        year: 1995,
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Barrett-M95-Grass.png'
    },
    {
        name: 'G28',
        manufacturer: 'Heckler & Koch',
        price: 15000,
        catridge: '7.62x51mm',
        action: 'Short-stroke pston(semi-auto)',
        origin: 'Germany',
        year: '2005',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Combater_G27_noBG.png/1920px-Combater_G27_noBG.png'
    },
    {
        name: 'M2010',
        manufacturer: 'Remington Arms',
        price: 27000,
        catridge: '.300 Winchester Magnum',
        action: 'Bolt-action',
        origin: 'United States',
        year: 2010,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/XM2010_November_2010.jpg/1920px-XM2010_November_2010.jpg'
    },
    {
        name: 'REmington MSR',
        manufacturer: 'Remington Arms',
        price: 26500,
        catridge: '.338 Lapua Magnum',
        action: 'Bolt-action',
        origin: 'United States',
        year: 2009,
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/R-MSR.jpg',
    },
    {
        name: 'Savage 10FP',
        manufacturer: 'Savage Arms Company',
        price: 17000,
        catridge: '.223 Remington',
        action: 'Bolt-action',
        origin: 'United States',
        year: 1956,
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Savage_10FPXP-LEA.jpg',
    },
    {
        name: 'VSK-94',
        manufacturer: 'KBP Instrument Design Bureau',
        price: 19000,
        catridge: '9x39mm',
        action: 'Long-stroke piston(select-fire)',
        origin: 'Russia',
        year: 1994,
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/VSK-94.jpg',
    },
    {
        name: 'SV-98',
        manufacturer: 'Izhmash',
        price: 14000,
        catridge: '7.62x54mmR',
        action: 'Bolt-action',
        origin: 'Russia',
        year: 1998,
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Sr-98.png',
    },
    {
        name: 'WKW Wilk',
        manufacturer: 'Zaklady Mechaniczne Tarnow',
        price: 21999,
        catridge: '.50 BMG',
        action: 'Bolt-action',
        origin: 'Poland',
        year: 2000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Steyr_HS_.50-frontal-scope.jpg',
    },
]

const rifle = [
    {
        name: 'Akdal MKA 1919',
        manufacturer: 'Akdal Arms',
        price: 9000,
        catridge: '12 gauge',
        action: '',
        origin: 'Turkey',
        year: 2006,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Akdal_MKA-1919.JPG/1920px-Akdal_MKA-1919.JPG',
    },
    {
        name: 'Kel-Tec RFB',
        manufacturer: 'Kel-Tec',
        price: 13000,
        catridge: '7.62.51mm NATO',
        action: '',
        origin: 'United States',
        year: 2003,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Keltecrfb.jpg/1920px-Keltecrfb.jpg',
    },
    {
        name: 'AK-47',
        manufacturer: 'Kalashnikov Concern',
        price: 7000,
        catridge: '7.62x39mm',
        action: 'Gas-operated, closed rotating',
        origin: 'Soviet Union',
        year: 1948,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/AK-47_type_II_noBG.png/1920px-AK-47_type_II_noBG.png',
    },
    {
        name: 'AKM',
        manufacturer: 'Izhmash Ula Arms Plant',
        price: 9000,
        catridge: '7.62x39mm',
        action: 'Gas-operated, closed rotating',
        origin: 'USSR',
        year: 1959,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/AKM_automatkarbin_Ryssland_-_7%2C62x39mm_-_Arm%C3%A9museum_bothsides_noBG.png/300px-AKM_automatkarbin_Ryssland_-_7%2C62x39mm_-_Arm%C3%A9museum_bothsides_noBG.png',
    },
    {
        name: 'ArmaLite AR-18',
        manufacturer: 'ArmaLite',
        price: 10200,
        catridge: '5.56x45mm NATO',
        action: 'Short-stoke piston, rotating bolt',
        origin: 'United States',
        year: 1963,
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/AR-18.jpg',
    },
    {
        name: 'M&P 15-22',
        manufacturer: 'Smith & Wesson',
        price: 21040,
        catridge: '.22 Long Rifle',
        action: '',
        origin: 'United States',
        year: 2013,
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/M%26P15-22.png',
    },

]

module.exports = {
    sniper,
    rifle,
}