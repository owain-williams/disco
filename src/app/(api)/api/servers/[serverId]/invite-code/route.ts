import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { createId } from "@paralleldrive/cuid2";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ serverId: string }> },
) {
  try {
    const profile = await currentProfile();
    const { serverId } = await params;

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (serverId) {
      return new NextResponse("Server ID missing", { status: 400 });
    }

    const server = await db.server.update({
      where: {
        id: serverId,
        profileId: profile.id,
      },
      data: {
        inviteCode: createId(),
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.error("[SERVER_ID", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
