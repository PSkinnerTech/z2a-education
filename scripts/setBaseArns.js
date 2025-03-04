import fs from 'fs';
import { ANT, ArweaveSigner } from '@ar.io/sdk';

async function updateArns() {
    try {
        // Check for wallet.json
        if (!fs.existsSync('./wallet.json')) {
            throw new Error('wallet.json not found in the root of your project');
        }

        // CUSTOMIZE THESE VALUES
        // ======================
        // The transaction ID of your deployed application
        // This will be the output from your `npm run deploy` command
        const targetTransactionId = 'yclrO2zEnG8M1lPpCsVwZN1E13BL23daj9qPhnm1mXc';
        
        // The process ID for ARNS
        const processId = 'sp8HiziIh6q02AfM0F6TQsj5o9L77x3cD_-o0iyQC2U';
        // ======================

        console.log(`Using transaction ID: ${targetTransactionId}`);
        console.log(`Using process ID: ${processId}`);

        const jwk = JSON.parse(fs.readFileSync('./wallet.json', 'utf8'));

        const ant = ANT.init({
            signer: new ArweaveSigner(jwk),
            processId: processId
        });

        // Updated to use setBaseNameRecord
        const { id: txId } = await ant.setBaseNameRecord({
            transactionId: targetTransactionId,
            ttlSeconds: 900 // 15 minutes
        });

        console.log('\nARNS Update Complete! 🎉');
        console.log(`Transaction ID: ${txId}`);
        console.log(`View your deployment at: https://zerotoarweave.ar.io\n`);
    } catch (error) {
        console.error('Failed to update ARNS:', error);
        process.exit(1);
    }
}

updateArns();
