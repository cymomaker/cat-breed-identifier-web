#!/usr/bin/env node

// Script to generate individual HTML pages for all 67 cat breeds
// Each page will be a copy of the breed-detail.html template with optimized SEO

const fs = require('fs');
const path = require('path');

// All 67 breeds (matching class_index.txt)
const breeds = [
    'Abyssinian', 'American Bobtail', 'American Curl', 'American Shorthair',
    'American Wirehair', 'Applehead Siamese', 'Balinese', 'Bengal',
    'Birman', 'Bombay', 'British Shorthair', 'Burmese',
    'Burmilla', 'Calico', 'Canadian Hairless', 'Chartreux',
    'Chausie', 'Chinchilla', 'Cornish Rex', 'Cymric',
    'Devon Rex', 'Dilute Calico', 'Dilute Tortoiseshell', 'Domestic Long Hair',
    'Domestic Medium Hair', 'Domestic Short Hair', 'Egyptian Mau', 'Exotic Shorthair',
    'Extra-Toes Cat - Hemingway Polydactyl', 'Havana', 'Himalayan', 'Japanese Bobtail',
    'Javanese', 'Korat', 'LaPerm', 'Maine Coon',
    'Manx', 'Munchkin', 'Nebelung', 'Norwegian Forest Cat',
    'Ocicat', 'Oriental Long Hair', 'Oriental Short Hair', 'Oriental Tabby',
    'Persian', 'Pixiebob', 'Ragamuffin', 'Ragdoll',
    'Russian Blue', 'Scottish Fold', 'Selkirk Rex', 'Siamese',
    'Siberian', 'Silver', 'Singapura', 'Snowshoe',
    'Somali', 'Sphynx - Hairless Cat', 'Tabby', 'Tiger',
    'Tonkinese', 'Torbie', 'Tortoiseshell', 'Turkish Angora',
    'Turkish Van', 'Tuxedo', 'York Chocolate'
];

// Function to convert breed name to slug
function getBreedSlug(breedName) {
    return breedName.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

// Function to generate SEO-optimized meta description (140-160 chars)
function generateMetaDescription(breedName) {
    return `Learn about ${breedName} cats: personality, characteristics, care requirements, history, and health. Complete guide with photos and expert advice.`;
}

// Function to generate SEO-optimized keywords (max 100 chars)
function generateKeywords(breedName) {
    // Strategy: Always stay under 100 chars by being selective
    const baseKeywords = `${breedName} cat,${breedName} breed`;
    
    if (baseKeywords.length > 70) {
        // Very long breed name (70+ base) - just add generic term
        return `${baseKeywords},cat breeds`;
    } else if (baseKeywords.length > 55) {
        // Long breed name (55-70 base) - add one keyword
        return `${baseKeywords},${breedName} care,cat breeds`;
    } else if (baseKeywords.length > 40) {
        // Medium breed name (40-55 base) - add two keywords
        return `${baseKeywords},${breedName} traits,cat breeds`;
    } else {
        // Short breed name (<40 base) - add more keywords
        return `${baseKeywords},${breedName} traits,${breedName} care,cat breeds`;
    }
}

// Read the template file
const templatePath = path.join(__dirname, 'breeds', 'breed-detail.html');
const template = fs.readFileSync(templatePath, 'utf8');

// Create breeds directory if it doesn't exist
const breedsDir = path.join(__dirname, 'breeds');
if (!fs.existsSync(breedsDir)) {
    fs.mkdirSync(breedsDir, { recursive: true });
}

// Generate a page for each breed
let successCount = 0;
let errorCount = 0;

console.log('🐱 Generating breed pages...\n');

breeds.forEach((breed) => {
    try {
        const slug = getBreedSlug(breed);
        const filename = `${slug}.html`;
        const filepath = path.join(breedsDir, filename);
        const breedUrl = `https://catbreedai.com/breeds/${slug}.html`;
        
        // Generate SEO-optimized content
        const title = `${breed} Cat Breed - Complete Guide & Info | CatBreedAI`;
        const description = generateMetaDescription(breed);
        const keywords = generateKeywords(breed);
        const ogTitle = `${breed} Cat - Complete Breed Guide`;
        const twitterTitle = `${breed} Cat Breed Guide`;
        
        // Replace SEO meta tags in the template
        let pageContent = template
            // Basic meta tags
            .replace(
                /<title id="pageTitle">.*?<\/title>/,
                `<title id="pageTitle">${title}</title>`
            )
            .replace(
                /<meta name="description" id="pageDesc" content=".*?">/,
                `<meta name="description" id="pageDesc" content="${description}">`
            )
            .replace(
                /<meta name="keywords" id="pageKeywords" content=".*?">/,
                `<meta name="keywords" id="pageKeywords" content="${keywords}">`
            )
            .replace(
                /<link rel="canonical" id="canonicalUrl" href=".*?">/,
                `<link rel="canonical" id="canonicalUrl" href="${breedUrl}">`
            )
            // Open Graph tags
            .replace(
                /<meta property="og:url" id="ogUrl" content=".*?">/,
                `<meta property="og:url" id="ogUrl" content="${breedUrl}">`
            )
            .replace(
                /<meta property="og:title" id="ogTitle" content=".*?">/,
                `<meta property="og:title" id="ogTitle" content="${ogTitle}">`
            )
            .replace(
                /<meta property="og:description" id="ogDesc" content=".*?">/,
                `<meta property="og:description" id="ogDesc" content="${description}">`
            )
            // Twitter Card tags
            .replace(
                /<meta name="twitter:url" id="twitterUrl" content=".*?">/,
                `<meta name="twitter:url" id="twitterUrl" content="${breedUrl}">`
            )
            .replace(
                /<meta name="twitter:title" id="twitterTitle" content=".*?">/,
                `<meta name="twitter:title" id="twitterTitle" content="${twitterTitle}">`
            )
            .replace(
                /<meta name="twitter:description" id="twitterDesc" content=".*?">/,
                `<meta name="twitter:description" id="twitterDesc" content="${description}">`
            );
        
        // Write the customized content to the new file
        fs.writeFileSync(filepath, pageContent, 'utf8');
        
        successCount++;
        console.log(`✓ Created: ${filename}`);
    } catch (error) {
        errorCount++;
        console.error(`✗ Failed to create ${breed}:`, error.message);
    }
});

console.log(`\n🎉 Complete!`);
console.log(`✓ Successfully created: ${successCount} pages`);
if (errorCount > 0) {
    console.log(`✗ Failed: ${errorCount} pages`);
}
console.log(`\n📁 All breed pages are in: /breeds/\n`);

