// Comprehensive cat breed database for all 67 breeds
// This data powers both the breeds index page and individual breed pages

export const BREED_DATA = {
    'Abyssinian': {
        name: 'Abyssinian',
        emoji: '😺',
        gradient: 'from-amber-300 to-orange-400',
        origin: 'Ethiopia',
        size: 'Medium',
        weight: '8-12 lbs',
        lifespan: '12-15 years',
        shortDesc: 'Active, intelligent, and playful with a distinctive ticked coat',
        temperament: ['Playful', 'Intelligent', 'Active', 'Social'],
        characteristics: [
            'Distinctive ticked coat pattern',
            'Large ears and almond-shaped eyes',
            'Athletic and energetic personality',
            'Loves to climb and explore',
            'Very social and people-oriented'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Ruddy', 'Red', 'Blue', 'Fawn']
    },
    
    'American Bobtail': {
        name: 'American Bobtail',
        emoji: '🐱',
        gradient: 'from-gray-400 to-gray-600',
        origin: 'United States',
        size: 'Medium to Large',
        weight: '7-16 lbs',
        lifespan: '13-15 years',
        shortDesc: 'Friendly cat with a naturally short tail and dog-like personality',
        temperament: ['Friendly', 'Intelligent', 'Playful', 'Adaptable'],
        characteristics: [
            'Distinctive short "bobbed" tail',
            'Dog-like personality',
            'Excellent hunter',
            'Loves interactive play',
            'Good with families and other pets'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Semi-long',
        colors: ['All colors and patterns']
    },
    
    'American Curl': {
        name: 'American Curl',
        emoji: '😸',
        gradient: 'from-pink-300 to-rose-400',
        origin: 'United States',
        size: 'Medium',
        weight: '5-10 lbs',
        lifespan: '15+ years',
        shortDesc: 'Sweet-natured cat with distinctive backward-curled ears',
        temperament: ['Affectionate', 'Playful', 'Social', 'Gentle'],
        characteristics: [
            'Unique curled-back ears',
            'Silky coat texture',
            'Retains kitten-like playfulness',
            'Highly adaptable',
            'Excellent family pet'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['All colors and patterns']
    },
    
    'American Shorthair': {
        name: 'American Shorthair',
        emoji: '🐈',
        gradient: 'from-blue-300 to-indigo-400',
        origin: 'United States',
        size: 'Medium to Large',
        weight: '10-15 lbs',
        lifespan: '15-20 years',
        shortDesc: 'Sturdy, healthy breed with a friendly and easy-going nature',
        temperament: ['Gentle', 'Playful', 'Adaptable', 'Independent'],
        characteristics: [
            'Robust and muscular build',
            'Low-maintenance temperament',
            'Great mouser',
            'Long lifespan',
            'Perfect family companion'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Over 80 color combinations']
    },
    
    'American Wirehair': {
        name: 'American Wirehair',
        emoji: '😺',
        gradient: 'from-yellow-300 to-amber-400',
        origin: 'United States',
        size: 'Medium',
        weight: '8-12 lbs',
        lifespan: '14-18 years',
        shortDesc: 'Rare breed with a unique springy, crimped coat texture',
        temperament: ['Affectionate', 'Playful', 'Adaptable', 'Calm'],
        characteristics: [
            'Unique wiry coat texture',
            'Even-tempered personality',
            'Low-maintenance care',
            'Good with children',
            'Rare and distinctive'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Wiry Short',
        colors: ['All colors and patterns']
    },
    
    'Applehead Siamese': {
        name: 'Applehead Siamese',
        emoji: '😻',
        gradient: 'from-cream-200 to-brown-300',
        origin: 'Thailand',
        size: 'Medium',
        weight: '8-12 lbs',
        lifespan: '15-20 years',
        shortDesc: 'Traditional Siamese with a rounder head and stockier build',
        temperament: ['Vocal', 'Social', 'Affectionate', 'Intelligent'],
        characteristics: [
            'Traditional "apple-shaped" head',
            'Point coloration',
            'Very vocal and talkative',
            'Forms strong bonds',
            'Highly intelligent'
        ],
        grooming: 'Low',
        careLevel: 'Moderate',
        coatType: 'Short',
        colors: ['Seal', 'Blue', 'Chocolate', 'Lilac points']
    },
    
    'Balinese': {
        name: 'Balinese',
        emoji: '😸',
        gradient: 'from-sky-200 to-blue-300',
        origin: 'United States',
        size: 'Medium',
        weight: '5-10 lbs',
        lifespan: '15-20 years',
        shortDesc: 'Long-haired Siamese with elegant appearance and playful nature',
        temperament: ['Intelligent', 'Social', 'Playful', 'Affectionate'],
        characteristics: [
            'Long silky coat',
            'Point coloration like Siamese',
            'Graceful and athletic',
            'Very vocal',
            'Loves human companionship'
        ],
        grooming: 'Moderate',
        careLevel: 'Moderate',
        coatType: 'Long',
        colors: ['Seal', 'Blue', 'Chocolate', 'Lilac points']
    },
    
    'Bengal': {
        name: 'Bengal',
        emoji: '🐆',
        gradient: 'from-orange-300 to-amber-500',
        origin: 'United States',
        size: 'Medium to Large',
        weight: '8-15 lbs',
        lifespan: '12-16 years',
        shortDesc: 'Wild-looking cat with leopard-like spots and high energy',
        temperament: ['Active', 'Playful', 'Intelligent', 'Curious'],
        characteristics: [
            'Distinctive spotted or marbled coat',
            'Athletic and muscular',
            'Loves water',
            'Highly intelligent',
            'Needs lots of activity'
        ],
        grooming: 'Low',
        careLevel: 'Moderate',
        coatType: 'Short',
        colors: ['Brown', 'Silver', 'Snow spotted/marbled']
    },
    
    'Birman': {
        name: 'Birman',
        emoji: '😇',
        gradient: 'from-blue-100 to-indigo-200',
        origin: 'Burma (Myanmar)',
        size: 'Medium to Large',
        weight: '10-15 lbs',
        lifespan: '12-16 years',
        shortDesc: 'Sacred cat with striking blue eyes and white "gloves"',
        temperament: ['Gentle', 'Affectionate', 'Social', 'Calm'],
        characteristics: [
            'White paws ("gloves")',
            'Deep blue eyes',
            'Color-pointed coat',
            'Silky medium-length fur',
            'Gentle and docile nature'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Semi-long',
        colors: ['Seal', 'Blue', 'Chocolate', 'Lilac points']
    },
    
    'Bombay': {
        name: 'Bombay',
        emoji: '🐈‍⬛',
        gradient: 'from-gray-800 to-black',
        origin: 'United States',
        size: 'Medium',
        weight: '6-11 lbs',
        lifespan: '12-16 years',
        shortDesc: 'Sleek black cat with copper eyes, often called "mini panther"',
        temperament: ['Affectionate', 'Social', 'Intelligent', 'Playful'],
        characteristics: [
            'Jet-black glossy coat',
            'Copper or gold eyes',
            'Muscular build',
            'Very people-oriented',
            'Purrs frequently'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Black only']
    },
    
    'British Shorthair': {
        name: 'British Shorthair',
        emoji: '😺',
        gradient: 'from-gray-400 to-blue-400',
        origin: 'United Kingdom',
        size: 'Medium to Large',
        weight: '9-18 lbs',
        lifespan: '12-20 years',
        shortDesc: 'Round-faced cat with dense coat and calm, easy-going temperament',
        temperament: ['Calm', 'Gentle', 'Affectionate', 'Independent'],
        characteristics: [
            'Round face and chubby cheeks',
            'Dense, plush coat',
            'Copper or gold eyes',
            'Stocky, muscular build',
            'Easy-going personality'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Blue', 'Black', 'White', 'Cream', 'Tabby']
    },
    
    'Burmese': {
        name: 'Burmese',
        emoji: '😸',
        gradient: 'from-amber-600 to-brown-600',
        origin: 'Burma (Myanmar)',
        size: 'Medium',
        weight: '6-12 lbs',
        lifespan: '10-17 years',
        shortDesc: 'Silky-coated cat with dog-like loyalty and playful nature',
        temperament: ['Affectionate', 'Playful', 'Social', 'Intelligent'],
        characteristics: [
            'Satin-like coat',
            'Golden eyes',
            'Compact muscular body',
            'Very people-oriented',
            'Playful throughout life'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Sable', 'Champagne', 'Blue', 'Platinum']
    },
    
    'Burmilla': {
        name: 'Burmilla',
        emoji: '✨',
        gradient: 'from-slate-200 to-silver-300',
        origin: 'United Kingdom',
        size: 'Medium',
        weight: '6-13 lbs',
        lifespan: '10-15 years',
        shortDesc: 'Silver-shaded cat with sparkling coat and sweet temperament',
        temperament: ['Gentle', 'Playful', 'Social', 'Easy-going'],
        characteristics: [
            'Silver or golden shaded coat',
            'Dark eyeliner markings',
            'Green eyes',
            'Semi-longhair variety exists',
            'Friendly and sociable'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Silver', 'Golden shaded']
    },
    
    'Calico': {
        name: 'Calico',
        emoji: '🎨',
        gradient: 'from-orange-300 via-white to-gray-800',
        origin: 'Various',
        size: 'Varies',
        weight: '7-12 lbs',
        lifespan: '12-16 years',
        shortDesc: 'Tri-colored cat pattern with white, orange, and black patches',
        temperament: ['Varies by breed', 'Often spirited', 'Independent', 'Affectionate'],
        characteristics: [
            'Three distinct colors',
            'Almost always female',
            'Pattern not a breed',
            'Unique to each cat',
            'Varied personalities'
        ],
        grooming: 'Varies',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['White', 'Orange', 'Black patches']
    },
    
    'Canadian Hairless': {
        name: 'Canadian Hairless',
        emoji: '😼',
        gradient: 'from-pink-200 to-rose-300',
        origin: 'Canada',
        size: 'Medium',
        weight: '6-12 lbs',
        lifespan: '8-14 years',
        shortDesc: 'Hairless breed with warm skin and affectionate personality',
        temperament: ['Affectionate', 'Energetic', 'Social', 'Intelligent'],
        characteristics: [
            'Little to no fur',
            'Warm to touch',
            'Large ears',
            'Wrinkled skin',
            'Very affectionate'
        ],
        grooming: 'High (skin care)',
        careLevel: 'Moderate',
        coatType: 'Hairless',
        colors: ['All skin colors and patterns']
    },
    
    'Chartreux': {
        name: 'Chartreux',
        emoji: '💙',
        gradient: 'from-blue-300 to-slate-400',
        origin: 'France',
        size: 'Medium to Large',
        weight: '7-16 lbs',
        lifespan: '12-15 years',
        shortDesc: 'Ancient French breed with blue-gray coat and copper eyes',
        temperament: ['Gentle', 'Quiet', 'Intelligent', 'Loyal'],
        characteristics: [
            'Blue-gray woolly coat',
            'Copper or gold eyes',
            'Smiling expression',
            'Quiet voice',
            'Strong hunting instincts'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Blue-gray only']
    },
    
    'Chausie': {
        name: 'Chausie',
        emoji: '🦁',
        gradient: 'from-yellow-600 to-amber-700',
        origin: 'United States',
        size: 'Large',
        weight: '15-25 lbs',
        lifespan: '12-14 years',
        shortDesc: 'Hybrid breed with wild appearance and athletic build',
        temperament: ['Active', 'Intelligent', 'Social', 'Playful'],
        characteristics: [
            'Large athletic build',
            'Wild appearance',
            'Tall and long-legged',
            'Needs lots of space',
            'Very active and playful'
        ],
        grooming: 'Low',
        careLevel: 'Moderate',
        coatType: 'Short',
        colors: ['Brown', 'Black', 'Black grizzled']
    },
    
    'Chinchilla': {
        name: 'Chinchilla',
        emoji: '🤍',
        gradient: 'from-white to-slate-200',
        origin: 'United Kingdom',
        size: 'Medium',
        weight: '7-12 lbs',
        lifespan: '12-15 years',
        shortDesc: 'Silver-white Persian with striking green eyes',
        temperament: ['Gentle', 'Calm', 'Affectionate', 'Quiet'],
        characteristics: [
            'Silvery-white coat',
            'Tipped fur',
            'Large green eyes',
            'Persian body type',
            'Sweet temperament'
        ],
        grooming: 'High',
        careLevel: 'Moderate',
        coatType: 'Long',
        colors: ['Silver', 'Golden shaded']
    },
    
    'Cornish Rex': {
        name: 'Cornish Rex',
        emoji: '🌊',
        gradient: 'from-teal-300 to-cyan-400',
        origin: 'United Kingdom',
        size: 'Small to Medium',
        weight: '6-10 lbs',
        lifespan: '11-15 years',
        shortDesc: 'Curly-coated cat with slender build and playful personality',
        temperament: ['Playful', 'Active', 'Affectionate', 'Social'],
        characteristics: [
            'Soft curly coat',
            'Large ears',
            'Slender arched body',
            'Very warm to touch',
            'Loves to jump and play'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Curly Short',
        colors: ['All colors and patterns']
    },
    
    'Cymric': {
        name: 'Cymric',
        emoji: '🐰',
        gradient: 'from-orange-200 to-red-300',
        origin: 'Isle of Man',
        size: 'Medium',
        weight: '8-12 lbs',
        lifespan: '8-14 years',
        shortDesc: 'Long-haired Manx with no tail and rabbit-like hopping gait',
        temperament: ['Gentle', 'Playful', 'Intelligent', 'Social'],
        characteristics: [
            'Tailless or short tail',
            'Long, soft coat',
            'Round appearance',
            'Hops like a rabbit',
            'Very loyal'
        ],
        grooming: 'High',
        careLevel: 'Moderate',
        coatType: 'Long',
        colors: ['All colors and patterns']
    },
    
    'Devon Rex': {
        name: 'Devon Rex',
        emoji: '👽',
        gradient: 'from-purple-300 to-fuchsia-400',
        origin: 'United Kingdom',
        size: 'Small to Medium',
        weight: '5-10 lbs',
        lifespan: '9-15 years',
        shortDesc: 'Pixie-like cat with large ears and wavy coat',
        temperament: ['Mischievous', 'Social', 'Intelligent', 'Active'],
        characteristics: [
            'Large low-set ears',
            'Wavy, soft coat',
            'Elfin face',
            'Very warm body',
            'Playful and mischievous'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Wavy Short',
        colors: ['All colors and patterns']
    },
    
    'Dilute Calico': {
        name: 'Dilute Calico',
        emoji: '🎀',
        gradient: 'from-blue-200 via-cream-100 to-gray-300',
        origin: 'Various',
        size: 'Varies',
        weight: '7-12 lbs',
        lifespan: '12-16 years',
        shortDesc: 'Soft-colored version of Calico with gray, cream, and white',
        temperament: ['Varies', 'Often sweet', 'Independent', 'Affectionate'],
        characteristics: [
            'Softer pastel colors',
            'Gray instead of black',
            'Cream instead of orange',
            'Almost always female',
            'Pattern variation'
        ],
        grooming: 'Varies',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['White', 'Gray', 'Cream patches']
    },
    
    'Dilute Tortoiseshell': {
        name: 'Dilute Tortoiseshell',
        emoji: '🌸',
        gradient: 'from-slate-300 via-amber-200 to-blue-200',
        origin: 'Various',
        size: 'Varies',
        weight: '7-12 lbs',
        lifespan: '12-16 years',
        shortDesc: 'Muted version of tortoiseshell with soft blue and cream colors',
        temperament: ['Spirited', 'Independent', 'Affectionate', 'Loyal'],
        characteristics: [
            'Blue-gray and cream colors',
            'No white patches',
            'Almost always female',
            'Unique pattern',
            'Strong personality'
        ],
        grooming: 'Varies',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['Blue-gray', 'Cream mixed']
    },
    
    'Domestic Long Hair': {
        name: 'Domestic Long Hair',
        emoji: '😺',
        gradient: 'from-amber-200 to-orange-300',
        origin: 'Various',
        size: 'Medium to Large',
        weight: '8-15 lbs',
        lifespan: '12-18 years',
        shortDesc: 'Mixed-breed cat with long, fluffy coat and varied personality',
        temperament: ['Varies', 'Often friendly', 'Adaptable', 'Affectionate'],
        characteristics: [
            'Long flowing coat',
            'Not a specific breed',
            'Wide variety of colors',
            'Generally healthy',
            'Unique personalities'
        ],
        grooming: 'High',
        careLevel: 'Easy',
        coatType: 'Long',
        colors: ['All colors and patterns']
    },
    
    'Domestic Medium Hair': {
        name: 'Domestic Medium Hair',
        emoji: '🐱',
        gradient: 'from-lime-300 to-green-400',
        origin: 'Various',
        size: 'Medium',
        weight: '8-15 lbs',
        lifespan: '12-18 years',
        shortDesc: 'Mixed-breed cat with semi-long coat and versatile nature',
        temperament: ['Varies', 'Often friendly', 'Adaptable', 'Playful'],
        characteristics: [
            'Medium-length coat',
            'Not a specific breed',
            'Varied appearances',
            'Generally hardy',
            'Adaptable nature'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Medium',
        colors: ['All colors and patterns']
    },
    
    'Domestic Short Hair': {
        name: 'Domestic Short Hair',
        emoji: '😸',
        gradient: 'from-sky-300 to-blue-400',
        origin: 'Various',
        size: 'Medium',
        weight: '8-12 lbs',
        lifespan: '12-20 years',
        shortDesc: 'Most common cat with short coat and diverse personalities',
        temperament: ['Varies', 'Often friendly', 'Adaptable', 'Independent'],
        characteristics: [
            'Short, easy-care coat',
            'Most common cat type',
            'Highly varied appearance',
            'Generally healthy',
            'Low maintenance'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['All colors and patterns']
    },
    
    'Egyptian Mau': {
        name: 'Egyptian Mau',
        emoji: '⚡',
        gradient: 'from-zinc-400 to-neutral-500',
        origin: 'Egypt',
        size: 'Medium',
        weight: '7-11 lbs',
        lifespan: '12-15 years',
        shortDesc: 'Fastest domestic cat with natural spotted coat',
        temperament: ['Loyal', 'Intelligent', 'Active', 'Shy'],
        characteristics: [
            'Natural spotted pattern',
            'Fastest domestic cat',
            'Green gooseberry eyes',
            'Forehead "M" marking',
            'Bonds strongly with family'
        ],
        grooming: 'Low',
        careLevel: 'Moderate',
        coatType: 'Short',
        colors: ['Silver', 'Bronze', 'Smoke spotted']
    },
    
    'Exotic Shorthair': {
        name: 'Exotic Shorthair',
        emoji: '🧸',
        gradient: 'from-rose-200 to-pink-300',
        origin: 'United States',
        size: 'Medium to Large',
        weight: '10-12 lbs',
        lifespan: '8-15 years',
        shortDesc: 'Short-haired Persian with teddy bear appearance',
        temperament: ['Gentle', 'Quiet', 'Affectionate', 'Playful'],
        characteristics: [
            'Persian face with short coat',
            'Teddy bear appearance',
            'Round face and eyes',
            'Quiet and calm',
            'Lower maintenance than Persian'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['All Persian colors']
    },
    
    'Extra-Toes Cat - Hemingway Polydactyl': {
        name: 'Extra-Toes Cat - Hemingway Polydactyl',
        emoji: '🐾',
        gradient: 'from-emerald-300 to-teal-400',
        origin: 'Various',
        size: 'Varies',
        weight: '8-15 lbs',
        lifespan: '12-18 years',
        shortDesc: 'Cat with extra toes, considered lucky by sailors',
        temperament: ['Varies', 'Often friendly', 'Adaptable', 'Playful'],
        characteristics: [
            'Extra toes (polydactyl)',
            'Mitten-like paws',
            'Not a breed itself',
            'Associated with Hemingway',
            'Considered good luck'
        ],
        grooming: 'Varies',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['All colors and patterns']
    },
    
    'Havana': {
        name: 'Havana',
        emoji: '🍫',
        gradient: 'from-amber-700 to-brown-800',
        origin: 'United Kingdom',
        size: 'Medium',
        weight: '6-10 lbs',
        lifespan: '10-15 years',
        shortDesc: 'Rare chocolate-colored cat with green eyes',
        temperament: ['Affectionate', 'Playful', 'Social', 'Intelligent'],
        characteristics: [
            'Rich chocolate brown coat',
            'Green eyes',
            'Muscular build',
            'Very rare breed',
            'Loves human interaction'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Chocolate brown', 'Lilac']
    },
    
    'Himalayan': {
        name: 'Himalayan',
        emoji: '☁️',
        gradient: 'from-sky-100 to-blue-200',
        origin: 'United States',
        size: 'Medium to Large',
        weight: '7-12 lbs',
        lifespan: '9-15 years',
        shortDesc: 'Persian-type cat with Siamese color points',
        temperament: ['Gentle', 'Calm', 'Affectionate', 'Quiet'],
        characteristics: [
            'Long luxurious coat',
            'Color points like Siamese',
            'Blue eyes',
            'Flat face',
            'Very gentle nature'
        ],
        grooming: 'High',
        careLevel: 'Moderate',
        coatType: 'Long',
        colors: ['Seal', 'Blue', 'Chocolate', 'Lilac points']
    },
    
    'Japanese Bobtail': {
        name: 'Japanese Bobtail',
        emoji: '🎋',
        gradient: 'from-red-300 to-rose-400',
        origin: 'Japan',
        size: 'Medium',
        weight: '6-10 lbs',
        lifespan: '15-18 years',
        shortDesc: 'Lucky cat with distinctive pom-pom tail',
        temperament: ['Active', 'Intelligent', 'Social', 'Vocal'],
        characteristics: [
            'Unique bobbed tail',
            'Triangular head',
            'Long hind legs',
            'Very vocal',
            'Considered good luck'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['All colors and patterns']
    },
    
    'Javanese': {
        name: 'Javanese',
        emoji: '💫',
        gradient: 'from-violet-200 to-purple-300',
        origin: 'United States',
        size: 'Medium',
        weight: '5-10 lbs',
        lifespan: '10-15 years',
        shortDesc: 'Colorpoint long-haired cat with Siamese personality',
        temperament: ['Intelligent', 'Playful', 'Social', 'Vocal'],
        characteristics: [
            'Long silky coat',
            'Point coloration',
            'Athletic build',
            'Very talkative',
            'Highly intelligent'
        ],
        grooming: 'Moderate',
        careLevel: 'Moderate',
        coatType: 'Long',
        colors: ['Red', 'Cream', 'Tortie points']
    },
    
    'Korat': {
        name: 'Korat',
        emoji: '💎',
        gradient: 'from-slate-400 to-gray-500',
        origin: 'Thailand',
        size: 'Small to Medium',
        weight: '6-10 lbs',
        lifespan: '10-15 years',
        shortDesc: 'Ancient silver-blue cat with heart-shaped face',
        temperament: ['Intelligent', 'Playful', 'Loyal', 'Gentle'],
        characteristics: [
            'Silver-blue coat',
            'Heart-shaped face',
            'Large green eyes',
            'Symbol of good luck',
            'Forms strong bonds'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Silver-blue only']
    },
    
    'LaPerm': {
        name: 'LaPerm',
        emoji: '🌀',
        gradient: 'from-fuchsia-300 to-pink-400',
        origin: 'United States',
        size: 'Medium',
        weight: '5-10 lbs',
        lifespan: '10-15 years',
        shortDesc: 'Curly-coated cat with soft, springy fur',
        temperament: ['Affectionate', 'Active', 'Curious', 'Gentle'],
        characteristics: [
            'Curly or wavy coat',
            'Soft and springy fur',
            'Hypoallergenic qualities',
            'Born hairless',
            'Very people-oriented'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Curly',
        colors: ['All colors and patterns']
    },
    
    'Maine Coon': {
        name: 'Maine Coon',
        emoji: '🦁',
        gradient: 'from-stone-400 to-neutral-600',
        origin: 'United States',
        size: 'Large',
        weight: '10-25 lbs',
        lifespan: '12-15 years',
        shortDesc: 'Gentle giant with tufted ears and friendly personality',
        temperament: ['Gentle', 'Friendly', 'Intelligent', 'Playful'],
        characteristics: [
            'One of largest breeds',
            'Tufted ears and paws',
            'Long, flowing coat',
            'Dog-like loyalty',
            'Loves water'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Long',
        colors: ['All colors except pointed']
    },
    
    'Manx': {
        name: 'Manx',
        emoji: '🐇',
        gradient: 'from-cyan-300 to-teal-400',
        origin: 'Isle of Man',
        size: 'Medium',
        weight: '8-12 lbs',
        lifespan: '8-14 years',
        shortDesc: 'Tailless cat with rounded appearance and strong hind legs',
        temperament: ['Playful', 'Intelligent', 'Social', 'Loyal'],
        characteristics: [
            'No tail or short tail',
            'Rabbit-like hop',
            'Strong hind legs',
            'Rounded appearance',
            'Excellent hunter'
        ],
        grooming: 'Low to Moderate',
        careLevel: 'Moderate',
        coatType: 'Short or Long',
        colors: ['All colors and patterns']
    },
    
    'Munchkin': {
        name: 'Munchkin',
        emoji: '🐾',
        gradient: 'from-yellow-200 to-amber-300',
        origin: 'United States',
        size: 'Small to Medium',
        weight: '5-9 lbs',
        lifespan: '12-15 years',
        shortDesc: 'Short-legged cat with playful and outgoing nature',
        temperament: ['Playful', 'Outgoing', 'Intelligent', 'Social'],
        characteristics: [
            'Short legs',
            'Normal-sized body',
            'Very playful',
            'Fast runner',
            'Loves to explore'
        ],
        grooming: 'Low to Moderate',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['All colors and patterns']
    },
    
    'Nebelung': {
        name: 'Nebelung',
        emoji: '🌫️',
        gradient: 'from-gray-300 to-slate-400',
        origin: 'United States',
        size: 'Medium',
        weight: '7-15 lbs',
        lifespan: '15-18 years',
        shortDesc: 'Long-haired Russian Blue with silver-tipped coat',
        temperament: ['Gentle', 'Quiet', 'Shy', 'Affectionate'],
        characteristics: [
            'Long blue-gray coat',
            'Silver-tipped fur',
            'Green eyes',
            'Reserved with strangers',
            'Very loyal to family'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Long',
        colors: ['Blue-gray only']
    },
    
    'Norwegian Forest Cat': {
        name: 'Norwegian Forest Cat',
        emoji: '🌲',
        gradient: 'from-green-400 to-emerald-500',
        origin: 'Norway',
        size: 'Large',
        weight: '12-16 lbs',
        lifespan: '14-16 years',
        shortDesc: 'Large, sturdy cat with thick water-resistant coat',
        temperament: ['Gentle', 'Friendly', 'Independent', 'Playful'],
        characteristics: [
            'Large, muscular build',
            'Thick, water-resistant coat',
            'Excellent climber',
            'Tufted paws and ears',
            'Patient and gentle'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Long',
        colors: ['All colors except pointed']
    },
    
    'Ocicat': {
        name: 'Ocicat',
        emoji: '🐆',
        gradient: 'from-yellow-400 to-orange-500',
        origin: 'United States',
        size: 'Medium to Large',
        weight: '6-15 lbs',
        lifespan: '10-15 years',
        shortDesc: 'Wild-looking spotted cat with friendly, social nature',
        temperament: ['Social', 'Active', 'Outgoing', 'Playful'],
        characteristics: [
            'Spotted coat like an ocelot',
            'Muscular athletic build',
            'Very social',
            'Loves attention',
            'Dog-like personality'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Tawny', 'Chocolate', 'Cinnamon', 'Blue', 'Lavender', 'Fawn spotted']
    },
    
    'Oriental Long Hair': {
        name: 'Oriental Long Hair',
        emoji: '✨',
        gradient: 'from-indigo-300 to-purple-400',
        origin: 'United States',
        size: 'Medium',
        weight: '5-10 lbs',
        lifespan: '10-15 years',
        shortDesc: 'Elegant long-haired cat with Siamese body type',
        temperament: ['Social', 'Vocal', 'Intelligent', 'Playful'],
        characteristics: [
            'Long silky coat',
            'Slender Siamese body',
            'Large ears',
            'Very talkative',
            'Highly intelligent'
        ],
        grooming: 'Moderate',
        careLevel: 'Moderate',
        coatType: 'Long',
        colors: ['Over 300 color combinations']
    },
    
    'Oriental Short Hair': {
        name: 'Oriental Short Hair',
        emoji: '😺',
        gradient: 'from-pink-400 to-rose-500',
        origin: 'United States',
        size: 'Medium',
        weight: '5-10 lbs',
        lifespan: '10-15 years',
        shortDesc: 'Sleek, elegant cat with Siamese body and many colors',
        temperament: ['Social', 'Vocal', 'Intelligent', 'Active'],
        characteristics: [
            'Sleek short coat',
            'Slender body',
            'Large ears',
            'Almond-shaped eyes',
            'Very vocal'
        ],
        grooming: 'Low',
        careLevel: 'Moderate',
        coatType: 'Short',
        colors: ['Over 300 color combinations']
    },
    
    'Oriental Tabby': {
        name: 'Oriental Tabby',
        emoji: '🎭',
        gradient: 'from-orange-400 to-red-500',
        origin: 'United States',
        size: 'Medium',
        weight: '5-10 lbs',
        lifespan: '10-15 years',
        shortDesc: 'Tabby-patterned Oriental with striking markings',
        temperament: ['Social', 'Vocal', 'Intelligent', 'Playful'],
        characteristics: [
            'Classic tabby pattern',
            'Slender Oriental body',
            'Large ears',
            'Very talkative',
            'Highly active'
        ],
        grooming: 'Low',
        careLevel: 'Moderate',
        coatType: 'Short',
        colors: ['Various tabby patterns']
    },
    
    'Persian': {
        name: 'Persian',
        emoji: '👑',
        gradient: 'from-purple-200 to-pink-300',
        origin: 'Iran (Persia)',
        size: 'Medium to Large',
        weight: '7-12 lbs',
        lifespan: '10-17 years',
        shortDesc: 'Luxurious long-haired cat with flat face and calm demeanor',
        temperament: ['Gentle', 'Calm', 'Affectionate', 'Quiet'],
        characteristics: [
            'Long, flowing coat',
            'Flat face',
            'Round eyes',
            'Stocky body',
            'Very gentle nature'
        ],
        grooming: 'High',
        careLevel: 'Moderate',
        coatType: 'Long',
        colors: ['All colors and patterns']
    },
    
    'Pixiebob': {
        name: 'Pixiebob',
        emoji: '🐆',
        gradient: 'from-amber-500 to-brown-600',
        origin: 'United States',
        size: 'Medium to Large',
        weight: '8-17 lbs',
        lifespan: '13-15 years',
        shortDesc: 'Bobcat-looking domestic cat with dog-like loyalty',
        temperament: ['Loyal', 'Intelligent', 'Social', 'Active'],
        characteristics: [
            'Wild bobcat appearance',
            'Short tail',
            'Often polydactyl',
            'Very loyal',
            'Dog-like behavior'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['Brown spotted tabby']
    },
    
    'Ragamuffin': {
        name: 'Ragamuffin',
        emoji: '🧸',
        gradient: 'from-rose-300 to-pink-400',
        origin: 'United States',
        size: 'Large',
        weight: '10-20 lbs',
        lifespan: '12-16 years',
        shortDesc: 'Large, fluffy cat with teddy bear appearance',
        temperament: ['Gentle', 'Calm', 'Affectionate', 'Social'],
        characteristics: [
            'Large, muscular build',
            'Soft, rabbit-like fur',
            'Variety of colors',
            'Very docile',
            'Loves to be held'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Long',
        colors: ['All colors and patterns']
    },
    
    'Ragdoll': {
        name: 'Ragdoll',
        emoji: '😻',
        gradient: 'from-blue-200 to-indigo-300',
        origin: 'United States',
        size: 'Large',
        weight: '10-20 lbs',
        lifespan: '12-17 years',
        shortDesc: 'Gentle giant that goes limp when picked up',
        temperament: ['Docile', 'Gentle', 'Affectionate', 'Calm'],
        characteristics: [
            'Goes limp when held',
            'Blue eyes',
            'Color-pointed coat',
            'Very large size',
            'Extremely gentle'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Semi-long',
        colors: ['Seal', 'Blue', 'Chocolate', 'Lilac', 'Red', 'Cream']
    },
    
    'Russian Blue': {
        name: 'Russian Blue',
        emoji: '💙',
        gradient: 'from-blue-400 to-slate-500',
        origin: 'Russia',
        size: 'Medium',
        weight: '7-12 lbs',
        lifespan: '15-20 years',
        shortDesc: 'Silver-blue cat with plush double coat and green eyes',
        temperament: ['Gentle', 'Quiet', 'Shy', 'Loyal'],
        characteristics: [
            'Blue-gray double coat',
            'Vivid green eyes',
            'Muscular build',
            'Reserved with strangers',
            'Very loyal to family'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Blue-gray only']
    },
    
    'Scottish Fold': {
        name: 'Scottish Fold',
        emoji: '🐻',
        gradient: 'from-amber-300 to-orange-400',
        origin: 'Scotland',
        size: 'Medium',
        weight: '6-13 lbs',
        lifespan: '11-15 years',
        shortDesc: 'Distinctive folded ears and round, owl-like face',
        temperament: ['Gentle', 'Playful', 'Affectionate', 'Adaptable'],
        characteristics: [
            'Folded ears',
            'Round face and eyes',
            'Sweet expression',
            'Loves companionship',
            'Very adaptable'
        ],
        grooming: 'Moderate',
        careLevel: 'Moderate',
        coatType: 'Short or Long',
        colors: ['All colors and patterns']
    },
    
    'Selkirk Rex': {
        name: 'Selkirk Rex',
        emoji: '🐑',
        gradient: 'from-lime-300 to-green-400',
        origin: 'United States',
        size: 'Medium to Large',
        weight: '6-16 lbs',
        lifespan: '10-15 years',
        shortDesc: 'Curly-coated cat with teddy bear appearance',
        temperament: ['Playful', 'Affectionate', 'Patient', 'Social'],
        characteristics: [
            'Curly or wavy coat',
            'Round face',
            'Sturdy build',
            'Very patient',
            'Good with children'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Curly',
        colors: ['All colors and patterns']
    },
    
    'Siamese': {
        name: 'Siamese',
        emoji: '😼',
        gradient: 'from-cyan-300 to-blue-400',
        origin: 'Thailand',
        size: 'Medium',
        weight: '8-12 lbs',
        lifespan: '15-20 years',
        shortDesc: 'Vocal, social cat with striking blue eyes and point coloration',
        temperament: ['Vocal', 'Social', 'Intelligent', 'Affectionate'],
        characteristics: [
            'Color-pointed coat',
            'Deep blue eyes',
            'Slender, athletic body',
            'Very talkative',
            'Highly intelligent'
        ],
        grooming: 'Low',
        careLevel: 'Moderate',
        coatType: 'Short',
        colors: ['Seal', 'Blue', 'Chocolate', 'Lilac points']
    },
    
    'Siberian': {
        name: 'Siberian',
        emoji: '❄️',
        gradient: 'from-cyan-200 to-blue-300',
        origin: 'Russia',
        size: 'Medium to Large',
        weight: '10-20 lbs',
        lifespan: '11-15 years',
        shortDesc: 'Ancient forest cat with thick triple coat and hypoallergenic qualities',
        temperament: ['Affectionate', 'Playful', 'Intelligent', 'Loyal'],
        characteristics: [
            'Triple-layered coat',
            'Water-resistant fur',
            'Large and powerful',
            'Hypoallergenic',
            'Loves water'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Long',
        colors: ['All colors and patterns']
    },
    
    'Silver': {
        name: 'Silver',
        emoji: '✨',
        gradient: 'from-gray-200 to-slate-300',
        origin: 'Various',
        size: 'Varies',
        weight: '7-15 lbs',
        lifespan: '12-16 years',
        shortDesc: 'Color pattern featuring silver-tipped or shaded coat',
        temperament: ['Varies by breed'],
        characteristics: [
            'Silver-tipped fur',
            'Shimmering appearance',
            'Color variation not breed',
            'Found in many breeds',
            'Striking appearance'
        ],
        grooming: 'Varies',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['Silver shaded/tipped']
    },
    
    'Singapura': {
        name: 'Singapura',
        emoji: '🐭',
        gradient: 'from-yellow-200 to-amber-300',
        origin: 'Singapore',
        size: 'Small',
        weight: '4-8 lbs',
        lifespan: '11-15 years',
        shortDesc: 'Smallest cat breed with ticked coat and big eyes',
        temperament: ['Playful', 'Curious', 'Gentle', 'Social'],
        characteristics: [
            'Smallest domestic cat breed',
            'Ticked sepia coat',
            'Large eyes and ears',
            'Very playful',
            'People-oriented'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Sepia agouti only']
    },
    
    'Snowshoe': {
        name: 'Snowshoe',
        emoji: '👟',
        gradient: 'from-sky-200 to-blue-300',
        origin: 'United States',
        size: 'Medium',
        weight: '7-12 lbs',
        lifespan: '14-19 years',
        shortDesc: 'Color-pointed cat with distinctive white "boots"',
        temperament: ['Social', 'Vocal', 'Intelligent', 'Affectionate'],
        characteristics: [
            'White paws ("boots")',
            'Color points',
            'Blue eyes',
            'Inverted "V" on face',
            'Loves water'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Seal', 'Blue point with white']
    },
    
    'Somali': {
        name: 'Somali',
        emoji: '🦊',
        gradient: 'from-orange-400 to-red-500',
        origin: 'United States',
        size: 'Medium',
        weight: '6-10 lbs',
        lifespan: '11-16 years',
        shortDesc: 'Fox-like long-haired Abyssinian with bushy tail',
        temperament: ['Active', 'Playful', 'Intelligent', 'Social'],
        characteristics: [
            'Long ticked coat',
            'Bushy fox-like tail',
            'Large ears',
            'Very active',
            'Loves to play'
        ],
        grooming: 'Moderate',
        careLevel: 'Moderate',
        coatType: 'Long',
        colors: ['Ruddy', 'Red', 'Blue', 'Fawn']
    },
    
    'Sphynx - Hairless Cat': {
        name: 'Sphynx - Hairless Cat',
        emoji: '👽',
        gradient: 'from-rose-200 to-pink-300',
        origin: 'Canada',
        size: 'Medium',
        weight: '6-12 lbs',
        lifespan: '8-14 years',
        shortDesc: 'Hairless cat with warm skin and extroverted personality',
        temperament: ['Energetic', 'Social', 'Affectionate', 'Mischievous'],
        characteristics: [
            'Hairless appearance',
            'Warm, suede-like skin',
            'Large ears',
            'Wrinkled skin',
            'Very energetic'
        ],
        grooming: 'High (skin care)',
        careLevel: 'Moderate',
        coatType: 'Hairless',
        colors: ['All skin colors']
    },
    
    'Tabby': {
        name: 'Tabby',
        emoji: '🐅',
        gradient: 'from-amber-400 to-orange-500',
        origin: 'Various',
        size: 'Varies',
        weight: '8-15 lbs',
        lifespan: '12-18 years',
        shortDesc: 'Classic striped or spotted coat pattern, not a breed',
        temperament: ['Varies by breed'],
        characteristics: [
            'M-shaped forehead marking',
            'Striped or spotted pattern',
            'Pattern not a breed',
            'Found in many breeds',
            'Natural camouflage'
        ],
        grooming: 'Varies',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['Classic', 'Mackerel', 'Spotted', 'Ticked patterns']
    },
    
    'Tiger': {
        name: 'Tiger',
        emoji: '🐯',
        gradient: 'from-orange-500 to-red-600',
        origin: 'Various',
        size: 'Varies',
        weight: '8-15 lbs',
        lifespan: '12-18 years',
        shortDesc: 'Orange tabby pattern with bold stripes',
        temperament: ['Varies', 'Often bold', 'Playful'],
        characteristics: [
            'Bold orange stripes',
            'Tabby pattern variation',
            'Not a specific breed',
            'Often male',
            'Striking appearance'
        ],
        grooming: 'Varies',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['Orange with dark stripes']
    },
    
    'Tonkinese': {
        name: 'Tonkinese',
        emoji: '💝',
        gradient: 'from-rose-300 to-pink-400',
        origin: 'Canada',
        size: 'Medium',
        weight: '6-12 lbs',
        lifespan: '10-16 years',
        shortDesc: 'Burmese-Siamese cross with aqua eyes and mink coat',
        temperament: ['Affectionate', 'Social', 'Intelligent', 'Playful'],
        characteristics: [
            'Aqua or blue-green eyes',
            'Mink-like coat',
            'Medium build',
            'Very people-oriented',
            'Moderately vocal'
        ],
        grooming: 'Low',
        careLevel: 'Easy',
        coatType: 'Short',
        colors: ['Natural', 'Champagne', 'Blue', 'Platinum mink']
    },
    
    'Torbie': {
        name: 'Torbie',
        emoji: '🎨',
        gradient: 'from-orange-400 via-brown-400 to-gray-500',
        origin: 'Various',
        size: 'Varies',
        weight: '7-12 lbs',
        lifespan: '12-16 years',
        shortDesc: 'Tortoiseshell with tabby pattern overlay',
        temperament: ['Spirited', 'Independent', 'Affectionate'],
        characteristics: [
            'Tortoiseshell plus tabby',
            'Striped patches',
            'Almost always female',
            'Unique pattern',
            'Strong personality'
        ],
        grooming: 'Varies',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['Brown/orange/black tabby mix']
    },
    
    'Tortoiseshell': {
        name: 'Tortoiseshell',
        emoji: '🎨',
        gradient: 'from-orange-500 via-amber-600 to-gray-900',
        origin: 'Various',
        size: 'Varies',
        weight: '7-12 lbs',
        lifespan: '12-16 years',
        shortDesc: 'Mottled black and orange coat pattern with "tortitude"',
        temperament: ['Spirited', 'Independent', 'Affectionate', 'Feisty'],
        characteristics: [
            'Black and orange mottled',
            'No white patches',
            'Almost always female',
            'Known for "tortitude"',
            'Unique to each cat'
        ],
        grooming: 'Varies',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['Black', 'Orange mottled']
    },
    
    'Turkish Angora': {
        name: 'Turkish Angora',
        emoji: '🤍',
        gradient: 'from-white to-gray-100',
        origin: 'Turkey',
        size: 'Small to Medium',
        weight: '5-10 lbs',
        lifespan: '12-18 years',
        shortDesc: 'Ancient breed with silky white coat and often odd eyes',
        temperament: ['Intelligent', 'Playful', 'Affectionate', 'Athletic'],
        characteristics: [
            'Long silky coat',
            'Often white',
            'May have odd eyes',
            'Very athletic',
            'Ancient breed'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Long',
        colors: ['White', 'various others']
    },
    
    'Turkish Van': {
        name: 'Turkish Van',
        emoji: '💙',
        gradient: 'from-cyan-200 to-blue-300',
        origin: 'Turkey',
        size: 'Large',
        weight: '10-18 lbs',
        lifespan: '13-17 years',
        shortDesc: 'Rare breed that loves water with distinctive head markings',
        temperament: ['Active', 'Playful', 'Intelligent', 'Loyal'],
        characteristics: [
            'Loves swimming',
            'Van pattern (colored head)',
            'Semi-longhair coat',
            'Very athletic',
            'Slow to mature'
        ],
        grooming: 'Moderate',
        careLevel: 'Moderate',
        coatType: 'Semi-long',
        colors: ['White with colored head and tail']
    },
    
    'Tuxedo': {
        name: 'Tuxedo',
        emoji: '🎩',
        gradient: 'from-gray-900 via-white to-gray-800',
        origin: 'Various',
        size: 'Varies',
        weight: '8-15 lbs',
        lifespan: '12-18 years',
        shortDesc: 'Black and white pattern resembling formal wear',
        temperament: ['Varies', 'Often intelligent', 'Playful'],
        characteristics: [
            'Black and white pattern',
            'Looks like a tuxedo',
            'Pattern not a breed',
            'Found in many breeds',
            'Striking appearance'
        ],
        grooming: 'Varies',
        careLevel: 'Easy',
        coatType: 'Short or Long',
        colors: ['Black and white bicolor']
    },
    
    'York Chocolate': {
        name: 'York Chocolate',
        emoji: '🍫',
        gradient: 'from-amber-700 to-stone-800',
        origin: 'United States',
        size: 'Large',
        weight: '10-18 lbs',
        lifespan: '13-15 years',
        shortDesc: 'Rare chocolate-colored cat with fluffy coat',
        temperament: ['Affectionate', 'Playful', 'Intelligent', 'Social'],
        characteristics: [
            'Rich chocolate color',
            'Semi-longhair coat',
            'Large size',
            'Very rare breed',
            'Good mouser'
        ],
        grooming: 'Moderate',
        careLevel: 'Easy',
        coatType: 'Semi-long',
        colors: ['Chocolate', 'Lavender']
    }
};

// Helper function to convert breed name to URL slug
export function getBreedSlug(breedName) {
    return breedName.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}
