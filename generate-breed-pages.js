#!/usr/bin/env node

// Script to generate individual HTML pages for all 67 cat breeds
// Each page will be a copy of the breed-detail.html template

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
        
        // Write the template to the new file
        fs.writeFileSync(filepath, template, 'utf8');
        
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

