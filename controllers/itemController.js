const SSItem = require('../models/SSItem')
const FWItem = require('../models/FWItem')
const MItem = require('../models/MItem')
const SItem = require('../models/SItem')


const Account = require('../models/User')
const mongoose = require('mongoose')

// NEW
// items/new
const newForm = (req, res)=>{
    try{
        res.render('new.ejs', {currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// NEW PAGE CREATE / POST TO SPECIAL SCENT PAGE
const create = async(req, res)=>{
    try{
        const newItem = await SItem.create(req.body)
        console.log(newItem)
        res.redirect('/BRiiZE/special')
    }catch(err){
        console.log(err)
    }
}

const categoryModel = {
    'SS': SSItem,
    'FW': FWItem,
    'M': MItem,
    'S': SItem,
}

// POST to WISH LIST
const addToWishList = async (req, res) => {
    try{
        const {itemId, category} = req.body;
        const Model = categoryModel[category]
        const item = await Model.findById(itemId)
        res.render('')
    }catch(err){
        console.log(err)
    }
}

// HOME
const home = async(req,res) =>{
    try{
        res.render('home.ejs', {currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// WISH LIST PAGE
const wishList = async(req, res) =>{
    try{
        res.render('wishList.ejs', {categoryModel, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// ACCOUNT DETAIL PAGE
const accountPage = async(req, res)=>{
    try{
        const account = await Account.findById()
        res.render('account.ejs', {account: account, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}


// SUMMER SPRING INDEX PAGE
const springSummerPage = async(req,res) => {
    try{
        const springSummer = await SSItem.find()
        res.render('categories/springSummer.ejs', {
            springSummer,
            tabTitle: 'SS Index',
            currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// SPRING SUMMER SEED FUNCTION
const springSummerSeed = async (req, res) => {
    try{
        const springSummer = await SSItem.create([
            {
                name: 'Chanel Les Eaux de Chanel Paris-Riviera',
                brand: 'Chanel',
                description: 'still remain at the top of my list for my most-worn fragrances. They’re fresh, bright and come in both full size and travel sizes (perfect for my bag). RIVIERA NOTES: Sicilian orange, Petitgrain, Jasmine, Neroli, Sandalwood and Musk',
                size: '4.2 FL. OZ.',
                price: 150,
                link: 'https://www.chanel.com/us/fragrance/p/102430/paris-riviera-les-eaux-de-chanel-eau-de-toilette-spray/?ranMID=39938&ranEAID=MeQoh28EORo&ranSiteID=MeQoh28EORo-rNHwvq4rZg76Ygy17vFilg&wt.mc_id=fb_eye_affiliate_en_us_dis&wt.mc_t=display&utm_source=linkshare&utm_campaign=fb_eye_affiliate&utm_medium=affiliate&utm_content=The+Beauty+Look+Book&siteID=MeQoh28EORo-rNHwvq4rZg76Ygy17vFilg',
                image: 'https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1020/paris-riviera-les-eaux-de-chanel-eau-de-toilette-spray-4-2fl-oz--packshot-default-102430-9538307981342.jpg'
            },
            {
                name: 'Chanel Les Eaux de Chanel Paris-Biarritz',
                brand: 'Chanel',
                description: 'Biarritz pulls a little softer while Riviera has a sharper more crisp feel. BIARRITZ NOTES: Grapefruit, Mandarin, Lily of the valley accord, Vetiver and White Musk',
                size: '4.2 FL. OZ.',
                price: '150',
                link: 'https://www.chanel.com/us/fragrance/p/102410/paris-biarritz-les-eaux-de-chanel-eau-de-toilette-spray/',
                image: 'https://thebeautylookbook.com/wp-content/uploads/2021/06/3-Chanel-Les-Eaux-de-Chanel-Paris-Biarritz.jpg'
            },
            {
                name: 'Parade',
                brand: 'Celine',
                description: 'A MUSKY, POWDERY COLOGNE IN KEEPING WITH THE VERY CODIFIED RITUAL OF MALE SARTORIAL APPEARANCE.',
                size: '3.4 FL. OZ.',
                price: 280,
                link: 'https://www.celine.com/en-us/fragrance-collection/fragrances/parade-eau-de-parfum-3.4-fl.oz-6PC1H0805.37TT.html',
                image: 'https://thebeautylookbook.com/wp-content/uploads/2023/07/Celine-Parade-Perfume-BEAUTYLOOKBOOK.jpg'
            },
            {
                name: 'Dioriviera',
                brand: 'Christian Dior',
                description: 'This eau de parfum composed by Francis Kurkdjian combines two concepts in one name: the south of France, his source of inspiration, and Paris, the city where Dioriviera was created. A fragrance that conveys the love story between Christian Dior and the French Riviera, and draws inspiration from its solar beauty.',
                size: '8.5 oz',
                price: 330,
                link: 'https://www.dior.com/en_us/beauty/products/dioriviera-Y0997094.html',
                image: 'https://thebeautylookbook.com/wp-content/uploads/2023/07/Dior-Dioriviera-Perfume-Summer2023.jpg'
            },
            {
                name: 'Soleil Blanc',
                brand: 'Tom Ford',
                description: 'The Soleil Blanc Eau de Parfum is an addictive solar, floral amber and coco-de-mer-infused perfume. It is alive with seductive cardamom and refreshingly decadent ylang ylang and unapologetically exudes the endless pursuit of sun and luxury.',
                size: '1.7 OZ',
                price: 295,
                link: 'https://www.sephora.com/product/soleil-blanc-P406526?om_mmc=aff-linkshare-redirect-QFGLnEolOWg&c3ch=Linkshare&c3nid=QFGLnEolOWg&affid=QFGLnEolOWg-c2EmFihOh4IqlPTQboaPAA&ranEAID=QFGLnEolOWg&ranMID=2417&ranSiteID=QFGLnEolOWg-c2EmFihOh4IqlPTQboaPAA&ranLinkID=10-1&browserdefault=true&skuId=1808088',
                image: "https://thebeautylookbook.com/wp-content/uploads/2021/06/2-Tom-Ford-Eau-De-Soleil-Blanc-Perfume.jpg",
            },
            {
                name: 'Eau de Soleil Blanc',
                brand: 'Tom Ford',
                description: 'Vibrant with radiant citrus, Eau de Soleil Blanc presents pistachio infused with spices that transport you to a remote island. Its blend of jasmine, tuberose, and ylang ylang from the Comoro Islands sparkles with Moroccan orange flower as luscious Coco de Mer brings the perfume‘s balancing warmth.',
                size: '1.7 OZ',
                price: 155,
                link: 'https://www.sephora.com/product/eau-de-soleil-blanc-P428452?om_mmc=aff-linkshare-redirect-QFGLnEolOWg&c3ch=Linkshare&c3nid=QFGLnEolOWg&affid=QFGLnEolOWg-BD.KdKim7.BQ58t22ESDOQ&ranEAID=QFGLnEolOWg&ranMID=2417&ranSiteID=QFGLnEolOWg-BD.KdKim7.BQ58t22ESDOQ&ranLinkID=10-1&browserdefault=true&skuId=2038933',
                image: 'https://www.sephora.com/productimages/product/p428452-av-01-zoom.jpg?imwidth=612'
            },
            {
                name: 'Paula´s Ibiza Eclectic Eau de Toilette',
                brand: 'LOEWE',
                description: 'Floral orange flower absolute and animalic, night-blooming jasmine sambac are layered with fresh notes of Madagascan mandarin and black pepper. Exotic incense essential oil and frankincense linger alongside gourmand notes of coconut and vanilla, amplified by rich ylang ylang, musk, and soft, woody Australian sandalwood. Openhearted and hedonistic, the joy of freedom and partying is captured in a fragrance.',
                size: '1.7 OZ',
                price: 110,
                link: 'https://www.neimanmarcus.com/p/loewe-paula-s-ibiza-eclectic-eau-de-toilette-1-7-oz-prod257750363?childItemId=NMC5U1Q_&msid=4446168&position=0',
                image: 'https://thebeautylookbook.com/wp-content/uploads/2023/07/Loewe-Paulas-Ibiza-Eclectic-Perfume.jpg'
            },
            {
                name: 'Virgin Island Water',
                brand: 'Creed',
                description: 'Imagine a life aquatic, a sailing adventure in a bottle. Virgin Island Water captures the tropical splendor carried in the trade winds through Sir Francis Drake Channel in the Caribbean. Simultaneously fresh and warm, this uplifting scent radiates Jamaican lime and coconut, complementing men and women in warmer months and climes, or carrying an enticing bit of paradise with its wearer all year round.',
                size: '1.7 OZ',
                price: 345,
                link: 'https://www.neimanmarcus.com/p/creed-virgin-island-water-1-7-oz-prod205390229',
                image: 'https://thebeautylookbook.com/wp-content/uploads/2021/06/5B-Creed-Virgin-Island-Water.jpg'
            },
            {
                name: 'Vacation',
                brand: 'Vacation',
                description: 'Mixes classic sunscreen notes - coconut, banana, pineapple, orange blossom - with classic poolside notes - pool water, pool toy, swimsuit lycra',
                size: '1.0 OZ.',
                price: 60,
                link: 'https://www.ulta.com/p/vacation-by-vacation-eau-de-toilette-pimprod2032165?AID=164999&PID=116548&CID=af_164999_116548_&clickId=XHDyzdQhyxyPT6f2HDUv%3ASh7UkH3Q22ayQxjzM0&SubID=&utm_medium=affiliate&utm_source=116548&utm_campaign=Content&utm_content=core&irgwc=1',
                image: 'https://thebeautylookbook.com/wp-content/uploads/2023/07/Vacation-Inc-Perfume-Summer.jpg'
            },
            {
                name: "L'EAU PAPIER",
                brand: 'Diptyque',
                description: "An encounter made perfume, plunging us into the heart of musk and its multiple facets. Musk evolves, changes, expresses itself over time and from one skin to another, just as ink saturates paper, assuming its texture to conjure up dreams and images. In L'Eau Papier, white musks are delicately faceted by an accord of rice steam, evoking the grain of the paper. To these are added luminous notes of mimosa, while a backdrop of blonde wood tones roots L'Eau Papier in the material itself.",
                size: '50 ML.',
                price: 130,
                link: 'https://www.diptyqueparis.com/en_us/p/eau-papier-eau-de-toilette-50ml.html',
                image: 'https://thebeautylookbook.com/wp-content/uploads/2023/07/Diptyque-Leau-Papier-Perfume.jpg'
            },
            {
                name: "Bal d'Afrique",
                brand: 'Byredo',
                description: "With this scent, Ben Gorham wanted to sum up and celebrate the reach and influence of Africa through time, particularly the way its myriad of cultures have shaped dance, art and music. A mix of Parisian avantgardism and African culture shaped a unique and vibrant expression. The intense life and excess euphoria is illustrated by the fragrance's neroli, African marigold and Moroccan cedarwood.",
                size: "1.7 OZ.",
                price: 205,
                link: "https://www.nordstrom.com/s/bal-dafrique-eau-de-parfum/7208868?siteid=QFGLnEolOWg-GaApdOmV292wMafBrsSIMQ&utm_source=rakuten&utm_campaign=QFGLnEolOWg&utm_content=1&utm_term=1080428&utm_channel=low_nd_affiliates_influencer&sp_source=rakuten&sp_campaign=QFGLnEolOWg&utm_medium=affiliate_influencer",
                image: 'https://thebeautylookbook.com/wp-content/uploads/2023/07/Byredo-Bal-DAfrique-Mojave-Ghost.jpg'
            },
            {
                name: 'Missing Person',
                brand: 'PHLUR',
                description: 'If nude were a perfume, this would be it. Brought to life by comforting accords of white musk, enhanced by sheer floral nuances of jasmine and glowing orange blossom, and fused with a light trail of soft, transparent woods, Missing Person is pure, provocative, and undeniably familiar.',
                size: '1.7 OZ.',
                price: 99,
                link: 'https://www.sephora.com/product/phlur-missing-person-eau-de-parfum-P482716?om_mmc=aff-linkshare-redirect-QFGLnEolOWg&c3ch=Linkshare&c3nid=QFGLnEolOWg&affid=QFGLnEolOWg-YdZr5X_hDEEfIKerWrck9Q&ranEAID=QFGLnEolOWg&ranMID=2417&ranSiteID=QFGLnEolOWg-YdZr5X_hDEEfIKerWrck9Q&ranLinkID=10-1&browserdefault=true&country_switch=us&lang=en&skuId=2568350&ds_rl=1261471',
                image: 'https://thebeautylookbook.com/wp-content/uploads/2022/08/8-Phlur-Missing-Person-Perfume.jpg'
            },
            {
                name: 'Solar Power',
                brand: 'PHLUR',
                description: 'Opening with a sparkling burst of bold, citrusy bergamot and red mandarin, Solar Power is illuminated by a warm solar-floral accord of neroli, jasmine, and orange flower wrapped in a comforting blend of musk, driftwood, and sea salt.',
                size: '1.7 OZ.',
                price: 99,
                link: 'https://www.sephora.com/product/solar-power-eau-de-parfum-P504990?om_mmc=aff-linkshare-redirect-QFGLnEolOWg&c3ch=Linkshare&c3nid=QFGLnEolOWg&affid=QFGLnEolOWg-l7x_sFBY2Xr6WMUWBRWcTA&ranEAID=QFGLnEolOWg&ranMID=2417&ranSiteID=QFGLnEolOWg-l7x_sFBY2Xr6WMUWBRWcTA&ranLinkID=10-1&browserdefault=true',
                image: 'https://thebeautylookbook.com/wp-content/uploads/2023/07/Phlur-Solar-Power-Perfume.jpg'
            },
            {
                name: 'Father Figure',
                brand: 'PHLUR',
                description: 'Rooted in lushness, Father Figure is a vivid, green fragrance that captures the intimate feeling of cool. It opens with notes of fleshy fig and dewy cassis, then folds into notes of creamy sandalwood, orris root, vanilla Madagascar. Father Figure is layered and vibrant.',
                size: '1.7 OZ.',
                price: 99,
                link: 'https://www.sephora.com/product/father-figure-50ml-edp-P506729?om_mmc=aff-linkshare-redirect-QFGLnEolOWg&c3ch=Linkshare&c3nid=QFGLnEolOWg&affid=QFGLnEolOWg-rgyEDnUNXbS3d.1fWcnKLQ&ranEAID=QFGLnEolOWg&ranMID=2417&ranSiteID=QFGLnEolOWg-rgyEDnUNXbS3d.1fWcnKLQ&ranLinkID=10-1&browserdefault=true',
                image: 'https://thebeautylookbook.com/wp-content/uploads/2023/07/Phlur-Father-Figure-Perfume-Review.jpg'
            },
        ])
        res.redirect('/BRiiZE/springSummer')
    }catch(err){
        console.log(err)
    }
}

// FALL WINTER INDEX PAGE
const fallWinterPage = async(req,res)=>{
    try{
        const fallWinter = await FWItem.find()
        res.render('categories/fallWinter.ejs', {
            fallWinter,
            tabTitle: 'FW Index', 
            currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// FALL WINTER SEED FUNCTION
const fallWinterSeed = async (req, res) =>{
    try{
        const fallWinter = await FWItem.create([
            {
                name: 'Rose de Grasse Rouge',
                brand: 'Aerin',
                description: 'The depth and allure of red rose blends with dewy rose water and warm honeycomb for a sensual and bold fragrance. Rouge was inspired by an enduring icon, the perfect red rose, which symbolizes love, friendship and generosity. It is a floral rose fragrance that evokes the singular beauty of a freshly cut red rose in full bloom.',
                size: '1.7 OZ.',
                price: 205,
                link: 'https://www.nordstrom.com/s/aerin-beauty-rose-de-grasse-rouge-eau-de-parfum-nordstrom-exclusive/7464125?siteid=SyrN4SGJMyU-b17g2E1Zyw8EC.i7eroc5w&utm_source=rakuten&utm_campaign=SyrN4SGJMyU&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=SyrN4SGJMyU&utm_medium=affiliate_content',
                image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1696348310-323ffd26-1db5-41fa-a06e-977b0d8e9ab9.jpg?crop=1xw:1xh;center,top&resize=980:*'
            },
            {
                name: 'English Pear & Sweet Pea',
                brand: 'Jo Malone',
                description: 'Sun-warmed orchards spring to life as tempting green pears fill the branches. The luscious fruits enveloped in softly scented pastel sweet peas, nestled on a base of powdery white musk.',
                size: '1 OZ.',
                price: 85,
                link: 'https://www.nordstrom.com/s/english-pear-sweet-pea-cologne/7545649?siteid=SyrN4SGJMyU-NRkLeg2kddZDqcV1_pG.tw&utm_source=rakuten&utm_campaign=SyrN4SGJMyU&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=SyrN4SGJMyU&utm_medium=affiliate_content',
                image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695932703-d9ed34f4-8b0a-48b9-9314-6bf17e5f31c2.jpg?crop=1xw:1xh;center,top&resize=980:*'
            },
            {
                name: "J'ADORE L'OR",
                brand: 'Christian Dior',
                description: "J'adore l'Or is a full and voluptuous perfume essence by Francis Kurkdjian for Dior that masterfully balances notes of orange blossom, jasmine grandiflorum and centifolia rose absolutes. Blossoming in their full glory, powerful and sensual, these flowers are the true gold of J'adore",
                size: '1.7 OZ.',
                price: 170,
                link: 'https://www.dior.com/en_us/beauty/products/jadore-lor-Y0997096.html?utm_source=Rakuten&utm_medium=affiliates&utm_content=TnL5HPStwNw-UgZKG_iZQGfpnGQeTZL9kg&ranMID=43935&ranEAID=TnL5HPStwNw&ranSiteID=TnL5HPStwNw-UgZKG_iZQGfpnGQeTZL9kg',
                image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1697655861-screenshot-2023-10-18-at-3-03-44-pm-65302c2a0f55d.png?crop=1xw:1xh;center,top&resize=980:*'
            },
            {
                name: 'Heaven Can Wait',
                brand: 'Frederic Malle',
                description: 'HEAVEN CAN WAIT is Jean-Claude Ellena’s sensual journey in warm spice. Clove, pimento, ambrette, and carrot seed are joined by the sophisticated beauty of iris. Vetiver brings structure and vibrancy; facets of peach and prune, and roundness. Inspired in part by the intimacy of private worlds, the result is a modern rendering of a Parisian classic: understated, discreet, and noble–an eternal seduction, simultaneously exotic and comforting. It subtly draws one in irresistibly and invites embrace. The result is something we now appreciate more than ever: a private heaven. Born into a family of perfumers from Grasse, Jean-Claude Ellena was introduced to the art of developing fragrances as a teenager. Self-taught, he defines his creations as “poetry of memory.” Everyday smells–wax floors, clean sheets, skin, an old sweater–are some of his great inspirations. His signature is simple, minimalist, and modern.',
                size: '1.7 OZ.',
                price: 275,
                link: 'https://www.neimanmarcus.com/p/editions-de-parfums-frederic-malle-heaven-can-wait-perfume-1-7-oz-prod266040947?ecid=NMAF_RK_Hearst+Magazines&CS_003=5630585&utm_medium=affiliate&utm_source=NMAF__Hearst+Magazines&ranSiteID=SyrN4SGJMyU-m.93J2V_Q04iY_LVMqG9Ow',
                image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695932661-nm_4658892_100000_m.jpg?crop=1xw:1xh;center,top&resize=980:*'
            },
            {
                name: 'Ouranon',
                brand: 'Aesop',
                description: " Steeped in the earthy minerality of ancient relics; and the resinous woods and incandescent spices redolent of ritual, the elegiac blend of Ouranon Eau de Parfum evokes the final glow of aromatic embers unfurling into a starry sky. A poetic ending or perhaps a stirring new chapter. Aesop's fragrances know no gender boundaries. They are intended for all who take pleasure in evocative aromas. The Eau de Parfum will appeal to those seeking woody fragrances, but also those that are complex, nuanced and unexpected with ambery resinous notes",
                size: '1.7 OZ.',
                price: 195,
                link: 'https://www.nordstrom.com/s/ouranon-eau-de-parfum/7519706?siteid=SyrN4SGJMyU-fLMULfK8cVGXmm_ipJxD0A&utm_source=rakuten&utm_campaign=SyrN4SGJMyU&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=SyrN4SGJMyU&utm_medium=affiliate_content',
                image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695933103-bdc5a44a-1cbc-4ded-9800-0b57c1119d3b.jpg?crop=1xw:1xh;center,top&resize=980:*'
            },
            {
                name: 'Ethereal Wave',
                brand: 'Liis',
                description: 'A fragrance inspired by opposites celestial allure and emotional depth. Bergamot and cardamom sing atop white tea, and black tea absolute, cascading into a luscious tapestry of blonde woods and velvet musk.',
                size: '50 ml',
                price: 165,
                link: 'https://liisfragrances.com/products/ethereal-wave?sscid=21k8_vrisc&',
                image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695933034-Liis_EtherealWave_Box_1080x1500_a583e8bb-138d-4018-82af-7066109ef115_360x360@2x.jpg?crop=1xw:1xh;center,top&resize=980:*'
            },
            {
                name: 'Eleventh Hour',
                brand: 'Byredo',
                description: 'Byredo presents Eleventh Hour, an exploration around the smell of things ending, an expedition to the end of Time, the last perfume on Earth. Eleventh Hour opens up with a spicy note the Ban Timmur from Nepal. Wild fig at the heart adds a sweet and soft feeling. Tonka beans combined with cashmere woods brings warmth and depth at the base of the fragrance. Made in France.',
                size: '',
                price: 205,
                link: 'https://www.saksfifthavenue.com/product/Byredo-Eleventh-Hour-Eau-de-Parfum-0400099335012.html?ranMID=13816&ranEAID=SyrN4SGJMyU&ranSiteID=SyrN4SGJMyU-7NHuCHLoDxLBchbBiK6gjg&site_refer=AFF001&mid=13816&siteID=SyrN4SGJMyU-7NHuCHLoDxLBchbBiK6gjg&LSoid=1206750&LSlinkid=10&LScreativeid=1',
                image: 'https://cdn.saksfifthavenue.com/is/image/saks/0400099335012_NOCOLOR?wid=484&hei=646&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'
            },
            {
                name: 'Coco Mademoiselle',
                brand: 'Chanel',
                description: 'Irresistibly sensual, irrepressibly spirited. A sparkling, bold ambery fragrance that recalls a daring young Coco Chanel. An absolutely modern composition with a strong yet surprisingly fresh character. A double name, a double personality. Independent and endearing, mischievous and provocative, light and exuberant. The expression of a woman free to reinvent herself day after day.',
                size: '3.4 FL. OZ',
                price: 172,
                link: 'https://www.chanel.com/us/fragrance/p/116520/coco-mademoiselle-eau-de-parfum-spray/?ranMID=39938&ranEAID=MZ9491VLjxM&ranSiteID=MZ9491VLjxM-WaatdpJEq.Sv2pYC6chg7A&wt.mc_id=fb_eye_affiliate_en_us_dis&wt.mc_t=display&utm_source=linkshare&utm_campaign=fb_eye_affiliate&utm_medium=affiliate&utm_content=Allure&siteID=MZ9491VLjxM-WaatdpJEq.Sv2pYC6chg7A',
                image: 'https://media.allure.com/photos/657a0bcc2ff45d46759f0f51/3:4/w_1920%2Cc_limit/Chanel%2520Coco%2520Mademoiselle%2520Eau%2520de%2520Parfum.jpg'
            },
            {
                name: 'APRES',
                brand: 'ELLIS',
                description: 'The freedom of the mountains, the rush of alpine air, the bracing freshness of evergreens, and the richness of bourbon, praline, and vanilla, Après is a celebration of the wintry outdoors',
                size: '1.7 FL OZ.',
                price: 108,
                link: 'https://www.amazon.com/Ellis-Brooklyn-APR%C3%88S-Parfum-Travel/dp/B0BKQWDH9H?asc_source=verso&asc_campaign=657af47c33d618eb9f5c85d0%7C6VD8zo3BHDL6fBXRqjLPTb&asc_refurl=https%3A%2F%2Fwww.allure.com%2Fgallery%2Fbest-winter-perfumes&ascsubtag=657af47c33d618eb9f5c85d0&tag=allure0c3-20',
                image: 'https://media.allure.com/photos/657a173fc4900bd83ec60775/3:4/w_1920%2Cc_limit/Ellis%2520Brooklyn%2520Apre%25CC%2580s%2520Eau%2520de%2520Parfum.jpg'
            },
            {
                name: 'Carmina',
                brand: 'Creed',
                description: "Carmina Eau de Parfum is the latest strikingly modern woody floral Women's Fragrance from Creed. Sensuous Rose de Mai and luxurious cashmere wood create an electric sensibility with the debut of plump black cherries and piquant pink pepper, warmed by the golden embrace of rare saffron. With an intoxicating base of precious myrrh and frankincense, together with ambroxan and smoldering musk, this women's perfume is finely crafted with a powerful sillage that embodies the essence of feminine allure imbued with a captivating charisma.",
                size: '2.5 OZ.',
                price: 445,
                link: "https://www.bergdorfgoodman.com/p/creed-carmina-eau-de-parfum-2-5-oz-prod183790266?ecid=BGAF_RK_Hearst+Magazines_Content+Site&utm_medium=affiliate&utm_source=BGAF__Hearst+Magazines",
                image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1696012957-bg_4623902_100000_m.jpg?crop=1xw:1xh;center,top&resize=980:*"
            },
            {
                name: 'Nomad',
                brand: 'Nomad',
                description: "If you're looking for a statement-making scent that's guaranteed to be noticed by everyone around you, Bond No. 9's NoMad should be right up your (New York City-inspired) alley. Because oud itself can be heady, the fruity and floral pairing notes of pear, blackcurrant, and rose offer the perfect aromatic balance that transitions beautifully from day to night.",
                size: '100 ml',
                price: 460,
                link: 'https://www.bondno9.com/nomad.html?sscid=21k8_vtekb&',
                image: 'https://media.allure.com/photos/6596cb4ea02b3d57b0267f55/3:4/w_1920%2Cc_limit/Bond%2520No.9%2520New%2520York%2520NoMad%2520Perfume.jpg'
            },
            {
                name: 'Replica Jazz Club Eau de Toilette',
                brand: 'Maison Margiela Paris',
                description: ' With a smooth groove of pink pepper, rum, vetiver and tobacco leaf, Jazz Club is a parfum of chic and heady cocktails, honey and woody notes of cigar boxes. It captures the image of cracked leather bar stools, well-worn armchairs and the piano where unfinished drinks are left to waft their liquory notes. The silhouette of each Replica bottle is inspired by classic apothecary jars, allowing the collection to be instantly identifiable.',
                size: '1 OZ.',
                price: 85,
                link: 'https://www.nordstrom.com/s/maison-margiela-replica-jazz-club-eau-de-toilette-fragrance/4134973?siteid=MZ9491VLjxM-zj98B7Q2io6l1Q2Iy5bUTA&utm_source=rakuten&utm_campaign=MZ9491VLjxM&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=MZ9491VLjxM&utm_medium=affiliate_content',
                image: 'https://media.allure.com/photos/657a18e790c04c4aa12b2fbd/3:4/w_1920%2Cc_limit/Maison%2520Margiela%2520Replica%2520Jazz%2520Club%2520Eau%2520de%2520Toilette.jpg'
            },
            {
                name: 'Nostalgia',
                brand: 'Kismet Olfactive',
                description: 'Nostalgia is a love song to the French-Alps village of Grasse, where Kismet-founder Shabnam Tavakol studied perfumery. Structured on poetry’s 14-line sonnet form, the fragrance is composed of 14 raw materials that are at once leathery, musky, floral, herbal, smoky, and spicy.',
                size: '50 ml',
                price: 175,
                link: 'https://www.modaoperandi.com/beauty/p/kismet-olfactive/nostalgia-eau-de-parfum/589083?AID=14321425&PID=8984085&SID=657af47c33d618eb9f5c85d0%7Cfr1708985241557cjf%7C7A5Tc3CwGAGYvxPc1EQavB&cjevent=4f940ba3d50211ee803b01b70a1eba23&utm_medium=affiliate&medium=affiliate&source=Cond%C3%A9%20Nast&utm_source=Cond%C3%A9%20Nast',
                image: 'https://media.allure.com/photos/657a1f9e32942dcefcc7aaff/3:4/w_1920%2Cc_limit/Kismet%2520Olfactive%2520Nostalgia%2520Eau%2520de%2520Parfum.jpg'
            },
            {
                name: 'Ombré Leather ',
                brand: 'Tom Ford',
                description: "The tactile sensuality of rich black leather, textured with addictive patchouli and vetiver, envelops like a second skin. The perfume's floral tones of jasmine sambac conjure wild desert beauty, while layers of amber and moss mimic the heart of rock and sand.",
                size: '1.69 OZ.',
                price: 155,
                link: 'https://www.nordstrom.com/s/tom-ford-ombr-leather-eau-de-parfum/5024226?siteid=MZ9491VLjxM-SghKpC4ow6w41idgJJcHhQ&utm_source=rakuten&utm_campaign=MZ9491VLjxM&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=MZ9491VLjxM&utm_medium=affiliate_content',
                image: 'https://media.allure.com/photos/657a1853acde52392b593742/3:4/w_1920%2Cc_limit/Tom%2520Ford%2520Ombre%25CC%2581%2520Leather%2520Eau%2520de%2520Parfum.jpg'
            },
            {
                name: 'Fame',
                brand: 'Paco Rabanne',
                description: ' Playful, sensual, empowered. The quintessence of avant-garde luxury, the fragrance is a blend of exceptionally pure jasmine, succulent mango and an addictively sensual creamy incense.',
                size: '1.7 OZ.',
                price: 120,
                link: 'https://www.nordstrom.com/s/paco-rabanne-fame-eau-de-parfum/7147815?siteid=MZ9491VLjxM-LS0BYNKs3h0xLPU9.sqcLA&utm_source=rakuten&utm_campaign=MZ9491VLjxM&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=MZ9491VLjxM&utm_medium=affiliate_content',
                image: 'https://media.allure.com/photos/657a1c1e32942dcefcc7aaf8/3:4/w_1920%2Cc_limit/Paco%2520Rabanne%2520Fame%2520Eau%2520de%2520Parfum.jpg'
            },
        ])
        res.redirect('/BRiiZE/fallWinter')
    }catch(err){
        console.log(err)
    }
}


// MEN COLOGNE INDEX PAGE
const menColognePage = async(req,res)=>{
    try{
        const menCologne = await MItem.find()
        res.render('categories/menCologne.ejs', {
            menCologne: menCologne,
            tabTitle: 'Men Colongne Index', 
            currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// MEN COLOGNE SEED FUNCTION
const menCologneSeed = async (req, res)=>{
    try{
        const menCologne = await MItem.create([
            {
                name: 'Chanel Bleu',
                brand: 'Chanel',
                description: 'The most intense of the BLEU DE CHANEL fragrances. Powerful and refined, the Parfum for men reveals the essence of independence and determination. A timeless scent with a strong masculine signature.',
                size: '3.4 FL. OZ.',
                price: 193,
                link: 'https://www.chanel.com/us/fragrance/p/107180/bleu-de-chanel-parfum-spray/?ranMID=39938&ranEAID=0c5b5rpoqTU&ranSiteID=0c5b5rpoqTU-eIIHid9Sx4BrOWhjhci55A&wt.mc_id=fb_eye_affiliate_en_us_dis&wt.mc_t=display&utm_source=linkshare&utm_campaign=fb_eye_affiliate&utm_medium=affiliate&utm_content=Vogue&siteID=0c5b5rpoqTU-eIIHid9Sx4BrOWhjhci55A',
                image: 'https://assets.vogue.com/photos/6595953d85de882aa36c974c/master/w_1600,c_limit/HFA_0373.jpg'
            },
            {
                name: 'Sauvage',
                brand: 'Dior',
                description: 'Dior Sauvage Eau de Parfum exudes sensual mystery. Calabrian bergamot adds spicy notes to nutmeg wrapped in smoky accents of vanilla. A perfume inspired by the magic hour of twilight in the desert, the moment when nature awakens',
                size: '1 OZ.',
                price: 85,
                link: 'https://www.nordstrom.com/s/sauvage-eau-de-parfum/4897958?siteid=0c5b5rpoqTU-y68wAXjsgzifI7aR21vNWQ&utm_source=rakuten&utm_campaign=0c5b5rpoqTU&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=0c5b5rpoqTU&utm_medium=affiliate_content',
                image: 'https://assets.vogue.com/photos/6595953ba3df0183f3e86c57/master/w_1600,c_limit/HFA_0286.jpg'
            },
            {
                name: 'Ralph Lauren - Polo Black',
                brand: 'Polo',
                description: "Sophisticated. Mysterious. Tempting. Cool Silver Armoise and musky Patchouli Noir blend with a burst of juicy iced mango accord for a bold men's fragrance that lingers.",
                size: '6.7 FL. OZ.',
                price: 135,
                link: 'https://www.amazon.com/Black-Ralph-Lauren-Toilette-Spray/dp/B005XZ0OP8/?asc_source=verso&asc_campaign=6054bab9de380439cadee57e%7CgyCRzrreTc2iMHV1ep8ZaL&asc_refurl=https%3A%2F%2Fwww.vogue.com%2Farticle%2Fbest-colognes-for-men&ascsubtag=6054bab9de380439cadee57e&tag=vogue0d-20',
                image: 'https://assets.vogue.com/photos/6054ce7c3d9f1094613214fa/3:4/w_640,c_limit/slide_15.jpg'
            },
            {
                name: 'Guilty Elixir',
                brand: 'GUCCI',
                description: 'The irresistible Gucci cologne features a sensual vanilla and ambrofix base, a flamboyant orris butter heart, a smoky nutmeg top note.',
                size: '2 OZ.',
                price: 183,
                link: 'https://www.nordstrom.com/s/guilty-elixir-de-parfum-for-men/7544465?siteid=0c5b5rpoqTU-BvVJBLaE8xGJnE3K2LFzAg&utm_source=rakuten&utm_campaign=0c5b5rpoqTU&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=0c5b5rpoqTU&utm_medium=affiliate_content',
                image: 'https://assets.vogue.com/photos/65d4ef7c4fc41b78bb3df50f/master/w_1600,c_limit/HFA_0313.jpg'
            },
            {
                name: 'The Tobacco & Leather',
                brand: 'Maison Margiela',
                description: 'Imagine yourself in a dimly lit jazz club with the perfect cocktail, surrounded by cigar smoke and leather chairs. This scent is the next best thing: Warm and spicy, it has notes of pink pepper, rum, and tobacco. Perfect for the fall and winter months when you want to hibernate in full cozy mode.',
                size: '1 OZ.',
                price: 85,
                link: 'https://www.nordstrom.com/s/maison-margiela-replica-jazz-club-eau-de-toilette-fragrance/4134973?siteid=0c5b5rpoqTU-tiXT1BFM86AtAjMcmwnaRA&utm_source=rakuten&utm_campaign=0c5b5rpoqTU&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=0c5b5rpoqTU&utm_medium=affiliate_content',
                image: 'https://assets.vogue.com/photos/6595953a9f95914ed2de4c5c/master/w_1600,c_limit/HFA_0274.jpg'
            },
            {
                name: 'Calvin Klein Eternity',
                brand: 'Calvin Klein',
                description: 'Another enduring classic from 1988, Eternity is a romantic floral fragrance that was inspired by lasting love. Clearly, the love affair with this scent carries on too: It’s decidedly unisex, and works for both him and her. Notes of freesia, mandarin, sage, white lily, patchouli, and sandalwood make for a timeless blend.',
                size: '3.3 FL. OZ.',
                price: 104,
                link: 'https://www.amazon.com/Calvin-Klein-ETERNITY-Men-Toilette/dp/B00021AKJI?asc_source=verso&asc_campaign=6054bab9de380439cadee57e%7CgGD8axNQFWFwDNPGmDEvgw&asc_refurl=https%3A%2F%2Fwww.vogue.com%2Farticle%2Fbest-colognes-for-men&ascsubtag=6054bab9de380439cadee57e&tag=vogue0d-20',
                image: 'https://assets.vogue.com/photos/6054ce8fde380439cadee5c2/3:4/w_640,c_limit/slide_7.jpg'
            },
            {
                name: 'Another 13',
                brand: 'Le Labo',
                description: 'You may know Le Labo for its signature Santal 33 scent, but Another 13 is one of its more slept-on fragrances that deserves just as much hype. A collaboration with Another magazine, the scent is equal parts musky and fresh, composed of ambroxan, jasmine petals, moss, and woody, amber-y notes.',
                size: '1.7 OZ.',
                price: 230,
                link: 'https://www.saksfifthavenue.com/product/le-labo-another-13-eau-de-parfum-0400010736952.html?ranMID=13816&ranEAID=0c5b5rpoqTU&ranSiteID=0c5b5rpoqTU-r2fYDg9WGgn6nFANog1PpQ&site_refer=AFF001&mid=13816&siteID=0c5b5rpoqTU-r2fYDg9WGgn6nFANog1PpQ&LSoid=1278460&LSlinkid=10&LScreativeid=1',
                image: 'https://assets.vogue.com/photos/6054cd6451b6a301cf32a966/3:4/w_640,c_limit/slide_12.jpg'
            },
            {
                name: 'Bibliothèque',
                brand: 'BYREDO',
                description: 'Sheltered from the passage of time, libraries have the power to teleport us to a world in suspension. The fragrance channels the velvety quality of paper embodied in a touch of peach, plum, vanilla and the omnipresent patchouli running like a backbone through the composition.',
                size: '1.7 OZ.',
                price: 205,
                link: 'https://www.nordstrom.com/s/bibliotheque-eau-de-parfum/4893896?siteid=0c5b5rpoqTU-QlsXER6MCzBGud1EQ5tzgw&utm_source=rakuten&utm_campaign=0c5b5rpoqTU&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=0c5b5rpoqTU&utm_medium=affiliate_content',
                image: 'https://assets.vogue.com/photos/6054ce5840c3812adafdb036/3:4/w_640,c_limit/slide_4.jpg'
            },
            {
                name: 'Hugo Boss Boss',
                brand: 'BOSS',
                description: 'Launched in 1998, this enduring cologne is a cult classic thanks to its timeless, masculine scent. Fruity and citrus top notes of apple, lemon, and plum are balanced against a hefty floral and spicy base, including geranium, sandalwood, and vetiver.',
                size: '3.3 FL. OZ.',
                price: 104,
                link: 'https://www.amazon.com/Hugo-Boss-BOTTLED-Eau-Toilette/dp/B000RPLZAM/?asc_source=verso&asc_campaign=6054bab9de380439cadee57e%7Ct1tQDb7zfRfTYTf5hFffBa&asc_refurl=https%3A%2F%2Fwww.vogue.com%2Farticle%2Fbest-colognes-for-men&ascsubtag=6054bab9de380439cadee57e&tag=vogue0d-20',
                image: 'https://assets.vogue.com/photos/6054cf0748ee0886a203daf9/3:4/w_640,c_limit/slide_3.jpg'
            },
            {
                name: 'MYSLF',
                brand: 'Yves Saint Laurent',
                description: 'On top, a fresh and vibrant accord with sparkling bergamot, followed by a rich and intense orange blossom absolute heart. At the base, the fragrance is balanced by warm and sensual woods, including patchouli and musky Ambrofix™. A statement of modern masculinity to celebrate your true self. Unapologetically. Proudly. A long-lasting fragrance that seamlessly fuses with your skin, revealing a distinct signature for each individual. My scent, MYSLF.',
                size: '1.35 OZ.',
                price: 89,
                link: 'https://www.nordstrom.com/s/myslf-refillable-eau-de-parfum/7506287?siteid=0c5b5rpoqTU-s78JQq6CYwwnYsdUK7OIOw&utm_source=rakuten&utm_campaign=0c5b5rpoqTU&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=0c5b5rpoqTU&utm_medium=affiliate_content',
                image: 'https://assets.vogue.com/photos/65d4e94d48ca2d4ad07b9b72/3:4/w_640,c_limit/2.jpg'
            },
            {
                name: 'Tom Ford Oud Wood',
                brand: 'Tom Ford',
                description: 'Oud wood is one of the most precious and expensive ingredients for any perfumer, and this cologne by Tom Ford nails the woody scent. Combined with cardamom, sandalwood, and vetiver—with hints of tonka bean and amber—a few spritzes of this signature scent is like warming up to a nice cozy fire.',
                size: '1 OZ.',
                price: 195,
                link: 'https://www.nordstrom.com/s/tom-ford-private-blend-oud-wood-eau-de-parfum/3623561?siteid=0c5b5rpoqTU-1ZIVlzIY0pMQHybjoIhfLg&origin=category-personalizedsort&breadcrumb=Home%2FBrands%2FTom%20Ford&color=none&utm_source=rakuten&utm_campaign=0c5b5rpoqTU&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=0c5b5rpoqTU&utm_medium=affiliate_content',
                image: 'https://assets.vogue.com/photos/6595953a815a50ae66a9f868/master/w_1600,c_limit/HFA_0298.jpg'
            },
            {
                name: 'Geranium Pour Monsieur',
                brand: 'Frederic Malle',
                description: 'A tenacious freshness inhabits Géranium pour Monsieur. Its composition offers a sophisticated alternative to the classic fern (fougère) type fragrances. A heart of geranium from China, mint and aniseed notes, spices such as clove and cinnamon, sandalwood and a large dose of white musks are the principle actors of this novel genre. Rare warm exotic notes such as incense resinoid and styrax benzoin add a particular sophistication to this impression of clarity and freshness.',
                size: '3.38 FL. OZ.',
                price: 335,
                link: 'https://www.saksfifthavenue.com/product/Edition-De-Parfums-Frederic-Malle-Geranium-Pour-Monsieur-Parfum-Spray-0400093279413.html?ranMID=13816&ranEAID=0c5b5rpoqTU&ranSiteID=0c5b5rpoqTU-1KIDJhkD9Cw3Rr7RM9NuOA&site_refer=AFF001&mid=13816&siteID=0c5b5rpoqTU-1KIDJhkD9Cw3Rr7RM9NuOA&LSoid=1278460&LSlinkid=10&LScreativeid=1',
                image: 'https://assets.vogue.com/photos/6595953bbf210899c85cd76d/master/w_1600,c_limit/HFA_0314.jpg'
            },
            {
                name: 'Aventus',
                brand: 'Creed',
                description: 'The bestselling men’s fragrance in the history of the House of Creed, Aventus celebrates strength, power, success, and heritage, a sophisticated scent, perfect for the modern discerning gentleman. Sensual, audacious, and contemporary, this rich and iconic Eau de Parfum combines tantalizing fruity head notes of apple, blackcurrant, pink pepper, and bergamot with a complementary fresh and fruity heart of jasmine, pineapple and patchouli. Rounding off this bold and elegant men’s fragrance spray is a rich, woody base of oakmoss, cedarwood, birch, and Creed’s signature ingredient, Ambroxan, for the ultimate olfactive experience. Made in France.',
                size: '1.7 OZ.',
                price: 365,
                link: 'https://www.saksfifthavenue.com/product/creed-aventus-eau-de-parfum-0400094449501.html?ranMID=13816&ranEAID=0c5b5rpoqTU&ranSiteID=0c5b5rpoqTU-DcenUD.PjGynN_ePe5lvZA&site_refer=AFF001&mid=13816&siteID=0c5b5rpoqTU-DcenUD.PjGynN_ePe5lvZA&LSoid=1278460&LSlinkid=10&LScreativeid=1',
                image: 'https://assets.vogue.com/photos/6595953ba3df0183f3e86c56/master/w_1600,c_limit/HFA_0336.jpg'
            },
            {
                name: "Terre d'Hermès",
                brand: 'Hermès',
                description: "The Eau de Parfum combines the intensity of citron, the sharp freshness of juniper berry and the power of Timut pepper. The Terre d'Hermès collection tells the story of man's relationship with the Earth, his humble and harmonious dialogue with nature and the elements.",
                size: '1.7 OZ.',
                price: 125,
                link: 'https://www.nordstrom.com/s/terre-dhermes-eau-givree-eau-de-parfum/6878724?siteid=0c5b5rpoqTU-O4lKhARtfaHdL6qaihadaQ&utm_source=rakuten&utm_campaign=0c5b5rpoqTU&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=0c5b5rpoqTU&utm_medium=affiliate_content',
                image: 'https://assets.vogue.com/photos/65d4ef7ccaca24c8a4aa2316/master/w_1600,c_limit/HFA_0257.jpg'
            },
            {
                name: 'Spicebomb',
                brand: 'Viktor&Rolf',
                description: "This distinctly masculine scent contrasts the spiciness of chili and saffron with woody notes of leather and tobacco. It's further distinguished by the brute strength of vetiver and the zesty notes of bergamot and grapefruit, which transform this men's cologne into the signature of a powerful, intense, daring man.",
                size: '3 OZ.',
                price: 130,
                link: 'https://www.nordstrom.com/s/viktor-and-rolf-viktorrolf-spicebomb-eau-de-toilette-fragrance/3280721?siteid=0c5b5rpoqTU-mrA71AgwW1O9pxvJ7t4EMw&utm_source=rakuten&utm_campaign=0c5b5rpoqTU&utm_content=1&utm_term=1115254&utm_channel=low_nd_affiliates_content&sp_source=rakuten&sp_campaign=0c5b5rpoqTU&utm_medium=affiliate_content',
                image: 'https://assets.vogue.com/photos/6524100286b5b9b7a5180d02/3:4/w_640,c_limit/slide_3%20(21).jpg'
            },
            {
                name: 'Osmanthe Kodoshan',
                brand: 'Maison Crivelli',
                description: 'The discovery of the osmanthus flowers on a misty, tropical mountain is the inspiration behind Maison Crivelli’s Osmanthe Kodoshan—a woody floral scent crafted in partnership with perfumer Stéphanie Bakouche. Here, leather and tobacco leaf juxtapose spicy Sichuan pepper, and rich peachy and apricot fruits for a scent that transports you to the moist outdoors. ',
                size: '3.4 OZ.',
                price: 260,
                link: 'https://www.saksfifthavenue.com/product/maison-crivelli-osmanthe-kodoshan-eau-de-parfum-0400017968987.html?ranMID=13816&ranEAID=0c5b5rpoqTU&ranSiteID=0c5b5rpoqTU-HViBbRbBOd3TQ978foDLtA&site_refer=AFF001&mid=13816&siteID=0c5b5rpoqTU-HViBbRbBOd3TQ978foDLtA&LSoid=1278460&LSlinkid=10&LScreativeid=1',
                image: 'https://assets.vogue.com/photos/6373e3a7bef03ca674096195/3:4/w_640,c_limit/slide_%20(71).jpg'
            },
        ]

        )
    }catch(err){
        console.log(err)
    }
}

// SPECIAL SCENT INDEX PAGE 
const specialPage = async(req, res)=>{
    try{
        const specialScent = await SItem.find();
        res.render("categories/specialScent.ejs", {
            specialScent, 
            tabTitle: 'Special Scent Index',
            currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}


// SPRING SUMMER SHOW
const SSShow = async (req, res) =>{
    try{
        console.log(req.params.id)
        const index = req.params.id
        // const itemId = mongoose.Types.ObjectId(index);
        const item = await SSItem.findById(index);
        console.log(item)
        res.render('show.ejs',
        {
            item,
            tabTile: item.name,
            currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }
}

// SPECIAL SCENT SHOW
const SShow = async (req, res) =>{
    try{
        console.log(req.params.id)
        const index = req.params.id
        // const itemId = mongoose.Types.ObjectId(index);
        const item = await SItem.findById(index);
        console.log(item)
        res.render('show.ejs',
        {
            item,
            tabTile: item.name,
            currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }
}

// FALL WINTER SHOW
const FWShow = async (req, res) =>{
    try{
        console.log(req.params.id)
        const index = req.params.id
        // const itemId = mongoose.Types.ObjectId(index);
        const item = await FWItem.findById(index);
        console.log(item)
        res.render('show.ejs',
        {
            item,
            tabTile: item.name,
            currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }
}

// MEN COLOGNE SHOW
const MShow = async (req, res) =>{
    try{
        console.log(req.params.id)
        const index = req.params.id
        // const itemId = mongoose.Types.ObjectId(index);
        const item = await MItem.findById(index);
        console.log(item)
        res.render('show.ejs',
        {
            item,
            tabTile: item.name,
            currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }
}


// Edit Account
const accountEdit = async(req, res)=>{
    try{
        const index = req.params.id
        const account = await Account.findById(index)
        res.render('edit.ejs', {accounts: account, tabTitle: 'Edit'})
    }catch(err){
        console.log(err)
    }
}

// SPRING SUMMER OBJECT DELETE FUNCTION
const SSDestroy = async (req, res) => {
    try{
        console.log("inside the delete route")
        await SSItem.findByIdAndDelete(req.params.id)
        res.redirect('/BRiiZE/springSummer')
    }catch(err){
        console.log(err)
    }
}
// FALL WINTER OBJECT DELETE FUNCTION
const FWDestroy = async (req, res) => {
    try{
        console.log("inside the delete route")
        await FWItem.findByIdAndDelete(req.params.id)
        res.redirect('/BRiiZE/fallWinter')
    }catch(err){
        console.log(err)
    }
}
// MEN COLOGNE OBJECT DELETE FUNCTION
const MDestroy = async (req, res) => {
    try{
        console.log("inside the delete route")
        await MItem.findByIdAndDelete(req.params.id)
        res.redirect('/BRiiZE/menCologne')
    }catch(err){
        console.log(err)
    }
}
// SPECIAL SCENT OBJECT DELETE FUNCTION
const SDestroy = async (req, res) => {
    try{
        console.log("inside the delete route")
        await SItem.findByIdAndDelete(req.params.id)
        res.redirect('/BRiiZE/special')
    }catch(err){
        console.log(err)
    }
}

// ACCOUNT LOG OUT FUNCTION  // I've got an idea of this code in StackOverFlow
const logout = async (req, res) => {
    try {
        // Wrap req.session.destroy in a promise
        await new Promise((resolve, reject) => {
            req.session.destroy((err) => {
                if (err) {
                    reject(err); // Reject the promise if there's an error
                } else {
                    resolve(); // Resolve the promise otherwise
                }
            });
        });
        
        res.clearCookie('connect.sid'); // Clear the session cookie
        res.redirect('/'); // Redirect user to home page or login page
    } catch (err) {
        console.log(err); // Log the error
        res.redirect('/'); // Redirect to a safe page in case of error
    }
};

// SPECIAL SCENT EDIT - "/id/edit"
const editForm = async(req,res)=>{
    try{
        const item = await SItem.findById(req.params.id)
        res.render('SItemEdit.ejs', {
            item,
            tabTitle:'Special Scent',
            currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }
}

// PUT - "items/:id"
const update = async(req, res)=>{
    try{
        console.log(req.body)
        const index = req.params.id
        const item = await SItem.findByIdAndUpdate(index, req.body, {new: true})
        // console.log(`Received ${req.method} request for ${req.path}`);
        res.redirect('/BRiiZE/special')
    }catch(err){
        console.log(err)
        res.status(500).send("Error updating item: " + err.message)
    }
}

module.exports = {
    home,
    new: newForm,
    wishList,
    springSummerPage,
    fallWinterPage,
    menColognePage,
    SSShow,
    FWShow,
    SShow,
    MShow,
    addToWishList,
    specialPage,
    create,
    accountPage,
    accountEdit,
    springSummerSeed,
    fallWinterSeed,
    menCologneSeed,
    SSDestroy,
    FWDestroy,
    MDestroy,
    SDestroy,
    logout,
    edit: editForm,
    update,
}