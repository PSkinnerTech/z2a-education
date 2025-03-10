import { ANT } from '@ar.io/sdk';

async function getArnsRecords() {
    try {
        // Initialize ANT with your process ID
        const ant = ANT.init({ 
            processId: 'sp8HiziIh6q02AfM0F6TQsj5o9L77x3cD_-o0iyQC2U'
        });

        console.log('Fetching ARNS records...\n');
        
        // Get all records
        const records = await ant.getRecords();

        // Pretty print the records
        console.log('ARNS Records:');
        console.log(JSON.stringify(records, null, 2));

        // Specifically log the @ record if it exists
        if (records['@']) {
            console.log('\nCurrent @ Record:');
            console.log(`Transaction ID: ${records['@'].transactionId}`);
            console.log(`TTL: ${records['@'].ttlSeconds} seconds`);
        } else {
            console.log('\nNo @ record found');
        }

    } catch (error) {
        console.error('Failed to fetch ARNS records:', error);
        process.exit(1);
    }
}

getArnsRecords();
