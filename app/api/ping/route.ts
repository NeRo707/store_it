import { createAdminClient } from '../../../lib/appwrite';
import { appwriteConfig } from '../../../lib/appwrite/config';

import { NextResponse } from "next/server";

export async function GET() {

    const { databases } = await createAdminClient();

    try {
        await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.filesCollectionId,
            []
        );
        return NextResponse.json({ ok: true });
    } catch (e) {
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}