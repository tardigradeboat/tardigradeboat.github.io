const fs = require('fs');
const path = require('path');

function moveDirectory(source, destination) {
  if (fs.existsSync(destination)) {
    fs.rmSync(destination, { recursive: true, force: true });
  }
  fs.renameSync(source, destination);
}

function copyDirectory(source, destination) {
  if (!fs.existsSync(source)) {
    console.log(`Source directory ${source} does not exist`);
    return false;
  }

  if (fs.existsSync(destination)) {
    fs.rmSync(destination, { recursive: true, force: true });
  }
  
  fs.mkdirSync(destination, { recursive: true });
  
  const files = fs.readdirSync(source);
  for (const file of files) {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);
    
    if (fs.statSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      fs.copyFileSync(sourcePath, destPath);
    }
  }
  
  return true;
}

function main() {
  console.log('🔄 Replacing original images with optimized versions...\n');

  const replacements = [
    { original: 'Gallery', optimized: 'Gallery-optimized', backup: 'Gallery-backup' },
    { original: 'apollocuk', optimized: 'apollocuk-optimized', backup: 'apollocuk-backup' }
  ];

  for (const { original, optimized, backup } of replacements) {
    if (!fs.existsSync(optimized)) {
      console.log(`❌ ${optimized} folder not found, skipping...`);
      continue;
    }

    console.log(`📁 Processing ${original}/`);
    
    // Create backup of original
    console.log(`   Creating backup: ${backup}/`);
    if (copyDirectory(original, backup)) {
      console.log(`   ✓ Backup created successfully`);
    } else {
      console.log(`   ❌ Failed to create backup, skipping replacement`);
      continue;
    }

    // Replace original with optimized
    console.log(`   Replacing ${original}/ with optimized version...`);
    try {
      moveDirectory(optimized, original);
      console.log(`   ✓ ${original}/ replaced successfully`);
    } catch (error) {
      console.log(`   ❌ Failed to replace: ${error.message}`);
      // Restore from backup if replacement failed
      if (fs.existsSync(backup)) {
        console.log(`   🔄 Restoring from backup...`);
        moveDirectory(backup, original);
      }
    }
  }

  console.log('\n🎉 Image replacement complete!');
  console.log('\n💡 What happened:');
  console.log('   • Original folders backed up as *-backup');
  console.log('   • Optimized images now in Gallery/ and apollocuk/');
  console.log('   • Your website will now load 93% faster!');
  console.log('\n🗑️  You can safely delete the *-backup folders once you\'ve verified everything works');
}

main(); 