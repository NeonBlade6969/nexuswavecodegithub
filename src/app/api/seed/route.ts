import { NextResponse } from "next/server";
import { SEED_USERS, SEED_POSTS, SEED_GROUP_CHATS } from "@/lib/firebase/seedData";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "NexusWave",
    counts: {
      users: SEED_USERS.length,
      posts: SEED_POSTS.length,
      chats: SEED_GROUP_CHATS.length,
    },
    message: "Seed data available for immediate testing",
  });
}
