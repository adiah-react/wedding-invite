import { useParams } from "react-router";
import CeremonyDetails from "../../components/CeremonyDetails/CeremonyDetails";

const invitations = {
  ceremony123: { name: "Aunt May", access: ["ceremony"] },
  fullinvite456: { name: "John Smith", access: ["ceremony", "reception"] },
};

const InvitePage = () => {
  const { code } = useParams();
  const invite = invitations[code];

  if (!invite) {
    return <p>Invalid or expired invitation</p>;
  }

  return (
    <>
      <CeremonyDetails name={invite.name} access={invite.access} />
    </>
  );
};

export default InvitePage;
