import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

type InviteCodePageProps = {
  params: Promise<{ inviteCode: string }>;
};

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
  const { inviteCode } = await params;
  const profile = await currentProfile();

  if (!inviteCode) {
    return redirect("/");
  }

  if (!profile) {
    return redirect("/");
  }

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: inviteCode,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (existingServer) {
    return redirect(`/servers/${existingServer.id}`);
  }

  const server = await db.server.update({
    where: {
      inviteCode: inviteCode,
    },
    data: {
      members: {
        create: [
          {
            profileId: profile.id,
          },
        ],
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  if (!server) {
    return <div>Invite expired</div>;
  }

  return <></>;
};

export default InviteCodePage;
