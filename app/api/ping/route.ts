import { createAdminClient } from '../../../lib/appwrite';
import { appwriteConfig } from '../../../lib/appwrite/config';
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { databases } = await createAdminClient();
    const result = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.filesCollectionId,
      []
    );
    return NextResponse.json({ ok: true, total: result.total });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) });
  }
}