const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// set directories and paths
const methodsDir = path.join(__dirname, '../submissions');
const indexFile = path.join(methodsDir, '../src/data/data.json');
const csvFile = path.join(methodsDir, '../src/data/data.xlsx');





const exportToexcel = (json) => {
    json.forEach((item) => {
        item.members = item.members.join(',');
    })
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(json, {
        header: ['name', 'members', 'description', 'Remarks','Score'],
    });
    // extra column
    Object.keys(ws).forEach((key) => {
        if (key.includes('1')) {
            ws[key].v = ws[key].v[0].toUpperCase() + ws[key].v.slice(1);
        }
    })
    
    xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
    
    xlsx.writeFile(wb, csvFile);
}


// Process all method files and generate an index file
(async () => {

    const allMethods = [];
    process.stdout.write('Processing:');
    fs.readdirSync(methodsDir).forEach(filename => {
        // skip index file
        if (filename === 'index.json' || !filename.endsWith('.json')) {
            return;
        }

        const methodFile = path.join(methodsDir, filename);
        const methodData = fs.readFileSync(methodFile, 'utf-8');
        process.stdout.write(' ' + filename);

        try {
            const methodJson = JSON.parse(methodData);
            allMethods.push(methodJson);
        } catch (e) {
            process.exit(1);
        }
    });

    if (allMethods.length > 0) {
        fs.writeFileSync(indexFile, JSON.stringify(allMethods, null, 2), 'utf-8');

        exportToexcel(allMethods);
        console.log('\n\nGenerated ....');
    } else {
        process.exit(1);
    }

})();